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

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ rootSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nfunction loginAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\");\n}\nfunction* login() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_REQUEST\"\n        });\n        // axios를 통해 받은 결과\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loginAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_SUCCESS\",\n            // 성공 결과는 result.data에 담겨 있음\n            data: result.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_FAILURE\",\n            // 실패 결과는 err.response.data에 담겨 있음\n            data: err.response.data\n        });\n    }\n}\nfunction* watchLogin() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"LOG_IN_REQUEST\", login);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"LOG_OUT_REQUEST\");\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"ADD_POST_REQUEST\");\n}\nfunction* rootSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogin),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7QUFDdEM7QUFFMUIsU0FBU00sV0FBVztJQUNsQixPQUFPRCxrREFBVSxDQUFDO0FBQ3BCO0FBRUEsVUFBVUcsUUFBUTtJQUNoQixJQUFJO1FBQ0YsTUFBTUwsdURBQUdBLENBQUM7WUFDTk0sTUFBTTtRQUNSO1FBQ0Ysa0JBQWtCO1FBQ2xCLE1BQU1DLFNBQVMsTUFBTVIsd0RBQUlBLENBQUNJO1FBQzFCLE1BQU1ILHVEQUFHQSxDQUFDO1lBQ1JNLE1BQU07WUFDTiw0QkFBNEI7WUFDNUJFLE1BQU1ELE9BQU9DLElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9DLEtBQUs7UUFDWixNQUFNVCx1REFBR0EsQ0FBQztZQUNSTSxNQUFNO1lBQ04sa0NBQWtDO1lBQ2xDRSxNQUFNQyxJQUFJQyxRQUFRLENBQUNGLElBQUk7UUFDekI7SUFDRjtBQUNGO0FBRUEsVUFBVUcsYUFBYTtJQUNyQiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLE1BQU1WLHdEQUFJQSxDQUFDLGtCQUFrQkk7QUFDL0I7QUFFQSxVQUFVTyxjQUFjO0lBQ3RCLE1BQU1YLHdEQUFJQSxDQUFDO0FBQ2I7QUFFQSxVQUFVWSxlQUFlO0lBQ3ZCLE1BQU1aLHdEQUFJQSxDQUFDO0FBQ2I7QUFFZSxVQUFVYSxXQUFXO0lBQ2xDLE1BQU1qQix1REFBR0EsQ0FBQztRQUFDQyx3REFBSUEsQ0FBQ2E7UUFBYWIsd0RBQUlBLENBQUNjO1FBQWNkLHdEQUFJQSxDQUFDZTtLQUFjO0FBQ3JFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanM/ZDA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogXCJMT0dfSU5fUkVRVUVTVFwiLFxyXG4gICAgICB9KTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX1NVQ0NFU1NcIixcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgLy8g66Gc6re47J24IOyVoeyFmOydtCDrk6TslrTsmKTrqbQsIGxvZ2luIO2VqOyImOulvCDsi6TtlolcclxuICAvLyDrk6TslrTsmKwg65WMIOq5jOyngCDquLDri6TrprwuIOydtOuypO2KuOumrOyKpOuEiCDqsJnsnYAg7Jet7ZWg7J2EIOyImO2WiVxyXG4gIHlpZWxkIHRha2UoXCJMT0dfSU5fUkVRVUVTVFwiLCBsb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlKFwiTE9HX09VVF9SRVFVRVNUXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2UoXCJBRERfUE9TVF9SRVFVRVNUXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9naW4pLCBmb3JrKHdhdGNoTG9nT3V0KSwgZm9yayh3YXRjaEFkZFBvc3QpXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFsbCIsImZvcmsiLCJjYWxsIiwicHV0IiwidGFrZSIsImF4aW9zIiwibG9naW5BUEkiLCJwb3N0IiwibG9naW4iLCJ0eXBlIiwicmVzdWx0IiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hBZGRQb3N0Iiwicm9vdFNhZ2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n"));

/***/ })

});