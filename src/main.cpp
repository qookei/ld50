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

	sprite *get_sprite() {
		return &spr;
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

	int get_movement(double, input_state &state) override {
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
		if (walk_time_ < 0) {
			int dx = std::clamp<float>(chasee_->x() - x(), -1, 1);
			int dy = std::clamp<float>(chasee_->y() - y(), -1, 1);

			constexpr int movs[] = {
				// up left
				do_left, do_left | do_up, do_up,
				// up
				do_up | do_left, do_up, do_up | do_right,
				// up right
				do_up, do_up | do_right, do_right,

				// left
				do_left | do_down, do_left, do_left | do_up,
				// none
				0, 0, 0,
				// right
				do_up | do_right, do_right, do_right | do_down,

				// down left
				do_down, do_left | do_down, do_left,
				// down
				do_right | do_down, do_down, do_left | do_down,
				// down right
				do_right, do_right | do_down, do_down,
			};

			mov_ = movs[((dy + 1) * 3 + (dx + 1)) * 3
				+ std::uniform_int_distribution<int>{0,2}(global_mt)];

			walk_time_ = std::uniform_real_distribution<double>{0.3,0.6}(global_mt);
		} else {
			walk_time_ -= delta;
		}

		return mov_;
	}

	float hurt_time_ = -1;

private:
	player *chasee_;

	double walk_time_ = -1;
	int mov_ = 0;
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
	bullets(std::vector<zombie> *zom, particles *par, std::vector<glm::vec2> *clips)
	: zom_{zom}, par_{par}, clips_{clips} { }

	void tick(double delta) {
		for (auto bit = bul_.begin(); bit != bul_.end();) {
			bit->pos.x += delta * 200 * bit->facing;

			bool destroyed = false;

			for (auto zit = zom_->begin(); zit != zom_->end();) {
				if (aabb(bit->pos.x, bit->pos.y, 1, 1,
						zit->x(), zit->y(), 11, 14)) {
					destroyed = true;
					par_->add_particles_at({bit->pos.x, bit->pos.y}, bit->facing);
					if (std::uniform_int_distribution<int>{0, 19}(global_mt) > 14)
						clips_->emplace_back(zit->x(), zit->y() + 10);
					zit = zom_->erase(zit);
					bit = bul_.erase(bit);
					resources::the().sound("hurt-zombie").play();
					score++;
					break;
				} else {
					++zit;
				}
			}

			if (!destroyed) {
				if (bit->pos.x < -4 || bit->pos.x > 160
						|| bit->pos.y < -1 
						|| bit->pos.y > 120) {
					bit = bul_.erase(bit);
				} else {
					++bit;
				}
			}
		}
	}

	void render() {
		for (auto &b : bul_) {
			spr.x = b.pos.x;
			spr.y = b.pos.y;
			spr.render({0.23, 1, 0.23, 1});
		}
	}

	void add_bullet_at(glm::vec2 pos, int facing) {
		bul_.push_back({facing, pos});
	}

	void reset() {
		score = 0;
		bul_.clear();
	}

	int score = 0;

private:
	struct bullet {
		int facing;
		glm::vec2 pos;
	};

	sprite spr{resources::the().shader("generic"), "spec", 4, 1};
	std::vector<bullet> bul_;
	std::vector<zombie> *zom_;
	particles *par_;
	std::vector<glm::vec2> *clips_;
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
				resources::the().sound("hurt-player").play();
			}

			zombie.hurt_time_ -= delta;
		}

		if (hp_ <= 0) {
			hp_ = 0;
			healthbar_.x = hp_ - 160;
			resources::the().sound("death").play();
			sm_->push("over");
		}

		spawn_time_ -= delta;

		if (std::uniform_int_distribution<int>{0, 99}(global_mt) > (95 - (40.f * std::min(bullets_.score / 300.f, 1.f))) && spawn_time_ < 0) {
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

			spawn_time_ = 3 - 2.5f * std::min(bullets_.score / 400.f, 1.f);
		}

		shoot_time_ -= delta;

		if (state.down_keys[SDLK_SPACE] && bullet_amount_ && shoot_time_ < 0) {
			int dx = player_.facing() < 0 ? -1 : 8;

			resources::the().sound("shoot").play();
			bullets_.add_bullet_at({player_.x() + dx, player_.y() + 7}, player_.facing());

			bullet_amount_--;
			t_bullets_.set_text(std::to_string(bullet_amount_));
			shoot_time_ = 0.2;
		}

		for (auto it = clips_.begin(); it != clips_.end();) {
			if (aabb(player_.x(), player_.y(), 11, 14, it->x, it->y, 4, 4)) {
				it = clips_.erase(it);

				bullet_amount_ += std::uniform_int_distribution<int>{5, 20}(global_mt);
				t_bullets_.set_text(std::to_string(bullet_amount_));
				resources::the().sound("pickup").play();
			} else {
				++it;
			}
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

		auto str = std::to_string(bullets_.score);
		t_score_.set_text(str);
		t_score_.y = 120 - 18;
		t_score_.x = 160 - 8 - 8 - 6 * str.size();

		return true;
	}

	void render() override {
		bg_.render();

		for (auto &pos : { glm::vec2{14, 25}, glm::vec2{84, 67}, glm::vec2{43, 110} }) {
			skeleton_.x = pos.x;
			skeleton_.y = pos.y;
			skeleton_.render();
		}

		for (auto &pos : { glm::vec2{67, 102}, glm::vec2{78, 44}, glm::vec2{110, 96} }) {
			stone_.x = pos.x;
			stone_.y = pos.y;
			stone_.render();
		}

		for (auto c : clips_) {
			bullet_tiny_.x = c.x;
			bullet_tiny_.y = c.y;
			bullet_tiny_.render();
		}

		std::vector<sprite *> sprites;

		sprites.push_back(player_.get_sprite());

		for (auto &zombie : zombies_)
			sprites.push_back(zombie.get_sprite());

		sprites.push_back(&campfire_);
		sprites.push_back(&tree1_);
		sprites.push_back(&tree2_);
		sprites.push_back(&tree3_);
		sprites.push_back(&tree4_);

		std::sort(sprites.begin(), sprites.end(), [] (auto a, auto b) { return (a->y + a->height() / 2) < (b->y + b->height() / 2); });

		for (auto s : sprites)
			s->render();

		bullets_.render();
		particles_.render();
		darkness_.render();
		healthbar_.render();
		bullet_.render();
		t_bullets_.render({1,1,1,1});
		zombie2_.render();
		t_score_.render({1,1,1,1});
	}

	void reset() override {
		player_.reset();
		zombies_.clear();
		campfire_.x = (160 - 11) / 2;
		campfire_.y = (120 - 18) / 2;
		bullets_.reset();
		particles_.reset();

		bullet_.x = 8;
		bullet_.y = 120 - 16;
		t_bullets_.set_text("20");
		t_bullets_.x = 18;
		t_bullets_.y = 120 - 18;
		bullet_amount_ = 20;

		hp_ = 160;
		healthbar_.x = 0;
		healthbar_.y = 120 - 8;

		clips_.clear();
		shoot_time_ = 0.1;

		tree1_.x = 58;
		tree1_.y = 23;
		tree2_.x = 120;
		tree2_.y = 35;
		tree3_.x = 40;
		tree3_.y = 78;
		tree4_.x = 56;
		tree4_.y = 88;
		spawn_time_ = -1;

		zombie2_.x = 160 - 8 - 8;
		zombie2_.y = 120 - 20;
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
	sprite healthbar_{resources::the().shader("generic"), "healthbar", 512, 8};
	sprite bullet_{resources::the().shader("generic"), "bullet", 8, 8};
	int hp_ = 160;
	int bullet_amount_ = 20;
	text t_bullets_{resources::the().shader("generic"), resources::the().font("main")};
	sprite bullet_tiny_{resources::the().shader("generic"), "bullet-tiny", 4, 4};
	sprite skeleton_{resources::the().shader("generic"), "skeleton", 16, 16};
	sprite stone_{resources::the().shader("generic"), "stone", 8, 8};
	std::vector<glm::vec2> clips_;
	bullets bullets_{&zombies_, &particles_, &clips_};
	double shoot_time_ = 0.1;
	sprite tree1_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree2_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree3_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree4_{resources::the().shader("generic"), "tree", 32, 32};
	double spawn_time_ = -1;
	text t_score_{resources::the().shader("generic"), resources::the().font("main")};
	sprite zombie2_{resources::the().shader("generic"), "player", 8, 14, 6};
};

