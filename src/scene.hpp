#pragma once

#include <memory>
#include <unordered_map>
#include <deque>
#include <window.hpp>

struct scene {
	virtual ~scene() = default;

	virtual bool tick(double delta, input_state &state) = 0;
	virtual void render() = 0;

	virtual void reset() = 0;
};

struct scene_manager {
	template <typename T>
	void register_scene(std::string_view name) {
		scenes_[name] = std::make_unique<T>(this);
		scenes_[name]->reset();
	}

	void tick(double delta, input_state &input) {
		for (auto &scene : permatick_scene_stack_)
			scene->tick(delta, input);

		for (auto &scene : scene_stack_)
			if (!scene->tick(delta, input))
				break;
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
	std::deque<scene *> scene_stack_;
	std::deque<scene *> permatick_scene_stack_;
};
