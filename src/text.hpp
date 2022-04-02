#pragma once

#include <string_view>
#include <gl/mesh.hpp>
#include <gl/texture.hpp>

struct text;

struct font {
	friend struct text;

	font(const std::string &resource);

private:
	gl::texture2d atlas_;
	int char_w_;
	int char_h_;
	int chars_per_atlas_line_;
};

struct text {
	text(gl::program &prog, font &font)
	: font_{&font}, mesh_{&prog} {}

	void set_text(std::string_view str);

	void render(glm::vec4 color) {
		font_->atlas_.bind();
		mesh_.program()->set_uniform("obj_pos", glm::vec2{x, y});
		mesh_.program()->set_uniform("obj_color", color);
		mesh_.render(n_chars_ * 6);
	}

	int x = 0, y = 0;

private:
	font *font_;
	gl::mesh mesh_;
	size_t n_chars_;
};
