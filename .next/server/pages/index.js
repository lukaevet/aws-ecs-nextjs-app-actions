module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/xMK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "ContactList_list__1_zFv"
};


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

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

/***/ "2+Ia":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "BlogItem_item__2JO6Y",
	"link": "BlogItem_link__2uTKT",
	"img": "BlogItem_img__3HD8k",
	"content": "BlogItem_content__cGwnJ",
	"h2": "BlogItem_h2__392OW",
	"p": "BlogItem_p__3gndQ",
	"date": "BlogItem_date__3m6Ug"
};


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "29zo":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hero": "Hero_hero__13COt",
	"message": "Hero_message__3aBhP",
	"typing": "Hero_typing__25e88",
	"blink": "Hero_blink__1ZkS4",
	"buttons": "Hero_buttons__2Kd_N",
	"button": "Hero_button__3x71j",
	"icon": "Hero_icon__2PKnP"
};


/***/ }),

/***/ "2Z0k":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"divider": "Divider_divider__3CdDU"
};


/***/ }),

/***/ "2h6e":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "BlogList_list__1gZHD"
};


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

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

/***/ "AtX1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "YoutubeEmbed_wrap__LNv2u",
	"embed": "YoutubeEmbed_embed__3CIxn"
};


/***/ }),

/***/ "DKuW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section-heading": "SectionHeading_section-heading__bYonx"
};


/***/ }),

/***/ "Dt+0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "ProjectList_list__1q_3a"
};


/***/ }),

/***/ "EGp/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"videos": "Videos_videos__oYJ7c",
	"container": "Videos_container__2P-6P"
};


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

/***/ "KFg7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blog": "Blog_blog__2KrRh",
	"container": "Blog_container__3sJT3"
};


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

/***/ "Lzkd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"img": "ProjectItem_img__1flbZ",
	"item": "ProjectItem_item__1G9R_",
	"description": "ProjectItem_description__xaG0v",
	"h2": "ProjectItem_h2__35wk7",
	"p": "ProjectItem_p__37huU"
};


/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Nuuq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "ContactItem_item__15RY1",
	"link": "ContactItem_link__1HjOb"
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

/***/ "OCV7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact": "Contact_contact__3t963",
	"title-heading": "Contact_title-heading__2M4Zr"
};


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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./lib/cms.js
var cms = __webpack_require__("OneU");

// EXTERNAL MODULE: ./components/Layout/Layout.js + 6 modules
var Layout = __webpack_require__("Qog0");

// EXTERNAL MODULE: ./components/Hero/Hero.module.sass
var Hero_module = __webpack_require__("29zo");
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/Section/Section.module.sass
var Section_module = __webpack_require__("W5+u");
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);

// CONCATENATED MODULE: ./components/Section/Section.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Section(_ref) {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", _objectSpread(_objectSpread({
    className: external_classnames_default()(Section_module_default.a.section, className)
  }, rest), {}, {
    children: children
  }));
}
// EXTERNAL MODULE: ./components/Container/Container.js
var Container = __webpack_require__("k3ls");

// EXTERNAL MODULE: ./components/Button/Button.module.sass
var Button_module = __webpack_require__("Zvbr");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// CONCATENATED MODULE: ./components/Button/Button.js


function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Button(_ref) {
  let {
    className,
    children
  } = _ref,
      rest = Button_objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: external_classnames_default()(Button_module_default.a.button, className),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", Button_objectSpread(Button_objectSpread({
      className: Button_module_default.a.link
    }, rest), {}, {
      children: children
    }))
  });
}
// EXTERNAL MODULE: ./components/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("0VZu");

// CONCATENATED MODULE: ./components/Icons/ChevronDownIcon.js


function ChevronDownIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ChevronDownIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ChevronDownIcon_ownKeys(Object(source), true).forEach(function (key) { ChevronDownIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ChevronDownIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ChevronDownIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function ChevronDownIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], ChevronDownIcon_objectSpread(ChevronDownIcon_objectSpread({
    name: "chevron-down",
    viewBox: "0 0 448 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
    })
  }));
}
// CONCATENATED MODULE: ./components/Hero/Hero.js







