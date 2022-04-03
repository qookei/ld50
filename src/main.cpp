#include <window.hpp>
#include <iostream>
#include <unordered_map>

#include <glm/glm.hpp>
#include <glm/gtx/hash.hpp>

#include <gl/shader.hpp>
#include <gl/mesh.hpp>
#include <gl/texture.hpp>

#include <sprite.hpp>
#include <text.hpp>
#include <time.hpp>
#include <scene.hpp>

#include <random>

#include <numbers>

#include <resources.hpp>

std::mt19937 global_mt;

inline constexpr int do_up = 1;
inline constexpr int do_down = 2;
inline constexpr int do_left = 4;
inline constexpr int do_right = 8;

struct entity {
	entity(int base_frame, float speed, double walk_frame_speed)
	: base_frame_{base_frame}, speed_{speed}, walk_frame_speed_{walk_frame_speed} { }

	constexpr entity(entity &&) = default;
	entity &operator=(entity &&) = default;

	virtual int get_movement(double delta, input_state &state) = 0;

	void tick(double delta, input_state &state) {
		auto mov = get_movement(delta, state);

		if (!mov)
			frame_ = 0;
		else {
			frame_time_ += delta;
			if (frame_time_ > walk_frame_speed_) {
				frame_time_ = 0;
				frame_ = !frame_;
			}
		}

		if (mov & do_left) {
			spr.x -= speed_ * delta;
			if (spr.x < 0) spr.x = 0;
			facing_ = 1;
		}

		if (mov & do_right) {
			spr.x += speed_ * delta;
			if (spr.x > 146) spr.x = 149;
			facing_ = 0;
		}

		if (mov & do_up) {
			spr.y -= speed_ * 0.7f * delta;
			if (spr.y < 0) spr.y = 0;
		}

		if (mov & do_down) {
			spr.y += speed_ * 0.7f * delta;
			if (spr.y > 106) spr.y = 106;
		}

		spr.set_frame(base_frame_ + ((facing_ << 1) | frame_));
	}

	void render() {
		spr.render();
	}

	void reset() {
		spr.x = 64;
		spr.y = 64;
	}

	float &x() { return spr.x; }
	float &y() { return spr.y; }

	int facing() {
		return facing_ == 0 ? 1 : -1;
	}

protected:
	virtual ~entity() = default;

private:
	sprite spr{resources::the().shader("generic"), "player", 8, 14, 0};
	int frame_ = 0;
	double frame_time_ = 0;
	int facing_ = 0;
	int base_frame_;
	float speed_;
	double walk_frame_speed_;
};

struct player : entity {
	player() : entity{0, 50, 0.05} { }

	int get_movement(double delta, input_state &state) override {
		int mov = 0;

		if (state.down_keys[SDLK_LEFT]) {
			mov |= do_left;
		}

		if (state.down_keys[SDLK_RIGHT]) {
			mov |= do_right;
		}

		if (state.down_keys[SDLK_UP]) {
			mov |= do_up;
		}

		if (state.down_keys[SDLK_DOWN]) {
			mov |= do_down;
		}

		return mov;
	}
};

struct zombie : entity {
	zombie(player *chasee) : entity{4, 20, 0.1}, chasee_{chasee} { }

	constexpr zombie(zombie &&) = default;
	zombie &operator=(zombie &&) = default;

	int get_movement(double delta, input_state &) override {
		int mov = 0;

		constexpr int deadzone = 4;

		int dx = chasee_->x() - x();
		int dy = chasee_->y() - y();

		if (std::abs(dx) < deadzone && std::abs(dy) < deadzone)
			return 0;

		if (std::abs(dx) > std::abs(dy)) {
			if (dx < deadzone)
				mov |= do_left;
			else if (dx > deadzone)
				mov |= do_right;
		} else {
			if (dy < deadzone)
				mov |= do_up;
			else if (dy > deadzone)
				mov |= do_down;
		}

		return mov;
	}

	float hurt_time_ = -1;

private:
	player *chasee_;
};

bool aabb(double x1, double y1, double w1, double h1,
		double x2, double y2, double w2, double h2) {
	return !(x1 > (x2 + w2)
		|| (x1 + w1) < x2
		|| (y1 + h1) < y2
		|| y1 > (y2 + h2));
}



