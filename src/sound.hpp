#pragma once

#include <string>
#include <SDL2/SDL_mixer.h>

struct sound {
	sound(const std::string &path) {
		chunk_ = Mix_LoadWAV(path.c_str());
	}

	void play() {
		Mix_PlayChannel(-1, chunk_, 0);
	}

private:
	Mix_Chunk *chunk_ = nullptr;
};