function Hero() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Section, {
    id: "hero",
    className: Hero_module_default.a.hero,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Hero_module_default.a.message,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Luka Evetovic"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
          children: ["{", "DevOps", "}"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "AWS - EKS - ECR - Github actions"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Hero_module_default.a.buttons,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
            href: "#contact",
            className: Hero_module_default.a.button,
            children: "Get In Touch"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
            href: "#projects",
            className: Hero_module_default.a.button,
            children: "My Projects"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#about",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChevronDownIcon, {
              className: Hero_module_default.a.icon
            })
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/About/About.module.sass
var About_module = __webpack_require__("hYO9");
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);

// EXTERNAL MODULE: ./components/Divider/Divider.module.sass
var Divider_module = __webpack_require__("2Z0k");
var Divider_module_default = /*#__PURE__*/__webpack_require__.n(Divider_module);

// CONCATENATED MODULE: ./components/Divider/Divider.js


function Divider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Divider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Divider_ownKeys(Object(source), true).forEach(function (key) { Divider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Divider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Divider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Divider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Divider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Divider(_ref) {
  let {
    className
  } = _ref,
      rest = Divider_objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", Divider_objectSpread({
    className: external_classnames_default()(Divider_module_default.a.divider, className)
  }, rest));
}
// EXTERNAL MODULE: ./components/ProfilePic/ProfilePic.js
var ProfilePic = __webpack_require__("J/oc");

// EXTERNAL MODULE: ./components/Text/Text.js
var Text = __webpack_require__("JFoJ");

// CONCATENATED MODULE: ./components/About/About.js








function About() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "about",
    className: About_module_default.a.about,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
      className: About_module_default.a.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: About_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
          tag: "h2",
          children: "Ola \uD83D\uDC4B"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Text["a" /* default */], {
          children: ["I'm Luka, a coffee lover \u2615, 30-something-year-old", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
            children: "DevOps Engineer"
          }), " \uD83D\uDCBB"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
          children: "\uD83E\uDDE1"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Blog/Blog.module.sass
var Blog_module = __webpack_require__("KFg7");
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);

// EXTERNAL MODULE: ./components/SectionHeading/SectionHeading.module.sass
var SectionHeading_module = __webpack_require__("DKuW");
var SectionHeading_module_default = /*#__PURE__*/__webpack_require__.n(SectionHeading_module);

// CONCATENATED MODULE: ./components/SectionHeading/SectionHeading.js



function SectionHeading({
  title,
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: SectionHeading_module_default.a["section-heading"],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: children
    })]
  });
}
// EXTERNAL MODULE: ./components/BlogList/BlogList.module.sass
var BlogList_module = __webpack_require__("2h6e");
var BlogList_module_default = /*#__PURE__*/__webpack_require__.n(BlogList_module);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/BlogItem/BlogItem.module.sass
var BlogItem_module = __webpack_require__("2+Ia");
var BlogItem_module_default = /*#__PURE__*/__webpack_require__.n(BlogItem_module);

// EXTERNAL MODULE: ./components/Date/Date.js
var Date_Date = __webpack_require__("O590");

// CONCATENATED MODULE: ./components/BlogItem/BlogItem.js







function BlogItem({
  item
}) {
  const {
    id,
    date,
    title,
    html
  } = item;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: BlogItem_module_default.a.item,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/posts/${id}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: BlogItem_module_default.a.link,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: BlogItem_module_default.a.content,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
            tag: "h2",
            gradient: true,
            className: BlogItem_module_default.a.h2,
            children: title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: BlogItem_module_default.a.date,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Date_Date["a" /* default */], {
              children: date
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
            className: BlogItem_module_default.a.p,
            children: html
          })]
        })
      })
    })
  });
}
// CONCATENATED MODULE: ./components/BlogList/BlogList.js



