#pragma once

#include <SDL2/SDL.h>
#include <SDL2/SDL_opengles2.h>
#include <map>
#include <set>
#include <cmath>
#include <iostream>

struct input_state {
	int mouse_x, mouse_y;
	std::map<SDL_Keycode, bool> down_keys;
	std::set<SDL_Keycode> just_pressed_keys;
};

struct window {
	static constexpr int width = 160;
	static constexpr int height = 120;

	window();

	template <typename T>
	void attach_ticker(T &ticker) {
		ticker_ctx_ = &ticker;
		ticker_cb_ = [] (double delta, input_state &input, void *ctx) {
			static_cast<T *>(ctx)->tick(delta, input);
		};
	}

	template <typename T>
	void attach_renderer(T &renderer) {
		renderer_ctx_ = &renderer;
		renderer_cb_ = [] (void *ctx) {
			static_cast<T *>(ctx)->render();
		};
	}

	void enter_main_loop();

	void main_loop();

	~window();

	window(const window &) = delete;
	window(window &&) = delete;

	window &operator=(const window &) = delete;
	window &operator=(window &&) = delete;

private:
	SDL_Window *wnd_ = nullptr;
	SDL_GLContext ctx_;
	int scale_ = 1;

	uint32_t last_ticks_ = 0;
	input_state input_{};

	void *ticker_ctx_ = nullptr;
	void (*ticker_cb_)(double, input_state &, void *) = nullptr;

	void *renderer_ctx_ = nullptr;
	void (*renderer_cb_)(void *) = nullptr;
};
