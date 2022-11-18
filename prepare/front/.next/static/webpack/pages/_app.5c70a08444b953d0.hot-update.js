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

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user.js */ \"./reducers/user.js\");\n\n\n\nfunction loginAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data);\n}\nfunction* logIn(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // axios를 통해 받은 결과\n        // loginAPI(action.data) 라고 생각하면 됨\n        // const result = yield call(loginAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction* watchLogIn() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(\"LOG_IN_REQUEST\", logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(\"LOG_OUT_REQUEST\", logOut);\n}\nfunction* userSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQUM0RztBQUV0SSxTQUFTZ0IsU0FBU0MsSUFBSSxFQUFFO0lBQ3RCLE9BQU9SLGtEQUFVLENBQUMsY0FBY1E7QUFDbEM7QUFFQSxVQUFVRSxNQUFNQyxNQUFNLEVBQUU7SUFDdEIsSUFBSTtRQUNGLE1BQU1aLHlEQUFLQSxDQUFDO1FBQ1osa0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyxvREFBb0Q7UUFDcEQsTUFBTUwsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1YLDZEQUFjQTtZQUNwQiw0QkFBNEI7WUFDNUJPLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9LLEtBQUs7UUFDWixNQUFNbkIsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1ULDZEQUFjQTtZQUNwQixrQ0FBa0M7WUFDbENXLE9BQU9ELElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFQSxTQUFTUSxZQUFZO0lBQ25CLE9BQU9oQixrREFBVSxDQUFDO0FBQ3BCO0FBRUEsVUFBVWlCLFNBQVM7SUFDakIsSUFBSTtRQUNGLE1BQU1sQix5REFBS0EsQ0FBQztRQUNaLE1BQU1MLHVEQUFHQSxDQUFDO1lBQ1JrQixNQUFNTiw4REFBZUE7UUFFdkI7SUFDRixFQUFFLE9BQU9PLEtBQUs7UUFDWixNQUFNbkIsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1SLDhEQUFlQTtZQUNyQixrQ0FBa0M7WUFDbENVLE9BQU9ELElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFQSxVQUFVVSxhQUFhO0lBQ3JCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsTUFBTXJCLDhEQUFVQSxDQUFDLGtCQUFrQmE7QUFDckM7QUFFQSxVQUFVUyxjQUFjO0lBQ3RCLE1BQU10Qiw4REFBVUEsQ0FBQyxtQkFBbUJvQjtBQUN0QztBQUVlLFVBQVVHLFdBQVc7SUFDbEMsTUFBTTdCLHVEQUFHQSxDQUFDO1FBQUNDLHdEQUFJQSxDQUFDMEI7UUFBYTFCLHdEQUFJQSxDQUFDMkI7S0FBYTtBQUNqRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3VzZXIuanM/YzIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VFdmVyeSxcclxuICB0YWtlLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7TE9HX0lOX1NVQ0NFU1MsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fRkFJTFVSRSwgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTU30gZnJvbSAnLi4vcmVkdWNlcnMvdXNlci5qcyc7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gYXhpb3Prpbwg7Ya17ZW0IOuwm+ydgCDqsrDqs7xcclxuICAgIC8vIGxvZ2luQVBJKGFjdGlvbi5kYXRhKSDrnbzqs6Ag7IOd6rCB7ZWY66m0IOuQqFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgLy8g66Gc6re47J24IOyVoeyFmOydtCDrk6TslrTsmKTrqbQsIGxvZ2luIO2VqOyImOulvCDsi6TtlolcclxuICAvLyDrk6TslrTsmKwg65WMIOq5jOyngCDquLDri6TrprwuIOydtOuypO2KuOumrOyKpOuEiCDqsJnsnYAg7Jet7ZWg7J2EIOyImO2WiVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoXCJMT0dfSU5fUkVRVUVTVFwiLCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFwiTE9HX09VVF9SRVFVRVNUXCIsIGxvZ091dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dJbiksIGZvcmsod2F0Y2hMb2dPdXQpXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFsbCIsImZvcmsiLCJjYWxsIiwicHV0IiwidGFrZUV2ZXJ5IiwidGFrZSIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsImRlbGF5IiwiYXhpb3MiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJsb2dpbkFQSSIsImRhdGEiLCJwb3N0IiwibG9nSW4iLCJhY3Rpb24iLCJ0eXBlIiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsImxvZ091dCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n"));

/***/ })

});