function BlogList({
  items
}) {
  const els = items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogItem, {
    item: item
  }, item.id.toString()));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: BlogList_module_default.a.list,
    children: els
  });
}
// CONCATENATED MODULE: ./components/Blog/Blog.js








function Blog({
  items
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "blog",
    className: Blog_module_default.a.blog,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Blog_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionHeading, {
        title: "Blog",
        children: "These are some of my recent blog posts."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogList, {
        items: items
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Services/Services.module.sass
var Services_module = __webpack_require__("oaWV");
var Services_module_default = /*#__PURE__*/__webpack_require__.n(Services_module);

// EXTERNAL MODULE: ./components/ServiceList/ServiceList.module.sass
var ServiceList_module = __webpack_require__("Zsnr");
var ServiceList_module_default = /*#__PURE__*/__webpack_require__.n(ServiceList_module);

// EXTERNAL MODULE: ./components/ServiceItem/ServiceItem.module.sass
var ServiceItem_module = __webpack_require__("lKPa");
var ServiceItem_module_default = /*#__PURE__*/__webpack_require__.n(ServiceItem_module);

// CONCATENATED MODULE: ./components/Icons/CodeIcon.js


function CodeIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CodeIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CodeIcon_ownKeys(Object(source), true).forEach(function (key) { CodeIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CodeIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CodeIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function CodeIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], CodeIcon_objectSpread(CodeIcon_objectSpread({
    name: "code",
    viewBox: "0 0 640 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
    })
  }));
}
// EXTERNAL MODULE: ./components/Icons/DevIcon.js
var DevIcon = __webpack_require__("0uZy");

// CONCATENATED MODULE: ./components/Icons/EmailIcon.js


function EmailIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EmailIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EmailIcon_ownKeys(Object(source), true).forEach(function (key) { EmailIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EmailIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EmailIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function EmailIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], EmailIcon_objectSpread(EmailIcon_objectSpread({
    name: "email"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"
    })
  }));
}
// CONCATENATED MODULE: ./components/Icons/FileCodeIcon.js


function FileCodeIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FileCodeIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FileCodeIcon_ownKeys(Object(source), true).forEach(function (key) { FileCodeIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FileCodeIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FileCodeIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function FileCodeIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], FileCodeIcon_objectSpread(FileCodeIcon_objectSpread({
    name: "file-code",
    viewBox: "0 0 384 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"
    })
  }));
}
// CONCATENATED MODULE: ./components/Icons/GithubIcon.js


function GithubIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function GithubIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GithubIcon_ownKeys(Object(source), true).forEach(function (key) { GithubIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GithubIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GithubIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function GithubIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], GithubIcon_objectSpread(GithubIcon_objectSpread({
    name: "github",
    viewBox: "0 0 496 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    })
  }));
}
// CONCATENATED MODULE: ./components/Icons/MobileIcon.js


function MobileIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MobileIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MobileIcon_ownKeys(Object(source), true).forEach(function (key) { MobileIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MobileIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MobileIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function MobileIcon(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgIcon["a" /* default */], MobileIcon_objectSpread(MobileIcon_objectSpread({
    name: "mobile",
    viewBox: "0 0 320 512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
    })
  }));
}
// EXTERNAL MODULE: ./components/Icons/TwitterIcon.js
var TwitterIcon = __webpack_require__("nmZo");

// EXTERNAL MODULE: ./components/Icons/YoutubeIcon.js
var YoutubeIcon = __webpack_require__("FWJK");

// CONCATENATED MODULE: ./components/Icons/index.js










function iconFactory(name) {
  switch (name) {
    case "chevron-down":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChevronDownIcon, {});

    case "code":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CodeIcon, {});

    case "dev":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(DevIcon["a" /* default */], {});

    case "email":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(EmailIcon, {});

    case "file-code":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FileCodeIcon, {});

    case "github":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(GithubIcon, {});

    case "mobile":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileIcon, {});

    case "twitter":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TwitterIcon["a" /* default */], {});

    case "youtube":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(YoutubeIcon["a" /* default */], {});

    default:
      return undefined;
  }
}
// CONCATENATED MODULE: ./components/ServiceItem/ServiceItem.js





