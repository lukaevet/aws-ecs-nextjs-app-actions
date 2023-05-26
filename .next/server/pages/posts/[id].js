module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "/WxO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logo": "Logo_logo__FjE37"
};


/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0VZu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OS/z");
/* harmony import */ var _SvgIcon_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SvgIcon_module_sass__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgIcon(_ref) {
  let {
    name,
    viewBox = "0 0 512 512",
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "viewBox", "children", "className"]);

  const iconClass = _SvgIcon_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a["svg-icon"];
  const nameClass = _SvgIcon_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[`${name}-icon`];
  let cs = classnames__WEBPACK_IMPORTED_MODULE_1___default()(iconClass, nameClass, className);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    className: cs,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "0uZy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0VZu");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function DevIcon(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _objectSpread(_objectSpread({
    name: "dev",
    viewBox: "0 0 448 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
    })
  }));
}

/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yG97");


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FWJK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0VZu");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function YtIcon(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _objectSpread(_objectSpread({
    name: "yt",
    viewBox: "0 0 576 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
    })
  }));
}

/***/ }),

/***/ "G8aD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profile-pic": "ProfilePic_profile-pic__12ESJ"
};


/***/ }),

/***/ "GWC1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-link": "NavLink_nav-link__2GznH",
	"btn": "NavLink_btn__3KvyI"
};


/***/ }),

/***/ "J/oc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePic; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfilePic_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("G8aD");
/* harmony import */ var _ProfilePic_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProfilePic_module_sass__WEBPACK_IMPORTED_MODULE_2__);



function ProfilePic({
  width = 144,
  height = 144
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _ProfilePic_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a["profile-pic"],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      src: "/images/me.png",
      alt: "Stuart MacKenzie",
      width: width,
      height: height
    })
  });
}

/***/ }),

/***/ "JFoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("L4xk");
/* harmony import */ var _Text_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Text_module_sass__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Text(_ref) {
  let {
    tag = "p",
    className,
    children,
    gradient
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["tag", "className", "children", "gradient"]);

  const Tag = `${tag}`;
  const cls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Text_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a[tag], className, gradient ? _Text_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.gradient : "");
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Tag, _objectSpread(_objectSpread({
    className: cls
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "L4xk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"p": "Text_p__20wDv",
	"h1": "Text_h1__y0ep2",
	"h2": "Text_h2__3vDEX",
	"h3": "Text_h3__1Agx5",
	"gradient": "Text_gradient__2SrCR"
};


/***/ }),

/***/ "NzNZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "NavList_list__2N_UJ",
	"svg": "NavList_svg__23NM6",
	"open": "NavList_open__v2O8y",
	"caption": "NavList_caption__o_x_G",
	"cta": "NavList_cta__3VxgP"
};


/***/ }),

/***/ "O590":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Date; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({
  children,
  template = "LLLL io, yyyy"
}) {
  const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(children);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("time", {
    dateTime: children,
    children: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, template)
  });
}

/***/ }),

/***/ "OS/z":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"svg-icon": "SvgIcon_svg-icon__2kprA",
	"yt-icon": "SvgIcon_yt-icon__vKKj3",
	"twitter-icon": "SvgIcon_twitter-icon__excqn",
	"dev-icon": "SvgIcon_dev-icon__1e0j7",
	"envelope-open-icon": "SvgIcon_envelope-open-icon__SshuS",
	"github-icon": "SvgIcon_github-icon__1XtMV",
	"chevron-down-icon": "SvgIcon_chevron-down-icon__2Vv6a",
	"file-code-o-icon": "SvgIcon_file-code-o-icon__3Y-oB",
	"mobile-icon": "SvgIcon_mobile-icon__2iASn",
	"code-icon": "SvgIcon_code-icon__tulaD"
};


/***/ }),

/***/ "OneU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPostIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPostById; });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yZUj");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1VTK");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/Ikq");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const cmsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "cms");
const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cmsDirectory, "posts");

const getJson = async src => {
  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cmsDirectory, src);
  const data = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(filePath, "utf8");
  return JSON.parse(data);
};

const getMarkdown = async src => {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cmsDirectory, src);
  const fileContents = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(fullPath, "utf8"); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_4___default.a).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the content

  return _objectSpread({
    contentHtml
  }, matterResult.data);
};

async function getSettings() {
  const result = await getJson("settings.json");
  const {
    theme,
    md,
    fontSize,
    images
  } = result.ogImage;
  result.ogImage = `https://og-image.now.sh/${encodeURI(result.title)}.png?theme=${theme}&md=${md}&fontSize=${fontSize}&images=${encodeURI(images)}`;
  return result;
}
async function getServices() {
  return await getJson("services.json");
}
async function getProjects() {
  return await getJson("projects.json");
}
async function getVideos() {
  return await getJson("videos.json");
}
async function getHero() {
  return getMarkdown("hero.md");
}
async function getAbout() {
  return getMarkdown("about.md");
}
/* Posts */

