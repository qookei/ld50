#include <resources.hpp>
#include <fstream>
#include <nlohmann/json.hpp>

void resources::load() {
	std::ifstream file{"res/resources.json"};
	nlohmann::json json;
	file >> json;

	for (auto &item : json["programs"].items()) {
		shaders_.emplace(item.key(), gl::program{
			gl::shader{GL_VERTEX_SHADER, item.value()["vertex"].get<std::string>()},
			gl::shader{GL_FRAGMENT_SHADER, item.value()["fragment"].get<std::string>()}
		});
	}

	for (auto &item : json["sounds"].items()) {
		sounds_.emplace(item.key(), ::sound{
			item.value().get<std::string>()});
	}

	for (auto &item : json["tex"].items()) {
		auto it = tex_.emplace(item.key(), gl::texture2d{});
		it.first->second.load(item.value().get<std::string>());
	}

	for (auto &item : json["fonts"].items()) {
		fonts_.emplace(item.key(), ::font{item.value().get<std::string>()});
	}
}
