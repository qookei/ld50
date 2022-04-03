#pragma once

#include <memory>
#include <unordered_map>
#include <vector>
#include <window.hpp>
#include <ranges>

struct scene {
	virtual ~scene() = default;

	virtual bool tick(double delta, input_state &state) = 0;
	virtual void render() = 0;

	virtual void reset() = 0;
};

template <typename T>
struct reverse_adapter {
	auto begin() { return t.rbegin(); }
	auto end() { return t.rend(); }

	T &t;
};

struct scene_manager {
	template <typename T>
	void register_scene(std::string_view name) {
		scenes_[name] = std::make_unique<T>(this);
		scenes_[name]->reset();
	}

	void tick(double delta, input_state &input) {
		for (auto &scene : reverse_adapter<std::vector<scene *>>{scene_stack_})
			if (!scene->tick(delta, input))
				break;

		for (auto &scene : permatick_scene_stack_)
			scene->tick(delta, input);
	}

	void render() {
		for (auto &scene : permatick_scene_stack_)
			scene->render();

		for (auto &scene : scene_stack_)
			scene->render();
	}

	void push(std::string_view name) {
		scene_stack_.push_back(scenes_[name].get());
	}

	void push_permatick(std::string_view name) {
		permatick_scene_stack_.push_back(scenes_[name].get());
	}

	void pop() {
		scene_stack_.back()->reset();
		scene_stack_.pop_back();
	}

private:
	std::unordered_map<std::string_view, std::unique_ptr<scene>> scenes_;
	std::vector<scene *> scene_stack_;
	std::vector<scene *> permatick_scene_stack_;
};
