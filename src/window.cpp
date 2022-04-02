#include <window.hpp>

#include <emscripten.h>
#include <emscripten/html5.h>
#include <SDL2/SDL.h>
#include <SDL2/SDL_opengles2.h>
#include <SDL2/SDL_mixer.h>
#include <map>
#include <set>
#include <cmath>
#include <iostream>

inline constexpr bool log_scale = false;

window::window() {
	SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO);

	SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 2);
	SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 0);
	SDL_GL_SetSwapInterval(1);
	SDL_GL_SetAttribute(SDL_GL_DOUBLEBUFFER, 1);

	int client_width, client_height;
	client_width = EM_ASM_INT({return document.documentElement.clientWidth}, 0);
	client_height = EM_ASM_INT({return document.documentElement.clientHeight}, 0);

	scale_ = std::min(client_width / width, client_height / height);

	if (scale_ < 1) {
		std::cerr << "Browser window too small to fit canvas!\n";
		scale_ = 1;
	}

	if constexpr (log_scale)
		std::cout << "Computed scale is " << scale_
			<< " (viewport: " << width << "x" << height << ")"
			<< " (client: " << client_width << "x" << client_height << ")\n";

	wnd_ = SDL_CreateWindow("Ancient Pixels", SDL_WINDOWPOS_CENTERED,
			SDL_WINDOWPOS_CENTERED,
			width * scale_, height * scale_,
			SDL_WINDOW_OPENGL | SDL_WINDOW_SHOWN);

	ctx_ = SDL_GL_CreateContext(wnd_);
	glViewport(0, 0, width * scale_, height * scale_);

	emscripten_set_resize_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, this, false,
	[] (int, const EmscriptenUiEvent *ui_ev, void *ctx) -> int {
		auto wnd = static_cast<window *>(ctx);

		int client_width = ui_ev->documentBodyClientWidth;
		int client_height = ui_ev->documentBodyClientHeight;
		wnd->scale_ = std::min(client_width / width, client_height / height);

		if (wnd->scale_ < 1) {
			std::cerr << "Browser window too small to fit canvas!\n";
			wnd->scale_ = 1;
		}

		if constexpr (log_scale)
			std::cout << "Computed scale is " << wnd->scale_
				<< " (viewport: " << width << "x" << height << ")"
				<< " (client: " << client_width << "x" << client_height << ")\n";

		SDL_SetWindowSize(wnd->wnd_, width * wnd->scale_, height * wnd->scale_);
		glViewport(0, 0, width * wnd->scale_, height * wnd->scale_);

		return true;
	});

	if (Mix_OpenAudio(44100, AUDIO_S16SYS, 2, 512) < 0)
		abort();

	if (Mix_AllocateChannels(16) < 0)
		abort();
}

void window::enter_main_loop() {
	last_ticks_ = SDL_GetTicks();
	emscripten_set_main_loop_arg([] (void *ctx) {
		static_cast<window *>(ctx)->main_loop();
	}, this, 0, true);
}

void window::main_loop() {
	auto now_ticks = SDL_GetTicks();
	auto delta = static_cast<double>(now_ticks - last_ticks_) / 1000.0;
	last_ticks_ = now_ticks;

	input_.just_pressed_keys.clear();

	SDL_Event ev;
	while (SDL_PollEvent(&ev)) {
		switch (ev.type) {
			case SDL_KEYUP:
				input_.down_keys[ev.key.keysym.sym] = false;
				break;
			case SDL_KEYDOWN:
				if (!input_.down_keys[ev.key.keysym.sym])
					input_.just_pressed_keys.insert(ev.key.keysym.sym);
				input_.down_keys[ev.key.keysym.sym] = true;
				break;
		}
	}

	ticker_cb_(delta, input_, ticker_ctx_);

	renderer_cb_(renderer_ctx_);

	SDL_GL_SwapWindow(wnd_);
}

window::~window() {
	SDL_GL_DeleteContext(ctx_);
	SDL_DestroyWindow(wnd_);
	SDL_Quit();
}