function ServiceItem({
  item
}) {
  const {
    icon,
    title,
    text
  } = item;
  const iconEl = iconFactory(icon);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: ServiceItem_module_default.a.item,
    children: [iconEl, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      tag: "h2",
      gradient: true,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      children: text
    })]
  });
}
// CONCATENATED MODULE: ./components/ServiceList/ServiceList.js



function ServiceList({
  items
}) {
  const els = items.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ServiceItem, {
    item: item
  }, idx.toString()));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: ServiceList_module_default.a.list,
    children: els
  });
}
// CONCATENATED MODULE: ./components/Services/Services.js








function Services({
  items
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "services",
    className: Services_module_default.a.services,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Services_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionHeading, {
        title: "Digitize your business",
        children: "I will help you to create a remarkable first impression with creative designs."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ServiceList, {
        items: items
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Projects/Projects.module.sass
var Projects_module = __webpack_require__("jvpl");
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);

// EXTERNAL MODULE: ./components/ProjectList/ProjectList.module.sass
var ProjectList_module = __webpack_require__("Dt+0");
var ProjectList_module_default = /*#__PURE__*/__webpack_require__.n(ProjectList_module);

// EXTERNAL MODULE: ./components/ProjectItem/ProjectItem.module.sass
var ProjectItem_module = __webpack_require__("Lzkd");
var ProjectItem_module_default = /*#__PURE__*/__webpack_require__.n(ProjectItem_module);

// EXTERNAL MODULE: ./components/IconLink/IconLink.module.sass
var IconLink_module = __webpack_require__("o4iB");
var IconLink_module_default = /*#__PURE__*/__webpack_require__.n(IconLink_module);

// CONCATENATED MODULE: ./components/IconLink/IconLink.js



function IconLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function IconLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { IconLink_ownKeys(Object(source), true).forEach(function (key) { IconLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { IconLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function IconLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function IconLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = IconLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function IconLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function IconLink(_ref) {
  let {
    icon,
    className,
    children
  } = _ref,
      rest = IconLink_objectWithoutProperties(_ref, ["icon", "className", "children"]);

  const cls = external_classnames_default()(IconLink_module_default.a.link, className);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", IconLink_objectSpread(IconLink_objectSpread({}, rest), {}, {
    className: cls,
    children: [icon, /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: children
    })]
  }));
}
// CONCATENATED MODULE: ./components/ProjectItem/ProjectItem.js







function ProjectItem({
  item
}) {
  const {
    uri,
    image,
    title,
    text
  } = item;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: ProjectItem_module_default.a.item,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ProjectItem_module_default.a.img,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        src: image,
        alt: title,
        width: 274,
        height: 209
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ProjectItem_module_default.a.description,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
        tag: "h2",
        gradient: true,
        className: ProjectItem_module_default.a.h2,
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
        className: ProjectItem_module_default.a.p,
        children: text
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconLink, {
        href: uri,
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GithubIcon, {}),
        target: "_blank",
        rel: "noreferrer",
        children: "View code"
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/ProjectList/ProjectList.js



function ProjectList({
  items
}) {
  const els = items.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProjectItem, {
    item: item
  }, idx.toString()));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: ProjectList_module_default.a.list,
    children: els
  });
}
// CONCATENATED MODULE: ./components/Projects/Projects.js








