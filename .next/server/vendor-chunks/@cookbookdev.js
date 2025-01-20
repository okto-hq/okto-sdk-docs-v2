"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@cookbookdev";
exports.ids = ["vendor-chunks/@cookbookdev"];
exports.modules = {

/***/ "(ssr)/./node_modules/@cookbookdev/docsbot/dist/react/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cookbookdev/docsbot/dist/react/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AskCookbook)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction AskCookbook({\n  apiKey,\n  alwaysOpen,\n  noFastMode\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {\n    if (!window?.document)\n      return;\n    let element = document.getElementById(\"__cookbook\");\n    if (!element) {\n      element = document.createElement(\"div\");\n      element.id = \"__cookbook\";\n      element.dataset.apiKey = apiKey;\n      if (alwaysOpen) {\n        element.dataset.alwaysOpen = \"\";\n      }\n      if (noFastMode) {\n        element.dataset.noFast = \"\";\n      }\n      document.body.appendChild(element);\n    }\n    let script = document.getElementById(\"__cookbook-script\");\n    if (!script) {\n      script = document.createElement(\"script\");\n      script.src = \"https://cdn.jsdelivr.net/npm/@cookbookdev/docsbot/dist/standalone/index.cjs.js\";\n      script.id = \"__cookbook-script\";\n      script.async = true;\n      document.body.appendChild(script);\n    }\n  }, []);\n  return null;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGNvb2tib29rZGV2L2RvY3Nib3QvZGlzdC9yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2t0by1kb2NzLy4vbm9kZV9tb2R1bGVzL0Bjb29rYm9va2Rldi9kb2NzYm90L2Rpc3QvcmVhY3QvaW5kZXguanM/ZDI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIEFza0Nvb2tib29rKHtcbiAgYXBpS2V5LFxuICBhbHdheXNPcGVuLFxuICBub0Zhc3RNb2RlXG59KSB7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3c/LmRvY3VtZW50KVxuICAgICAgcmV0dXJuO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX2Nvb2tib29rXCIpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtZW50LmlkID0gXCJfX2Nvb2tib29rXCI7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgaWYgKGFsd2F5c09wZW4pIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LmFsd2F5c09wZW4gPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKG5vRmFzdE1vZGUpIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0Lm5vRmFzdCA9IFwiXCI7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX2Nvb2tib29rLXNjcmlwdFwiKTtcbiAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQGNvb2tib29rZGV2L2RvY3Nib3QvZGlzdC9zdGFuZGFsb25lL2luZGV4LmNqcy5qc1wiO1xuICAgICAgc2NyaXB0LmlkID0gXCJfX2Nvb2tib29rLXNjcmlwdFwiO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQge1xuICBBc2tDb29rYm9vayBhcyBkZWZhdWx0XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@cookbookdev/docsbot/dist/react/index.js\n");

/***/ })

};
;