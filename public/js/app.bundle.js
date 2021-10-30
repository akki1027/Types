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

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar calculator_1 = __webpack_require__(/*! calculator */ \"./src/ts/calculator.ts\");\n{\n    var calc = new calculator_1.Calculator();\n    console.log(calc.sum(10, 2));\n    console.log(calc.subtract(10, 2));\n    console.log(calc.multiply(10, 2));\n    console.log(calc.divide(10, 2));\n    var sayHello = function (name) {\n        console.log(\"Hello \" + name);\n    };\n    sayHello('Aki');\n}\n\n\n//# sourceURL=webpack://Types/./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/calculator.ts":
/*!******************************!*\
  !*** ./src/ts/calculator.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Calculator = void 0;\n/**\n * @class\n * @description - 計算クラス\n */\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n    }\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xとyを足した数字\n     */\n    Calculator.prototype.sum = function (x, y) {\n        return x + y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xからyを引いた数字\n     */\n    Calculator.prototype.subtract = function (x, y) {\n        return x - y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xとyを掛けた数字\n     */\n    Calculator.prototype.multiply = function (x, y) {\n        return x * y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xからyを割った数字\n     */\n    Calculator.prototype.divide = function (x, y) {\n        return x / y;\n    };\n    return Calculator;\n}());\nexports.Calculator = Calculator;\n\n\n//# sourceURL=webpack://Types/./src/ts/calculator.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/app.ts");
/******/ 	
/******/ })()
;