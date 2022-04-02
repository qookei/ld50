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

struct game_scene : scene {
	game_scene(scene_manager *sm)
	: sm_{sm} { }

	virtual ~game_scene() = default;

	bool tick(double delta, input_state &state) override {
		if (state.down_keys[SDLK_a])
			spr.x -= 50 * delta;
		if (state.down_keys[SDLK_d])
			spr.x += 50 * delta;

		return true;
	}

	void render() override {
		spr.render();
	}

	void reset() override {
		spr.x = 64;
		spr.y = 64;
	}

private:
	scene_manager *sm_;

	sprite spr{resources::the().shader("generic"), "test", 32, 32};
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
