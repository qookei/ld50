#pragma once

#include <unordered_map>

#include <gl/shader.hpp>
#include <sound.hpp>
#include <gl/texture.hpp>
#include <text.hpp>

struct resources {
	resources(const resources &) = delete;
	resources(resources &&) = delete;
	resources &operator=(const resources &) = delete;
	resources &operator=(resources &&) = delete;

	static resources &the() {
		static resources inst;
		return inst;
	}

	void load();

	gl::program &shader(const std::string &name) {
		return shaders_.at(name);
	}

	gl::texture2d &tex(const std::string &name) {
		return tex_.at(name);
	}

	sound &sound(const std::string &name) {
		return sounds_.at(name);
	}

	font &font(const std::string &name) {
		return fonts_.at(name);
	}

private:
	resources() = default;

	std::unordered_map<std::string, gl::program> shaders_;
	std::unordered_map<std::string, ::sound> sounds_;
	std::unordered_map<std::string, gl::texture2d> tex_;
	std::unordered_map<std::string, ::font> fonts_;
};
