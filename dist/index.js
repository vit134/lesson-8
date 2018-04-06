/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-console */\n\nclass Store {\n\tconstructor() {\n\t\tthis._emmiters = [];\n\t}\n\n\tsubscribe(event, handler) {\n\t\tconsole.log(`event ${event} was ON`);\n\t\tthis._emmiters.push({event, handler});\n\t}\n\n\tdispatch(eventName, handler) {\n\t\tconsole.log(`event ${eventName} was OFF`);\n\n\t\tfor (let i = 0; i <= this._emmiters.length; i++) {\n\t\t\tif (this._emmiters[i].event === eventName) {\n\t\t\t\tthis._emmiters.splice(i, 1);\n\t\t\t\thandler();\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\t\n\temit(eventName) {\n\t\tthis._emmiters.forEach(event => {\n\t\t\tif (event.event === eventName) {\n\t\t\t\tconsole.log(`event ${eventName} emit`);\n\t\t\t\tevent.handler();\n\t\t\t}\n\t\t})\n\t}\n}\n\nconst store = new Store();\n\nconst emitter = {\n\ton: function(event, handler) {\n\t\tstore.subscribe(event, handler);\n\t},\n\n\toff: function(event, handler) {\n\t\t// TODO: отписать\n\t\tstore.dispatch(event, handler);\n\t},\n\n\temit: function(event) {\n\t\t// TODO: обработка события\n\t\tstore.emit(event);\n\t}\n}\n\nconst handlerOn = function () {\n\t// что-то делаем\n\tconsole.log('что то делаем');\n};\n\nconst handlerOff = function () {\n\t// что-то делаем\n\n\tconsole.log('off callback');\n};\n\n// подписали\nemitter.on('one', handlerOn);\nemitter.on('two', handlerOn);\nemitter.on('three', handlerOn);\n\n\n// обработали событие\nemitter.emit('one');\nemitter.emit('two');\nemitter.off('three', handlerOff);\nemitter.emit('three');\n\n// отписали\nemitter.off('one', handlerOff);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });