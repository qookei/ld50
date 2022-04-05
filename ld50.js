
var e;
e || (e = typeof Module !== 'undefined' ? Module : {});
var aa = Object.assign;
e.qa || (e.qa = 0);
e.qa++;
e.ENVIRONMENT_IS_PTHREAD || function(a) {
  function b(q, u, r, v) {
    if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) {
      require("fs").readFile(q, function(p, w) {
        p ? v(p) : r(w.buffer);
      });
    } else {
      var x = new XMLHttpRequest();
      x.open("GET", q, !0);
      x.responseType = "arraybuffer";
      x.onprogress = function(p) {
        var w = u;
        p.total && (w = p.total);
        if (p.loaded) {
          x.o ? e.O[q].loaded = p.loaded : (x.o = !0, e.O || (e.O = {}), e.O[q] = {loaded:p.loaded, total:w});
          var z = w = p = 0, E;
          for (E in e.O) {
            var V = e.O[E];
            p += V.total;
            w += V.loaded;
            z++;
          }
          p = Math.ceil(p * e.qa / z);
          e.setStatus && e.setStatus("Downloading data... (" + w + "/" + p + ")");
        } else {
          !e.O && e.setStatus && e.setStatus("Downloading data...");
        }
      };
      x.onerror = function() {
        throw Error("NetworkError for: " + q);
      };
      x.onload = function() {
        if (200 == x.status || 304 == x.status || 206 == x.status || 0 == x.status && x.response) {
          r(x.response);
        } else {
          throw Error(x.statusText + " : " + x.responseURL);
        }
      };
      x.send(null);
    }
  }
  function c(q) {
    console.error("package error:", q);
  }
  function d() {
    function q(x, p, w) {
      this.start = x;
      this.end = p;
      this.audio = w;
    }
    function u(x) {
      if (!x) {
        throw "Loading data file failed." + Error().stack;
      }
      if (!(x instanceof ArrayBuffer)) {
        throw "bad input to processPackageData" + Error().stack;
      }
      x = new Uint8Array(x);
      q.prototype.La = x;
      x = a.files;
      for (var p = 0; p < x.length; ++p) {
        q.prototype.o[x[p].filename].onload();
      }
      e.removeRunDependency("datafile_ld50.data");
    }
    e.FS_createPath("/", "res", !0, !0);
    e.FS_createPath("/res", "sound", !0, !0);
    e.FS_createPath("/res", "shaders", !0, !0);
    e.FS_createPath("/res", "gfx", !0, !0);
    q.prototype = {o:{}, open:function(x, p) {
      this.name = p;
      this.o[p] = this;
      e.addRunDependency("fp " + this.name);
    }, send:function() {
    }, onload:function() {
      var x = this.La.subarray(this.start, this.end);
      this.W(x);
    }, W:function(x) {
      var p = this;
      e.FS_createPreloadedFile(this.name, null, x, !0, !0, function() {
        e.removeRunDependency("fp " + p.name);
      }, function() {
        p.audio ? e.removeRunDependency("fp " + p.name) : k("Preloading file " + p.name + " failed");
      }, !1, !0);
      this.o[this.name] = null;
    }};
    for (var r = a.files, v = 0; v < r.length; ++v) {
      (new q(r[v].start, r[v].end, r[v].audio || 0)).open("GET", r[v].filename);
    }
    e.addRunDependency("datafile_ld50.data");
    e.Ua || (e.Ua = {});
    e.Ua["ld50.data"] = {Qb:!1};
    n ? (u(n), n = null) : h = u;
  }
  "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
  "function" !== typeof e.locateFilePackage || e.locateFile || (e.locateFile = e.locateFilePackage, k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
  var f = e.locateFile ? e.locateFile("ld50.data", "") : "ld50.data", g = a.remote_package_size, h = null, n = e.getPreloadedPackage ? e.getPreloadedPackage(f, g) : null;
  n || b(f, g, function(q) {
    h ? (h(q), h = null) : n = q;
  }, c);
  e.calledRun ? d() : (e.preRun || (e.preRun = []), e.preRun.push(d));
}({files:[{filename:"/res/resources.json", start:0, end:1068}, {filename:"/res/notes.txt", start:1068, end:1276}, {filename:"/res/font.cfg", start:1276, end:1301}, {filename:"/res/font-tiny.cfg", start:1301, end:1330}, {filename:"/res/sound/shoot.wav", start:1330, end:3009, audio:1}, {filename:"/res/sound/play.wav", start:3009, end:15816, audio:1}, {filename:"/res/sound/pickup.wav", start:15816, end:17203, audio:1}, {filename:"/res/sound/hurt-zombie.wav", start:17203, end:19664, audio:1}, {filename:"/res/sound/hurt-player.wav", 
start:19664, end:22884, audio:1}, {filename:"/res/sound/death.wav", start:22884, end:34901, audio:1}, {filename:"/res/sound/click2.wav", start:34901, end:35412, audio:1}, {filename:"/res/sound/click.wav", start:35412, end:35923, audio:1}, {filename:"/res/shaders/generic-vertex.glsl", start:35923, end:36120}, {filename:"/res/shaders/generic-fragment.glsl", start:36120, end:36305}, {filename:"/res/gfx/tree.png", start:36305, end:37180}, {filename:"/res/gfx/test.png", start:37180, end:37823}, {filename:"/res/gfx/stone.png", 
start:37823, end:38440}, {filename:"/res/gfx/spec.png", start:38440, end:43192}, {filename:"/res/gfx/skeleton.png", start:43192, end:43819}, {filename:"/res/gfx/player.png", start:43819, end:44854}, {filename:"/res/gfx/healthbar.png", start:44854, end:49925}, {filename:"/res/gfx/font.png", start:49925, end:66647}, {filename:"/res/gfx/font-tiny.png", start:66647, end:67657}, {filename:"/res/gfx/dialog-bg.png", start:67657, end:68588}, {filename:"/res/gfx/darkness2.png", start:68588, end:69578}, {filename:"/res/gfx/darkness.png", 
start:69578, end:75770}, {filename:"/res/gfx/campfire.png", start:75770, end:76856}, {filename:"/res/gfx/bullet.png", start:76856, end:81796}, {filename:"/res/gfx/bullet-tiny.png", start:81796, end:86629}, {filename:"/res/gfx/bg.png", start:86629, end:89963}, {filename:"/res/gfx/arrow.png", start:89963, end:90560}], remote_package_size:90560, package_uuid:"4e0aec4e-22e9-4fc9-b4db-a874c04e0849"});
e.ENVIRONMENT_IS_PTHREAD && (e.preRun = []);
var ba = e.preRun.slice();
if (!e.preRun) {
  throw "Module.preRun should exist because file support used it; did a pre-js delete it?";
}
ba.forEach(function(a) {
  if (0 > e.preRun.indexOf(a)) {
    throw "All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?";
  }
});
var ca = aa({}, e), da = "./this.program", ea = (a, b) => {
  throw b;
}, fa = "object" === typeof window, ha = "function" === typeof importScripts, ia = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node, ja = !fa && !ia && !ha;
if (e.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var ka = "", la, ma, na, oa;
function pa(a) {
  if (!(a instanceof qa)) {
    var b = a;
    a && "object" === typeof a && a.stack && (b = [a, a.stack]);
    k("exiting due to exception: " + b);
  }
}
var fs, ra, ta;
if (ia) {
  if ("object" !== typeof process || "function" !== typeof require) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  ka = ha ? require("path").dirname(ka) + "/" : __dirname + "/";
  ta = () => {
    ra || (fs = require("fs"), ra = require("path"));
  };
  la = function(a, b) {
    ta();
    a = ra.normalize(a);
    return fs.readFileSync(a, b ? null : "utf8");
  };
  na = a => {
    a = la(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  };
  ma = (a, b, c) => {
    ta();
    a = ra.normalize(a);
    fs.readFile(a, function(d, f) {
      d ? c(d) : b(f.buffer);
    });
  };
  1 < process.argv.length && (da = process.argv[1].replace(/\\/g, "/"));
  process.argv.slice(2);
  "undefined" !== typeof module && (module.exports = e);
  process.on("uncaughtException", function(a) {
    if (!(a instanceof qa)) {
      throw a;
    }
  });
  process.on("unhandledRejection", function(a) {
    throw a;
  });
  ea = (a, b) => {
    if (noExitRuntime || 0 < ua) {
      throw process.exitCode = a, b;
    }
    pa(b);
    process.exit(a);
  };
  e.inspect = function() {
    return "[Emscripten Module object]";
  };
} else if (ja) {
  if ("object" === typeof process && "function" === typeof require || "object" === typeof window || "function" === typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  "undefined" != typeof read && (la = function(a) {
    return read(a);
  });
  na = function(a) {
    if ("function" === typeof readbuffer) {
      return new Uint8Array(readbuffer(a));
    }
    a = read(a, "binary");
    assert("object" === typeof a);
    return a;
  };
  ma = function(a, b) {
    setTimeout(() => b(na(a)), 0);
  };
  "function" === typeof quit && (ea = (a, b) => {
    pa(b);
    quit(a);
  });
  "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
} else if (fa || ha) {
  ha ? ka = self.location.href : "undefined" !== typeof document && document.currentScript && (ka = document.currentScript.src);
  ka = 0 !== ka.indexOf("blob:") ? ka.substr(0, ka.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
  if ("object" !== typeof window && "function" !== typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  la = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.send(null);
    return b.responseText;
  };
  ha && (na = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  });
  ma = (a, b, c) => {
    var d = new XMLHttpRequest();
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
      200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
    };
    d.onerror = c;
    d.send(null);
  };
  oa = a => {
    document.title = a;
  };
} else {
  throw Error("environment detection error");
}
var l = e.print || console.log.bind(console), k = e.printErr || console.warn.bind(console);
aa(e, ca);
ca = null;
Object.getOwnPropertyDescriptor(e, "arguments") || Object.defineProperty(e, "arguments", {configurable:!0, get:function() {
  m("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
e.thisProgram && (da = e.thisProgram);
Object.getOwnPropertyDescriptor(e, "thisProgram") || Object.defineProperty(e, "thisProgram", {configurable:!0, get:function() {
  m("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
e.quit && (ea = e.quit);
Object.getOwnPropertyDescriptor(e, "quit") || Object.defineProperty(e, "quit", {configurable:!0, get:function() {
  m("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof e.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof e.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof e.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof e.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof e.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof e.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof e.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof e.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof e.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(e, "read") || Object.defineProperty(e, "read", {configurable:!0, get:function() {
  m("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(e, "readAsync") || Object.defineProperty(e, "readAsync", {configurable:!0, get:function() {
  m("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(e, "readBinary") || Object.defineProperty(e, "readBinary", {configurable:!0, get:function() {
  m("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(e, "setWindowTitle") || Object.defineProperty(e, "setWindowTitle", {configurable:!0, get:function() {
  m("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(!ja, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
function va(a) {
  wa || (wa = {});
  wa[a] || (wa[a] = 1, k(a));
}
var wa, xa;
e.wasmBinary && (xa = e.wasmBinary);
Object.getOwnPropertyDescriptor(e, "wasmBinary") || Object.defineProperty(e, "wasmBinary", {configurable:!0, get:function() {
  m("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime = e.noExitRuntime || !0;
Object.getOwnPropertyDescriptor(e, "noExitRuntime") || Object.defineProperty(e, "noExitRuntime", {configurable:!0, get:function() {
  m("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && m("no native wasm support detected");
function ya(a, b) {
  var c = "float";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      t[a >> 0] = b;
      break;
    case "i8":
      t[a >> 0] = b;
      break;
    case "i16":
      za[a >> 1] = b;
      break;
    case "i32":
      y[a >> 2] = b;
      break;
    case "i64":
      Aa = [b >>> 0, (A = b, 1.0 <= +Math.abs(A) ? 0.0 < A ? (Math.min(+Math.floor(A / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((A - +(~~A >>> 0)) / 4294967296.0) >>> 0 : 0)];
      y[a >> 2] = Aa[0];
      y[a + 4 >> 2] = Aa[1];
      break;
    case "float":
      B[a >> 2] = b;
      break;
    case "double":
      C[a >> 3] = b;
      break;
    default:
      m("invalid type for setValue: " + c);
  }
}
var Ba, Ca = !1, Da;
function assert(a, b) {
  a || m("Assertion failed" + (b ? ": " + b : ""));
}
var Ea = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function Fa(a, b, c) {
  var d = b + c;
  for (c = b; a[c] && !(c >= d);) {
    ++c;
  }
  if (16 < c - b && a.subarray && Ea) {
    return Ea.decode(a.subarray(b, c));
  }
  for (d = ""; b < c;) {
    var f = a[b++];
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) {
        d += String.fromCharCode((f & 31) << 6 | g);
      } else {
        var h = a[b++] & 63;
        224 == (f & 240) ? f = (f & 15) << 12 | g << 6 | h : (240 != (f & 248) && va("Invalid UTF-8 leading byte 0x" + f.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), f = (f & 7) << 18 | g << 12 | h << 6 | a[b++] & 63);
        65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      d += String.fromCharCode(f);
    }
  }
  return d;
}
function D(a, b) {
  return a ? Fa(F, a, b) : "";
}
function Ga(a, b, c, d) {
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var n = a.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | n & 1023;
    }
    if (127 >= h) {
      if (c >= d) {
        break;
      }
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | h >> 6;
      } else {
        if (65535 >= h) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | h >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < h && va("Invalid Unicode code point 0x" + h.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | h >> 18;
          b[c++] = 128 | h >> 12 & 63;
        }
        b[c++] = 128 | h >> 6 & 63;
      }
      b[c++] = 128 | h & 63;
    }
  }
  b[c] = 0;
  return c - f;
}
function G(a, b, c) {
  assert("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  return Ga(a, F, b, c);
}
function Ha(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
  }
  return b;
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
function Ia(a) {
  var b = Ha(a) + 1, c = H(b);
  c && Ga(a, t, c, b);
  return c;
}
function Ja(a, b) {
  assert(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
  t.set(a, b);
}
var Ka, t, F, za, La, y, I, B, C;
e.TOTAL_STACK && assert(5242880 === e.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Ma = e.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(e, "INITIAL_MEMORY") || Object.defineProperty(e, "INITIAL_MEMORY", {configurable:!0, get:function() {
  m("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= Ma, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Ma + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
assert(!e.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
assert(16777216 == Ma, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
var Na;
function Oa() {
  var a = Pa();
  assert(0 == (a & 3));
  y[a + 4 >> 2] = 34821223;
  y[a + 8 >> 2] = 2310721022;
  y[0] = 1668509029;
}
function Qa() {
  if (!Ca) {
    var a = Pa(), b = I[a + 4 >> 2];
    a = I[a + 8 >> 2];
    34821223 == b && 2310721022 == a || m("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + a.toString(16) + " 0x" + b.toString(16));
    1668509029 !== y[0] && m("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ra = new Int16Array(1), Sa = new Int8Array(Ra.buffer);
Ra[0] = 25459;
if (115 !== Sa[0] || 99 !== Sa[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
}
var Ta = [], Ua = [], Va = [], Wa = [], Xa = [], Ya = !1, Za = !1, ua = 0;
function $a() {
  var a = e.preRun.shift();
  Ta.unshift(a);
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var ab = 0, bb = null, cb = null, db = {};
function eb(a) {
  for (var b = a;;) {
    if (!db[a]) {
      return a;
    }
    a = b + Math.random();
  }
}
function fb(a) {
  ab++;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
  a ? (assert(!db[a]), db[a] = 1, null === bb && "undefined" !== typeof setInterval && (bb = setInterval(function() {
    if (Ca) {
      clearInterval(bb), bb = null;
    } else {
      var b = !1, c;
      for (c in db) {
        b || (b = !0, k("still waiting on run dependencies:")), k("dependency: " + c);
      }
      b && k("(end of list)");
    }
  }, 10000))) : k("warning: run dependency added without ID");
}
function gb(a) {
  ab--;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
  a ? (assert(db[a]), delete db[a]) : k("warning: run dependency removed without ID");
  0 == ab && (null !== bb && (clearInterval(bb), bb = null), cb && (a = cb, cb = null, a()));
}
e.preloadedImages = {};
e.preloadedAudios = {};
function m(a) {
  if (e.onAbort) {
    e.onAbort(a);
  }
  a = "Aborted(" + a + ")";
  k(a);
  Ca = !0;
  Da = 1;
  throw new WebAssembly.RuntimeError(a);
}
function hb() {
  return J.startsWith("data:application/octet-stream;base64,");
}
function K(a) {
  return function() {
    var b = e.asm;
    assert(Ya, "native function `" + a + "` called before runtime initialization");
    assert(!Za, "native function `" + a + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    b[a] || assert(b[a], "exported native function `" + a + "` not found");
    return b[a].apply(null, arguments);
  };
}
var J;
J = "ld50.wasm";
if (!hb()) {
  var ib = J;
  J = e.locateFile ? e.locateFile(ib, ka) : ka + ib;
}
function jb() {
  var a = J;
  try {
    if (a == J && xa) {
      return new Uint8Array(xa);
    }
    if (na) {
      return na(a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (b) {
    m(b);
  }
}
function kb() {
  if (!xa && (fa || ha)) {
    if ("function" === typeof fetch && !J.startsWith("file://")) {
      return fetch(J, {credentials:"same-origin"}).then(function(a) {
        if (!a.ok) {
          throw "failed to load wasm binary file at '" + J + "'";
        }
        return a.arrayBuffer();
      }).catch(function() {
        return jb();
      });
    }
    if (ma) {
      return new Promise(function(a, b) {
        ma(J, function(c) {
          a(new Uint8Array(c));
        }, b);
      });
    }
  }
  return Promise.resolve().then(function() {
    return jb();
  });
}
var A, Aa, ob = {157308:function() {
  return document.documentElement.clientWidth;
}, 157354:function() {
  return document.documentElement.clientHeight;
}, 157401:function(a) {
  a = D(a) + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :";
  a = window.prompt(a, "i");
  null === a && (a = "i");
  a = lb(a);
  assert(!1, "allocate no longer takes a type argument");
  assert("number" !== typeof a, "allocate no longer takes a number as arg0");
  var b = H(a.length);
  a.subarray || a.slice ? F.set(a, b) : F.set(new Uint8Array(a), b);
  return b;
}, 157626:function() {
  return "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? 1 : 0;
}, 157763:function() {
  return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? 1 : 0;
}, 157987:function(a) {
  "undefined" === typeof e.SDL2 && (e.SDL2 = {});
  var b = e.SDL2;
  a ? b.capture = {} : b.audio = {};
  b.l || ("undefined" !== typeof AudioContext ? b.l = new AudioContext() : "undefined" !== typeof webkitAudioContext && (b.l = new webkitAudioContext()), b.l && mb(b.l));
  return void 0 === b.l ? -1 : 0;
}, 158480:function() {
  return e.SDL2.l.sampleRate;
}, 158548:function(a, b, c, d) {
  function f() {
  }
  function g(n) {
    void 0 !== h.capture.aa && (clearTimeout(h.capture.aa), h.capture.aa = void 0);
    h.capture.fa = h.l.createMediaStreamSource(n);
    h.capture.s = h.l.createScriptProcessor(b, a, 1);
    h.capture.s.onaudioprocess = function(q) {
      void 0 !== h && void 0 !== h.capture && (q.outputBuffer.getChannelData(0).fill(0.0), h.capture.pa = q.inputBuffer, nb(c, [d]));
    };
    h.capture.fa.connect(h.capture.s);
    h.capture.s.connect(h.l.destination);
    h.capture.stream = n;
  }
  var h = e.SDL2;
  h.capture.ia = h.l.createBuffer(a, b, h.l.sampleRate);
  h.capture.ia.getChannelData(0).fill(0.0);
  h.capture.aa = setTimeout(function() {
    h.capture.pa = h.capture.ia;
    nb(c, [d]);
  }, b / h.l.sampleRate * 1000);
  void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({audio:!0, video:!1}).then(g).catch(f) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({audio:!0, video:!1}, g, f);
}, 160200:function(a, b, c, d) {
  var f = e.SDL2;
  f.audio.s = f.l.createScriptProcessor(b, 0, a);
  f.audio.s.onaudioprocess = function(g) {
    void 0 !== f && void 0 !== f.audio && (f.audio.Ca = g.outputBuffer, nb(c, [d]));
  };
  f.audio.s.connect(f.l.destination);
}, 160610:function(a, b) {
  for (var c = e.SDL2, d = c.capture.pa.numberOfChannels, f = 0; f < d; ++f) {
    var g = c.capture.pa.getChannelData(f);
    if (g.length != b) {
      throw "Web Audio capture buffer length mismatch! Destination size: " + g.length + " samples vs expected " + b + " samples!";
    }
    if (1 == d) {
      for (var h = 0; h < b; ++h) {
        ya(a + 4 * h, g[h]);
      }
    } else {
      for (h = 0; h < b; ++h) {
        ya(a + 4 * (h * d + f), g[h]);
      }
    }
  }
}, 161215:function(a, b) {
  for (var c = e.SDL2, d = c.audio.Ca.numberOfChannels, f = 0; f < d; ++f) {
    var g = c.audio.Ca.getChannelData(f);
    if (g.length != b) {
      throw "Web Audio output buffer length mismatch! Destination size: " + g.length + " samples vs expected " + b + " samples!";
    }
    for (var h = 0; h < b; ++h) {
      g[h] = B[a + (h * d + f << 2) >> 2];
    }
  }
}, 161695:function(a) {
  var b = e.SDL2;
  if (a) {
    void 0 !== b.capture.aa && clearTimeout(b.capture.aa);
    if (void 0 !== b.capture.stream) {
      a = b.capture.stream.getAudioTracks();
      for (var c = 0; c < a.length; c++) {
        b.capture.stream.removeTrack(a[c]);
      }
      b.capture.stream = void 0;
    }
    void 0 !== b.capture.s && (b.capture.s.onaudioprocess = function() {
    }, b.capture.s.disconnect(), b.capture.s = void 0);
    void 0 !== b.capture.fa && (b.capture.fa.disconnect(), b.capture.fa = void 0);
    void 0 !== b.capture.ia && (b.capture.ia = void 0);
    b.capture = void 0;
  } else {
    void 0 != b.audio.s && (b.audio.s.disconnect(), b.audio.s = void 0), b.audio = void 0;
  }
  void 0 !== b.l && void 0 === b.audio && void 0 === b.capture && (b.l.close(), b.l = void 0);
}, 162867:function(a, b, c) {
  e.SDL2 || (e.SDL2 = {});
  var d = e.SDL2;
  d.$a !== e.canvas && (d.C = e.createContext(e.canvas, !1, !0), d.$a = e.canvas);
  if (d.w !== a || d.jb !== b || d.lb !== d.C) {
    d.image = d.C.createImageData(a, b), d.w = a, d.jb = b, d.lb = d.C;
  }
  a = d.image.data;
  b = c >> 2;
  var f = 0;
  if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray) {
    for (c = a.length; f < c;) {
      var g = y[b];
      a[f] = g & 255;
      a[f + 1] = g >> 8 & 255;
      a[f + 2] = g >> 16 & 255;
      a[f + 3] = 255;
      b++;
      f += 4;
    }
  } else {
    if (d.bb !== a && (d.ab = new Int32Array(a.buffer), d.cb = new Uint8Array(a.buffer), d.bb = a), a = d.ab, c = a.length, a.set(y.subarray(b, b + c)), a = d.cb, b = 3, f = b + 4 * c, 0 == c % 8) {
      for (; b < f;) {
        a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0;
      }
    } else {
      for (; b < f;) {
        a[b] = 255, b = b + 4 | 0;
      }
    }
  }
  d.C.putImageData(d.image, 0, 0);
  return 0;
}, 164346:function(a, b, c, d, f) {
  var g = document.createElement("canvas");
  g.width = a;
  g.height = b;
  var h = g.getContext("2d");
  a = h.createImageData(a, b);
  b = a.data;
  f >>= 2;
  var n = 0, q;
  if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray) {
    for (q = b.length; n < q;) {
      var u = y[f];
      b[n] = u & 255;
      b[n + 1] = u >> 8 & 255;
      b[n + 2] = u >> 16 & 255;
      b[n + 3] = u >> 24 & 255;
      f++;
      n += 4;
    }
  } else {
    b = new Int32Array(b.buffer), q = b.length, b.set(y.subarray(f, f + q));
  }
  h.putImageData(a, 0, 0);
  c = 0 === c && 0 === d ? "url(" + g.toDataURL() + "), auto" : "url(" + g.toDataURL() + ") " + c + " " + d + ", auto";
  d = H(c.length + 1);
  G(c, d, c.length + 1);
  return d;
}, 165335:function(a) {
  e.canvas && (e.canvas.style.cursor = D(a));
  return 0;
}, 165428:function() {
  e.canvas && (e.canvas.style.cursor = "none");
}, 165497:function() {
  return window.innerWidth;
}, 165527:function() {
  return window.innerHeight;
}};
function pb(a, b) {
  qb = a;
  rb = b;
  if (sb) {
    if (tb || (tb = !0), 0 == a) {
      ub = function() {
        var d = Math.max(0, vb + b - wb()) | 0;
        setTimeout(xb, d);
      }, yb = "timeout";
    } else if (1 == a) {
      ub = function() {
        zb(xb);
      }, yb = "rAF";
    } else if (2 == a) {
      if ("undefined" === typeof setImmediate) {
        var c = [];
        addEventListener("message", function(d) {
          if ("setimmediate" === d.data || "setimmediate" === d.data.target) {
            d.stopPropagation(), c.shift()();
          }
        }, !0);
        setImmediate = function(d) {
          c.push(d);
          ha ? (void 0 === e.setImmediates && (e.setImmediates = []), e.setImmediates.push(d), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
        };
      }
      ub = function() {
        setImmediate(xb);
      };
      yb = "immediate";
    }
  } else {
    k("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  }
}
var wb;
wb = ia ? () => {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : () => performance.now();
function Ab(a) {
  a instanceof qa || "unwind" == a || ea(1, a);
}
function Bb(a, b, c, d, f) {
  function g() {
    if (h < Cb) {
      if (!(noExitRuntime || 0 < ua)) {
        try {
          Db(Da);
        } catch (n) {
          Ab(n);
        }
      }
      return !1;
    }
    return !0;
  }
  assert(!sb, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  sb = a;
  Eb = d;
  var h = Cb;
  tb = !1;
  xb = function() {
    if (!Ca) {
      if (0 < Fb.length) {
        var n = Date.now(), q = Fb.shift();
        q.ib(q.da);
        if (Gb) {
          var u = Gb, r = 0 == u % 1 ? u - 1 : Math.floor(u);
          Gb = q.Ob ? r : (8 * u + (r + 0.5)) / 9;
        }
        l('main loop blocker "' + q.name + '" took ' + (Date.now() - n) + " ms");
        e.setStatus && (n = e.statusMessage || "Please wait...", q = Gb, u = Hb.Pb, q ? q < u ? e.setStatus(n + " (" + (u - q) + "/" + u + ")") : e.setStatus(n) : e.setStatus(""));
        g() && setTimeout(xb, 0);
      } else {
        g() && (Ib = Ib + 1 | 0, 1 == qb && 1 < rb && 0 != Ib % rb ? ub() : (0 == qb && (vb = wb()), "timeout" === yb && e.C && (va("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), yb = ""), Ca || e.preMainLoop && !1 === e.preMainLoop() || (Jb(a), e.postMainLoop && e.postMainLoop()), Qa(), g() && ("object" === typeof SDL && 
        SDL.audio && SDL.audio.wb && SDL.audio.wb(), ub())));
      }
    }
  };
  f || (b && 0 < b ? pb(0, 1000.0 / b) : pb(1, 1), ub());
  if (c) {
    throw "unwind";
  }
}
function Jb(a) {
  if (Za || Ca) {
    k("user callback triggered after runtime exited or application aborted.  Ignoring.");
  } else {
    try {
      a();
    } catch (b) {
      Ab(b);
    }
  }
}
function Kb(a) {
  setTimeout(function() {
    Jb(a);
  }, 10000);
}
var tb = !1, ub = null, yb = "", Cb = 0, sb = null, Eb = 0, qb = 0, rb = 0, Ib = 0, Fb = [], Hb = {}, vb, xb, Gb, Lb = !1, Mb = !1, Nb = [];
function Ob() {
  function a() {
    Mb = document.pointerLockElement === e.canvas || document.mozPointerLockElement === e.canvas || document.webkitPointerLockElement === e.canvas || document.msPointerLockElement === e.canvas;
  }
  e.preloadPlugins || (e.preloadPlugins = []);
  if (!Pb) {
    Pb = !0;
    try {
      Qb = !0;
    } catch (c) {
      Qb = !1, l("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    Rb = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Qb ? null : l("warning: no BlobBuilder");
    Sb = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    e.Ra || "undefined" !== typeof Sb || (l("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), e.Ra = !0);
    e.preloadPlugins.push({canHandle:function(c) {
      return !e.Ra && /\.(jpg|jpeg|png|bmp)$/i.test(c);
    }, handle:function(c, d, f, g) {
      var h = null;
      if (Qb) {
        try {
          h = new Blob([c], {type:Tb(d)}), h.size !== c.length && (h = new Blob([(new Uint8Array(c)).buffer], {type:Tb(d)}));
        } catch (u) {
          va("Blob constructor present but fails: " + u + "; falling back to blob builder");
        }
      }
      h || (h = new Rb(), h.append((new Uint8Array(c)).buffer), h = h.getBlob());
      var n = Sb.createObjectURL(h);
      assert("string" == typeof n, "createObjectURL must return a url as a string");
      var q = new Image();
      q.onload = () => {
        assert(q.complete, "Image " + d + " could not be decoded");
        var u = document.createElement("canvas");
        u.width = q.width;
        u.height = q.height;
        u.getContext("2d").drawImage(q, 0, 0);
        e.preloadedImages[d] = u;
        Sb.revokeObjectURL(n);
        f && f(c);
      };
      q.onerror = () => {
        l("Image " + n + " could not be decoded");
        g && g();
      };
      q.src = n;
    }});
    e.preloadPlugins.push({canHandle:function(c) {
      return !e.Xb && c.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(c, d, f, g) {
      function h(v) {
        q || (q = !0, e.preloadedAudios[d] = v, f && f(c));
      }
      function n() {
        q || (q = !0, e.preloadedAudios[d] = new Audio(), g && g());
      }
      var q = !1;
      if (Qb) {
        try {
          var u = new Blob([c], {type:Tb(d)});
        } catch (v) {
          return n();
        }
        u = Sb.createObjectURL(u);
        assert("string" == typeof u, "createObjectURL must return a url as a string");
        var r = new Audio();
        r.addEventListener("canplaythrough", function() {
          h(r);
        }, !1);
        r.onerror = function() {
          if (!q) {
            l("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
            for (var v = "", x = 0, p = 0, w = 0; w < c.length; w++) {
              for (x = x << 8 | c[w], p += 8; 6 <= p;) {
                var z = x >> p - 6 & 63;
                p -= 6;
                v += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[z];
              }
            }
            2 == p ? (v += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(x & 3) << 4], v += "==") : 4 == p && (v += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(x & 15) << 2], v += "=");
            r.src = "data:audio/x-" + d.substr(-3) + ";base64," + v;
            h(r);
          }
        };
        r.src = u;
        Kb(function() {
          h(r);
        });
      } else {
        return n();
      }
    }});
    var b = e.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {
    }, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
    }, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), e.elementPointerLock && b.addEventListener("click", function(c) {
      !Mb && e.canvas.requestPointerLock && (e.canvas.requestPointerLock(), c.preventDefault());
    }, !1));
  }
}
function Ub(a, b, c, d) {
  if (b && e.C && a == e.canvas) {
    return e.C;
  }
  var f;
  if (b) {
    var g = {antialias:!1, alpha:!1, Na:1,};
    if (d) {
      for (var h in d) {
        g[h] = d[h];
      }
    }
    if ("undefined" !== typeof Vb && (f = Wb(a, g))) {
      var n = Xb[f].J;
    }
  } else {
    n = a.getContext("2d");
  }
  if (!n) {
    return null;
  }
  c && (b || assert("undefined" === typeof L, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), e.C = n, b && Yb(f), e.Kb = b, Nb.forEach(function(q) {
    q();
  }), Ob());
  return n;
}
var Zb = !1, $b = void 0, ac = void 0;
function bc(a, b) {
  function c() {
    Lb = !1;
    var g = d.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === g ? (d.exitFullscreen = cc, $b && d.requestPointerLock(), Lb = !0, ac ? ("undefined" != typeof SDL && (y[SDL.screen >> 2] = I[SDL.screen >> 2] | 8388608), dc(e.canvas), ec()) : dc(d)) : (g.parentNode.insertBefore(d, g), g.parentNode.removeChild(g), ac ? ("undefined" != typeof SDL && (y[SDL.screen >> 2] = I[SDL.screen >> 
    2] & -8388609), dc(e.canvas), ec()) : dc(d));
    if (e.onFullScreen) {
      e.onFullScreen(Lb);
    }
    if (e.onFullscreen) {
      e.onFullscreen(Lb);
    }
  }
  $b = a;
  ac = b;
  "undefined" === typeof $b && ($b = !0);
  "undefined" === typeof ac && (ac = !1);
  var d = e.canvas;
  Zb || (Zb = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
  var f = document.createElement("div");
  d.parentNode.insertBefore(f, d);
  f.appendChild(d);
  f.requestFullscreen = f.requestFullscreen || f.mozRequestFullScreen || f.msRequestFullscreen || (f.webkitRequestFullscreen ? function() {
    f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null) || (f.webkitRequestFullScreen ? function() {
    f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  f.requestFullscreen();
}
function cc() {
  if (!Lb) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
  }).apply(document, []);
  return !0;
}
var fc = 0;
function zb(a) {
  if ("function" === typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = Date.now();
    if (0 === fc) {
      fc = b + 1000 / 60;
    } else {
      for (; b + 2 >= fc;) {
        fc += 1000 / 60;
      }
    }
    setTimeout(a, Math.max(fc - b, 0));
  }
}
function Tb(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
var gc = [];
function ec() {
  var a = e.canvas;
  gc.forEach(function(b) {
    b(a.width, a.height);
  });
}
function dc(a, b, c) {
  b && c ? (a.Lb = b, a.kb = c) : (b = a.Lb, c = a.kb);
  var d = b, f = c;
  e.forcedAspectRatio && 0 < e.forcedAspectRatio && (d / f < e.forcedAspectRatio ? d = Math.round(f * e.forcedAspectRatio) : f = Math.round(d / e.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var g = Math.min(screen.width / d, screen.height / f);
    d = Math.round(d * g);
    f = Math.round(f * g);
  }
  ac ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var Pb, Qb, Rb, Sb;
function hc(a, b, c) {
  a.addEventListener(b, c, {once:!0});
}
function mb(a) {
  var b;
  b || (b = [document, document.getElementById("canvas")]);
  ["keydown", "mousedown", "touchstart"].forEach(function(c) {
    b.forEach(function(d) {
      d && hc(d, c, function() {
        "suspended" === a.state && a.resume();
      });
    });
  });
}
function ic(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b(e);
    } else {
      var c = b.ib;
      "number" === typeof c ? void 0 === b.da ? M(c)() : M(c)(b.da) : c(void 0 === b.da ? null : b.da);
    }
  }
}
function jc(a) {
  var b = kc();
  a = a();
  lc(b);
  return a;
}
function mc(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(b) {
    va("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return b === b ? b : b + " [" + b + "]";
  });
}
var nc = [];
function M(a) {
  var b = nc[a];
  b || (a >= nc.length && (nc.length = a + 1), nc[a] = b = Na.get(a));
  assert(Na.get(a) == b, "JavaScript-side Wasm function table mirror is out of date!");
  return b;
}
function nb(a, b) {
  if ("vi".includes("j")) {
    assert("dynCall_vi" in e, "bad function pointer type - no table for sig 'vi'");
    b && b.length ? assert(b.length === "i".replace(/j/g, "--").length) : assert(!1);
    var c = e.dynCall_vi;
    b && b.length ? c.apply(null, [a].concat(b)) : c.call(null, a);
  } else {
    assert(M(a), "missing table entry in dynCall: " + a), M(a).apply(null, b);
  }
}
function oc(a) {
  this.S = a - 16;
  this.Db = function(b) {
    y[this.S + 4 >> 2] = b;
  };
  this.Ab = function(b) {
    y[this.S + 8 >> 2] = b;
  };
  this.Bb = function() {
    y[this.S >> 2] = 0;
  };
  this.zb = function() {
    t[this.S + 12 >> 0] = 0;
  };
  this.Cb = function() {
    t[this.S + 13 >> 0] = 0;
  };
  this.mb = function(b, c) {
    this.Db(b);
    this.Ab(c);
    this.Bb();
    this.zb();
    this.Cb();
  };
}
var pc = 0;
function qc(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}
function rc(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = qc(a.split("/").filter(function(d) {
    return !!d;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function sc(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function tc(a) {
  if ("/" === a) {
    return "/";
  }
  a = rc(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function uc() {
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    return function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  if (ia) {
    try {
      var b = require("crypto");
      return function() {
        return b.randomBytes(1)[0];
      };
    } catch (c) {
    }
  }
  return function() {
    m("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
  };
}
function vc() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = qc(a.split("/").filter(function(d) {
    return !!d;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var wc = [];
function xc(a, b) {
  wc[a] = {input:[], output:[], R:b};
  yc(a, zc);
}
var zc = {open:function(a) {
  var b = wc[a.node.rdev];
  if (!b) {
    throw new N(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.R.flush(a.tty);
}, flush:function(a) {
  a.tty.R.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.R.Ha) {
    throw new N(60);
  }
  for (var f = 0, g = 0; g < d; g++) {
    try {
      var h = a.tty.R.Ha(a.tty);
    } catch (n) {
      throw new N(29);
    }
    if (void 0 === h && 0 === f) {
      throw new N(6);
    }
    if (null === h || void 0 === h) {
      break;
    }
    f++;
    b[c + g] = h;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write:function(a, b, c, d) {
  if (!a.tty || !a.tty.R.ta) {
    throw new N(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.R.ta(a.tty, b[c + f]);
    }
  } catch (g) {
    throw new N(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
}}, Ac = {Ha:function(a) {
  if (!a.input.length) {
    var b = null;
    if (ia) {
      var c = Buffer.alloc(256), d = 0;
      try {
        d = fs.readSync(process.stdin.fd, c, 0, 256, null);
      } catch (f) {
        if (f.toString().includes("EOF")) {
          d = 0;
        } else {
          throw f;
        }
      }
      0 < d ? b = c.slice(0, d).toString("utf-8") : b = null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = lb(b, !0);
  }
  return a.input.shift();
}, ta:function(a, b) {
  null === b || 10 === b ? (l(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (l(Fa(a.output, 0)), a.output = []);
}}, Bc = {ta:function(a, b) {
  null === b || 10 === b ? (k(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (k(Fa(a.output, 0)), a.output = []);
}}, O = {G:null, I:function() {
  return O.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new N(63);
  }
  O.G || (O.G = {dir:{node:{K:O.h.K, v:O.h.v, lookup:O.h.lookup, ga:O.h.ga, rename:O.h.rename, unlink:O.h.unlink, rmdir:O.h.rmdir, readdir:O.h.readdir, symlink:O.h.symlink}, stream:{M:O.i.M}}, file:{node:{K:O.h.K, v:O.h.v}, stream:{M:O.i.M, read:O.i.read, write:O.i.write, xa:O.i.xa, Oa:O.i.Oa, Qa:O.i.Qa}}, link:{node:{K:O.h.K, v:O.h.v, readlink:O.h.readlink}, stream:{}}, Ba:{node:{K:O.h.K, v:O.h.v}, stream:Cc}});
  c = Dc(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.h = O.G.dir.node, c.i = O.G.dir.stream, c.g = {}) : 32768 === (c.mode & 61440) ? (c.h = O.G.file.node, c.i = O.G.file.stream, c.j = 0, c.g = null) : 40960 === (c.mode & 61440) ? (c.h = O.G.link.node, c.i = O.G.link.stream) : 8192 === (c.mode & 61440) && (c.h = O.G.Ba.node, c.i = O.G.Ba.stream);
  c.timestamp = Date.now();
  a && (a.g[b] = c, a.timestamp = c.timestamp);
  return c;
}, Rb:function(a) {
  return a.g ? a.g.subarray ? a.g.subarray(0, a.j) : new Uint8Array(a.g) : new Uint8Array(0);
}, Ea:function(a, b) {
  var c = a.g ? a.g.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.g, a.g = new Uint8Array(b), 0 < a.j && a.g.set(c.subarray(0, a.j), 0));
}, xb:function(a, b) {
  if (a.j != b) {
    if (0 == b) {
      a.g = null, a.j = 0;
    } else {
      var c = a.g;
      a.g = new Uint8Array(b);
      c && a.g.set(c.subarray(0, Math.min(b, a.j)));
      a.j = b;
    }
  }
}, h:{K:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.j : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.Za = 4096;
  b.blocks = Math.ceil(b.size / b.Za);
  return b;
}, v:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && O.xb(a, b.size);
}, lookup:function() {
  throw Ec[44];
}, ga:function(a, b, c, d) {
  return O.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (16384 === (a.mode & 61440)) {
    try {
      var d = Fc(b, c);
    } catch (g) {
    }
    if (d) {
      for (var f in d.g) {
        throw new N(55);
      }
    }
  }
  delete a.parent.g[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.g[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.g[b];
  a.timestamp = Date.now();
}, rmdir:function(a, b) {
  var c = Fc(a, b), d;
  for (d in c.g) {
    throw new N(55);
  }
  delete a.g[b];
  a.timestamp = Date.now();
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.g) {
    a.g.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = O.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new N(28);
  }
  return a.link;
}}, i:{read:function(a, b, c, d, f) {
  var g = a.node.g;
  if (f >= a.node.j) {
    return 0;
  }
  a = Math.min(a.node.j - f, d);
  assert(0 <= a);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = g[f + d];
    }
  }
  return a;
}, write:function(a, b, c, d, f, g) {
  assert(!(b instanceof ArrayBuffer));
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.g || a.g.subarray)) {
    if (g) {
      return assert(0 === f, "canOwn must imply no weird position inside the file"), a.g = b.subarray(c, c + d), a.j = d;
    }
    if (0 === a.j && 0 === f) {
      return a.g = b.slice(c, c + d), a.j = d;
    }
    if (f + d <= a.j) {
      return a.g.set(b.subarray(c, c + d), f), d;
    }
  }
  O.Ea(a, f + d);
  if (a.g.subarray && b.subarray) {
    a.g.set(b.subarray(c, c + d), f);
  } else {
    for (g = 0; g < d; g++) {
      a.g[f + g] = b[c + g];
    }
  }
  a.j = Math.max(a.j, f + d);
  return d;
}, M:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.j);
  if (0 > b) {
    throw new N(28);
  }
  return b;
}, xa:function(a, b, c) {
  O.Ea(a.node, b + c);
  a.node.j = Math.max(a.node.j, b + c);
}, Oa:function(a, b, c, d, f, g) {
  if (0 !== b) {
    throw new N(28);
  }
  if (32768 !== (a.node.mode & 61440)) {
    throw new N(43);
  }
  a = a.node.g;
  if (g & 2 || a.buffer !== Ka) {
    if (0 < d || d + c < a.length) {
      a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
    }
    d = !0;
    m("internal error: mmapAlloc called but `memalign` native symbol not exported");
    c = void 0;
    if (!c) {
      throw new N(48);
    }
    t.set(a, c);
  } else {
    d = !1, c = a.byteOffset;
  }
  return {S:c, Mb:d};
}, Qa:function(a, b, c, d, f) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new N(43);
  }
  if (f & 2) {
    return 0;
  }
  O.i.write(a, b, 0, d, c, !1);
  return 0;
}}};
function Hc(a, b, c) {
  var d = eb("al " + a);
  ma(a, function(f) {
    assert(f, 'Loading data file "' + a + '" failed (no arrayBuffer).');
    b(new Uint8Array(f));
    d && gb(d);
  }, function() {
    if (c) {
      c();
    } else {
      throw 'Loading data file "' + a + '" failed.';
    }
  });
  d && fb(d);
}
var Ic = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, Jc = {}, Kc = null, Lc = {}, Mc = [], Nc = 1, Oc = null, Pc = !0, N = null, Ec = {};
function P(a, b = {}) {
  a = vc("/", a);
  if (!a) {
    return {path:"", node:null};
  }
  var c = {Fa:!0, ua:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.ua) {
    throw new N(32);
  }
  a = qc(a.split("/").filter(function(h) {
    return !!h;
  }), !1);
  var f = Kc;
  c = "/";
  for (d = 0; d < a.length; d++) {
    var g = d === a.length - 1;
    if (g && b.parent) {
      break;
    }
    f = Fc(f, a[d]);
    c = rc(c + "/" + a[d]);
    f.$ && (!g || g && b.Fa) && (f = f.$.root);
    if (!g || b.V) {
      for (g = 0; 40960 === (f.mode & 61440);) {
        if (f = Qc(c), c = vc(sc(c), f), f = P(c, {ua:b.ua}).node, 40 < g++) {
          throw new N(32);
        }
      }
    }
  }
  return {path:c, node:f};
}
function Rc(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.I.Pa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function Sc(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % Oc.length;
}
function Fc(a, b) {
  var c;
  if (c = (c = Tc(a, "x")) ? c : a.h.lookup ? 0 : 2) {
    throw new N(c, a);
  }
  for (c = Oc[Sc(a.id, b)]; c; c = c.P) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.h.lookup(a, b);
}
function Dc(a, b, c, d) {
  assert("object" === typeof a);
  a = new Uc(a, b, c, d);
  b = Sc(a.parent.id, a.name);
  a.P = Oc[b];
  return Oc[b] = a;
}
var Vc = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090};
function Wc(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Tc(a, b) {
  if (Pc) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Xc(a, b) {
  try {
    return Fc(a, b), 20;
  } catch (c) {
  }
  return Tc(a, "wx");
}
function Yc(a = 0, b = 4096) {
  for (; a <= b; a++) {
    if (!Mc[a]) {
      return a;
    }
  }
  throw new N(33);
}
function Zc(a, b) {
  $c || ($c = function() {
  }, $c.prototype = {object:{get:function() {
    return this.node;
  }, set:function(f) {
    this.node = f;
  }}});
  var c = new $c(), d;
  for (d in a) {
    c[d] = a[d];
  }
  a = c;
  b = Yc(b, void 0);
  a.fd = b;
  return Mc[b] = a;
}
var Cc = {open:function(a) {
  a.i = Lc[a.node.rdev].i;
  a.i.open && a.i.open(a);
}, M:function() {
  throw new N(70);
}};
function yc(a, b) {
  Lc[a] = {i:b};
}
function ad(a, b) {
  if ("string" === typeof a) {
    throw a;
  }
  var c = "/" === b, d = !b;
  if (c && Kc) {
    throw new N(10);
  }
  if (!c && !d) {
    var f = P(b, {Fa:!1});
    b = f.path;
    f = f.node;
    if (f.$) {
      throw new N(10);
    }
    if (16384 !== (f.mode & 61440)) {
      throw new N(54);
    }
  }
  b = {type:a, Yb:{}, Pa:b, sb:[]};
  a = a.I(b);
  a.I = b;
  b.root = a;
  c ? Kc = a : f && (f.$ = b, f.I && f.I.sb.push(b));
}
function bd(a, b, c) {
  var d = P(a, {parent:!0}).node;
  a = tc(a);
  if (!a || "." === a || ".." === a) {
    throw new N(28);
  }
  var f = Xc(d, a);
  if (f) {
    throw new N(f);
  }
  if (!d.h.ga) {
    throw new N(63);
  }
  return d.h.ga(d, a, b, c);
}
function cd(a) {
  return bd(a, 16895, 0);
}
function dd(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return bd(a, b | 8192, c);
}
function ed(a, b) {
  if (!vc(a)) {
    throw new N(44);
  }
  var c = P(b, {parent:!0}).node;
  if (!c) {
    throw new N(44);
  }
  b = tc(b);
  var d = Xc(c, b);
  if (d) {
    throw new N(d);
  }
  if (!c.h.symlink) {
    throw new N(63);
  }
  c.h.symlink(c, b, a);
}
function fd(a) {
  var b = P(a, {parent:!0}).node;
  if (!b) {
    throw new N(44);
  }
  var c = tc(a);
  a = Fc(b, c);
  a: {
    try {
      var d = Fc(b, c);
    } catch (g) {
      d = g.H;
      break a;
    }
    var f = Tc(b, "wx");
    d = f ? f : 16384 === (d.mode & 61440) ? 31 : 0;
  }
  if (d) {
    throw new N(d);
  }
  if (!b.h.unlink) {
    throw new N(63);
  }
  if (a.$) {
    throw new N(10);
  }
  b.h.unlink(b, c);
  b = Sc(a.parent.id, a.name);
  if (Oc[b] === a) {
    Oc[b] = a.P;
  } else {
    for (b = Oc[b]; b;) {
      if (b.P === a) {
        b.P = a.P;
        break;
      }
      b = b.P;
    }
  }
}
function Qc(a) {
  a = P(a).node;
  if (!a) {
    throw new N(44);
  }
  if (!a.h.readlink) {
    throw new N(28);
  }
  return vc(Rc(a.parent), a.h.readlink(a));
}
function gd(a, b) {
  a = "string" === typeof a ? P(a, {V:!0}).node : a;
  if (!a.h.v) {
    throw new N(63);
  }
  a.h.v(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}
function hd(a, b, c, d) {
  if ("" === a) {
    throw new N(44);
  }
  if ("string" === typeof b) {
    var f = Vc[b];
    if ("undefined" === typeof f) {
      throw Error("Unknown file open mode: " + b);
    }
    b = f;
  }
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var g = a;
  } else {
    a = rc(a);
    try {
      g = P(a, {V:!(b & 131072)}).node;
    } catch (h) {
    }
  }
  f = !1;
  if (b & 64) {
    if (g) {
      if (b & 128) {
        throw new N(20);
      }
    } else {
      g = bd(a, c, 0), f = !0;
    }
  }
  if (!g) {
    throw new N(44);
  }
  8192 === (g.mode & 61440) && (b &= -513);
  if (b & 65536 && 16384 !== (g.mode & 61440)) {
    throw new N(54);
  }
  if (!f && (c = g ? 40960 === (g.mode & 61440) ? 32 : 16384 === (g.mode & 61440) && ("r" !== Wc(b) || b & 512) ? 31 : Tc(g, Wc(b)) : 44)) {
    throw new N(c);
  }
  if (b & 512) {
    c = g;
    c = "string" === typeof c ? P(c, {V:!0}).node : c;
    if (!c.h.v) {
      throw new N(63);
    }
    if (16384 === (c.mode & 61440)) {
      throw new N(31);
    }
    if (32768 !== (c.mode & 61440)) {
      throw new N(28);
    }
    if (f = Tc(c, "w")) {
      throw new N(f);
    }
    c.h.v(c, {size:0, timestamp:Date.now()});
  }
  b &= -131713;
  d = Zc({node:g, path:Rc(g), id:g.id, flags:b, mode:g.mode, seekable:!0, position:0, i:g.i, h:g.h, Jb:[], error:!1}, d);
  d.i.open && d.i.open(d);
  !e.logReadFiles || b & 1 || (jd || (jd = {}), a in jd || (jd[a] = 1));
  return d;
}
function kd(a) {
  if (null === a.fd) {
    throw new N(8);
  }
  a.ra && (a.ra = null);
  try {
    a.i.close && a.i.close(a);
  } catch (b) {
    throw b;
  } finally {
    Mc[a.fd] = null;
  }
  a.fd = null;
}
function ld(a, b, c) {
  if (null === a.fd) {
    throw new N(8);
  }
  if (!a.seekable || !a.i.M) {
    throw new N(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new N(28);
  }
  a.position = a.i.M(a, b, c);
  a.Jb = [];
}
function md(a, b, c, d, f, g) {
  if (0 > d || 0 > f) {
    throw new N(28);
  }
  if (null === a.fd) {
    throw new N(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new N(8);
  }
  if (16384 === (a.node.mode & 61440)) {
    throw new N(31);
  }
  if (!a.i.write) {
    throw new N(28);
  }
  a.seekable && a.flags & 1024 && ld(a, 0, 2);
  var h = "undefined" !== typeof f;
  if (!h) {
    f = a.position;
  } else if (!a.seekable) {
    throw new N(70);
  }
  b = a.i.write(a, b, c, d, f, g);
  h || (a.position += b);
  return b;
}
function nd() {
  N || (N = function(a, b) {
    this.node = b;
    this.yb = function(c) {
      this.H = c;
      for (var d in Jc) {
        if (Jc[d] === c) {
          this.code = d;
          break;
        }
      }
    };
    this.yb(a);
    this.message = Ic[a];
    this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = mc(this.stack));
  }, N.prototype = Error(), N.prototype.constructor = N, [44].forEach(function(a) {
    Ec[a] = new N(a);
    Ec[a].stack = "<generic error, no stack>";
  }));
}
var od;
function pd(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function qd(a, b) {
  a = "string" === typeof a ? a : Rc(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = rc(a + "/" + c);
      try {
        cd(d);
      } catch (f) {
      }
      a = d;
    }
  }
  return d;
}
function rd(a, b, c, d) {
  a = rc(("string" === typeof a ? a : Rc(a)) + "/" + b);
  c = pd(c, d);
  return bd(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0);
}
function sd(a, b, c, d, f, g) {
  a = b ? rc(("string" === typeof a ? a : Rc(a)) + "/" + b) : a;
  d = pd(d, f);
  f = bd(a, (void 0 !== d ? d : 438) & 4095 | 32768, 0);
  if (c) {
    if ("string" === typeof c) {
      a = Array(c.length);
      b = 0;
      for (var h = c.length; b < h; ++b) {
        a[b] = c.charCodeAt(b);
      }
      c = a;
    }
    gd(f, d | 146);
    a = hd(f, 577);
    md(a, c, 0, c.length, 0, g);
    kd(a);
    gd(f, d);
  }
  return f;
}
function td(a, b, c, d) {
  a = rc(("string" === typeof a ? a : Rc(a)) + "/" + b);
  b = pd(!!c, !!d);
  td.Ma || (td.Ma = 64);
  var f = td.Ma++ << 8 | 0;
  yc(f, {open:function(g) {
    g.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(g, h, n, q) {
    for (var u = 0, r = 0; r < q; r++) {
      try {
        var v = c();
      } catch (x) {
        throw new N(29);
      }
      if (void 0 === v && 0 === u) {
        throw new N(6);
      }
      if (null === v || void 0 === v) {
        break;
      }
      u++;
      h[n + r] = v;
    }
    u && (g.node.timestamp = Date.now());
    return u;
  }, write:function(g, h, n, q) {
    for (var u = 0; u < q; u++) {
      try {
        d(h[n + u]);
      } catch (r) {
        throw new N(29);
      }
    }
    q && (g.node.timestamp = Date.now());
    return u;
  }});
  return dd(a, b, f);
}
function ud(a) {
  if (!(a.pb || a.qb || a.link || a.g)) {
    if ("undefined" !== typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    if (la) {
      try {
        a.g = lb(la(a.url), !0), a.j = a.g.length;
      } catch (b) {
        throw new N(29);
      }
    } else {
      throw Error("Cannot load without read() or XMLHttpRequest.");
    }
  }
}
function vd(a, b, c, d, f) {
  function g() {
    this.sa = !1;
    this.o = [];
  }
  g.prototype.get = function(r) {
    if (!(r > this.length - 1 || 0 > r)) {
      var v = r % this.chunkSize;
      return this.Ia(r / this.chunkSize | 0)[v];
    }
  };
  g.prototype.W = function(r) {
    this.Ia = r;
  };
  g.prototype.za = function() {
    var r = new XMLHttpRequest();
    r.open("HEAD", c, !1);
    r.send(null);
    if (!(200 <= r.status && 300 > r.status || 304 === r.status)) {
      throw Error("Couldn't load " + c + ". Status: " + r.status);
    }
    var v = Number(r.getResponseHeader("Content-length")), x, p = (x = r.getResponseHeader("Accept-Ranges")) && "bytes" === x;
    r = (x = r.getResponseHeader("Content-Encoding")) && "gzip" === x;
    var w = 1048576;
    p || (w = v);
    var z = this;
    z.W(function(E) {
      var V = E * w, sa = (E + 1) * w - 1;
      sa = Math.min(sa, v - 1);
      if ("undefined" === typeof z.o[E]) {
        var Gc = z.o;
        if (V > sa) {
          throw Error("invalid range (" + V + ", " + sa + ") or no bytes requested!");
        }
        if (sa > v - 1) {
          throw Error("only " + v + " bytes available! programmer error!");
        }
        var Q = new XMLHttpRequest();
        Q.open("GET", c, !1);
        v !== w && Q.setRequestHeader("Range", "bytes=" + V + "-" + sa);
        "undefined" != typeof Uint8Array && (Q.responseType = "arraybuffer");
        Q.overrideMimeType && Q.overrideMimeType("text/plain; charset=x-user-defined");
        Q.send(null);
        if (!(200 <= Q.status && 300 > Q.status || 304 === Q.status)) {
          throw Error("Couldn't load " + c + ". Status: " + Q.status);
        }
        V = void 0 !== Q.response ? new Uint8Array(Q.response || []) : lb(Q.responseText || "", !0);
        Gc[E] = V;
      }
      if ("undefined" === typeof z.o[E]) {
        throw Error("doXHR failed!");
      }
      return z.o[E];
    });
    if (r || !v) {
      w = v = 1, w = v = this.Ia(0).length, l("LazyFiles on gzip forces download of the whole file when length is accessed");
    }
    this.Ya = v;
    this.Xa = w;
    this.sa = !0;
  };
  if ("undefined" !== typeof XMLHttpRequest) {
    if (!ha) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var h = new g();
    Object.defineProperties(h, {length:{get:function() {
      this.sa || this.za();
      return this.Ya;
    }}, chunkSize:{get:function() {
      this.sa || this.za();
      return this.Xa;
    }}});
    var n = void 0;
  } else {
    n = c, h = void 0;
  }
  var q = rd(a, b, d, f);
  h ? q.g = h : n && (q.g = null, q.url = n);
  Object.defineProperties(q, {j:{get:function() {
    return this.g.length;
  }}});
  var u = {};
  Object.keys(q.i).forEach(function(r) {
    var v = q.i[r];
    u[r] = function() {
      ud(q);
      return v.apply(null, arguments);
    };
  });
  u.read = function(r, v, x, p, w) {
    ud(q);
    r = r.node.g;
    if (w >= r.length) {
      return 0;
    }
    p = Math.min(r.length - w, p);
    assert(0 <= p);
    if (r.slice) {
      for (var z = 0; z < p; z++) {
        v[x + z] = r[w + z];
      }
    } else {
      for (z = 0; z < p; z++) {
        v[x + z] = r.get(w + z);
      }
    }
    return p;
  };
  q.i = u;
  return q;
}
function wd(a, b, c, d, f, g, h, n, q, u) {
  function r(p) {
    function w(E) {
      u && u();
      n || sd(a, b, E, d, f, q);
      g && g();
      gb(x);
    }
    var z = !1;
    e.preloadPlugins.forEach(function(E) {
      !z && E.canHandle(v) && (E.handle(p, v, w, function() {
        h && h();
        gb(x);
      }), z = !0);
    });
    z || w(p);
  }
  Ob();
  var v = b ? vc(rc(a + "/" + b)) : a, x = eb("cp " + v);
  fb(x);
  "string" == typeof c ? Hc(c, function(p) {
    r(p);
  }, h) : r(c);
}
var xd = {}, $c, jd, yd = void 0;
function zd() {
  assert(void 0 != yd);
  yd += 4;
  return y[yd - 4 >> 2];
}
function Ad(a) {
  a = Mc[a];
  if (!a) {
    throw new N(8);
  }
  return a;
}
var R = 12288, Bd = !1, Cd = 0, Dd = 0, Ed = 0, S = {alpha:!1, depth:!1, stencil:!1, antialias:!1}, Fd = {}, Gd;
function Hd(a) {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = function(c, d) {
    b.vertexAttribDivisorANGLE(c, d);
  }, a.drawArraysInstanced = function(c, d, f, g) {
    b.drawArraysInstancedANGLE(c, d, f, g);
  }, a.drawElementsInstanced = function(c, d, f, g, h) {
    b.drawElementsInstancedANGLE(c, d, f, g, h);
  });
}
function Id(a) {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = function() {
    return b.createVertexArrayOES();
  }, a.deleteVertexArray = function(c) {
    b.deleteVertexArrayOES(c);
  }, a.bindVertexArray = function(c) {
    b.bindVertexArrayOES(c);
  }, a.isVertexArray = function(c) {
    return b.isVertexArrayOES(c);
  });
}
function Jd(a) {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = function(c, d) {
    b.drawBuffersWEBGL(c, d);
  });
}
var Kd = 1, Ld = [], T = [], Md = [], Nd = [], Od = [], U = [], Pd = [], Xb = [], Qd = [], Rd = {}, Sd = 4;
function W(a) {
  Td || (Td = a);
}
function Ud(a) {
  for (var b = Kd++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}
function Vd(a, b, c) {
  for (var d = "", f = 0; f < a; ++f) {
    var g = c ? y[c + 4 * f >> 2] : -1;
    d += D(y[b + 4 * f >> 2], 0 > g ? void 0 : g);
  }
  return d;
}
function Wb(a, b) {
  a.Ga || (a.Ga = a.getContext, a.getContext = function(d, f) {
    f = a.Ga(d, f);
    return "webgl" == d == f instanceof WebGLRenderingContext ? f : null;
  });
  var c = a.getContext("webgl", b);
  return c ? Wd(c, b) : 0;
}
function Wd(a, b) {
  var c = Ud(Xb), d = {Sb:c, attributes:b, version:b.Na, J:a};
  a.canvas && (a.canvas.U = d);
  Xb[c] = d;
  ("undefined" === typeof b.fb || b.fb) && Xd(d);
  return c;
}
function Yb(a) {
  Yd = Xb[a];
  e.C = L = Yd && Yd.J;
}
function Xd(a) {
  a || (a = Yd);
  if (!a.nb) {
    a.nb = !0;
    var b = a.J;
    Hd(b);
    Id(b);
    Jd(b);
    b.D = b.getExtension("EXT_disjoint_timer_query");
    b.Wb = b.getExtension("WEBGL_multi_draw");
    (b.getSupportedExtensions() || []).forEach(function(c) {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}
var Vb = {}, Td, Yd, Zd = [], $d = 0;
function ae() {
  for (var a = be.length - 1; 0 <= a; --a) {
    ce(a);
  }
  be = [];
  de = [];
}
var de = [];
function ee(a, b, c) {
  function d(h, n) {
    if (h.length != n.length) {
      return !1;
    }
    for (var q in h) {
      if (h[q] != n[q]) {
        return !1;
      }
    }
    return !0;
  }
  for (var f in de) {
    var g = de[f];
    if (g.wa == a && d(g.ya, c)) {
      return;
    }
  }
  de.push({wa:a, Ta:b, ya:c});
  de.sort(function(h, n) {
    return h.Ta < n.Ta;
  });
}
function fe(a) {
  for (var b = 0; b < de.length; ++b) {
    de[b].wa == a && (de.splice(b, 1), --b);
  }
}
function ge() {
  if ($d && he.L) {
    for (var a = 0; a < de.length; ++a) {
      var b = de[a];
      de.splice(a, 1);
      --a;
      b.wa.apply(null, b.ya);
    }
  }
}
var be = [];
function ce(a) {
  var b = be[a];
  b.target.removeEventListener(b.m, b.gb, b.A);
  be.splice(a, 1);
}
function ie(a) {
  function b(d) {
    ++$d;
    he = a;
    ge();
    a.F(d);
    ge();
    --$d;
  }
  if (a.B) {
    a.gb = b, a.target.addEventListener(a.m, b, a.A), be.push(a), je || (Wa.push(ae), je = !0);
  } else {
    for (var c = 0; c < be.length; ++c) {
      be[c].target == a.target && be[c].m == a.m && ce(c--);
    }
  }
}
function ke(a) {
  return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : "";
}
function le() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
}
var me = {}, je, he, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze = {}, Ae = [0, "undefined" !== typeof document ? document : 0, "undefined" !== typeof window ? window : 0];
function X(a) {
  a = 2 < a ? D(a) : a;
  return Ae[a] || ("undefined" !== typeof document ? document.querySelector(a) : void 0);
}
function Be(a) {
  return jc(function() {
    var b = Ce(8), c = b + 4, d = Ce(a.id.length + 1);
    G(a.id, d, a.id.length + 1);
    if (d = X(d)) {
      y[b >> 2] = d.width, y[c >> 2] = d.height;
    }
    return [y[b >> 2], y[c >> 2]];
  });
}
function De(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a.width = b;
  a.height = c;
  return 0;
}
function Ee(a, b, c) {
  a.Nb ? jc(function() {
    var d = Ce(a.id.length + 1);
    G(a.id, d, a.id.length + 1);
    De(d, b, c);
  }) : (a.width = b, a.height = c);
}
function Fe(a) {
  function b() {
    document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), Ee(a, d, f), a.style.width = g, a.style.height = h, a.style.backgroundColor = n, q || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = q, a.style.paddingLeft = u, a.style.paddingRight = r, a.style.paddingTop = v, a.style.paddingBottom = x, a.style.marginLeft = 
    p, a.style.marginRight = w, a.style.marginTop = z, a.style.marginBottom = E, document.body.style.margin = V, document.documentElement.style.overflow = sa, document.body.scroll = Gc, a.style.Ja = Q, a.U && a.U.J.viewport(0, 0, d, f), ze.ea && M(ze.ea)(37, 0, ze.Aa));
  }
  var c = Be(a), d = c[0], f = c[1], g = a.style.width, h = a.style.height, n = a.style.backgroundColor, q = document.body.style.backgroundColor, u = a.style.paddingLeft, r = a.style.paddingRight, v = a.style.paddingTop, x = a.style.paddingBottom, p = a.style.marginLeft, w = a.style.marginRight, z = a.style.marginTop, E = a.style.marginBottom, V = document.body.style.margin, sa = document.documentElement.style.overflow, Gc = document.body.scroll, Q = a.style.Ja;
  document.addEventListener("fullscreenchange", b);
  document.addEventListener("webkitfullscreenchange", b);
}
function Ge(a, b, c) {
  a.style.paddingLeft = a.style.paddingRight = c + "px";
  a.style.paddingTop = a.style.paddingBottom = b + "px";
}
function He(a) {
  return 0 > Ae.indexOf(a) ? a.getBoundingClientRect() : {left:0, top:0};
}
function Ie(a, b) {
  if (0 != b.va || 0 != b.oa) {
    Fe(a);
    var c = b.Eb ? innerWidth : screen.width, d = b.Eb ? innerHeight : screen.height, f = He(a), g = f.width;
    f = f.height;
    var h = Be(a), n = h[0];
    h = h[1];
    3 == b.va ? (Ge(a, (d - f) / 2, (c - g) / 2), c = g, d = f) : 2 == b.va && (c * h < n * d ? (g = h * c / n, Ge(a, (d - g) / 2, 0), d = g) : (g = n * d / h, Ge(a, 0, (c - g) / 2), c = g));
    a.style.backgroundColor || (a.style.backgroundColor = "black");
    document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
    a.style.width = c + "px";
    a.style.height = d + "px";
    1 == b.hb && (a.style.Ja = "pixelated");
    g = 2 == b.oa ? devicePixelRatio : 1;
    0 != b.oa && (c = c * g | 0, d = d * g | 0, Ee(a, c, d), a.U && a.U.J.viewport(0, 0, c, d));
  }
  if (a.requestFullscreen) {
    a.requestFullscreen();
  } else if (a.webkitRequestFullscreen) {
    a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else {
    return le() ? -3 : -1;
  }
  ze = b;
  b.ea && M(b.ea)(37, 0, b.Aa);
  return 0;
}
function Je(a) {
  if (a.requestPointerLock) {
    a.requestPointerLock();
  } else if (a.ha) {
    a.ha();
  } else {
    return document.body.requestPointerLock || document.body.ha ? -3 : -1;
  }
  return 0;
}
function Ke(a, b) {
  C[a >> 3] = b.timestamp;
  for (var c = 0; c < b.axes.length; ++c) {
    C[a + 8 * c + 16 >> 3] = b.axes[c];
  }
  for (c = 0; c < b.buttons.length; ++c) {
    C[a + 8 * c + 528 >> 3] = "object" === typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
  }
  for (c = 0; c < b.buttons.length; ++c) {
    y[a + 4 * c + 1040 >> 2] = "object" === typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
  }
  y[a + 1296 >> 2] = b.connected;
  y[a + 1300 >> 2] = b.index;
  y[a + 8 >> 2] = b.axes.length;
  y[a + 12 >> 2] = b.buttons.length;
  G(b.id, a + 1304, 64);
  G(b.mapping, a + 1368, 64);
}
function Le(a, b, c) {
  (a | 0) === a && (a = D(a));
  a = vc(a);
  if (a = e.preloadedImages[a]) {
    var d = a.getContext("2d").getImageData(0, 0, a.width, a.height), f = H(a.width * a.height * 4);
    F.set(d.data, f);
    y[b >> 2] = a.width;
    y[c >> 2] = a.height;
    return f;
  }
  return 0;
}
var Me = [];
function Ne(a, b, c, d) {
  for (var f = 0; f < a; f++) {
    var g = L[c](), h = g && Ud(d);
    g ? (g.name = h, d[h] = g) : W(1282);
    y[b + 4 * f >> 2] = h;
  }
}
function Oe(a, b, c, d, f, g, h, n) {
  b = T[b];
  if (a = L[a](b, c)) {
    d = n && G(a.name, n, d), f && (y[f >> 2] = d), g && (y[g >> 2] = a.size), h && (y[h >> 2] = a.type);
  }
}
function Pe(a, b) {
  I[a >> 2] = b;
  I[a + 4 >> 2] = (b - I[a >> 2]) / 4294967296;
  var c = 0 <= b ? I[a >> 2] + 4294967296 * I[a + 4 >> 2] : I[a >> 2] + 4294967296 * y[a + 4 >> 2];
  c != b && va("writeI53ToI64() out of range: serialized JS Number " + b + " to Wasm heap as bytes lo=0x" + I[a >> 2].toString(16) + ", hi=0x" + I[a + 4 >> 2].toString(16) + ", which deserializes back to " + c + " instead!");
}
function Qe(a, b, c) {
  if (b) {
    var d = void 0;
    switch(a) {
      case 36346:
        d = 1;
        break;
      case 36344:
        0 != c && 1 != c && W(1280);
        return;
      case 36345:
        d = 0;
        break;
      case 34466:
        var f = L.getParameter(34467);
        d = f ? f.length : 0;
    }
    if (void 0 === d) {
      switch(f = L.getParameter(a), typeof f) {
        case "number":
          d = f;
          break;
        case "boolean":
          d = f ? 1 : 0;
          break;
        case "string":
          W(1280);
          return;
        case "object":
          if (null === f) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 34068:
                d = 0;
                break;
              default:
                W(1280);
                return;
            }
          } else {
            if (f instanceof Float32Array || f instanceof Uint32Array || f instanceof Int32Array || f instanceof Array) {
              for (a = 0; a < f.length; ++a) {
                switch(c) {
                  case 0:
                    y[b + 4 * a >> 2] = f[a];
                    break;
                  case 2:
                    B[b + 4 * a >> 2] = f[a];
                    break;
                  case 4:
                    t[b + a >> 0] = f[a] ? 1 : 0;
                }
              }
              return;
            }
            try {
              d = f.name | 0;
            } catch (g) {
              W(1280);
              k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + g + ")");
              return;
            }
          }
          break;
        default:
          W(1280);
          k("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + f + " of type " + typeof f + "!");
          return;
      }
    }
    switch(c) {
      case 1:
        Pe(b, d);
        break;
      case 0:
        y[b >> 2] = d;
        break;
      case 2:
        B[b >> 2] = d;
        break;
      case 4:
        t[b >> 0] = d ? 1 : 0;
    }
  } else {
    W(1281);
  }
}
function Re(a) {
  var b = Ha(a) + 1, c = H(b);
  G(a, c, b);
  return c;
}
function Se(a) {
  return "]" == a.slice(-1) && a.lastIndexOf("[");
}
function Te(a) {
  var b = a.N, c = a.na, d;
  if (!b) {
    for (a.N = b = {}, a.Wa = {}, d = 0; d < L.getProgramParameter(a, 35718); ++d) {
      var f = L.getActiveUniform(a, d);
      var g = f.name;
      f = f.size;
      var h = Se(g);
      h = 0 < h ? g.slice(0, h) : g;
      var n = a.ma;
      a.ma += f;
      c[h] = [f, n];
      for (g = 0; g < f; ++g) {
        b[n] = g, a.Wa[n++] = h;
      }
    }
  }
}
function Y(a) {
  var b = L.Da;
  if (b) {
    var c = b.N[a];
    "number" === typeof c && (b.N[a] = c = L.getUniformLocation(b, b.Wa[a] + (0 < c ? "[" + c + "]" : "")));
    return c;
  }
  W(1282);
}
function Ue(a, b, c, d) {
  if (c) {
    if (a = T[a], Te(a), a = L.getUniform(a, Y(b)), "number" == typeof a || "boolean" == typeof a) {
      switch(d) {
        case 0:
          y[c >> 2] = a;
          break;
        case 2:
          B[c >> 2] = a;
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(d) {
          case 0:
            y[c + 4 * b >> 2] = a[b];
            break;
          case 2:
            B[c + 4 * b >> 2] = a[b];
        }
      }
    }
  } else {
    W(1281);
  }
}
function Ve(a, b, c, d) {
  if (c) {
    if (a = L.getVertexAttrib(a, b), 34975 == b) {
      y[c >> 2] = a && a.name;
    } else if ("number" == typeof a || "boolean" == typeof a) {
      switch(d) {
        case 0:
          y[c >> 2] = a;
          break;
        case 2:
          B[c >> 2] = a;
          break;
        case 5:
          y[c >> 2] = Math.fround(a);
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(d) {
          case 0:
            y[c + 4 * b >> 2] = a[b];
            break;
          case 2:
            B[c + 4 * b >> 2] = a[b];
            break;
          case 5:
            y[c + 4 * b >> 2] = Math.fround(a[b]);
        }
      }
    }
  } else {
    W(1281);
  }
}
function We(a, b, c, d, f) {
  a -= 5120;
  a = 1 == a ? F : 4 == a ? y : 6 == a ? B : 5 == a || 28922 == a ? I : La;
  var g = 31 - Math.clz32(a.BYTES_PER_ELEMENT), h = Sd;
  return a.subarray(f >> g, f + d * (c * ({5:3, 6:4, 8:2, 29502:3, 29504:4,}[b - 6402] || 1) * (1 << g) + h - 1 & -h) >> g);
}
var Xe = [], Ye = [];
function Ze(a, b) {
  if (!le()) {
    return -1;
  }
  a = X(a);
  return a ? a.requestFullscreen || a.webkitRequestFullscreen ? $d && he.L ? Ie(a, b) : b.eb ? (ee(Ie, 1, [a, b]), 1) : -2 : -3 : -4;
}
function $e(a, b) {
  var c = {target:X(2), m:"beforeunload", B:b, F:function(d) {
    d = d || event;
    var f = M(b)(28, 0, a);
    f && (f = D(f));
    if (f) {
      return d.preventDefault(), d.returnValue = f;
    }
  }, A:!0};
  ie(c);
}
function af(a, b, c, d, f, g) {
  oe || (oe = H(256));
  a = {target:X(a), m:g, B:d, F:function(h) {
    h = h || event;
    var n = h.target.id ? h.target.id : "", q = oe;
    G(ke(h.target), q + 0, 128);
    G(n, q + 128, 128);
    M(d)(f, q, b) && h.preventDefault();
  }, A:c};
  ie(a);
}
function bf(a, b, c, d, f) {
  qe || (qe = H(280));
  ie({target:a, m:f, B:d, F:function(g) {
    g = g || event;
    var h = qe, n = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, q = !!n;
    y[h >> 2] = q;
    y[h + 4 >> 2] = le();
    var u = q ? n : pe, r = u && u.id ? u.id : "";
    G(ke(u), h + 8, 128);
    G(r, h + 136, 128);
    y[h + 264 >> 2] = u ? u.clientWidth : 0;
    y[h + 268 >> 2] = u ? u.clientHeight : 0;
    y[h + 272 >> 2] = screen.width;
    y[h + 276 >> 2] = screen.height;
    q && (pe = n);
    M(d)(19, h, b) && g.preventDefault();
  }, A:c});
}
function cf(a, b, c, d, f) {
  re || (re = H(1432));
  b = {target:X(2), L:!0, m:f, B:c, F:function(g) {
    g = g || event;
    var h = re;
    Ke(h, g.gamepad);
    M(c)(d, h, a) && g.preventDefault();
  }, A:b};
  ie(b);
}
function df(a, b, c, d, f, g) {
  se || (se = H(176));
  a = {target:X(a), L:!0, m:g, B:d, F:function(h) {
    assert(h);
    var n = se;
    C[n >> 3] = h.timeStamp;
    var q = n >> 2;
    y[q + 2] = h.location;
    y[q + 3] = h.ctrlKey;
    y[q + 4] = h.shiftKey;
    y[q + 5] = h.altKey;
    y[q + 6] = h.metaKey;
    y[q + 7] = h.repeat;
    y[q + 8] = h.charCode;
    y[q + 9] = h.keyCode;
    y[q + 10] = h.which;
    G(h.key || "", n + 44, 32);
    G(h.code || "", n + 76, 32);
    G(h.char || "", n + 108, 32);
    G(h.locale || "", n + 140, 32);
    M(d)(f, n, b) && h.preventDefault();
  }, A:c};
  ie(a);
}
function ef(a, b, c) {
  assert(0 == a % 4);
  C[a >> 3] = b.timeStamp;
  a >>= 2;
  y[a + 2] = b.screenX;
  y[a + 3] = b.screenY;
  y[a + 4] = b.clientX;
  y[a + 5] = b.clientY;
  y[a + 6] = b.ctrlKey;
  y[a + 7] = b.shiftKey;
  y[a + 8] = b.altKey;
  y[a + 9] = b.metaKey;
  za[2 * a + 20] = b.button;
  za[2 * a + 21] = b.buttons;
  y[a + 11] = b.movementX;
  y[a + 12] = b.movementY;
  c = He(c);
  y[a + 13] = b.clientX - c.left;
  y[a + 14] = b.clientY - c.top;
}
function ff(a, b, c, d, f, g) {
  te || (te = H(72));
  a = X(a);
  ie({target:a, L:"mousemove" != g && "mouseenter" != g && "mouseleave" != g, m:g, B:d, F:function(h) {
    h = h || event;
    ef(te, h, a);
    M(d)(f, te, b) && h.preventDefault();
  }, A:c});
}
function gf(a, b, c, d, f) {
  ue || (ue = H(260));
  ie({target:a, m:f, B:d, F:function(g) {
    g = g || event;
    var h = ue, n = document.pointerLockElement || document.W || document.Tb || document.La;
    y[h >> 2] = !!n;
    var q = n && n.id ? n.id : "";
    G(ke(n), h + 4, 128);
    G(q, h + 132, 128);
    M(d)(20, h, b) && g.preventDefault();
  }, A:c});
}
function hf(a, b, c, d) {
  ve || (ve = H(36));
  a = X(a);
  ie({target:a, m:"resize", B:d, F:function(f) {
    f = f || event;
    if (f.target == a) {
      var g = document.body;
      if (g) {
        var h = ve;
        y[h >> 2] = f.detail;
        y[h + 4 >> 2] = g.clientWidth;
        y[h + 8 >> 2] = g.clientHeight;
        y[h + 12 >> 2] = innerWidth;
        y[h + 16 >> 2] = innerHeight;
        y[h + 20 >> 2] = outerWidth;
        y[h + 24 >> 2] = outerHeight;
        y[h + 28 >> 2] = pageXOffset;
        y[h + 32 >> 2] = pageYOffset;
        M(d)(10, h, b) && f.preventDefault();
      }
    }
  }, A:c});
}
function jf(a, b, c, d, f, g) {
  we || (we = H(1696));
  a = X(a);
  ie({target:a, L:"touchstart" == g || "touchend" == g, m:g, B:d, F:function(h) {
    assert(h);
    for (var n, q = {}, u = h.touches, r = 0; r < u.length; ++r) {
      n = u[r], n.Ka = n.Sa = 0, q[n.identifier] = n;
    }
    for (r = 0; r < h.changedTouches.length; ++r) {
      n = h.changedTouches[r], n.Ka = 1, q[n.identifier] = n;
    }
    for (r = 0; r < h.targetTouches.length; ++r) {
      q[h.targetTouches[r].identifier].Sa = 1;
    }
    u = we;
    C[u >> 3] = h.timeStamp;
    var v = u >> 2;
    y[v + 3] = h.ctrlKey;
    y[v + 4] = h.shiftKey;
    y[v + 5] = h.altKey;
    y[v + 6] = h.metaKey;
    v += 7;
    var x = He(a), p = 0;
    for (r in q) {
      if (n = q[r], y[v] = n.identifier, y[v + 1] = n.screenX, y[v + 2] = n.screenY, y[v + 3] = n.clientX, y[v + 4] = n.clientY, y[v + 5] = n.pageX, y[v + 6] = n.pageY, y[v + 7] = n.Ka, y[v + 8] = n.Sa, y[v + 9] = n.clientX - x.left, y[v + 10] = n.clientY - x.top, v += 13, 31 < ++p) {
        break;
      }
    }
    y[u + 8 >> 2] = p;
    M(d)(f, u, b) && h.preventDefault();
  }, A:c});
}
function kf(a, b, c) {
  var d = Ae[1];
  xe || (xe = H(8));
  ie({target:d, m:"visibilitychange", B:c, F:function(f) {
    f = f || event;
    var g = xe, h = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
    y[g >> 2] = document.hidden;
    y[g + 4 >> 2] = h;
    M(c)(21, g, a) && f.preventDefault();
  }, A:b});
}
function lf(a, b, c, d) {
  ye || (ye = H(104));
  ie({target:a, L:!0, m:"wheel", B:d, F:function(f) {
    f = f || event;
    var g = ye;
    ef(g, f, a);
    C[g + 72 >> 3] = f.deltaX;
    C[g + 80 >> 3] = f.deltaY;
    C[g + 88 >> 3] = f.deltaZ;
    y[g + 96 >> 2] = f.deltaMode;
    M(d)(9, g, b) && f.preventDefault();
  }, A:c});
}
var mf = {};
function nf() {
  if (!of) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:da || "./this.program"}, b;
    for (b in mf) {
      void 0 === mf[b] ? delete a[b] : a[b] = mf[b];
    }
    var c = [];
    for (b in a) {
      c.push(b + "=" + a[b]);
    }
    of = c;
  }
  return of;
}
var of;
function pf(a, b) {
  pf.Va || (pf.Va = uc());
  for (var c = 0; c < b; c++) {
    t[a + c >> 0] = pf.Va();
  }
  return 0;
}
function qf(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function rf(a, b) {
  for (var c = 0, d = 0; d <= b; c += a[d++]) {
  }
  return c;
}
var sf = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function uf(a, b) {
  for (a = new Date(a.getTime()); 0 < b;) {
    var c = a.getMonth(), d = (qf(a.getFullYear()) ? sf : tf)[c];
    if (b > d - a.getDate()) {
      b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
function vf(a, b, c, d) {
  function f(p, w, z) {
    for (p = "number" === typeof p ? p.toString() : p || ""; p.length < w;) {
      p = z[0] + p;
    }
    return p;
  }
  function g(p, w) {
    return f(p, w, "0");
  }
  function h(p, w) {
    function z(V) {
      return 0 > V ? -1 : 0 < V ? 1 : 0;
    }
    var E;
    0 === (E = z(p.getFullYear() - w.getFullYear())) && 0 === (E = z(p.getMonth() - w.getMonth())) && (E = z(p.getDate() - w.getDate()));
    return E;
  }
  function n(p) {
    switch(p.getDay()) {
      case 0:
        return new Date(p.getFullYear() - 1, 11, 29);
      case 1:
        return p;
      case 2:
        return new Date(p.getFullYear(), 0, 3);
      case 3:
        return new Date(p.getFullYear(), 0, 2);
      case 4:
        return new Date(p.getFullYear(), 0, 1);
      case 5:
        return new Date(p.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(p.getFullYear() - 1, 11, 30);
    }
  }
  function q(p) {
    p = uf(new Date(p.u + 1900, 0, 1), p.la);
    var w = new Date(p.getFullYear() + 1, 0, 4), z = n(new Date(p.getFullYear(), 0, 4));
    w = n(w);
    return 0 >= h(z, p) ? 0 >= h(w, p) ? p.getFullYear() + 1 : p.getFullYear() : p.getFullYear() - 1;
  }
  var u = y[d + 40 >> 2];
  d = {Hb:y[d >> 2], Gb:y[d + 4 >> 2], ja:y[d + 8 >> 2], ba:y[d + 12 >> 2], T:y[d + 16 >> 2], u:y[d + 20 >> 2], ka:y[d + 24 >> 2], la:y[d + 28 >> 2], Zb:y[d + 32 >> 2], Fb:y[d + 36 >> 2], Ib:u ? D(u) : ""};
  c = D(c);
  u = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y",};
  for (var r in u) {
    c = c.replace(new RegExp(r, "g"), u[r]);
  }
  var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
  u = {"%a":function(p) {
    return v[p.ka].substring(0, 3);
  }, "%A":function(p) {
    return v[p.ka];
  }, "%b":function(p) {
    return x[p.T].substring(0, 3);
  }, "%B":function(p) {
    return x[p.T];
  }, "%C":function(p) {
    return g((p.u + 1900) / 100 | 0, 2);
  }, "%d":function(p) {
    return g(p.ba, 2);
  }, "%e":function(p) {
    return f(p.ba, 2, " ");
  }, "%g":function(p) {
    return q(p).toString().substring(2);
  }, "%G":function(p) {
    return q(p);
  }, "%H":function(p) {
    return g(p.ja, 2);
  }, "%I":function(p) {
    p = p.ja;
    0 == p ? p = 12 : 12 < p && (p -= 12);
    return g(p, 2);
  }, "%j":function(p) {
    return g(p.ba + rf(qf(p.u + 1900) ? sf : tf, p.T - 1), 3);
  }, "%m":function(p) {
    return g(p.T + 1, 2);
  }, "%M":function(p) {
    return g(p.Gb, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(p) {
    return 0 <= p.ja && 12 > p.ja ? "AM" : "PM";
  }, "%S":function(p) {
    return g(p.Hb, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(p) {
    return p.ka || 7;
  }, "%U":function(p) {
    var w = new Date(p.u + 1900, 0, 1), z = 0 === w.getDay() ? w : uf(w, 7 - w.getDay());
    p = new Date(p.u + 1900, p.T, p.ba);
    return 0 > h(z, p) ? g(Math.ceil((31 - z.getDate() + (rf(qf(p.getFullYear()) ? sf : tf, p.getMonth() - 1) - 31) + p.getDate()) / 7), 2) : 0 === h(z, w) ? "01" : "00";
  }, "%V":function(p) {
    var w = new Date(p.u + 1901, 0, 4), z = n(new Date(p.u + 1900, 0, 4));
    w = n(w);
    var E = uf(new Date(p.u + 1900, 0, 1), p.la);
    return 0 > h(E, z) ? "53" : 0 >= h(w, E) ? "01" : g(Math.ceil((z.getFullYear() < p.u + 1900 ? p.la + 32 - z.getDate() : p.la + 1 - z.getDate()) / 7), 2);
  }, "%w":function(p) {
    return p.ka;
  }, "%W":function(p) {
    var w = new Date(p.u, 0, 1), z = 1 === w.getDay() ? w : uf(w, 0 === w.getDay() ? 1 : 7 - w.getDay() + 1);
    p = new Date(p.u + 1900, p.T, p.ba);
    return 0 > h(z, p) ? g(Math.ceil((31 - z.getDate() + (rf(qf(p.getFullYear()) ? sf : tf, p.getMonth() - 1) - 31) + p.getDate()) / 7), 2) : 0 === h(z, w) ? "01" : "00";
  }, "%y":function(p) {
    return (p.u + 1900).toString().substring(2);
  }, "%Y":function(p) {
    return p.u + 1900;
  }, "%z":function(p) {
    p = p.Fb;
    var w = 0 <= p;
    p = Math.abs(p) / 60;
    return (w ? "+" : "-") + String("0000" + (p / 60 * 100 + p % 60)).slice(-4);
  }, "%Z":function(p) {
    return p.Ib;
  }, "%%":function() {
    return "%";
  }};
  for (r in u) {
    c.includes(r) && (c = c.replace(new RegExp(r, "g"), u[r](d)));
  }
  r = lb(c, !1);
  if (r.length > b) {
    return 0;
  }
  Ja(r, a);
  return r.length - 1;
}
e.requestFullscreen = function(a, b) {
  bc(a, b);
};
e.requestFullScreen = function() {
  m("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
};
e.requestAnimationFrame = function(a) {
  zb(a);
};
e.setCanvasSize = function(a, b, c) {
  dc(e.canvas, a, b);
  c || ec();
};
e.pauseMainLoop = function() {
  ub = null;
  Cb++;
};
e.resumeMainLoop = function() {
  Cb++;
  var a = qb, b = rb, c = sb;
  sb = null;
  Bb(c, 0, !1, Eb, !0);
  pb(a, b);
  ub();
};
e.getUserMedia = function() {
  window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(void 0);
};
e.createContext = function(a, b, c, d) {
  return Ub(a, b, c, d);
};
function Uc(a, b, c, d) {
  a || (a = this);
  this.parent = a;
  this.I = a.I;
  this.$ = null;
  this.id = Nc++;
  this.name = b;
  this.mode = c;
  this.h = {};
  this.i = {};
  this.rdev = d;
}
Object.defineProperties(Uc.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}, qb:{get:function() {
  return 16384 === (this.mode & 61440);
}}, pb:{get:function() {
  return 8192 === (this.mode & 61440);
}}});
nd();
Oc = Array(4096);
ad(O, "/");
cd("/tmp");
cd("/home");
cd("/home/web_user");
(function() {
  cd("/dev");
  yc(259, {read:function() {
    return 0;
  }, write:function(b, c, d, f) {
    return f;
  }});
  dd("/dev/null", 259);
  xc(1280, Ac);
  xc(1536, Bc);
  dd("/dev/tty", 1280);
  dd("/dev/tty1", 1536);
  var a = uc();
  td("/dev", "random", a);
  td("/dev", "urandom", a);
  cd("/dev/shm");
  cd("/dev/shm/tmp");
})();
(function() {
  cd("/proc");
  var a = cd("/proc/self");
  cd("/proc/self/fd");
  ad({I:function() {
    var b = Dc(a, "fd", 16895, 73);
    b.h = {lookup:function(c, d) {
      var f = Mc[+d];
      if (!f) {
        throw new N(8);
      }
      c = {parent:null, I:{Pa:"fake"}, h:{readlink:function() {
        return f.path;
      }}};
      return c.parent = c;
    }};
    return b;
  }}, "/proc/self/fd");
})();
e.FS_createPath = qd;
e.FS_createDataFile = sd;
e.FS_createPreloadedFile = wd;
e.FS_createLazyFile = vd;
e.FS_createDevice = td;
e.FS_unlink = fd;
Jc = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, EDEADLK:16, 
ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, ENOBUFS:42, 
EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, EOWNERDEAD:62, 
ESTRPIPE:135,};
for (var L, Z = 0; 32 > Z; ++Z) {
  Me.push(Array(Z));
}
var wf = new Float32Array(288);
for (Z = 0; 288 > Z; ++Z) {
  Xe[Z] = wf.subarray(0, Z + 1);
}
var xf = new Int32Array(288);
for (Z = 0; 288 > Z; ++Z) {
  Ye[Z] = xf.subarray(0, Z + 1);
}
function lb(a, b) {
  var c = Array(Ha(a) + 1);
  a = Ga(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var zf = {__assert_fail:function(a, b, c, d) {
  m("Assertion failed: " + D(a) + ", at: " + [b ? D(b) : "unknown filename", c, d ? D(d) : "unknown function"]);
}, __cxa_allocate_exception:function(a) {
  return H(a + 16) + 16;
}, __cxa_throw:function(a, b, c) {
  (new oc(a)).mb(b, c);
  pc++;
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s NO_DISABLE_EXCEPTION_CATCHING or -s EXCEPTION_CATCHING_ALLOWED=[..] to catch.";
}, __syscall_fcntl64:function(a, b, c) {
  yd = c;
  try {
    var d = Ad(a);
    switch(b) {
      case 0:
        var f = zd();
        return 0 > f ? -28 : hd(d.path, d.flags, 0, f).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return f = zd(), d.flags |= f, 0;
      case 5:
        return f = zd(), za[f + 0 >> 1] = 2, 0;
      case 6:
      case 7:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return y[yf() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (g) {
    if ("undefined" === typeof xd || !(g instanceof N)) {
      throw g;
    }
    return -g.H;
  }
}, __syscall_ioctl:function(a, b, c) {
  yd = c;
  try {
    var d = Ad(a);
    switch(b) {
      case 21509:
      case 21505:
        return d.tty ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return d.tty ? 0 : -59;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        var f = zd();
        return y[f >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        a = f = zd();
        if (!d.i.ob) {
          throw new N(59);
        }
        return d.i.ob(d, b, a);
      case 21523:
        return d.tty ? 0 : -59;
      case 21524:
        return d.tty ? 0 : -59;
      default:
        m("bad ioctl syscall " + b);
    }
  } catch (g) {
    if ("undefined" === typeof xd || !(g instanceof N)) {
      throw g;
    }
    return -g.H;
  }
}, __syscall_open:function(a, b, c) {
  yd = c;
  try {
    var d = D(a), f = c ? zd() : 0;
    return hd(d, b, f).fd;
  } catch (g) {
    if ("undefined" === typeof xd || !(g instanceof N)) {
      throw g;
    }
    return -g.H;
  }
}, abort:function() {
  m("native code called abort()");
}, clock_gettime:function(a, b) {
  if (0 === a) {
    a = Date.now();
  } else if (1 === a || 4 === a) {
    a = wb();
  } else {
    return y[yf() >> 2] = 28, -1;
  }
  y[b >> 2] = a / 1000 | 0;
  y[b + 4 >> 2] = a % 1000 * 1E6 | 0;
  return 0;
}, eglBindAPI:function(a) {
  if (12448 == a) {
    return R = 12288, 1;
  }
  R = 12300;
  return 0;
}, eglChooseConfig:function(a, b, c, d, f) {
  if (62000 != a) {
    R = 12296, c = 0;
  } else {
    if (b) {
      for (;;) {
        a = y[b >> 2];
        if (12321 == a) {
          S.alpha = 0 < y[b + 4 >> 2];
        } else if (12325 == a) {
          S.depth = 0 < y[b + 4 >> 2];
        } else if (12326 == a) {
          S.stencil = 0 < y[b + 4 >> 2];
        } else if (12337 == a) {
          a = y[b + 4 >> 2], S.antialias = 0 < a;
        } else if (12338 == a) {
          a = y[b + 4 >> 2], S.antialias = 1 == a;
        } else if (12544 == a) {
          S.Ub = 12547 != y[b + 4 >> 2];
        } else if (12344 == a) {
          break;
        }
        b += 8;
      }
    }
    c && d || f ? (f && (y[f >> 2] = 1), c && 0 < d && (y[c >> 2] = 62002), R = 12288, c = 1) : (R = 12300, c = 0);
  }
  return c;
}, eglCreateContext:function(a, b, c, d) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  for (a = 1;;) {
    b = y[d >> 2];
    if (12440 == b) {
      a = y[d + 4 >> 2];
    } else if (12344 == b) {
      break;
    } else {
      return R = 12292, 0;
    }
    d += 8;
  }
  if (2 != a) {
    return R = 12293, 0;
  }
  S.Na = a - 1;
  S.Vb = 0;
  Gd = Wb(e.canvas, S);
  if (0 != Gd) {
    return R = 12288, Yb(Gd), e.Kb = !0, Nb.forEach(function(f) {
      f();
    }), Yb(null), 62004;
  }
  R = 12297;
  return 0;
}, eglCreateWindowSurface:function(a, b) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  if (62002 != b) {
    return R = 12293, 0;
  }
  R = 12288;
  return 62006;
}, eglDestroyContext:function(a, b) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  if (62004 != b) {
    return R = 12294, 0;
  }
  a = Gd;
  Yd === Xb[a] && (Yd = null);
  if ("object" === typeof me) {
    for (var c = Xb[a].J.canvas, d = 0; d < be.length; ++d) {
      be[d].target != c || ce(d--);
    }
  }
  Xb[a] && Xb[a].J.canvas && (Xb[a].J.canvas.U = void 0);
  Xb[a] = null;
  R = 12288;
  Cd == b && (Cd = 0);
  return 1;
}, eglDestroySurface:function(a, b) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  if (62006 != b) {
    return R = 12301, 1;
  }
  Dd == b && (Dd = 0);
  Ed == b && (Ed = 0);
  R = 12288;
  return 1;
}, eglGetConfigAttrib:function(a, b, c, d) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  if (62002 != b) {
    return R = 12293, 0;
  }
  if (!d) {
    return R = 12300, 0;
  }
  R = 12288;
  switch(c) {
    case 12320:
      return y[d >> 2] = S.alpha ? 32 : 24, 1;
    case 12321:
      return y[d >> 2] = S.alpha ? 8 : 0, 1;
    case 12322:
      return y[d >> 2] = 8, 1;
    case 12323:
      return y[d >> 2] = 8, 1;
    case 12324:
      return y[d >> 2] = 8, 1;
    case 12325:
      return y[d >> 2] = S.depth ? 24 : 0, 1;
    case 12326:
      return y[d >> 2] = S.stencil ? 8 : 0, 1;
    case 12327:
      return y[d >> 2] = 12344, 1;
    case 12328:
      return y[d >> 2] = 62002, 1;
    case 12329:
      return y[d >> 2] = 0, 1;
    case 12330:
      return y[d >> 2] = 4096, 1;
    case 12331:
      return y[d >> 2] = 16777216, 1;
    case 12332:
      return y[d >> 2] = 4096, 1;
    case 12333:
      return y[d >> 2] = 0, 1;
    case 12334:
      return y[d >> 2] = 0, 1;
    case 12335:
      return y[d >> 2] = 12344, 1;
    case 12337:
      return y[d >> 2] = S.antialias ? 4 : 0, 1;
    case 12338:
      return y[d >> 2] = S.antialias ? 1 : 0, 1;
    case 12339:
      return y[d >> 2] = 4, 1;
    case 12340:
      return y[d >> 2] = 12344, 1;
    case 12341:
    case 12342:
    case 12343:
      return y[d >> 2] = -1, 1;
    case 12345:
    case 12346:
      return y[d >> 2] = 0, 1;
    case 12347:
      return y[d >> 2] = 0, 1;
    case 12348:
      return y[d >> 2] = 1;
    case 12349:
    case 12350:
      return y[d >> 2] = 0, 1;
    case 12351:
      return y[d >> 2] = 12430, 1;
    case 12352:
      return y[d >> 2] = 4, 1;
    case 12354:
      return y[d >> 2] = 0, 1;
    default:
      return R = 12292, 0;
  }
}, eglGetDisplay:function() {
  R = 12288;
  return 62000;
}, eglGetError:function() {
  return R;
}, eglInitialize:function(a, b, c) {
  if (62000 == a) {
    return b && (y[b >> 2] = 1), c && (y[c >> 2] = 4), Bd = !0, R = 12288, 1;
  }
  R = 12296;
  return 0;
}, eglMakeCurrent:function(a, b, c, d) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  if (0 != d && 62004 != d) {
    return R = 12294, 0;
  }
  if (0 != c && 62006 != c || 0 != b && 62006 != b) {
    return R = 12301, 0;
  }
  Yb(d ? Gd : null);
  Cd = d;
  Ed = b;
  Dd = c;
  R = 12288;
  return 1;
}, eglQueryString:function(a, b) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  R = 12288;
  if (Fd[b]) {
    return Fd[b];
  }
  switch(b) {
    case 12371:
      a = Ia("Emscripten");
      break;
    case 12372:
      a = Ia("1.4 Emscripten EGL");
      break;
    case 12373:
      a = Ia("");
      break;
    case 12429:
      a = Ia("OpenGL_ES");
      break;
    default:
      return R = 12300, 0;
  }
  return Fd[b] = a;
}, eglSwapBuffers:function() {
  if (Bd) {
    if (e.C) {
      if (e.C.isContextLost()) {
        R = 12302;
      } else {
        return R = 12288, 1;
      }
    } else {
      R = 12290;
    }
  } else {
    R = 12289;
  }
  return 0;
}, eglSwapInterval:function(a, b) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  0 == b ? pb(0, 0) : pb(1, b);
  R = 12288;
  return 1;
}, eglTerminate:function(a) {
  if (62000 != a) {
    return R = 12296, 0;
  }
  Ed = Dd = Cd = 0;
  Bd = !1;
  R = 12288;
  return 1;
}, eglWaitGL:function() {
  R = 12288;
  return 1;
}, eglWaitNative:function() {
  R = 12288;
  return 1;
}, emscripten_asm_const_int:function(a, b, c) {
  assert(Array.isArray(Zd));
  assert(0 == c % 16);
  Zd.length = 0;
  var d;
  for (c >>= 2; d = F[b++];) {
    assert(100 === d || 102 === d || 105 === d), (d = 105 > d) && c & 1 && c++, Zd.push(d ? C[c++ >> 1] : y[c]), ++c;
  }
  ob.hasOwnProperty(a) || m("No EM_ASM constant found at address " + a);
  return ob[a].apply(null, Zd);
}, emscripten_exit_fullscreen:function() {
  if (!le()) {
    return -1;
  }
  fe(Ie);
  var a = Ae[1];
  if (a.exitFullscreen) {
    a.fullscreenElement && a.exitFullscreen();
  } else if (a.webkitExitFullscreen) {
    a.webkitFullscreenElement && a.webkitExitFullscreen();
  } else {
    return -1;
  }
  return 0;
}, emscripten_exit_pointerlock:function() {
  fe(Je);
  if (document.exitPointerLock) {
    document.exitPointerLock();
  } else if (document.o) {
    document.o();
  } else {
    return -1;
  }
  return 0;
}, emscripten_get_device_pixel_ratio:function() {
  return "number" === typeof devicePixelRatio && devicePixelRatio || 1.0;
}, emscripten_get_element_css_size:function(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a = He(a);
  C[b >> 3] = a.width;
  C[c >> 3] = a.height;
  return 0;
}, emscripten_get_gamepad_status:function(a, b) {
  if (!ne) {
    throw "emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
  }
  if (0 > a || a >= ne.length) {
    return -5;
  }
  if (!ne[a]) {
    return -7;
  }
  Ke(b, ne[a]);
  return 0;
}, emscripten_get_now:wb, emscripten_get_num_gamepads:function() {
  if (!ne) {
    throw "emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
  }
  return ne.length;
}, emscripten_get_preloaded_image_data:Le, emscripten_get_preloaded_image_data_from_FILE:function(a, b, c) {
  a = e._fileno(a);
  return (a = Mc[a]) ? Le(a.path, b, c) : 0;
}, emscripten_get_screen_size:function(a, b) {
  y[a >> 2] = screen.width;
  y[b >> 2] = screen.height;
}, emscripten_glActiveTexture:function(a) {
  L.activeTexture(a);
}, emscripten_glAttachShader:function(a, b) {
  L.attachShader(T[a], U[b]);
}, emscripten_glBeginQueryEXT:function(a, b) {
  L.D.beginQueryEXT(a, Qd[b]);
}, emscripten_glBindAttribLocation:function(a, b, c) {
  L.bindAttribLocation(T[a], b, D(c));
}, emscripten_glBindBuffer:function(a, b) {
  L.bindBuffer(a, Ld[b]);
}, emscripten_glBindFramebuffer:function(a, b) {
  L.bindFramebuffer(a, Md[b]);
}, emscripten_glBindRenderbuffer:function(a, b) {
  L.bindRenderbuffer(a, Nd[b]);
}, emscripten_glBindTexture:function(a, b) {
  L.bindTexture(a, Od[b]);
}, emscripten_glBindVertexArrayOES:function(a) {
  L.bindVertexArray(Pd[a]);
}, emscripten_glBlendColor:function(a, b, c, d) {
  L.blendColor(a, b, c, d);
}, emscripten_glBlendEquation:function(a) {
  L.blendEquation(a);
}, emscripten_glBlendEquationSeparate:function(a, b) {
  L.blendEquationSeparate(a, b);
}, emscripten_glBlendFunc:function(a, b) {
  L.blendFunc(a, b);
}, emscripten_glBlendFuncSeparate:function(a, b, c, d) {
  L.blendFuncSeparate(a, b, c, d);
}, emscripten_glBufferData:function(a, b, c, d) {
  L.bufferData(a, c ? F.subarray(c, c + b) : b, d);
}, emscripten_glBufferSubData:function(a, b, c, d) {
  L.bufferSubData(a, b, F.subarray(d, d + c));
}, emscripten_glCheckFramebufferStatus:function(a) {
  return L.checkFramebufferStatus(a);
}, emscripten_glClear:function(a) {
  L.clear(a);
}, emscripten_glClearColor:function(a, b, c, d) {
  L.clearColor(a, b, c, d);
}, emscripten_glClearDepthf:function(a) {
  L.clearDepth(a);
}, emscripten_glClearStencil:function(a) {
  L.clearStencil(a);
}, emscripten_glColorMask:function(a, b, c, d) {
  L.colorMask(!!a, !!b, !!c, !!d);
}, emscripten_glCompileShader:function(a) {
  L.compileShader(U[a]);
}, emscripten_glCompressedTexImage2D:function(a, b, c, d, f, g, h, n) {
  L.compressedTexImage2D(a, b, c, d, f, g, n ? F.subarray(n, n + h) : null);
}, emscripten_glCompressedTexSubImage2D:function(a, b, c, d, f, g, h, n, q) {
  L.compressedTexSubImage2D(a, b, c, d, f, g, h, q ? F.subarray(q, q + n) : null);
}, emscripten_glCopyTexImage2D:function(a, b, c, d, f, g, h, n) {
  L.copyTexImage2D(a, b, c, d, f, g, h, n);
}, emscripten_glCopyTexSubImage2D:function(a, b, c, d, f, g, h, n) {
  L.copyTexSubImage2D(a, b, c, d, f, g, h, n);
}, emscripten_glCreateProgram:function() {
  var a = Ud(T), b = L.createProgram();
  b.name = a;
  b.Z = b.X = b.Y = 0;
  b.ma = 1;
  T[a] = b;
  return a;
}, emscripten_glCreateShader:function(a) {
  var b = Ud(U);
  U[b] = L.createShader(a);
  return b;
}, emscripten_glCullFace:function(a) {
  L.cullFace(a);
}, emscripten_glDeleteBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Ld[d];
    f && (L.deleteBuffer(f), f.name = 0, Ld[d] = null);
  }
}, emscripten_glDeleteFramebuffers:function(a, b) {
  for (var c = 0; c < a; ++c) {
    var d = y[b + 4 * c >> 2], f = Md[d];
    f && (L.deleteFramebuffer(f), f.name = 0, Md[d] = null);
  }
}, emscripten_glDeleteProgram:function(a) {
  if (a) {
    var b = T[a];
    b ? (L.deleteProgram(b), b.name = 0, T[a] = null) : W(1281);
  }
}, emscripten_glDeleteQueriesEXT:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Qd[d];
    f && (L.D.deleteQueryEXT(f), Qd[d] = null);
  }
}, emscripten_glDeleteRenderbuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Nd[d];
    f && (L.deleteRenderbuffer(f), f.name = 0, Nd[d] = null);
  }
}, emscripten_glDeleteShader:function(a) {
  if (a) {
    var b = U[a];
    b ? (L.deleteShader(b), U[a] = null) : W(1281);
  }
}, emscripten_glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Od[d];
    f && (L.deleteTexture(f), f.name = 0, Od[d] = null);
  }
}, emscripten_glDeleteVertexArraysOES:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2];
    L.deleteVertexArray(Pd[d]);
    Pd[d] = null;
  }
}, emscripten_glDepthFunc:function(a) {
  L.depthFunc(a);
}, emscripten_glDepthMask:function(a) {
  L.depthMask(!!a);
}, emscripten_glDepthRangef:function(a, b) {
  L.depthRange(a, b);
}, emscripten_glDetachShader:function(a, b) {
  L.detachShader(T[a], U[b]);
}, emscripten_glDisable:function(a) {
  L.disable(a);
}, emscripten_glDisableVertexAttribArray:function(a) {
  L.disableVertexAttribArray(a);
}, emscripten_glDrawArrays:function(a, b, c) {
  L.drawArrays(a, b, c);
}, emscripten_glDrawArraysInstancedANGLE:function(a, b, c, d) {
  L.drawArraysInstanced(a, b, c, d);
}, emscripten_glDrawBuffersWEBGL:function(a, b) {
  for (var c = Me[a], d = 0; d < a; d++) {
    c[d] = y[b + 4 * d >> 2];
  }
  L.drawBuffers(c);
}, emscripten_glDrawElements:function(a, b, c, d) {
  L.drawElements(a, b, c, d);
}, emscripten_glDrawElementsInstancedANGLE:function(a, b, c, d, f) {
  L.drawElementsInstanced(a, b, c, d, f);
}, emscripten_glEnable:function(a) {
  L.enable(a);
}, emscripten_glEnableVertexAttribArray:function(a) {
  L.enableVertexAttribArray(a);
}, emscripten_glEndQueryEXT:function(a) {
  L.D.endQueryEXT(a);
}, emscripten_glFinish:function() {
  L.finish();
}, emscripten_glFlush:function() {
  L.flush();
}, emscripten_glFramebufferRenderbuffer:function(a, b, c, d) {
  L.framebufferRenderbuffer(a, b, c, Nd[d]);
}, emscripten_glFramebufferTexture2D:function(a, b, c, d, f) {
  L.framebufferTexture2D(a, b, c, Od[d], f);
}, emscripten_glFrontFace:function(a) {
  L.frontFace(a);
}, emscripten_glGenBuffers:function(a, b) {
  Ne(a, b, "createBuffer", Ld);
}, emscripten_glGenFramebuffers:function(a, b) {
  Ne(a, b, "createFramebuffer", Md);
}, emscripten_glGenQueriesEXT:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = L.D.createQueryEXT();
    if (!d) {
      for (W(1282); c < a;) {
        y[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var f = Ud(Qd);
    d.name = f;
    Qd[f] = d;
    y[b + 4 * c >> 2] = f;
  }
}, emscripten_glGenRenderbuffers:function(a, b) {
  Ne(a, b, "createRenderbuffer", Nd);
}, emscripten_glGenTextures:function(a, b) {
  Ne(a, b, "createTexture", Od);
}, emscripten_glGenVertexArraysOES:function(a, b) {
  Ne(a, b, "createVertexArray", Pd);
}, emscripten_glGenerateMipmap:function(a) {
  L.generateMipmap(a);
}, emscripten_glGetActiveAttrib:function(a, b, c, d, f, g, h) {
  Oe("getActiveAttrib", a, b, c, d, f, g, h);
}, emscripten_glGetActiveUniform:function(a, b, c, d, f, g, h) {
  Oe("getActiveUniform", a, b, c, d, f, g, h);
}, emscripten_glGetAttachedShaders:function(a, b, c, d) {
  a = L.getAttachedShaders(T[a]);
  var f = a.length;
  f > b && (f = b);
  y[c >> 2] = f;
  for (b = 0; b < f; ++b) {
    y[d + 4 * b >> 2] = U.indexOf(a[b]);
  }
}, emscripten_glGetAttribLocation:function(a, b) {
  return L.getAttribLocation(T[a], D(b));
}, emscripten_glGetBooleanv:function(a, b) {
  Qe(a, b, 4);
}, emscripten_glGetBufferParameteriv:function(a, b, c) {
  c ? y[c >> 2] = L.getBufferParameter(a, b) : W(1281);
}, emscripten_glGetError:function() {
  var a = L.getError() || Td;
  Td = 0;
  return a;
}, emscripten_glGetFloatv:function(a, b) {
  Qe(a, b, 2);
}, emscripten_glGetFramebufferAttachmentParameteriv:function(a, b, c, d) {
  a = L.getFramebufferAttachmentParameter(a, b, c);
  if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) {
    a = a.name | 0;
  }
  y[d >> 2] = a;
}, emscripten_glGetIntegerv:function(a, b) {
  Qe(a, b, 0);
}, emscripten_glGetProgramInfoLog:function(a, b, c, d) {
  a = L.getProgramInfoLog(T[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? G(a, d, b) : 0;
  c && (y[c >> 2] = b);
}, emscripten_glGetProgramiv:function(a, b, c) {
  if (c) {
    if (a >= Kd) {
      W(1281);
    } else {
      if (a = T[a], 35716 == b) {
        a = L.getProgramInfoLog(a), null === a && (a = "(unknown error)"), y[c >> 2] = a.length + 1;
      } else if (35719 == b) {
        if (!a.Z) {
          for (b = 0; b < L.getProgramParameter(a, 35718); ++b) {
            a.Z = Math.max(a.Z, L.getActiveUniform(a, b).name.length + 1);
          }
        }
        y[c >> 2] = a.Z;
      } else if (35722 == b) {
        if (!a.X) {
          for (b = 0; b < L.getProgramParameter(a, 35721); ++b) {
            a.X = Math.max(a.X, L.getActiveAttrib(a, b).name.length + 1);
          }
        }
        y[c >> 2] = a.X;
      } else if (35381 == b) {
        if (!a.Y) {
          for (b = 0; b < L.getProgramParameter(a, 35382); ++b) {
            a.Y = Math.max(a.Y, L.getActiveUniformBlockName(a, b).length + 1);
          }
        }
        y[c >> 2] = a.Y;
      } else {
        y[c >> 2] = L.getProgramParameter(a, b);
      }
    }
  } else {
    W(1281);
  }
}, emscripten_glGetQueryObjecti64vEXT:function(a, b, c) {
  if (c) {
    a = L.D.getQueryObjectEXT(Qd[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    Pe(c, d);
  } else {
    W(1281);
  }
}, emscripten_glGetQueryObjectivEXT:function(a, b, c) {
  if (c) {
    a = L.D.getQueryObjectEXT(Qd[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    y[c >> 2] = d;
  } else {
    W(1281);
  }
}, emscripten_glGetQueryObjectui64vEXT:function(a, b, c) {
  if (c) {
    a = L.D.getQueryObjectEXT(Qd[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    Pe(c, d);
  } else {
    W(1281);
  }
}, emscripten_glGetQueryObjectuivEXT:function(a, b, c) {
  if (c) {
    a = L.D.getQueryObjectEXT(Qd[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    y[c >> 2] = d;
  } else {
    W(1281);
  }
}, emscripten_glGetQueryivEXT:function(a, b, c) {
  c ? y[c >> 2] = L.D.getQueryEXT(a, b) : W(1281);
}, emscripten_glGetRenderbufferParameteriv:function(a, b, c) {
  c ? y[c >> 2] = L.getRenderbufferParameter(a, b) : W(1281);
}, emscripten_glGetShaderInfoLog:function(a, b, c, d) {
  a = L.getShaderInfoLog(U[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? G(a, d, b) : 0;
  c && (y[c >> 2] = b);
}, emscripten_glGetShaderPrecisionFormat:function(a, b, c, d) {
  a = L.getShaderPrecisionFormat(a, b);
  y[c >> 2] = a.rangeMin;
  y[c + 4 >> 2] = a.rangeMax;
  y[d >> 2] = a.precision;
}, emscripten_glGetShaderSource:function(a, b, c, d) {
  if (a = L.getShaderSource(U[a])) {
    b = 0 < b && d ? G(a, d, b) : 0, c && (y[c >> 2] = b);
  }
}, emscripten_glGetShaderiv:function(a, b, c) {
  c ? 35716 == b ? (a = L.getShaderInfoLog(U[a]), null === a && (a = "(unknown error)"), y[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = L.getShaderSource(U[a]), y[c >> 2] = a ? a.length + 1 : 0) : y[c >> 2] = L.getShaderParameter(U[a], b) : W(1281);
}, emscripten_glGetString:function(a) {
  var b = Rd[a];
  if (!b) {
    switch(a) {
      case 7939:
        b = L.getSupportedExtensions() || [];
        b = b.concat(b.map(function(d) {
          return "GL_" + d;
        }));
        b = Re(b.join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        (b = L.getParameter(a)) || W(1280);
        b = b && Re(b);
        break;
      case 7938:
        b = Re("OpenGL ES 2.0 (" + L.getParameter(7938) + ")");
        break;
      case 35724:
        b = L.getParameter(35724);
        var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
        b = Re(b);
        break;
      default:
        W(1280);
    }
    Rd[a] = b;
  }
  return b;
}, emscripten_glGetTexParameterfv:function(a, b, c) {
  c ? B[c >> 2] = L.getTexParameter(a, b) : W(1281);
}, emscripten_glGetTexParameteriv:function(a, b, c) {
  c ? y[c >> 2] = L.getTexParameter(a, b) : W(1281);
}, emscripten_glGetUniformLocation:function(a, b) {
  b = D(b);
  if (a = T[a]) {
    Te(a);
    var c = a.N, d = 0, f = b, g = Se(b);
    0 < g && (d = parseInt(b.slice(g + 1)) >>> 0, f = b.slice(0, g));
    if ((f = a.na[f]) && d < f[0] && (d += f[1], c[d] = c[d] || L.getUniformLocation(a, b))) {
      return d;
    }
  } else {
    W(1281);
  }
  return -1;
}, emscripten_glGetUniformfv:function(a, b, c) {
  Ue(a, b, c, 2);
}, emscripten_glGetUniformiv:function(a, b, c) {
  Ue(a, b, c, 0);
}, emscripten_glGetVertexAttribPointerv:function(a, b, c) {
  c ? y[c >> 2] = L.getVertexAttribOffset(a, b) : W(1281);
}, emscripten_glGetVertexAttribfv:function(a, b, c) {
  Ve(a, b, c, 2);
}, emscripten_glGetVertexAttribiv:function(a, b, c) {
  Ve(a, b, c, 5);
}, emscripten_glHint:function(a, b) {
  L.hint(a, b);
}, emscripten_glIsBuffer:function(a) {
  return (a = Ld[a]) ? L.isBuffer(a) : 0;
}, emscripten_glIsEnabled:function(a) {
  return L.isEnabled(a);
}, emscripten_glIsFramebuffer:function(a) {
  return (a = Md[a]) ? L.isFramebuffer(a) : 0;
}, emscripten_glIsProgram:function(a) {
  return (a = T[a]) ? L.isProgram(a) : 0;
}, emscripten_glIsQueryEXT:function(a) {
  return (a = Qd[a]) ? L.D.isQueryEXT(a) : 0;
}, emscripten_glIsRenderbuffer:function(a) {
  return (a = Nd[a]) ? L.isRenderbuffer(a) : 0;
}, emscripten_glIsShader:function(a) {
  return (a = U[a]) ? L.isShader(a) : 0;
}, emscripten_glIsTexture:function(a) {
  return (a = Od[a]) ? L.isTexture(a) : 0;
}, emscripten_glIsVertexArrayOES:function(a) {
  return (a = Pd[a]) ? L.isVertexArray(a) : 0;
}, emscripten_glLineWidth:function(a) {
  L.lineWidth(a);
}, emscripten_glLinkProgram:function(a) {
  a = T[a];
  L.linkProgram(a);
  a.N = 0;
  a.na = {};
}, emscripten_glPixelStorei:function(a, b) {
  3317 == a && (Sd = b);
  L.pixelStorei(a, b);
}, emscripten_glPolygonOffset:function(a, b) {
  L.polygonOffset(a, b);
}, emscripten_glQueryCounterEXT:function(a, b) {
  L.D.queryCounterEXT(Qd[a], b);
}, emscripten_glReadPixels:function(a, b, c, d, f, g, h) {
  (h = We(g, f, c, d, h)) ? L.readPixels(a, b, c, d, f, g, h) : W(1280);
}, emscripten_glReleaseShaderCompiler:function() {
}, emscripten_glRenderbufferStorage:function(a, b, c, d) {
  L.renderbufferStorage(a, b, c, d);
}, emscripten_glSampleCoverage:function(a, b) {
  L.sampleCoverage(a, !!b);
}, emscripten_glScissor:function(a, b, c, d) {
  L.scissor(a, b, c, d);
}, emscripten_glShaderBinary:function() {
  W(1280);
}, emscripten_glShaderSource:function(a, b, c, d) {
  b = Vd(b, c, d);
  L.shaderSource(U[a], b);
}, emscripten_glStencilFunc:function(a, b, c) {
  L.stencilFunc(a, b, c);
}, emscripten_glStencilFuncSeparate:function(a, b, c, d) {
  L.stencilFuncSeparate(a, b, c, d);
}, emscripten_glStencilMask:function(a) {
  L.stencilMask(a);
}, emscripten_glStencilMaskSeparate:function(a, b) {
  L.stencilMaskSeparate(a, b);
}, emscripten_glStencilOp:function(a, b, c) {
  L.stencilOp(a, b, c);
}, emscripten_glStencilOpSeparate:function(a, b, c, d) {
  L.stencilOpSeparate(a, b, c, d);
}, emscripten_glTexImage2D:function(a, b, c, d, f, g, h, n, q) {
  L.texImage2D(a, b, c, d, f, g, h, n, q ? We(n, h, d, f, q) : null);
}, emscripten_glTexParameterf:function(a, b, c) {
  L.texParameterf(a, b, c);
}, emscripten_glTexParameterfv:function(a, b, c) {
  L.texParameterf(a, b, B[c >> 2]);
}, emscripten_glTexParameteri:function(a, b, c) {
  L.texParameteri(a, b, c);
}, emscripten_glTexParameteriv:function(a, b, c) {
  L.texParameteri(a, b, y[c >> 2]);
}, emscripten_glTexSubImage2D:function(a, b, c, d, f, g, h, n, q) {
  var u = null;
  q && (u = We(n, h, f, g, q));
  L.texSubImage2D(a, b, c, d, f, g, h, n, u);
}, emscripten_glUniform1f:function(a, b) {
  L.uniform1f(Y(a), b);
}, emscripten_glUniform1fv:function(a, b, c) {
  if (288 >= b) {
    for (var d = Xe[b - 1], f = 0; f < b; ++f) {
      d[f] = B[c + 4 * f >> 2];
    }
  } else {
    d = B.subarray(c >> 2, c + 4 * b >> 2);
  }
  L.uniform1fv(Y(a), d);
}, emscripten_glUniform1i:function(a, b) {
  L.uniform1i(Y(a), b);
}, emscripten_glUniform1iv:function(a, b, c) {
  if (288 >= b) {
    for (var d = Ye[b - 1], f = 0; f < b; ++f) {
      d[f] = y[c + 4 * f >> 2];
    }
  } else {
    d = y.subarray(c >> 2, c + 4 * b >> 2);
  }
  L.uniform1iv(Y(a), d);
}, emscripten_glUniform2f:function(a, b, c) {
  L.uniform2f(Y(a), b, c);
}, emscripten_glUniform2fv:function(a, b, c) {
  if (144 >= b) {
    for (var d = Xe[2 * b - 1], f = 0; f < 2 * b; f += 2) {
      d[f] = B[c + 4 * f >> 2], d[f + 1] = B[c + (4 * f + 4) >> 2];
    }
  } else {
    d = B.subarray(c >> 2, c + 8 * b >> 2);
  }
  L.uniform2fv(Y(a), d);
}, emscripten_glUniform2i:function(a, b, c) {
  L.uniform2i(Y(a), b, c);
}, emscripten_glUniform2iv:function(a, b, c) {
  if (144 >= b) {
    for (var d = Ye[2 * b - 1], f = 0; f < 2 * b; f += 2) {
      d[f] = y[c + 4 * f >> 2], d[f + 1] = y[c + (4 * f + 4) >> 2];
    }
  } else {
    d = y.subarray(c >> 2, c + 8 * b >> 2);
  }
  L.uniform2iv(Y(a), d);
}, emscripten_glUniform3f:function(a, b, c, d) {
  L.uniform3f(Y(a), b, c, d);
}, emscripten_glUniform3fv:function(a, b, c) {
  if (96 >= b) {
    for (var d = Xe[3 * b - 1], f = 0; f < 3 * b; f += 3) {
      d[f] = B[c + 4 * f >> 2], d[f + 1] = B[c + (4 * f + 4) >> 2], d[f + 2] = B[c + (4 * f + 8) >> 2];
    }
  } else {
    d = B.subarray(c >> 2, c + 12 * b >> 2);
  }
  L.uniform3fv(Y(a), d);
}, emscripten_glUniform3i:function(a, b, c, d) {
  L.uniform3i(Y(a), b, c, d);
}, emscripten_glUniform3iv:function(a, b, c) {
  if (96 >= b) {
    for (var d = Ye[3 * b - 1], f = 0; f < 3 * b; f += 3) {
      d[f] = y[c + 4 * f >> 2], d[f + 1] = y[c + (4 * f + 4) >> 2], d[f + 2] = y[c + (4 * f + 8) >> 2];
    }
  } else {
    d = y.subarray(c >> 2, c + 12 * b >> 2);
  }
  L.uniform3iv(Y(a), d);
}, emscripten_glUniform4f:function(a, b, c, d, f) {
  L.uniform4f(Y(a), b, c, d, f);
}, emscripten_glUniform4fv:function(a, b, c) {
  if (72 >= b) {
    var d = Xe[4 * b - 1], f = B;
    c >>= 2;
    for (var g = 0; g < 4 * b; g += 4) {
      var h = c + g;
      d[g] = f[h];
      d[g + 1] = f[h + 1];
      d[g + 2] = f[h + 2];
      d[g + 3] = f[h + 3];
    }
  } else {
    d = B.subarray(c >> 2, c + 16 * b >> 2);
  }
  L.uniform4fv(Y(a), d);
}, emscripten_glUniform4i:function(a, b, c, d, f) {
  L.uniform4i(Y(a), b, c, d, f);
}, emscripten_glUniform4iv:function(a, b, c) {
  if (72 >= b) {
    for (var d = Ye[4 * b - 1], f = 0; f < 4 * b; f += 4) {
      d[f] = y[c + 4 * f >> 2], d[f + 1] = y[c + (4 * f + 4) >> 2], d[f + 2] = y[c + (4 * f + 8) >> 2], d[f + 3] = y[c + (4 * f + 12) >> 2];
    }
  } else {
    d = y.subarray(c >> 2, c + 16 * b >> 2);
  }
  L.uniform4iv(Y(a), d);
}, emscripten_glUniformMatrix2fv:function(a, b, c, d) {
  if (72 >= b) {
    for (var f = Xe[4 * b - 1], g = 0; g < 4 * b; g += 4) {
      f[g] = B[d + 4 * g >> 2], f[g + 1] = B[d + (4 * g + 4) >> 2], f[g + 2] = B[d + (4 * g + 8) >> 2], f[g + 3] = B[d + (4 * g + 12) >> 2];
    }
  } else {
    f = B.subarray(d >> 2, d + 16 * b >> 2);
  }
  L.uniformMatrix2fv(Y(a), !!c, f);
}, emscripten_glUniformMatrix3fv:function(a, b, c, d) {
  if (32 >= b) {
    for (var f = Xe[9 * b - 1], g = 0; g < 9 * b; g += 9) {
      f[g] = B[d + 4 * g >> 2], f[g + 1] = B[d + (4 * g + 4) >> 2], f[g + 2] = B[d + (4 * g + 8) >> 2], f[g + 3] = B[d + (4 * g + 12) >> 2], f[g + 4] = B[d + (4 * g + 16) >> 2], f[g + 5] = B[d + (4 * g + 20) >> 2], f[g + 6] = B[d + (4 * g + 24) >> 2], f[g + 7] = B[d + (4 * g + 28) >> 2], f[g + 8] = B[d + (4 * g + 32) >> 2];
    }
  } else {
    f = B.subarray(d >> 2, d + 36 * b >> 2);
  }
  L.uniformMatrix3fv(Y(a), !!c, f);
}, emscripten_glUniformMatrix4fv:function(a, b, c, d) {
  if (18 >= b) {
    var f = Xe[16 * b - 1], g = B;
    d >>= 2;
    for (var h = 0; h < 16 * b; h += 16) {
      var n = d + h;
      f[h] = g[n];
      f[h + 1] = g[n + 1];
      f[h + 2] = g[n + 2];
      f[h + 3] = g[n + 3];
      f[h + 4] = g[n + 4];
      f[h + 5] = g[n + 5];
      f[h + 6] = g[n + 6];
      f[h + 7] = g[n + 7];
      f[h + 8] = g[n + 8];
      f[h + 9] = g[n + 9];
      f[h + 10] = g[n + 10];
      f[h + 11] = g[n + 11];
      f[h + 12] = g[n + 12];
      f[h + 13] = g[n + 13];
      f[h + 14] = g[n + 14];
      f[h + 15] = g[n + 15];
    }
  } else {
    f = B.subarray(d >> 2, d + 64 * b >> 2);
  }
  L.uniformMatrix4fv(Y(a), !!c, f);
}, emscripten_glUseProgram:function(a) {
  a = T[a];
  L.useProgram(a);
  L.Da = a;
}, emscripten_glValidateProgram:function(a) {
  L.validateProgram(T[a]);
}, emscripten_glVertexAttrib1f:function(a, b) {
  L.vertexAttrib1f(a, b);
}, emscripten_glVertexAttrib1fv:function(a, b) {
  L.vertexAttrib1f(a, B[b >> 2]);
}, emscripten_glVertexAttrib2f:function(a, b, c) {
  L.vertexAttrib2f(a, b, c);
}, emscripten_glVertexAttrib2fv:function(a, b) {
  L.vertexAttrib2f(a, B[b >> 2], B[b + 4 >> 2]);
}, emscripten_glVertexAttrib3f:function(a, b, c, d) {
  L.vertexAttrib3f(a, b, c, d);
}, emscripten_glVertexAttrib3fv:function(a, b) {
  L.vertexAttrib3f(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2]);
}, emscripten_glVertexAttrib4f:function(a, b, c, d, f) {
  L.vertexAttrib4f(a, b, c, d, f);
}, emscripten_glVertexAttrib4fv:function(a, b) {
  L.vertexAttrib4f(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2], B[b + 12 >> 2]);
}, emscripten_glVertexAttribDivisorANGLE:function(a, b) {
  L.vertexAttribDivisor(a, b);
}, emscripten_glVertexAttribPointer:function(a, b, c, d, f, g) {
  L.vertexAttribPointer(a, b, c, !!d, f, g);
}, emscripten_glViewport:function(a, b, c, d) {
  L.viewport(a, b, c, d);
}, emscripten_has_asyncify:function() {
  return 0;
}, emscripten_memcpy_big:function(a, b, c) {
  F.copyWithin(a, b, b + c);
}, emscripten_request_fullscreen_strategy:function(a, b, c) {
  return Ze(a, {va:y[c >> 2], oa:y[c + 4 >> 2], hb:y[c + 8 >> 2], eb:b, ea:y[c + 12 >> 2], Aa:y[c + 16 >> 2]});
}, emscripten_request_pointerlock:function(a, b) {
  a = X(a);
  return a ? a.requestPointerLock || a.ha ? $d && he.L ? Je(a) : b ? (ee(Je, 2, [a]), 1) : -2 : -1 : -4;
}, emscripten_resize_heap:function(a) {
  m("Cannot enlarge memory arrays to size " + (a >>> 0) + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + t.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}, emscripten_sample_gamepad_data:function() {
  return (ne = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1;
}, emscripten_set_beforeunload_callback_on_thread:function(a, b, c) {
  if ("undefined" === typeof onbeforeunload) {
    return -1;
  }
  if (1 !== c) {
    return -5;
  }
  $e(a, b);
  return 0;
}, emscripten_set_blur_callback_on_thread:function(a, b, c, d) {
  af(a, b, c, d, 12, "blur");
  return 0;
}, emscripten_set_canvas_element_size:De, emscripten_set_element_css_size:function(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a.style.width = b + "px";
  a.style.height = c + "px";
  return 0;
}, emscripten_set_focus_callback_on_thread:function(a, b, c, d) {
  af(a, b, c, d, 13, "focus");
  return 0;
}, emscripten_set_fullscreenchange_callback_on_thread:function(a, b, c, d) {
  if (!le()) {
    return -1;
  }
  a = X(a);
  if (!a) {
    return -4;
  }
  bf(a, b, c, d, "fullscreenchange");
  bf(a, b, c, d, "webkitfullscreenchange");
  return 0;
}, emscripten_set_gamepadconnected_callback_on_thread:function(a, b, c) {
  if (!navigator.getGamepads && !navigator.webkitGetGamepads) {
    return -1;
  }
  cf(a, b, c, 26, "gamepadconnected");
  return 0;
}, emscripten_set_gamepaddisconnected_callback_on_thread:function(a, b, c) {
  if (!navigator.getGamepads && !navigator.webkitGetGamepads) {
    return -1;
  }
  cf(a, b, c, 27, "gamepaddisconnected");
  return 0;
}, emscripten_set_keydown_callback_on_thread:function(a, b, c, d) {
  df(a, b, c, d, 2, "keydown");
  return 0;
}, emscripten_set_keypress_callback_on_thread:function(a, b, c, d) {
  df(a, b, c, d, 1, "keypress");
  return 0;
}, emscripten_set_keyup_callback_on_thread:function(a, b, c, d) {
  df(a, b, c, d, 3, "keyup");
  return 0;
}, emscripten_set_main_loop_arg:function(a, b, c, d) {
  Bb(function() {
    M(a)(b);
  }, c, d, b);
}, emscripten_set_mousedown_callback_on_thread:function(a, b, c, d) {
  ff(a, b, c, d, 5, "mousedown");
  return 0;
}, emscripten_set_mouseenter_callback_on_thread:function(a, b, c, d) {
  ff(a, b, c, d, 33, "mouseenter");
  return 0;
}, emscripten_set_mouseleave_callback_on_thread:function(a, b, c, d) {
  ff(a, b, c, d, 34, "mouseleave");
  return 0;
}, emscripten_set_mousemove_callback_on_thread:function(a, b, c, d) {
  ff(a, b, c, d, 8, "mousemove");
  return 0;
}, emscripten_set_mouseup_callback_on_thread:function(a, b, c, d) {
  ff(a, b, c, d, 6, "mouseup");
  return 0;
}, emscripten_set_pointerlockchange_callback_on_thread:function(a, b, c, d) {
  if (!document || !document.body || !(document.body.requestPointerLock || document.body.o || document.body.W || document.body.ha)) {
    return -1;
  }
  a = X(a);
  if (!a) {
    return -4;
  }
  gf(a, b, c, d, "pointerlockchange");
  gf(a, b, c, d, "mozpointerlockchange");
  gf(a, b, c, d, "webkitpointerlockchange");
  gf(a, b, c, d, "mspointerlockchange");
  return 0;
}, emscripten_set_resize_callback_on_thread:function(a, b, c, d) {
  hf(a, b, c, d);
  return 0;
}, emscripten_set_touchcancel_callback_on_thread:function(a, b, c, d) {
  jf(a, b, c, d, 25, "touchcancel");
  return 0;
}, emscripten_set_touchend_callback_on_thread:function(a, b, c, d) {
  jf(a, b, c, d, 23, "touchend");
  return 0;
}, emscripten_set_touchmove_callback_on_thread:function(a, b, c, d) {
  jf(a, b, c, d, 24, "touchmove");
  return 0;
}, emscripten_set_touchstart_callback_on_thread:function(a, b, c, d) {
  jf(a, b, c, d, 22, "touchstart");
  return 0;
}, emscripten_set_visibilitychange_callback_on_thread:function(a, b, c) {
  if (!Ae[1]) {
    return -4;
  }
  kf(a, b, c);
  return 0;
}, emscripten_set_wheel_callback_on_thread:function(a, b, c, d) {
  a = X(a);
  return "undefined" !== typeof a.onwheel ? (lf(a, b, c, d), 0) : -1;
}, emscripten_set_window_title:function(a) {
  a: {
    for (var b = "";;) {
      var c = F[a++ >> 0];
      if (!c) {
        break a;
      }
      b += String.fromCharCode(c);
    }
  }
  oa(b);
}, emscripten_sleep:function() {
  throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
}, environ_get:function(a, b) {
  var c = 0;
  nf().forEach(function(d, f) {
    var g = b + c;
    f = y[a + 4 * f >> 2] = g;
    for (g = 0; g < d.length; ++g) {
      assert(d.charCodeAt(g) === (d.charCodeAt(g) & 255)), t[f++ >> 0] = d.charCodeAt(g);
    }
    t[f >> 0] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, b) {
  var c = nf();
  y[a >> 2] = c.length;
  var d = 0;
  c.forEach(function(f) {
    d += f.length + 1;
  });
  y[b >> 2] = d;
  return 0;
}, exit:function(a) {
  Db(a);
}, fd_close:function(a) {
  try {
    var b = Ad(a);
    kd(b);
    return 0;
  } catch (c) {
    if ("undefined" === typeof xd || !(c instanceof N)) {
      throw c;
    }
    return c.H;
  }
}, fd_read:function(a, b, c, d) {
  try {
    a: {
      for (var f = Ad(a), g = a = 0; g < c; g++) {
        var h = y[b + (8 * g + 4) >> 2], n = f, q = y[b + 8 * g >> 2], u = h, r = void 0, v = t;
        if (0 > u || 0 > r) {
          throw new N(28);
        }
        if (null === n.fd) {
          throw new N(8);
        }
        if (1 === (n.flags & 2097155)) {
          throw new N(8);
        }
        if (16384 === (n.node.mode & 61440)) {
          throw new N(31);
        }
        if (!n.i.read) {
          throw new N(28);
        }
        var x = "undefined" !== typeof r;
        if (!x) {
          r = n.position;
        } else if (!n.seekable) {
          throw new N(70);
        }
        var p = n.i.read(n, v, q, u, r);
        x || (n.position += p);
        var w = p;
        if (0 > w) {
          var z = -1;
          break a;
        }
        a += w;
        if (w < h) {
          break;
        }
      }
      z = a;
    }
    y[d >> 2] = z;
    return 0;
  } catch (E) {
    if ("undefined" === typeof xd || !(E instanceof N)) {
      throw E;
    }
    return E.H;
  }
}, fd_seek:function(a, b, c, d, f) {
  try {
    var g = Ad(a);
    a = 4294967296 * c + (b >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    ld(g, a, d);
    Aa = [g.position >>> 0, (A = g.position, 1.0 <= +Math.abs(A) ? 0.0 < A ? (Math.min(+Math.floor(A / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((A - +(~~A >>> 0)) / 4294967296.0) >>> 0 : 0)];
    y[f >> 2] = Aa[0];
    y[f + 4 >> 2] = Aa[1];
    g.ra && 0 === a && 0 === d && (g.ra = null);
    return 0;
  } catch (h) {
    if ("undefined" === typeof xd || !(h instanceof N)) {
      throw h;
    }
    return h.H;
  }
}, fd_write:function(a, b, c, d) {
  try {
    a: {
      for (var f = Ad(a), g = a = 0; g < c; g++) {
        var h = md(f, t, y[b + 8 * g >> 2], y[b + (8 * g + 4) >> 2], void 0);
        if (0 > h) {
          var n = -1;
          break a;
        }
        a += h;
      }
      n = a;
    }
    y[d >> 2] = n;
    return 0;
  } catch (q) {
    if ("undefined" === typeof xd || !(q instanceof N)) {
      throw q;
    }
    return q.H;
  }
}, getentropy:pf, gettimeofday:function(a) {
  var b = Date.now();
  y[a >> 2] = b / 1000 | 0;
  y[a + 4 >> 2] = b % 1000 * 1000 | 0;
  return 0;
}, glAttachShader:function(a, b) {
  L.attachShader(T[a], U[b]);
}, glBindBuffer:function(a, b) {
  L.bindBuffer(a, Ld[b]);
}, glBindTexture:function(a, b) {
  L.bindTexture(a, Od[b]);
}, glBlendFunc:function(a, b) {
  L.blendFunc(a, b);
}, glBufferData:function(a, b, c, d) {
  L.bufferData(a, c ? F.subarray(c, c + b) : b, d);
}, glBufferSubData:function(a, b, c, d) {
  L.bufferSubData(a, b, F.subarray(d, d + c));
}, glClear:function(a) {
  L.clear(a);
}, glClearColor:function(a, b, c, d) {
  L.clearColor(a, b, c, d);
}, glCompileShader:function(a) {
  L.compileShader(U[a]);
}, glCreateProgram:function() {
  var a = Ud(T), b = L.createProgram();
  b.name = a;
  b.Z = b.X = b.Y = 0;
  b.ma = 1;
  T[a] = b;
  return a;
}, glCreateShader:function(a) {
  var b = Ud(U);
  U[b] = L.createShader(a);
  return b;
}, glDeleteBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Ld[d];
    f && (L.deleteBuffer(f), f.name = 0, Ld[d] = null);
  }
}, glDeleteProgram:function(a) {
  if (a) {
    var b = T[a];
    b ? (L.deleteProgram(b), b.name = 0, T[a] = null) : W(1281);
  }
}, glDeleteShader:function(a) {
  if (a) {
    var b = U[a];
    b ? (L.deleteShader(b), U[a] = null) : W(1281);
  }
}, glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = y[b + 4 * c >> 2], f = Od[d];
    f && (L.deleteTexture(f), f.name = 0, Od[d] = null);
  }
}, glDetachShader:function(a, b) {
  L.detachShader(T[a], U[b]);
}, glDrawArrays:function(a, b, c) {
  L.drawArrays(a, b, c);
}, glEnable:function(a) {
  L.enable(a);
}, glEnableVertexAttribArray:function(a) {
  L.enableVertexAttribArray(a);
}, glGenBuffers:function(a, b) {
  Ne(a, b, "createBuffer", Ld);
}, glGenTextures:function(a, b) {
  Ne(a, b, "createTexture", Od);
}, glGetAttribLocation:function(a, b) {
  return L.getAttribLocation(T[a], D(b));
}, glGetShaderInfoLog:function(a, b, c, d) {
  a = L.getShaderInfoLog(U[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? G(a, d, b) : 0;
  c && (y[c >> 2] = b);
}, glGetShaderiv:function(a, b, c) {
  c ? 35716 == b ? (a = L.getShaderInfoLog(U[a]), null === a && (a = "(unknown error)"), y[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = L.getShaderSource(U[a]), y[c >> 2] = a ? a.length + 1 : 0) : y[c >> 2] = L.getShaderParameter(U[a], b) : W(1281);
}, glGetUniformLocation:function(a, b) {
  b = D(b);
  if (a = T[a]) {
    Te(a);
    var c = a.N, d = 0, f = b, g = Se(b);
    0 < g && (d = parseInt(b.slice(g + 1)) >>> 0, f = b.slice(0, g));
    if ((f = a.na[f]) && d < f[0] && (d += f[1], c[d] = c[d] || L.getUniformLocation(a, b))) {
      return d;
    }
  } else {
    W(1281);
  }
  return -1;
}, glLinkProgram:function(a) {
  a = T[a];
  L.linkProgram(a);
  a.N = 0;
  a.na = {};
}, glShaderSource:function(a, b, c, d) {
  b = Vd(b, c, d);
  L.shaderSource(U[a], b);
}, glTexImage2D:function(a, b, c, d, f, g, h, n, q) {
  L.texImage2D(a, b, c, d, f, g, h, n, q ? We(n, h, d, f, q) : null);
}, glTexParameteri:function(a, b, c) {
  L.texParameteri(a, b, c);
}, glUniform2fv:function(a, b, c) {
  if (144 >= b) {
    for (var d = Xe[2 * b - 1], f = 0; f < 2 * b; f += 2) {
      d[f] = B[c + 4 * f >> 2], d[f + 1] = B[c + (4 * f + 4) >> 2];
    }
  } else {
    d = B.subarray(c >> 2, c + 8 * b >> 2);
  }
  L.uniform2fv(Y(a), d);
}, glUniform4fv:function(a, b, c) {
  if (72 >= b) {
    var d = Xe[4 * b - 1], f = B;
    c >>= 2;
    for (var g = 0; g < 4 * b; g += 4) {
      var h = c + g;
      d[g] = f[h];
      d[g + 1] = f[h + 1];
      d[g + 2] = f[h + 2];
      d[g + 3] = f[h + 3];
    }
  } else {
    d = B.subarray(c >> 2, c + 16 * b >> 2);
  }
  L.uniform4fv(Y(a), d);
}, glUniformMatrix4fv:function(a, b, c, d) {
  if (18 >= b) {
    var f = Xe[16 * b - 1], g = B;
    d >>= 2;
    for (var h = 0; h < 16 * b; h += 16) {
      var n = d + h;
      f[h] = g[n];
      f[h + 1] = g[n + 1];
      f[h + 2] = g[n + 2];
      f[h + 3] = g[n + 3];
      f[h + 4] = g[n + 4];
      f[h + 5] = g[n + 5];
      f[h + 6] = g[n + 6];
      f[h + 7] = g[n + 7];
      f[h + 8] = g[n + 8];
      f[h + 9] = g[n + 9];
      f[h + 10] = g[n + 10];
      f[h + 11] = g[n + 11];
      f[h + 12] = g[n + 12];
      f[h + 13] = g[n + 13];
      f[h + 14] = g[n + 14];
      f[h + 15] = g[n + 15];
    }
  } else {
    f = B.subarray(d >> 2, d + 64 * b >> 2);
  }
  L.uniformMatrix4fv(Y(a), !!c, f);
}, glUseProgram:function(a) {
  a = T[a];
  L.useProgram(a);
  L.Da = a;
}, glValidateProgram:function(a) {
  L.validateProgram(T[a]);
}, glVertexAttribPointer:function(a, b, c, d, f, g) {
  L.vertexAttribPointer(a, b, c, !!d, f, g);
}, glViewport:function(a, b, c, d) {
  L.viewport(a, b, c, d);
}, setTempRet0:function() {
}, strftime_l:function(a, b, c, d) {
  return vf(a, b, c, d);
}};
(function() {
  function a(g) {
    e.asm = g.exports;
    Ba = e.asm.memory;
    assert(Ba, "memory not found in wasm exports");
    Ka = g = Ba.buffer;
    e.HEAP8 = t = new Int8Array(g);
    e.HEAP16 = za = new Int16Array(g);
    e.HEAP32 = y = new Int32Array(g);
    e.HEAPU8 = F = new Uint8Array(g);
    e.HEAPU16 = La = new Uint16Array(g);
    e.HEAPU32 = I = new Uint32Array(g);
    e.HEAPF32 = B = new Float32Array(g);
    e.HEAPF64 = C = new Float64Array(g);
    Na = e.asm.__indirect_function_table;
    assert(Na, "table not found in wasm exports");
    Ua.unshift(e.asm.__wasm_call_ctors);
    gb("wasm-instantiate");
  }
  function b(g) {
    assert(e === f, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    f = null;
    a(g.instance);
  }
  function c(g) {
    return kb().then(function(h) {
      return WebAssembly.instantiate(h, d);
    }).then(function(h) {
      return h;
    }).then(g, function(h) {
      k("failed to asynchronously prepare wasm: " + h);
      J.startsWith("file://") && k("warning: Loading from a file URI (" + J + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
      m(h);
    });
  }
  var d = {env:zf, wasi_snapshot_preview1:zf,};
  fb("wasm-instantiate");
  var f = e;
  if (e.instantiateWasm) {
    try {
      return e.instantiateWasm(d, a);
    } catch (g) {
      return k("Module.instantiateWasm callback failed with error: " + g), !1;
    }
  }
  (function() {
    return xa || "function" !== typeof WebAssembly.instantiateStreaming || hb() || J.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(J, {credentials:"same-origin"}).then(function(g) {
      return WebAssembly.instantiateStreaming(g, d).then(b, function(h) {
        k("wasm streaming compile failed: " + h);
        k("falling back to ArrayBuffer instantiation");
        return c(b);
      });
    });
  })();
  return {};
})();
e.___wasm_call_ctors = K("__wasm_call_ctors");
e._memcpy = K("memcpy");
e._main = K("main");
var yf = e.___errno_location = K("__errno_location"), H = e._malloc = K("malloc");
e._free = K("free");
e.___dl_seterr = K("__dl_seterr");
var Af = e._fflush = K("fflush");
e._fileno = K("fileno");
var Bf = e._emscripten_stack_init = function() {
  return (Bf = e._emscripten_stack_init = e.asm.emscripten_stack_init).apply(null, arguments);
};
e._emscripten_stack_get_free = function() {
  return (e._emscripten_stack_get_free = e.asm.emscripten_stack_get_free).apply(null, arguments);
};
var Pa = e._emscripten_stack_get_end = function() {
  return (Pa = e._emscripten_stack_get_end = e.asm.emscripten_stack_get_end).apply(null, arguments);
}, kc = e.stackSave = K("stackSave"), lc = e.stackRestore = K("stackRestore"), Ce = e.stackAlloc = K("stackAlloc");
e.dynCall_iiji = K("dynCall_iiji");
e.dynCall_jiji = K("dynCall_jiji");
e.dynCall_ji = K("dynCall_ji");
e.dynCall_viijii = K("dynCall_viijii");
e.dynCall_iiiiij = K("dynCall_iiiiij");
e.dynCall_iiiiijj = K("dynCall_iiiiijj");
e.dynCall_iiiiiijj = K("dynCall_iiiiiijj");
Object.getOwnPropertyDescriptor(e, "intArrayFromString") || (e.intArrayFromString = () => m("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "intArrayToString") || (e.intArrayToString = () => m("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "ccall") || (e.ccall = () => m("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "cwrap") || (e.cwrap = () => m("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setValue") || (e.setValue = () => m("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getValue") || (e.getValue = () => m("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "allocate") || (e.allocate = () => m("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "UTF8ArrayToString") || (e.UTF8ArrayToString = () => m("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "UTF8ToString") || (e.UTF8ToString = () => m("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToUTF8Array") || (e.stringToUTF8Array = () => m("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToUTF8") || (e.stringToUTF8 = () => m("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "lengthBytesUTF8") || (e.lengthBytesUTF8 = () => m("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stackTrace") || (e.stackTrace = () => m("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addOnPreRun") || (e.addOnPreRun = () => m("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addOnInit") || (e.addOnInit = () => m("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addOnPreMain") || (e.addOnPreMain = () => m("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addOnExit") || (e.addOnExit = () => m("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addOnPostRun") || (e.addOnPostRun = () => m("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeStringToMemory") || (e.writeStringToMemory = () => m("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeArrayToMemory") || (e.writeArrayToMemory = () => m("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeAsciiToMemory") || (e.writeAsciiToMemory = () => m("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
e.addRunDependency = fb;
e.removeRunDependency = gb;
Object.getOwnPropertyDescriptor(e, "FS_createFolder") || (e.FS_createFolder = () => m("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
e.FS_createPath = qd;
e.FS_createDataFile = sd;
e.FS_createPreloadedFile = wd;
e.FS_createLazyFile = vd;
Object.getOwnPropertyDescriptor(e, "FS_createLink") || (e.FS_createLink = () => m("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
e.FS_createDevice = td;
e.FS_unlink = fd;
Object.getOwnPropertyDescriptor(e, "getLEB") || (e.getLEB = () => m("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getFunctionTables") || (e.getFunctionTables = () => m("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "alignFunctionTables") || (e.alignFunctionTables = () => m("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerFunctions") || (e.registerFunctions = () => m("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "addFunction") || (e.addFunction = () => m("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "removeFunction") || (e.removeFunction = () => m("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getFuncWrapper") || (e.getFuncWrapper = () => m("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "prettyPrint") || (e.prettyPrint = () => m("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "dynCall") || (e.dynCall = () => m("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getCompilerSetting") || (e.getCompilerSetting = () => m("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "print") || (e.print = () => m("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "printErr") || (e.printErr = () => m("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getTempRet0") || (e.getTempRet0 = () => m("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setTempRet0") || (e.setTempRet0 = () => m("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "callMain") || (e.callMain = () => m("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "abort") || (e.abort = () => m("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "keepRuntimeAlive") || (e.keepRuntimeAlive = () => m("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "zeroMemory") || (e.zeroMemory = () => m("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToNewUTF8") || (e.stringToNewUTF8 = () => m("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setFileTime") || (e.setFileTime = () => m("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "abortOnCannotGrowMemory") || (e.abortOnCannotGrowMemory = () => m("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "emscripten_realloc_buffer") || (e.emscripten_realloc_buffer = () => m("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "ENV") || (e.ENV = () => m("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "withStackSave") || (e.withStackSave = () => m("'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "ERRNO_CODES") || (e.ERRNO_CODES = () => m("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "ERRNO_MESSAGES") || (e.ERRNO_MESSAGES = () => m("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setErrNo") || (e.setErrNo = () => m("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "inetPton4") || (e.inetPton4 = () => m("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "inetNtop4") || (e.inetNtop4 = () => m("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "inetPton6") || (e.inetPton6 = () => m("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "inetNtop6") || (e.inetNtop6 = () => m("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "readSockaddr") || (e.readSockaddr = () => m("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeSockaddr") || (e.writeSockaddr = () => m("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "DNS") || (e.DNS = () => m("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getHostByName") || (e.getHostByName = () => m("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GAI_ERRNO_MESSAGES") || (e.GAI_ERRNO_MESSAGES = () => m("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "Protocols") || (e.Protocols = () => m("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "Sockets") || (e.Sockets = () => m("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getRandomDevice") || (e.getRandomDevice = () => m("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "traverseStack") || (e.traverseStack = () => m("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "convertFrameToPC") || (e.convertFrameToPC = () => m("'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "UNWIND_CACHE") || (e.UNWIND_CACHE = () => m("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "saveInUnwindCache") || (e.saveInUnwindCache = () => m("'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "convertPCtoSourceLocation") || (e.convertPCtoSourceLocation = () => m("'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "readAsmConstArgsArray") || (e.readAsmConstArgsArray = () => m("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "readAsmConstArgs") || (e.readAsmConstArgs = () => m("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "mainThreadEM_ASM") || (e.mainThreadEM_ASM = () => m("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "jstoi_q") || (e.jstoi_q = () => m("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "jstoi_s") || (e.jstoi_s = () => m("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getExecutableName") || (e.getExecutableName = () => m("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "listenOnce") || (e.listenOnce = () => m("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "autoResumeAudioContext") || (e.autoResumeAudioContext = () => m("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "dynCallLegacy") || (e.dynCallLegacy = () => m("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getDynCaller") || (e.getDynCaller = () => m("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "dynCall") || (e.dynCall = () => m("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "callRuntimeCallbacks") || (e.callRuntimeCallbacks = () => m("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "wasmTableMirror") || (e.wasmTableMirror = () => m("'wasmTableMirror' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setWasmTableEntry") || (e.setWasmTableEntry = () => m("'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getWasmTableEntry") || (e.getWasmTableEntry = () => m("'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "handleException") || (e.handleException = () => m("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "runtimeKeepalivePush") || (e.runtimeKeepalivePush = () => m("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "runtimeKeepalivePop") || (e.runtimeKeepalivePop = () => m("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "callUserCallback") || (e.callUserCallback = () => m("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "maybeExit") || (e.maybeExit = () => m("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "safeSetTimeout") || (e.safeSetTimeout = () => m("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "asmjsMangle") || (e.asmjsMangle = () => m("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "asyncLoad") || (e.asyncLoad = () => m("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "alignMemory") || (e.alignMemory = () => m("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "mmapAlloc") || (e.mmapAlloc = () => m("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "reallyNegative") || (e.reallyNegative = () => m("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "unSign") || (e.unSign = () => m("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "reSign") || (e.reSign = () => m("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "formatString") || (e.formatString = () => m("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "PATH") || (e.PATH = () => m("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "PATH_FS") || (e.PATH_FS = () => m("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SYSCALLS") || (e.SYSCALLS = () => m("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "syscallMmap2") || (e.syscallMmap2 = () => m("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "syscallMunmap") || (e.syscallMunmap = () => m("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getSocketFromFD") || (e.getSocketFromFD = () => m("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getSocketAddress") || (e.getSocketAddress = () => m("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "JSEvents") || (e.JSEvents = () => m("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerKeyEventCallback") || (e.registerKeyEventCallback = () => m("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "specialHTMLTargets") || (e.specialHTMLTargets = () => m("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "maybeCStringToJsString") || (e.maybeCStringToJsString = () => m("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "findEventTarget") || (e.findEventTarget = () => m("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "findCanvasEventTarget") || (e.findCanvasEventTarget = () => m("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getBoundingClientRect") || (e.getBoundingClientRect = () => m("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillMouseEventData") || (e.fillMouseEventData = () => m("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerMouseEventCallback") || (e.registerMouseEventCallback = () => m("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerWheelEventCallback") || (e.registerWheelEventCallback = () => m("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerUiEventCallback") || (e.registerUiEventCallback = () => m("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerFocusEventCallback") || (e.registerFocusEventCallback = () => m("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillDeviceOrientationEventData") || (e.fillDeviceOrientationEventData = () => m("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerDeviceOrientationEventCallback") || (e.registerDeviceOrientationEventCallback = () => m("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillDeviceMotionEventData") || (e.fillDeviceMotionEventData = () => m("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerDeviceMotionEventCallback") || (e.registerDeviceMotionEventCallback = () => m("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "screenOrientation") || (e.screenOrientation = () => m("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillOrientationChangeEventData") || (e.fillOrientationChangeEventData = () => m("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerOrientationChangeEventCallback") || (e.registerOrientationChangeEventCallback = () => m("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillFullscreenChangeEventData") || (e.fillFullscreenChangeEventData = () => m("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerFullscreenChangeEventCallback") || (e.registerFullscreenChangeEventCallback = () => m("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerRestoreOldStyle") || (e.registerRestoreOldStyle = () => m("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "hideEverythingExceptGivenElement") || (e.hideEverythingExceptGivenElement = () => m("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "restoreHiddenElements") || (e.restoreHiddenElements = () => m("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setLetterbox") || (e.setLetterbox = () => m("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "currentFullscreenStrategy") || (e.currentFullscreenStrategy = () => m("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "restoreOldWindowedStyle") || (e.restoreOldWindowedStyle = () => m("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "softFullscreenResizeWebGLRenderTarget") || (e.softFullscreenResizeWebGLRenderTarget = () => m("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "doRequestFullscreen") || (e.doRequestFullscreen = () => m("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillPointerlockChangeEventData") || (e.fillPointerlockChangeEventData = () => m("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerPointerlockChangeEventCallback") || (e.registerPointerlockChangeEventCallback = () => m("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerPointerlockErrorEventCallback") || (e.registerPointerlockErrorEventCallback = () => m("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "requestPointerLock") || (e.requestPointerLock = () => m("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillVisibilityChangeEventData") || (e.fillVisibilityChangeEventData = () => m("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerVisibilityChangeEventCallback") || (e.registerVisibilityChangeEventCallback = () => m("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerTouchEventCallback") || (e.registerTouchEventCallback = () => m("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillGamepadEventData") || (e.fillGamepadEventData = () => m("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerGamepadEventCallback") || (e.registerGamepadEventCallback = () => m("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerBeforeUnloadEventCallback") || (e.registerBeforeUnloadEventCallback = () => m("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "fillBatteryEventData") || (e.fillBatteryEventData = () => m("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "battery") || (e.battery = () => m("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "registerBatteryEventCallback") || (e.registerBatteryEventCallback = () => m("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setCanvasElementSize") || (e.setCanvasElementSize = () => m("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getCanvasElementSize") || (e.getCanvasElementSize = () => m("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "demangle") || (e.demangle = () => m("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "demangleAll") || (e.demangleAll = () => m("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "jsStackTrace") || (e.jsStackTrace = () => m("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stackTrace") || (e.stackTrace = () => m("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getEnvStrings") || (e.getEnvStrings = () => m("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "checkWasiClock") || (e.checkWasiClock = () => m("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeI53ToI64") || (e.writeI53ToI64 = () => m("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeI53ToI64Clamped") || (e.writeI53ToI64Clamped = () => m("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeI53ToI64Signaling") || (e.writeI53ToI64Signaling = () => m("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeI53ToU64Clamped") || (e.writeI53ToU64Clamped = () => m("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeI53ToU64Signaling") || (e.writeI53ToU64Signaling = () => m("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "readI53FromI64") || (e.readI53FromI64 = () => m("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "readI53FromU64") || (e.readI53FromU64 = () => m("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "convertI32PairToI53") || (e.convertI32PairToI53 = () => m("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "convertU32PairToI53") || (e.convertU32PairToI53 = () => m("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setImmediateWrapped") || (e.setImmediateWrapped = () => m("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "clearImmediateWrapped") || (e.clearImmediateWrapped = () => m("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "polyfillSetImmediate") || (e.polyfillSetImmediate = () => m("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "uncaughtExceptionCount") || (e.uncaughtExceptionCount = () => m("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "exceptionLast") || (e.exceptionLast = () => m("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "exceptionCaught") || (e.exceptionCaught = () => m("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "ExceptionInfo") || (e.ExceptionInfo = () => m("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "CatchInfo") || (e.CatchInfo = () => m("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "exception_addRef") || (e.exception_addRef = () => m("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "exception_decRef") || (e.exception_decRef = () => m("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "Browser") || (e.Browser = () => m("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "funcWrappers") || (e.funcWrappers = () => m("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "getFuncWrapper") || (e.getFuncWrapper = () => m("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "setMainLoop") || (e.setMainLoop = () => m("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "wget") || (e.wget = () => m("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "FS") || (e.FS = () => m("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "MEMFS") || (e.MEMFS = () => m("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "TTY") || (e.TTY = () => m("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "PIPEFS") || (e.PIPEFS = () => m("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SOCKFS") || (e.SOCKFS = () => m("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "_setNetworkCallback") || (e._setNetworkCallback = () => m("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "tempFixedLengthArray") || (e.tempFixedLengthArray = () => m("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "miniTempWebGLFloatBuffers") || (e.miniTempWebGLFloatBuffers = () => m("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "heapObjectForWebGLType") || (e.heapObjectForWebGLType = () => m("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "heapAccessShiftForWebGLHeap") || (e.heapAccessShiftForWebGLHeap = () => m("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GL") || (e.GL = () => m("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "emscriptenWebGLGet") || (e.emscriptenWebGLGet = () => m("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "computeUnpackAlignedImageSize") || (e.computeUnpackAlignedImageSize = () => m("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "emscriptenWebGLGetTexPixelData") || (e.emscriptenWebGLGetTexPixelData = () => m("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "emscriptenWebGLGetUniform") || (e.emscriptenWebGLGetUniform = () => m("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "webglGetUniformLocation") || (e.webglGetUniformLocation = () => m("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "webglPrepareUniformLocationsBeforeFirstUse") || (e.webglPrepareUniformLocationsBeforeFirstUse = () => m("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "webglGetLeftBracePos") || (e.webglGetLeftBracePos = () => m("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "emscriptenWebGLGetVertexAttrib") || (e.emscriptenWebGLGetVertexAttrib = () => m("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "writeGLArray") || (e.writeGLArray = () => m("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "AL") || (e.AL = () => m("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SDL_unicode") || (e.SDL_unicode = () => m("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SDL_ttfContext") || (e.SDL_ttfContext = () => m("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SDL_audio") || (e.SDL_audio = () => m("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SDL") || (e.SDL = () => m("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "SDL_gfx") || (e.SDL_gfx = () => m("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GLUT") || (e.GLUT = () => m("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "EGL") || (e.EGL = () => m("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GLFW_Window") || (e.GLFW_Window = () => m("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GLFW") || (e.GLFW = () => m("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "GLEW") || (e.GLEW = () => m("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "IDBStore") || (e.IDBStore = () => m("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "runAndAbortIfError") || (e.runAndAbortIfError = () => m("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "warnOnce") || (e.warnOnce = () => m("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stackSave") || (e.stackSave = () => m("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stackRestore") || (e.stackRestore = () => m("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stackAlloc") || (e.stackAlloc = () => m("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "AsciiToString") || (e.AsciiToString = () => m("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToAscii") || (e.stringToAscii = () => m("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "UTF16ToString") || (e.UTF16ToString = () => m("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToUTF16") || (e.stringToUTF16 = () => m("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "lengthBytesUTF16") || (e.lengthBytesUTF16 = () => m("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "UTF32ToString") || (e.UTF32ToString = () => m("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "stringToUTF32") || (e.stringToUTF32 = () => m("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "lengthBytesUTF32") || (e.lengthBytesUTF32 = () => m("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "allocateUTF8") || (e.allocateUTF8 = () => m("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(e, "allocateUTF8OnStack") || (e.allocateUTF8OnStack = () => m("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
e.writeStackCookie = Oa;
e.checkStackCookie = Qa;
Object.getOwnPropertyDescriptor(e, "ALLOC_NORMAL") || Object.defineProperty(e, "ALLOC_NORMAL", {configurable:!0, get:function() {
  m("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(e, "ALLOC_STACK") || Object.defineProperty(e, "ALLOC_STACK", {configurable:!0, get:function() {
  m("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var Cf;
function qa(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
cb = function Df() {
  Cf || Ef();
  Cf || (cb = Df);
};
function Ef() {
  function a() {
    if (!Cf && (Cf = !0, e.calledRun = !0, !Ca)) {
      Qa();
      assert(!Ya);
      Ya = !0;
      if (!e.noFSInit && !od) {
        assert(!od, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        od = !0;
        nd();
        e.stdin = e.stdin;
        e.stdout = e.stdout;
        e.stderr = e.stderr;
        e.stdin ? td("/dev", "stdin", e.stdin) : ed("/dev/tty", "/dev/stdin");
        e.stdout ? td("/dev", "stdout", null, e.stdout) : ed("/dev/tty", "/dev/stdout");
        e.stderr ? td("/dev", "stderr", null, e.stderr) : ed("/dev/tty1", "/dev/stderr");
        var b = hd("/dev/stdin", 0), c = hd("/dev/stdout", 1), d = hd("/dev/stderr", 1);
        assert(0 === b.fd, "invalid handle for stdin (" + b.fd + ")");
        assert(1 === c.fd, "invalid handle for stdout (" + c.fd + ")");
        assert(2 === d.fd, "invalid handle for stderr (" + d.fd + ")");
      }
      Pc = !1;
      ic(Ua);
      Qa();
      ic(Va);
      if (e.onRuntimeInitialized) {
        e.onRuntimeInitialized();
      }
      if (Ff) {
        assert(0 == ab, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
        assert(0 == Ta.length, "cannot call main when preRun functions remain to be called");
        b = e._main;
        try {
          var f = b(0, 0);
          Db(f, !0);
        } catch (g) {
          Ab(g);
        } finally {
        }
      }
      Qa();
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
          f = e.postRun.shift(), Xa.unshift(f);
        }
      }
      ic(Xa);
    }
  }
  if (!(0 < ab)) {
    Bf();
    Oa();
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
        $a();
      }
    }
    ic(Ta);
    0 < ab || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      a();
    }, 1)) : a(), Qa());
  }
}
e.run = Ef;
function Gf() {
  var a = l, b = k, c = !1;
  l = k = () => {
    c = !0;
  };
  try {
    Af(0), ["stdout", "stderr"].forEach(function(d) {
      d = "/dev/" + d;
      try {
        var f = P(d, {V:!0});
        d = f.path;
      } catch (h) {
      }
      var g = {rb:!1, exists:!1, error:0, name:null, path:null, object:null, tb:!1, vb:null, ub:null};
      try {
        f = P(d, {parent:!0}), g.tb = !0, g.vb = f.path, g.ub = f.node, g.name = tc(d), f = P(d, {V:!0}), g.exists = !0, g.path = f.path, g.object = f.node, g.name = f.node.name, g.rb = "/" === f.path;
      } catch (h) {
        g.error = h.H;
      }
      g && (f = wc[g.object.rdev]) && f.output && f.output.length && (c = !0);
    });
  } catch (d) {
  }
  l = a;
  k = b;
  c && va("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
}
function Db(a, b) {
  Da = a;
  Gf();
  noExitRuntime || 0 < ua ? b || k("program exited (with status: " + a + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)") : (Qa(), Za = !0);
  Da = a;
  if (!(noExitRuntime || 0 < ua)) {
    if (e.onExit) {
      e.onExit(a);
    }
    Ca = !0;
  }
  ea(a, new qa(a));
}
if (e.preInit) {
  for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) {
    e.preInit.pop()();
  }
}
var Ff = !0;
e.noInitialRun && (Ff = !1);
Ef();