function Projects({
  items
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "projects",
    className: Projects_module_default.a.projects,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Projects_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionHeading, {
        title: "Projects",
        children: "These are some of my recent projects."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProjectList, {
        items: items
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Videos/Videos.module.sass
var Videos_module = __webpack_require__("EGp/");
var Videos_module_default = /*#__PURE__*/__webpack_require__.n(Videos_module);

// EXTERNAL MODULE: ./components/VideoList/VideoList.module.sass
var VideoList_module = __webpack_require__("tkJq");
var VideoList_module_default = /*#__PURE__*/__webpack_require__.n(VideoList_module);

// EXTERNAL MODULE: ./components/VideoItem/VideoItem.module.sass
var VideoItem_module = __webpack_require__("aWp7");
var VideoItem_module_default = /*#__PURE__*/__webpack_require__.n(VideoItem_module);

// EXTERNAL MODULE: ./components/YoutubeEmbed/YoutubeEmbed.module.sass
var YoutubeEmbed_module = __webpack_require__("AtX1");
var YoutubeEmbed_module_default = /*#__PURE__*/__webpack_require__.n(YoutubeEmbed_module);

// CONCATENATED MODULE: ./components/YoutubeEmbed/YoutubeEmbed.js


function YoutubeEmbed({
  id,
  width = 160,
  height = 90,
  frameborder = 0
}) {
  const src = `https://www.youtube.com/embed/${id}`;
  const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: YoutubeEmbed_module_default.a.wrap,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", {
      className: YoutubeEmbed_module_default.a.embed,
      width: width,
      height: height,
      src: src,
      frameBorder: frameborder,
      allow: allow,
      allowFullScreen: true
    })
  });
}
// CONCATENATED MODULE: ./components/VideoItem/VideoItem.js





function VideoItem({
  item
}) {
  const {
    video,
    title,
    text
  } = item;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: VideoItem_module_default.a.item,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(YoutubeEmbed, {
      id: video
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      tag: "h2",
      gradient: true,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      children: text
    })]
  });
}
// CONCATENATED MODULE: ./components/VideoList/VideoList.js



function VideoList({
  items
}) {
  const els = items.map((item, idx) => item.enabled ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(VideoItem, {
    item: item
  }, idx.toString()) : null);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: VideoList_module_default.a.list,
    children: els
  });
}
// CONCATENATED MODULE: ./components/Videos/Videos.js








function Videos_Projects({
  items
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "videos",
    className: Videos_module_default.a.videos,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Videos_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionHeading, {
        title: "Videos",
        children: "These are some of my recent videos."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(VideoList, {
        items: items
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Contact/Contact.module.sass
var Contact_module = __webpack_require__("OCV7");
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);

// EXTERNAL MODULE: ./components/ContactList/ContactList.module.sass
var ContactList_module = __webpack_require__("/xMK");
var ContactList_module_default = /*#__PURE__*/__webpack_require__.n(ContactList_module);

// EXTERNAL MODULE: ./components/ContactItem/ContactItem.module.sass
var ContactItem_module = __webpack_require__("Nuuq");
var ContactItem_module_default = /*#__PURE__*/__webpack_require__.n(ContactItem_module);

// CONCATENATED MODULE: ./components/ContactItem/ContactItem.js





function ContactItem({
  item
}) {
  const {
    icon,
    uri,
    text
  } = item;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: ContactItem_module_default.a.item,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconLink, {
        icon: iconFactory(icon),
        href: uri,
        className: ContactItem_module_default.a.link,
        children: text
      })
    })
  });
}
// CONCATENATED MODULE: ./components/ContactList/ContactList.js



function ContactList({
  items
}) {
  const els = items.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactItem, {
    item: item
  }, idx.toString()));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: ContactList_module_default.a.list,
    children: els
  });
}
// CONCATENATED MODULE: ./components/Contact/Contact.js








