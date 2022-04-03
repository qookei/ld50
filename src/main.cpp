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


#include <resources.hpp>

std::mt19937 global_mt;

inline constexpr int do_up = 1;
inline constexpr int do_down = 2;
inline constexpr int do_left = 4;
inline constexpr int do_right = 8;

struct entity {
	entity(int base_frame, float speed, double walk_frame_speed)
	: base_frame_{base_frame}, speed_{speed}, walk_frame_speed_{walk_frame_speed} { }

	entity(entity &&) = default;

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
			facing_ = 1;
		}

		if (mov & do_right) {
			spr.x += speed_ * delta;
			facing_ = 0;
		}

		if (mov & do_up) {
			spr.y -= speed_ * 0.7f * delta;
		}

		if (mov & do_down) {
			spr.y += speed_ * 0.7f * delta;
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

	zombie(zombie &&) = default;

	int get_movement(double, input_state &) override {
		int mov = 0;

		constexpr int deadzone = 4;

		if (chasee_->x() - x() > deadzone)
			mov |= do_right;
		else if (chasee_->x() - x() < -deadzone)
			mov |= do_left;

		if (chasee_->y() - y() > deadzone)
			mov |= do_down;
		else if (chasee_->y() - y() < -deadzone)
			mov |= do_up;

		return mov;
	}

private:
	player *chasee_;
};



struct game_scene : scene {
	game_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~game_scene() = default;

	bool tick(double delta, input_state &state) override {
		player_.tick(delta, state);

		for (auto &zombie : zombies_)
			zombie.tick(delta, state);

		if (state.just_pressed_keys.contains(SDLK_SPACE)) {
			auto &z = zombies_.emplace_back(&player_);
			z.x() = 0;
			z.y() = 32;
		}

		std::uniform_int_distribution<int> cf_frame_dist{0, 3};

		campfire_time_ += delta;
		if (campfire_time_ > 0.1) {
			campfire_.set_frame(cf_frame_dist(global_mt));
			campfire_time_ = 0;
		}

		return true;
	}

	void render() override {
		player_.render();

		for (auto &zombie : zombies_)
			zombie.render();

		campfire_.render();
	}

	void reset() override {
		player_.reset();
		zombies_.clear();
		campfire_.x = (160 - 11) / 2;
		campfire_.y = (120 - 18) / 2;
	}

private:
	scene_manager *sm_;

	player player_;
	std::vector<zombie> zombies_;
	sprite campfire_{resources::the().shader("generic"), "campfire", 11, 18};
	double campfire_time_ = 0;
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

		t.set_text("Hello world!");
		t.render({1,1,1,1});
	}

	void reset() override {
	}

private:
	text t{resources::the().shader("generic"), resources::the().font("main")};
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
	sm.push("game");
	sm.push_permatick("background");

	wnd.attach_ticker(sm);
	wnd.attach_renderer(sm);
	wnd.enter_main_loop();
}
