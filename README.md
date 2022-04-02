# LD50

The source code for my Ludum Dare 50 entry. 

## Compiling

You will need:
 - Emscripten (new enough to support C++20)
 - Meson and Ninja

Clone the repository with submodules:
```
$ git clone https://github.com/qookei/ld50 --recursive
```

Then configure it:
```
$ meson build --cross-file=cross/emscripten.txt
```

Then compile it:
```
$ ninja -C build
```

Then, create a symlink for `ld50.data` and launch a web server to test it, for example:
```
$ ln -s build/ld50.data
$ python -m http.server
```