async function getPostIds() {
  const fileNames = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readdir(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}
async function getPosts() {
  const fileNames = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readdir(postsDirectory);
  const items = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postsDirectory, fileName);
    const fileContents = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_4___default.a).process(matterResult.content);
    const contentHtml = processedContent.toString();
    items.push(_objectSpread({
      id,
      html: contentHtml
    }, matterResult.data));
  }

  return items.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
async function getPostById(id) {
  const fileName = `${id}.md`;
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postsDirectory, fileName);
  const fileContents = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(fullPath, "utf8");
  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_4___default.a).process(matterResult.content);
  const contentHtml = processedContent.toString();
  return _objectSpread({
    id,
    html: contentHtml
  }, matterResult.data);
}

/***/ }),

/***/ "Qog0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Layout/Layout.module.sass
var Layout_module = __webpack_require__("Xr5C");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Nav/Nav.module.sass
var Nav_module = __webpack_require__("ccbw");
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./components/Logo/Logo.module.sass
var Logo_module = __webpack_require__("/WxO");
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);

// CONCATENATED MODULE: ./components/Logo/Logo.js



function Logo({
  width = 256,
  height = 241
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Logo_module_default.a.logo,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      src: "/images/ninjalogo.png",
      alt: "Ninjs",
      width: width,
      height: height
    })
  });
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/MenuButton/MenuButton.module.sass
var MenuButton_module = __webpack_require__("hO+Q");
var MenuButton_module_default = /*#__PURE__*/__webpack_require__.n(MenuButton_module);

// CONCATENATED MODULE: ./components/MenuButton/MenuButton.js




function MenuButton({
  open,
  onClick
}) {
  const className = external_classnames_default()({
    [MenuButton_module_default.a["menu-button"]]: true,
    [MenuButton_module_default.a["open"]]: open
  });
  const lineClass = MenuButton_module_default.a["menu-line"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    onClick: onClick,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: external_classnames_default()(lineClass, MenuButton_module_default.a["menu-line1"])
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: external_classnames_default()(lineClass, MenuButton_module_default.a["menu-line2"])
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: external_classnames_default()(lineClass, MenuButton_module_default.a["menu-line3"])
    })]
  });
}
// EXTERNAL MODULE: ./components/NavList/NavList.module.sass
var NavList_module = __webpack_require__("NzNZ");
var NavList_module_default = /*#__PURE__*/__webpack_require__.n(NavList_module);

// EXTERNAL MODULE: ./components/Icons/YoutubeIcon.js
var YoutubeIcon = __webpack_require__("FWJK");

// EXTERNAL MODULE: ./components/Icons/TwitterIcon.js
var TwitterIcon = __webpack_require__("nmZo");

// EXTERNAL MODULE: ./components/Icons/DevIcon.js
var DevIcon = __webpack_require__("0uZy");

// EXTERNAL MODULE: ./components/NavItem/NavItem.module.sass
var NavItem_module = __webpack_require__("aQlF");
var NavItem_module_default = /*#__PURE__*/__webpack_require__.n(NavItem_module);

// CONCATENATED MODULE: ./components/NavItem/NavItem.js


function NavItem({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: NavItem_module_default.a["nav-item"],
    children: children
  });
}
// EXTERNAL MODULE: ./components/ProfilePic/ProfilePic.js
var ProfilePic = __webpack_require__("J/oc");

// EXTERNAL MODULE: ./components/NavLink/NavLink.module.sass
var NavLink_module = __webpack_require__("GWC1");
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);

// CONCATENATED MODULE: ./components/NavLink/NavLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function NavLink(_ref) {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  const linkClass = external_classnames_default()(NavLink_module_default.a["nav-link"], className);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", _objectSpread(_objectSpread({
    className: linkClass
  }, rest), {}, {
    children: children
  }));
}
// CONCATENATED MODULE: ./components/NavList/NavList.js










function NavList({
  open,
  settings,
  onItemClick
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
    className: external_classnames_default()({
      [NavList_module_default.a.list]: true,
      [NavList_module_default.a.open]: open
    }),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavLink, {
        href: "#hero",
        onClick: onItemClick,
        rel: "noreferrer",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfilePic["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: NavList_module_default.a.caption,
          children: "Stuart MacKenzie"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: "#about",
        onClick: onItemClick,
        rel: "noreferrer",
        children: "About"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: "#services",
        onClick: onItemClick,
        rel: "noreferrer",
        children: "Services"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: "#projects",
        onClick: onItemClick,
        rel: "noreferrer",
        children: "Projects"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: "#videos",
        onClick: onItemClick,
        rel: "noreferrer",
        children: "Videos"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: "#contact",
        rel: "noreferrer",
        children: "Contact"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavItem, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: settings.youtube.uri,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(YoutubeIcon["a" /* default */], {
          className: NavList_module_default.a.svg
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: settings.dev.uri,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DevIcon["a" /* default */], {
          className: NavList_module_default.a.svg
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: settings.twitter.uri,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TwitterIcon["a" /* default */], {
          className: NavList_module_default.a.svg
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: NavList_module_default.a.cta,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
        href: settings.coffee.uri,
        target: "_blank",
        className: "btn",
        rel: "noreferrer",
        children: "Buy Me A Coffee"
      })
    })]
  });
}
// CONCATENATED MODULE: ./components/Nav/Nav.js







