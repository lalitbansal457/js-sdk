(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Users = undefined;\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/js/users/index.js\");\n\nexports.Users = _users.User;\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/request/index.js":
/*!*********************************!*\
  !*** ./src/js/request/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar RequestMethod = exports.RequestMethod = {\n  GET: 'GET',\n  POST: 'POST',\n  PATCH: 'PATCH',\n  PUT: 'PUT',\n  DELETE: 'DELETE'\n};\nObject.freeze(RequestMethod);\n\n//# sourceURL=webpack:///./src/js/request/index.js?");

/***/ }),

/***/ "./src/js/users/index.js":
/*!*******************************!*\
  !*** ./src/js/users/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.User = undefined;\n\nvar _user = __webpack_require__(/*! ./user */ \"./src/js/users/user.js\");\n\nexports.User = _user.User;\n\n//# sourceURL=webpack:///./src/js/users/index.js?");

/***/ }),

/***/ "./src/js/users/user.js":
/*!******************************!*\
  !*** ./src/js/users/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.User = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ../request/index */ \"./src/js/request/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = exports.User = function () {\n\tfunction User() {\n\t\t_classCallCheck(this, User);\n\t}\n\n\t_createClass(User, [{\n\t\tkey: 'login',\n\t\tvalue: function login(username, password, options) {\n\t\t\tconsole.log(username, password);\n\n\t\t\tfetch('/login', {\n\t\t\t\tmethod: _index.RequestMethod.POST,\n\t\t\t\tbody: \"frewfe\"\n\t\t\t}).then(function (res) {\n\t\t\t\treturn res;\n\t\t\t}).then(function (response) {\n\t\t\t\treturn console.log('Success:', JSON.stringify(response));\n\t\t\t}).catch(function (error) {\n\t\t\t\tconsole.log('Error:', error);\n\n\t\t\t\treturn error;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'signup',\n\t\tvalue: function signup(data) {\n\t\t\tfetch('/signup', {\n\t\t\t\tmethod: _index.RequestMethod.POST,\n\t\t\t\tbody: data\n\t\t\t}).then(function (res) {\n\t\t\t\treturn res;\n\t\t\t}).then(function (response) {\n\t\t\t\treturn console.log('Success:', JSON.stringify(response));\n\t\t\t}).catch(function (error) {\n\t\t\t\tconsole.log('Error:', error);\n\t\t\t\treturn error;\n\t\t\t});\n\t\t}\n\t}], [{\n\t\tkey: 'login',\n\t\tvalue: function login(username, password, options) {\n\t\t\tvar user = new User();\n\t\t\treturn user.login(username, password, options);\n\t\t}\n\t}, {\n\t\tkey: 'signup',\n\t\tvalue: function signup(data) {\n\t\t\tvar user = new User();\n\t\t\treturn user.signup(data);\n\t\t}\n\t}]);\n\n\treturn User;\n}();\n\n//# sourceURL=webpack:///./src/js/users/user.js?");

/***/ })

/******/ });
});