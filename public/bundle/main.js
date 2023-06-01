/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/elements.js":
/*!*******************************!*\
  !*** ./public/js/elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChatTextEl: () => (/* binding */ createChatTextEl)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./public/js/index.js\");\n\r\n\r\nconst createChatTextEl = () => {\r\n  const chatBodyEl = document.getElementById(\"chat-body\");\r\n  const textInputEl = document.getElementById(\"chat-text-input\");\r\n  const chatTextEl = document.createElement(\"span\");\r\n  chatTextEl.classList.add(\"chat-text\");\r\n  const inputText = textInputEl.value;\r\n  if (inputText !== \"\") {\r\n    chatTextEl.textContent = inputText;\r\n    chatBodyEl.appendChild(chatTextEl);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.socket.emit(\"message\", chatTextEl.textContent);\r\n    textInputEl.value = \"\";\r\n    console.log(\"textInputEl content\", textInputEl.value);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://chatt/./public/js/elements.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   socket: () => (/* binding */ socket)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./public/js/elements.js\");\n\r\nlet socket = io(\"/\");\r\n\r\nsocket.on(\"connect\", async () => {\r\n  console.log(\"Connected to Socket.io\", socket.id);\r\n  const username = prompt(\"Set a new username\");\r\n  const data = { username };\r\n  if (username) {\r\n    socket.emit(\"new-user\", data);\r\n    socket.on(\"user-exist\", (data) => {\r\n      alert(data.message);\r\n    });\r\n  }\r\n});\r\n\r\nconst buttonEl = document.getElementById(\"chat-text-send-btn\");\r\nbuttonEl.addEventListener(\"click\", () => {\r\n  (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createChatTextEl)();\r\n});\r\n\r\nconst inputEl = document.getElementById(\"chat-text-input\");\r\ninputEl.addEventListener(\"keypress\", (event) => {\r\n  if (event.key == \"Enter\") {\r\n    (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createChatTextEl)();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://chatt/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index.js");
/******/ 	
/******/ })()
;