struct particles {
	void tick(double delta) {
		for (auto pit = particles_.begin(); pit != particles_.end();) {
			pit->vel.y += 8.1;
			pit->vel.x /= 1.1;

			pit->pos += static_cast<float>(delta) * pit->vel;

			pit->time_left -= delta;

			if (pit->time_left < 0) {
				pit = particles_.erase(pit);
			} else {
				++pit;
			}
		}
	}

	void render() {
		for (auto &b : particles_) {
			spr.x = b.pos.x;
			spr.y = b.pos.y;
			spr.render({0.625, 0, 0, 1});
		}
	}

	void add_particles_at(glm::vec2 pos, int facing) {

		float angle = 0;

		if (facing > 0) {
			angle = std::uniform_int_distribution<int>{10, 80}(global_mt);
		} else {
			angle = std::uniform_int_distribution<int>{100, 170}(global_mt);
		}

		int n = std::uniform_int_distribution<int>{4, 8}(global_mt);

		for (int i = 0; i < n; i++) {
			float da = std::uniform_int_distribution<int>{-20, 20}(global_mt);
			float rad = (angle + da) * std::numbers::pi_v<double> / 180;

			glm::vec2 vel{cos(rad) * std::uniform_int_distribution<int>{120, 150}(global_mt),
					sin(rad) * std::uniform_int_distribution<int>{-150, -120}(global_mt)};

			particles_.push_back({vel, pos, .6});
		}
	}

	void reset() {
		particles_.clear();
	}

private:
	struct particle {
		glm::vec2 vel;
		glm::vec2 pos;
		double time_left;
	};

	sprite spr{resources::the().shader("generic"), "spec", 1, 1};
	std::vector<particle> particles_;
};

struct bullets {
	bullets(std::vector<zombie> *zom, particles *par)
	: zom_{zom}, par_{par} { }

	void tick(double delta) {
		for (auto bit = bul_.begin(); bit != bul_.end();) {
			bit->pos.x += delta * 200 * bit->facing;

			bool destroyed = false;

			for (auto zit = zom_->begin(); zit != zom_->end();) {
				if (aabb(bit->pos.x, bit->pos.y, 1, 1,
						zit->x(), zit->y(), 11, 14)) {
					destroyed = true;
					par_->add_particles_at({bit->pos.x, bit->pos.y}, bit->facing);
					zit = zom_->erase(zit);
					bit = bul_.erase(bit);
					break;
				} else {
					++zit;
				}
			}

			if (!destroyed)
				++bit;
		}
	}

	void render() {
		for (auto &b : bul_) {
			spr.x = b.pos.x;
			spr.y = b.pos.y;
			spr.render({0.23, 0.23, 0.23, 1});
		}
	}

	void add_bullet_at(glm::vec2 pos, int facing) {
		bul_.push_back({facing, pos});
	}

	void reset() {
		bul_.clear();
	}

private:
	struct bullet {
		int facing;
		glm::vec2 pos;
	};

	sprite spr{resources::the().shader("generic"), "spec", 1, 1};
	std::vector<bullet> bul_;
	std::vector<zombie> *zom_;
	particles *par_;
};

struct game_scene : scene {
	game_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~game_scene() = default;

	bool tick(double delta, input_state &state) override {
		player_.tick(delta, state);

		for (auto &zombie : zombies_) {
			zombie.tick(delta, state);

			if (aabb(zombie.x(), zombie.y(), 11, 14, player_.x() + 2, player_.y() - 3, 9, 8) && zombie.hurt_time_ < 0) {
				hp_ -= 4;
				healthbar_.x = hp_ - 160;
				zombie.hurt_time_ = 0.5;
				particles_.add_particles_at({player_.x(), player_.y()}, player_.facing());
			}

			zombie.hurt_time_ -= delta;
		}

		if (hp_ <= 0) {
			hp_ = 0;
			healthbar_.x = hp_ - 160;
			sm_->push("over");
		}


		if (state.just_pressed_keys.contains(SDLK_z)) {
			std::uniform_int_distribution<int> z_lr_dist{0, 1};
			std::uniform_int_distribution<int> z_y_dist{20, 100};

			std::uniform_int_distribution<int> z_num_dist{1, 10};
			std::uniform_int_distribution<int> z_xy_dist{-20, 20};

			int n = z_num_dist(global_mt);

			int x = z_lr_dist(global_mt) ? -30 : 180;
			int y = z_y_dist(global_mt);

			for (int i = 0; i < n; i++) {
				auto &z = zombies_.emplace_back(&player_);
				z.x() = x + z_xy_dist(global_mt);
				z.y() = y + z_xy_dist(global_mt);
			}
		}

		if (state.just_pressed_keys.contains(SDLK_SPACE)) {
			int dx = player_.facing() < 0 ? -1 : 8;

			bullets_.add_bullet_at({player_.x() + dx, player_.y() + 7}, player_.facing());
		}

		bullets_.tick(delta);
		particles_.tick(delta);

		std::uniform_int_distribution<int> cf_frame_dist{0, 3};

		campfire_time_ += delta;
		if (campfire_time_ > 0.1) {
			campfire_.set_frame(cf_frame_dist(global_mt));
			campfire_time_ = 0;
		}

		if (state.just_pressed_keys.contains(SDLK_ESCAPE)) {
			sm_->push("pause");
			return false;
		}

		return true;
	}

	void render() override {
		bg_.render();
		player_.render();

		for (auto &zombie : zombies_)
			zombie.render();

		campfire_.render();
		bullets_.render();
		particles_.render();
		darkness_.render();
		healthbar_.render();
	}

	void reset() override {
		std::cout << "game_scene reset\n";

		player_.reset();
		zombies_.clear();
		campfire_.x = (160 - 11) / 2;
		campfire_.y = (120 - 18) / 2;
		bullets_.reset();
		particles_.reset();

		hp_ = 160;
		healthbar_.x = 0;
		healthbar_.y = 120 - 8;
	}

private:
	scene_manager *sm_;

	player player_;
	std::vector<zombie> zombies_;
	sprite campfire_{resources::the().shader("generic"), "campfire", 11, 18};
	double campfire_time_ = 0;
	sprite bg_{resources::the().shader("generic"), "bg", 160, 120};
	sprite darkness_{resources::the().shader("generic"), "darkness", 160, 120};
	particles particles_;
	bullets bullets_{&zombies_, &particles_};
	sprite healthbar_{resources::the().shader("generic"), "healthbar", 512, 8};
	int hp_ = 160;
};

struct pause_scene : scene {
	pause_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~pause_scene() = default;

	bool tick(double, input_state &state) override {
		if (state.just_pressed_keys.contains(SDLK_ESCAPE))
			sm_->pop();

		return false;
	}

	void render() override {
		t_paused_.render({1,1,1,1});
	}

	void reset() override {
		t_paused_.set_text("Paused");
		t_paused_.x = (160 - 6 * 6) / 2;
		t_paused_.y = 10;
	}

private:
	scene_manager *sm_;

	text t_paused_{resources::the().shader("generic"), resources::the().font("main")};
};

struct over_scene : scene {
	over_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~over_scene() = default;

	bool tick(double, input_state &state) override {
		if (state.just_pressed_keys.contains(SDLK_ESCAPE)) {
			sm_->pop();
			sm_->pop();
			sm_->push("game");
		}

		return false;
	}

	void render() override {
		t_.render({1,1,1,1});
	}

	void reset() override {
		t_.set_text("Game over");
		t_.x = (160 - 9 * 6) / 2;
		t_.y = 10;
	}

private:
	scene_manager *sm_;

	text t_{resources::the().shader("generic"), resources::the().font("main")};
};


struct background_scene : scene {
	background_scene(scene_manager *) { }

	virtual ~background_scene() = default;

	bool tick(double, input_state &) override {
		return true;
	}

	void render() override {
		glClearColor(0.364f, 0.737f, 0.823f, 1.f);
		glClear(GL_COLOR_BUFFER_BIT);

		resources::the().shader("generic").set_uniform("ortho", ortho);
	}

	void reset() override {
	}

private:
	glm::mat4 ortho = glm::ortho(0.f, static_cast<float>(window::width),
			static_cast<float>(window::height), 0.f);
};

int main() {
	std::random_device dev{};
	global_mt = std::mt19937{dev()};

	window wnd;

	glEnable(GL_BLEND);
	glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

	resources::the().load();

	scene_manager sm{};

	sm.register_scene<background_scene>("background");
	sm.register_scene<game_scene>("game");
	sm.register_scene<pause_scene>("pause");
	sm.register_scene<over_scene>("over");
	sm.push("game");
	sm.push_permatick("background");

	wnd.attach_ticker(sm);
	wnd.attach_renderer(sm);
	wnd.enter_main_loop();
}
