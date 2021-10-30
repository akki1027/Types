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

/***/ "./src/ts/calculator.ts":
/*!******************************!*\
  !*** ./src/ts/calculator.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Calculator = void 0;\n/**\n * @class\n * @description - 計算クラス\n */\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n    }\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xとyを足した数字\n     */\n    Calculator.prototype.sum = function (x, y) {\n        return x + y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xからyを引いた数字\n     */\n    Calculator.prototype.subtract = function (x, y) {\n        return x - y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xとyを掛けた数字\n     */\n    Calculator.prototype.multiply = function (x, y) {\n        return x * y;\n    };\n    /**\n     *\n     * @param {Number} x - 数字1\n     * @param {Number} y - 数字2\n     * @returns {Number} - xからyを割った数字\n     */\n    Calculator.prototype.divide = function (x, y) {\n        return x / y;\n    };\n    return Calculator;\n}());\nexports.Calculator = Calculator;\n\n\n//# sourceURL=webpack://Types/./src/ts/calculator.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/calculator.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;