function Nav({
  settings
}) {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpen(!open);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    className: Nav_module_default.a.nav,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuButton, {
      open: open,
      onClick: handleMenuClick
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavList, {
      open: open,
      settings: settings,
      onItemClick: handleItemClick
    })]
  });
}
// CONCATENATED MODULE: ./components/Layout/Layout.js





function Layout({
  settings,
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Layout_module_default.a.layout,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: settings.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        content: "yes",
        name: "apple-mobile-web-app-capable"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: settings.description
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: settings.ogImage
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:title",
        content: settings.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "shortcut icon",
        sizes: "16x16 24x24 32x32 48x48 64x64",
        type: "image/x-icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon-precomposed",
        sizes: "57x57",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-touch-icon.png"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
      className: Layout_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Layout_module_default.a.container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav, {
          settings: settings
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: Layout_module_default.a.main,
      children: children
    })]
  });
}

/***/ }),

/***/ "Rpn+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Container_container__3wZ0v"
};


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VgDa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"article": "PostDetail_article__1pVA5",
	"title": "PostDetail_title__SNvHf",
	"date": "PostDetail_date__3GxWx",
	"time": "PostDetail_time__MBw7U",
	"content": "PostDetail_content__1YctM"
};


/***/ }),

/***/ "Xr5C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "Layout_layout__3WYnk",
	"header": "Layout_header__1mRUG",
	"container": "Layout_container__2IhWx",
	"main": "Layout_main__3sbw7"
};


/***/ }),

/***/ "aQlF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-item": "NavItem_nav-item__TAj50"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ccbw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "Nav_nav__12tRu"
};


/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "hO+Q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu-button": "MenuButton_menu-button__1pEGe",
	"menu-line": "MenuButton_menu-line__QuXU2",
	"menu-line1": "MenuButton_menu-line1__3XZH-",
	"menu-line2": "MenuButton_menu-line2__1LOyA",
	"menu-line3": "MenuButton_menu-line3__1UEFv",
	"open": "MenuButton_open__l3ou8"
};


/***/ }),

/***/ "k3ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rpn+");
/* harmony import */ var _Container_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_sass__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Container(_ref) {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Container_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.container, className)
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "nmZo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0VZu");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function TwitterIcon(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _objectSpread(_objectSpread({
    name: "twitter"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    })
  }));
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yG97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./lib/cms.js
var cms = __webpack_require__("OneU");

// EXTERNAL MODULE: ./components/Layout/Layout.js + 6 modules
var Layout = __webpack_require__("Qog0");

// EXTERNAL MODULE: ./components/Container/Container.js
var Container = __webpack_require__("k3ls");

// EXTERNAL MODULE: ./components/PostDetail/PostDetail.module.sass
var PostDetail_module = __webpack_require__("VgDa");
var PostDetail_module_default = /*#__PURE__*/__webpack_require__.n(PostDetail_module);

// EXTERNAL MODULE: ./components/Text/Text.js
var Text = __webpack_require__("JFoJ");

// EXTERNAL MODULE: ./components/Date/Date.js
var Date_Date = __webpack_require__("O590");

// CONCATENATED MODULE: ./components/PostDetail/PostDetail.js





function PostDetail({
  item
}) {
  const {
    title,
    html,
    date
  } = item;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("article", {
    className: PostDetail_module_default.a.article,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      tag: "h1",
      className: PostDetail_module_default.a.title,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: PostDetail_module_default.a.date,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Date_Date["a" /* default */], {
        className: PostDetail_module_default.a.time,
        children: date
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: PostDetail_module_default.a.content,
      dangerouslySetInnerHTML: {
        __html: html
      }
    })]
  });
}
// CONCATENATED MODULE: ./pages/posts/[id].js







function Home({
  settings,
  post
}) {
  const {
    title
  } = post;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout["a" /* default */], {
    settings: settings,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostDetail, {
        item: post
      })
    })]
  });
} // Return a list of possible value for id

async function getStaticPaths() {
  const paths = await Object(cms["d" /* getPostIds */])();
  return {
    paths,
    fallback: false
  };
} // Fetch necessary data for the blog post using params.id

async function getStaticProps({
  params
}) {
  const id = params.id;
  const settings = await Object(cms["h" /* getSettings */])();
  const post = await Object(cms["c" /* getPostById */])(id);
  return {
    props: {
      settings,
      post
    }
  };
}

/***/ }),

/***/ "yZUj":
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ })

/******/ });