struct pause_scene : scene {
	pause_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~pause_scene() = default;

	bool tick(double delta, input_state &state) override {
		switch (phase_) {
			case 0:
				t_paused_.y = std::lerp(t_paused_.y, 10, time_);
				time_ += delta * 4;
				if (time_ > 1.0) {
					time_ = 0;
					phase_ = 1;
				}
				break;
			case 1:
				if (state.just_pressed_keys.contains(SDLK_ESCAPE))
					phase_ = 2;
				break;
			case 2:
				t_paused_.y = std::lerp(t_paused_.y, -12, time_);
				time_ += delta * 4;
				if (time_ > 1.0) {
					sm_->pop();
				}
				break;
		}

		return false;
	}

	void render() override {
		t_paused_.render({1,1,1,1});
	}

	void reset() override {
		t_paused_.set_text("Paused");
		t_paused_.x = (160 - 6 * 6) / 2;
		t_paused_.y = -12;
		time_ = 0;
		phase_ = 0;
	}

private:
	scene_manager *sm_;

	text t_paused_{resources::the().shader("generic"), resources::the().font("main")};
	double time_ = 0;
	int phase_ = 0;
};

struct over_scene : scene {
	over_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~over_scene() = default;

	bool tick(double delta, input_state &state) override {
		switch (phase_) {
			case 0:
				t_paused_.y = std::lerp(t_paused_.y, 10, time_);
				time_ += delta * 4;
				if (time_ > 1.0) {
					time_ = 0;
					phase_ = 1;
				}
				break;
			case 1:
				if (state.just_pressed_keys.contains(SDLK_ESCAPE))
					phase_ = 2;
				break;
			case 2:
				t_paused_.y = std::lerp(t_paused_.y, -12, time_);
				time_ += delta * 4;
				if (time_ > 1.0) {
					sm_->pop();
					sm_->pop();
					sm_->push("game");
				}
				break;
		}

		return false;
	}

	void render() override {
		t_paused_.render({1,1,1,1});
	}

	void reset() override {
		t_paused_.set_text("Game over");
		t_paused_.x = (160 - 9 * 6) / 2;
		t_paused_.y = -12;
		time_ = 0;
		phase_ = 0;
	}

private:
	scene_manager *sm_;

	text t_paused_{resources::the().shader("generic"), resources::the().font("main")};
	double time_ = 0;
	int phase_ = 0;
};

struct dialog_node {
	std::string speaker;
	std::string text;
	sound *sound;
	double delay;
};

struct dialog_box {
	void tick(double delta, input_state &state) {
		switch (state_) {
			case 0: {
				auto &node = nodes_[node_];
				t_.set_text(node.text.substr(0, in_node_ + 1));
				speaker_.set_text(node.speaker);

				if (time_ >= node.delay) {
					in_node_++;
					node.sound->play();
					time_ = 0;
				}

				time_ += delta;

				if (in_node_ >= node.text.size()) {
					node_++;
					time_ = 0;
					in_node_ = 0;
					t_.set_text(node.text);
					state_ = 1;
				}

				if (state.just_pressed_keys.contains(SDLK_SPACE)) {
					in_node_ = node.text.size() - 1;
				}
				break;
			}

			case 1:
				if (state.just_pressed_keys.contains(SDLK_SPACE)) {
					if (node_ == nodes_.size())
						state_ = 2;
					else
						state_ = 0;
				}
		}
	}

	void render() {
		bg_.render();
		t_.render({1,1,1,1});
		speaker_.render({1,1,1,1});

		if (state_ == 1)
			arrow_.render();
	}

	void reset() {
		t_.x = 6;
		t_.y = 120 - 30;

		speaker_.x = 8;
		speaker_.y = 83;

		arrow_.x = 148;
		arrow_.y = 115;

		node_ = 0;
		in_node_ = 0;
		time_ = 0;
		state_ = 0;
	}

	bool is_done() {
		return state_ == 2;
	}

	void set_nodes_1() {
		reset();
		nodes_ = {
			dialog_node{"Radio", "* Incoming transmission *", &resources::the().sound("click2"), 0.03},
			dialog_node{"Radio", "Hello? Is anyone there?", &resources::the().sound("click2"), 0.01},
			dialog_node{"You", "Yes! Can you help me?\nI am stranded here, and I am running\nout of food.", &resources::the().sound("click"), 0.01},
			dialog_node{"Radio", "Please stand by, we will send you\ncoordinates to where we are stationed.", &resources::the().sound("click2"), 0.01},
			dialog_node{"You", "Understood.", &resources::the().sound("click"), 0.01},
			dialog_node{"Radio", "* Click *", &resources::the().sound("click2"), 0.03},
			dialog_node{"You", "I should rest here for a bit before\ngoing any further.", &resources::the().sound("click"), 0.01}
		};
	}

