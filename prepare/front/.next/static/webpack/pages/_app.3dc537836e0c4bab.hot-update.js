"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index.js */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n// ../store/configureStore.js\n\n\n\n\n\n\n// store : state와 reducer를 포함한 개념이라고 보면 됨\nconst configureStore = ()=>{\n    // saga middleware 생성\n    const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    // middleware 배열안에 saga나 thunk 같은걸 넣음\n    const middlewares = [\n        sagaMiddleware\n    ];\n    const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)(...middlewares));\n    const store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(_reducers_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, // 옵션 객체\n{\n    debug: \"development\" === \"development\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkJBQTZCO0FBQ3NCO0FBQ1c7QUFFQztBQUNqQjtBQUVIO0FBQ1g7QUFFaEMseUNBQXlDO0FBQ3pDLE1BQU1RLGlCQUFpQixJQUFNO0lBQzNCLHFCQUFxQjtJQUNyQixNQUFNQyxpQkFBaUJKLHNEQUFvQkE7SUFDM0MscUNBQXFDO0lBQ3JDLE1BQU1LLGNBQWM7UUFBQ0Q7S0FBZTtJQUNwQyxNQUFNRSxXQUNKQyxNQUFxQyxHQUVqQ1YsQ0FBd0NRLEdBRXhDTiw2RUFBbUJBLENBQUNILHNEQUFlQSxJQUFJUyxhQUFhO0lBQzFELE1BQU1HLFFBQVFWLGtEQUFXQSxDQUFDRywwREFBT0EsRUFBRUs7SUFDbkNFLE1BQU1DLFFBQVEsR0FBR0wsZUFBZU0sR0FBRyxDQUFDUiw4Q0FBUUE7SUFDNUMsT0FBT007QUFDVDtBQUVBLE1BQU1HLFVBQVVoQixpRUFBYUEsQ0FDM0JRLGdCQUNBLFFBQVE7QUFDUjtJQUFFUyxPQUFPTCxrQkFBeUI7QUFBYztBQUdsRCwrREFBZUksT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz9mMjAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbi8vIHN0b3JlIDogc3RhdGXsmYAgcmVkdWNlcuulvCDtj6ztlajtlZwg6rCc64WQ7J2065286rOgIOuztOuptCDrkKhcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgLy8gc2FnYSBtaWRkbGV3YXJlIOyDneyEsVxyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAvLyBtaWRkbGV3YXJlIOuwsOyXtOyViOyXkCBzYWdh64KYIHRodW5rIOqwmeydgOqxuCDrhKPsnYxcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gLy8g67Cw7Y+s7JqpXHJcbiAgICAgICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IC8vIOqwnOuwnOyaqSBkZXZ0b29sIOyXsOqysFxyXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKFxyXG4gIGNvbmZpZ3VyZVN0b3JlLFxyXG4gIC8vIOyYteyFmCDqsJ3ssrRcclxuICB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVXcmFwcGVyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicmVkdWNlciIsInJvb3RTYWdhIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJwcm9jZXNzIiwic3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n"));

/***/ })

});