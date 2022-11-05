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

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\n// (이전상태, 액션) 로 다음상태를 만들어주는게 reducer\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    // hydrate를 위해서 index 리듀서를 하나 추가해주는거임\n    // SSR을 위한거임\n    index: function() {\n        let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;\n        switch(action.type){\n            case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n                console.log(\"HYDRATE\", action);\n                return {\n                    ...state,\n                    ...action.payload\n                };\n            // 초기화\n            default:\n                return state;\n        }\n    },\n    // user안에 user initialstate가 들어있음\n    user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    // post안에 post initialstate가 들어있음\n    post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUNuQjtBQUNBO0FBQ2M7QUFFeEMsb0NBQW9DO0FBQ3BDLE1BQU1JLGNBQWNELHNEQUFlQSxDQUFDO0lBQ2xDLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1pFLE9BQU8sV0FBd0I7WUFBdkJDLHlFQUFRLENBQUMsR0FBR0M7UUFDbEIsT0FBUUEsT0FBT0MsSUFBSTtZQUNqQixLQUFLUix1REFBT0E7Z0JBQ1ZTLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtnQkFDdkIsT0FBTztvQkFDTCxHQUFHRCxLQUFLO29CQUNSLEdBQUdDLE9BQU9JLE9BQU87Z0JBQ25CO1lBRUYsTUFBTTtZQUNOO2dCQUNFLE9BQU9MO1FBQ1g7SUFDRjtJQUNBLGlDQUFpQztJQUNqQ0wsSUFBSUEsK0NBQUFBO0lBQ0osaUNBQWlDO0lBQ2pDQyxJQUFJQSwrQ0FBQUE7QUFDTjtBQUVBLCtEQUFlRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2luZGV4LmpzP2I5YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSDroZwg64uk7J2M7IOB7YOc66W8IOunjOuTpOyWtOyjvOuKlOqyjCByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAvLyBoeWRyYXRl66W8IOychO2VtOyEnCBpbmRleCDrpqzrk4DshJzrpbwg7ZWY64KYIOy2lOqwgO2VtOyjvOuKlOqxsOyehFxyXG4gIC8vIFNTUuydhCDsnITtlZzqsbDsnoRcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIC8vIOy0iOq4sO2ZlFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIHVzZXLslYjsl5AgdXNlciBpbml0aWFsc3RhdGXqsIAg65Ok7Ja07J6I7J2MXHJcbiAgdXNlcixcclxuICAvLyBwb3N07JWI7JeQIHBvc3QgaW5pdGlhbHN0YXRl6rCAIOuTpOyWtOyeiOydjFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwidXNlciIsInBvc3QiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n"));

/***/ })

});