	void set_nodes_2() {
		reset();
		nodes_ = {
			dialog_node{"Radio", "* Incoming transmission *", &resources::the().sound("click2"), 0.03},
			dialog_node{"Radio", "Are you still there?", &resources::the().sound("click2"), 0.01},
			dialog_node{"You", "Yes!", &resources::the().sound("click"), 0.01},
			dialog_node{"Radio", "Our base is at 49.1...", &resources::the().sound("click2"), 0.01},
			dialog_node{"Radio", "...", &resources::the().sound("hurt-zombie"), 0.05},
			dialog_node{"Radio", "* Click *", &resources::the().sound("click2"), 0.03},
			dialog_node{"You", "Hello? Hello?? Shit, my radio is out\nof power. This is bad...", &resources::the().sound("click"), 0.01}
		};
	}

private:
	text t_{resources::the().shader("generic"), resources::the().font("tiny")};
	text speaker_{resources::the().shader("generic"), resources::the().font("tiny")};
	sprite bg_{resources::the().shader("generic"), "dialog-bg", 160, 120};
	sprite arrow_{resources::the().shader("generic"), "arrow", 8, 8};

	std::vector<dialog_node> nodes_;

	size_t node_ = 0;
	size_t in_node_ = 0;
	double time_ = 0;
	int state_ = 0;
};

struct animated_player : entity {
	animated_player() : entity{0, 15, 0.1} { }

	int get_movement(double, input_state &) override {
		return do_right;
	}
};

struct intro_scene : scene {
	intro_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~intro_scene() = default;

	bool tick(double delta, input_state &state) override {
		switch (phase_) {
			case 0:
				time_ += delta;
				if (time_ >= 1.5) {
					time_ = 0;
					phase_ = 1;
				}
				player_.tick(delta, state);
				break;
			case 1:
				db_.tick(delta, state);
				if (db_.is_done()) {
					phase_ = 2;
					db_.set_nodes_2();
				}
				break;
			case 2:
				player_.tick(delta, state);
			case 3:
				time_ += delta * 2;
				if (time_ >= 1) {
					time_ = 0;
					phase_++;
					if (phase_ == 3) {
						player_.x() = 64;
						player_.y() = 64;
					}
				}
				break;
			case 4:
				db_.tick(delta, state);
				if (db_.is_done()) {
					sm_->pop();
					sm_->push("game");
				}
		}

		std::uniform_int_distribution<int> cf_frame_dist{0, 3};

		campfire_time_ += delta;
		if (campfire_time_ > 0.1) {
			campfire_.set_frame(cf_frame_dist(global_mt));
			campfire_time_ = 0;
		}

		return false;
	}

	void render() override {
		bg_.render();

		for (auto &pos : { glm::vec2{14, 25}, glm::vec2{84, 67}, glm::vec2{43, 110} }) {
			skeleton_.x = pos.x;
			skeleton_.y = pos.y;
			skeleton_.render();
		}

		for (auto &pos : { glm::vec2{67, 102}, glm::vec2{78, 44}, glm::vec2{110, 96} }) {
			stone_.x = pos.x;
			stone_.y = pos.y;
			stone_.render();
		}

		std::vector<sprite *> sprites;

		sprites.push_back(player_.get_sprite());

		if (phase_ > 2)
			sprites.push_back(&campfire_);
		sprites.push_back(&tree1_);
		sprites.push_back(&tree2_);
		sprites.push_back(&tree3_);
		sprites.push_back(&tree4_);

		std::sort(sprites.begin(), sprites.end(), [] (auto a, auto b) { return (a->y + a->height() / 2) < (b->y + b->height() / 2); });

		for (auto s : sprites)
			s->render();

		if (phase_ < 3)
			darkness2_.render({1,1,1,1+(phase_ == 2 ? time_ : 0)});
		else {
			darkness_.render();
			darkness2_.render({1,1,1,1-(phase_ == 3 ? time_ : 1)});
		}

		if (phase_ == 1 || phase_ == 4)
			db_.render();
	}