function Contact({
  settings
}) {
  const items = [{
    icon: "email",
    uri: `mailto:${settings.email}`,
    text: settings.email
  }, {
    icon: "youtube",
    uri: settings.youtube.uri,
    text: `@${settings.youtube.username}`
  }, {
    icon: "dev",
    uri: settings.dev.uri,
    text: `@${settings.dev.username}`
  }, {
    icon: "twitter",
    uri: settings.twitter.uri,
    text: `@${settings.twitter.username}`
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Section, {
    id: "contact",
    className: Contact_module_default.a.contact,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      className: Contact_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionHeading, {
        title: "Get In Touch",
        children: "I'd love to hear from you. Even if it's just to say \"Hey!\". Drop me a line and I'll get back to you ASAP."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactList, {
        items: items
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
  });
}
// EXTERNAL MODULE: ./components/Footer/Footer.module.sass
var Footer_module = __webpack_require__("qfNq");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./components/Footer/Footer.js







function Footer({
  settings
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
    className: Footer_module_default.a.footer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Footer_module_default.a.nav,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: Footer_module_default.a.link,
        href: "#hero",
        children: "Home"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#about",
        className: Footer_module_default.a.link,
        children: "About"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#services",
        className: Footer_module_default.a.link,
        children: "Services"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#projects",
        className: Footer_module_default.a.link,
        children: "Projects"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#contact",
        className: Footer_module_default.a.link,
        children: "Contact"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Footer_module_default.a.by,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CodeIcon, {}), "with \uD83D\uDC99 by Stuart MacKenzie \xA9 2020"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Built with pure HTML, CSS, and JavaScript"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Footer_module_default.a.social,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        target: "_blank",
        className: "contact-link",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(YoutubeIcon["a" /* default */], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        target: "_blank",
        className: "contact-link",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DevIcon["a" /* default */], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        target: "_blank",
        className: "contact-link",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TwitterIcon["a" /* default */], {})
      })]
    })]
  });
}
// CONCATENATED MODULE: ./pages/index.js












function Home({
  settings,
  hero,
  about,
  posts,
  services,
  projects,
  videos
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout["a" /* default */], {
    settings: settings,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Hero, {
      item: hero
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(About, {
      item: about
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Blog, {
      items: posts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Services, {
      items: services
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Projects, {
      items: projects
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Videos_Projects, {
      items: videos
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contact, {
      settings: settings
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {
      settings: settings
    })]
  });
}
async function getStaticProps() {
  const settings = await Object(cms["h" /* getSettings */])();
  const hero = await Object(cms["b" /* getHero */])();
  const about = await Object(cms["a" /* getAbout */])();
  const posts = await Object(cms["e" /* getPosts */])();
  const services = await Object(cms["g" /* getServices */])();
  const projects = await Object(cms["f" /* getProjects */])();
  const videos = await Object(cms["i" /* getVideos */])();
  return {
    props: {
      settings,
      hero,
      about,
      posts,
      services,
      projects,
      videos
    }
  };
}

/***/ }),

/***/ "Rpn+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Container_container__3wZ0v"
};


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "W5+u":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "Section_section__1zNOm"
};


/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Zsnr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "ServiceList_list__1L6_p"
};


/***/ }),

/***/ "Zvbr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__1qFpV",
	"link": "Button_link__2A88V"
};


/***/ }),

/***/ "aQlF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-item": "NavItem_nav-item__TAj50"
};


/***/ }),

/***/ "aWp7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "VideoItem_item__356Td"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hYO9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"about": "About_about__bOBT9",
	"container": "About_container__2aIgM",
	"pic": "About_pic__1yHSQ",
	"content": "About_content__3bBuP"
};


/***/ }),

/***/ "jvpl":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"projects": "Projects_projects__3FQcr",
	"container": "Projects_container__1Vzmv"
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

/***/ "lKPa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "ServiceItem_item__2wb2H"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
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

/***/ "o4iB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "IconLink_link__1PJiq"
};


/***/ }),

/***/ "oaWV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"services": "Services_services__27CjD",
	"container": "Services_container__ibiyK"
};


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

/***/ "qfNq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__28OUP",
	"nav": "Footer_nav__2uuxT",
	"link": "Footer_link__2xT7Y",
	"by": "Footer_by__2rGw1",
	"social": "Footer_social__iAIV_"
};


/***/ }),

/***/ "tkJq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "VideoList_list__2TjGy"
};


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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yZUj":
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ })

/******/ });