project('ld50', 'cpp',
	default_options : [
		'warning_level=3',
		'buildtype=release',
		'cpp_rtti=false',
		'cpp_exceptions=false',
		'cpp_std=c++20'
	])

sources = files(
	'src/main.cpp',
	'src/window.cpp',
	'src/text.cpp',
	'src/resources.cpp'
)

resources = files(
	'res/shaders/generic-vertex.glsl',
	'res/shaders/generic-fragment.glsl',
	'res/gfx/font.png',
	'res/font.cfg',
	'res/resources.json'
)

glm_dep = dependency('glm')
nlohmann_json_dep = dependency('nlohmann_json')

deps = [glm_dep, nlohmann_json_dep]

if host_machine.system() == 'emscripten'
	deps += declare_dependency(
		compile_args : ['-s', 'USE_SDL=2'],
		link_args : ['-s', 'USE_SDL=2']
	)
	deps += declare_dependency(
		compile_args : ['-s', 'USE_SDL_IMAGE=2'],
		link_args : ['-s', 'USE_SDL_IMAGE=2']
	)
	deps += declare_dependency(
		compile_args : ['-s', 'USE_SDL_MIXER=2'],
		link_args : ['-s', 'USE_SDL_MIXER=2']
	)
else
	deps += dependency('SDL2')
	deps += dependency('SDL2_image')
	deps += dependency('SDL2_mixer')
endif

exe = executable('ld50',
	sources,
	include_directories : 'src/',
	dependencies : deps,
	cpp_args : ['-Wno-deprecated-volatile'],
	link_args : ['--preload-file', meson.project_source_root() / 'res@/res', '--use-preload-plugins'],
	link_depends : resources
)