	void reset() override {
		db_.reset();

		player_.reset();

		player_.x() = -8;
		player_.y() = (120 - 14) / 2;

		campfire_.x = (160 - 11) / 2;
		campfire_.y = (120 - 18) / 2;

		tree1_.x = 58;
		tree1_.y = 23;
		tree2_.x = 120;
		tree2_.y = 35;
		tree3_.x = 40;
		tree3_.y = 78;
		tree4_.x = 56;
		tree4_.y = 88;

		db_.set_nodes_1();

		phase_ = 0;
		time_ = 0;
	}

private:
	scene_manager *sm_;
	dialog_box db_;

	animated_player player_;
	sprite campfire_{resources::the().shader("generic"), "campfire", 11, 18};
	double campfire_time_ = 0;
	sprite bg_{resources::the().shader("generic"), "bg", 160, 120};
	sprite skeleton_{resources::the().shader("generic"), "skeleton", 16, 16};
	sprite stone_{resources::the().shader("generic"), "stone", 8, 8};
	sprite tree1_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree2_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree3_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree4_{resources::the().shader("generic"), "tree", 32, 32};
	sprite darkness_{resources::the().shader("generic"), "darkness", 160, 120};
	sprite darkness2_{resources::the().shader("generic"), "darkness2", 160, 120};

	int phase_ = 0;
	double time_ = 0;
};


struct menu_scene : scene {
	menu_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~menu_scene() = default;

	bool tick(double delta, input_state &state) override {
		switch (phase_) {
			case 0:
				time_ += delta * 3;
				if (time_ >= 1) {
					time_ = 0;
					phase_ = 1;
				}
				title_.y = std::lerp(title_.y, 4, time_);
				start_.y = std::lerp(start_.y, 102, time_);
				break;
			case 1:
				if (state.just_pressed_keys.size()) {
					resources::the().sound("play").play();
					sm_->pop();
					sm_->push("intro");
				}
				break;
		}

		return false;
	}

	void render() override {
		bg_.render();

		for (auto &pos : { glm::vec2{14, 25}, glm::vec2{84, 67}, glm::vec2{43, 110} }) {
			skeleton_.x = pos.x;
			skeleton_.y = pos.y;
			skeleton_.render();
		}

		for (auto &pos : { glm::vec2{67, 102}, glm::vec2{78, 44}, glm::vec2{110, 96} }) {
			stone_.x = pos.x;
			stone_.y = pos.y;
			stone_.render();
		}

		tree1_.render();
		tree2_.render();
		tree3_.render();
		tree4_.render();

		darkness2_.render();

		title_.render({1,1,1,1});
		start_.render({1,1,1,1});
	}

	void reset() override {
		title_.set_text("Batteries not included");
		title_.x = (160 - 22 * 6) / 2;
		title_.y = -12;

		start_.set_text("Press any key to start");
		start_.x = (160 - 22 * 6) / 2;
		start_.y = 120;

		tree1_.x = 58;
		tree1_.y = 23;
		tree2_.x = 120;
		tree2_.y = 35;
		tree3_.x = 40;
		tree3_.y = 78;
		tree4_.x = 56;
		tree4_.y = 88;

		phase_ = 0;
		time_ = 0;
	}

private:
	scene_manager *sm_;

	sprite bg_{resources::the().shader("generic"), "bg", 160, 120};
	sprite skeleton_{resources::the().shader("generic"), "skeleton", 16, 16};
	sprite stone_{resources::the().shader("generic"), "stone", 8, 8};
	sprite tree1_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree2_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree3_{resources::the().shader("generic"), "tree", 32, 32};
	sprite tree4_{resources::the().shader("generic"), "tree", 32, 32};
	sprite darkness2_{resources::the().shader("generic"), "darkness2", 160, 120};

	int phase_ = 0;
	double time_ = 0;

	text title_{resources::the().shader("generic"), resources::the().font("main")};
	text start_{resources::the().shader("generic"), resources::the().font("main")};
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
	sm.register_scene<menu_scene>("menu");
	sm.register_scene<game_scene>("game");
	sm.register_scene<pause_scene>("pause");
	sm.register_scene<over_scene>("over");
	sm.register_scene<intro_scene>("intro");
	sm.push("menu");
	sm.push_permatick("background");

	wnd.attach_ticker(sm);
	wnd.attach_renderer(sm);
	wnd.enter_main_loop();
}
