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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user.js */ \"./reducers/user.js\");\n\n\n\nfunction loginAPI(data1) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data1);\n}\nfunction* logIn(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // axios를 통해 받은 결과\n        // loginAPI(action.data) 라고 생각하면 됨\n        // const result = yield call(loginAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction signUpAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/signUp\", data);\n}\nfunction* signUp(action) {\n    try {\n        // const result = yield call(signUpAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction* watchLogIn() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);\n}\nfunction* watchSignUp() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);\n}\nfunction* userSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVdHO0FBRTdCLFNBQVNtQixTQUFTQyxLQUFJLEVBQUU7SUFDdEIsT0FBT1gsa0RBQVUsQ0FBQyxjQUFjVztBQUNsQztBQUVBLFVBQVVFLE1BQU1DLE1BQU0sRUFBRTtJQUN0QixJQUFJO1FBQ0YsTUFBTWYseURBQUtBLENBQUM7UUFDWixrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLG9EQUFvRDtRQUNwRCxNQUFNTCx1REFBR0EsQ0FBQztZQUNScUIsTUFBTWQsNkRBQWNBO1lBQ3BCLDRCQUE0QjtZQUM1QlUsTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVosNkRBQWNBO1lBQ3BCLGtDQUFrQztZQUNsQ2MsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNRLFlBQVk7SUFDbkIsT0FBT25CLGtEQUFVLENBQUM7QUFDcEI7QUFFQSxVQUFVb0IsU0FBUztJQUNqQixJQUFJO1FBQ0YsTUFBTXJCLHlEQUFLQSxDQUFDO1FBQ1osTUFBTUwsdURBQUdBLENBQUM7WUFDUnFCLE1BQU1ULDhEQUFlQTtRQUV2QjtJQUNGLEVBQUUsT0FBT1UsS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVgsOERBQWVBO1lBQ3JCLGtDQUFrQztZQUNsQ2EsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNVLFlBQVk7SUFDakIsT0FBT3JCLGtEQUFVLENBQUMsZUFBZVc7QUFDbkM7QUFFRixVQUFVVyxPQUFPUixNQUFNLEVBQUU7SUFDdkIsSUFBSTtRQUNGLHdDQUF3QztRQUN4QyxNQUFNZix5REFBS0EsQ0FBQztRQUNaLE1BQU1MLHVEQUFHQSxDQUFDO1lBQ1JxQixNQUFNUCw4REFBZUE7WUFDckJHLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9LLEtBQUs7UUFDWixNQUFNdEIsdURBQUdBLENBQUM7WUFDUnFCLE1BQU1OLDhEQUFlQTtZQUNyQlEsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFVBQVVZLGFBQWE7SUFDckIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxNQUFNMUIsOERBQVVBLENBQUNLLDZEQUFjQSxFQUFFVztBQUNuQztBQUVBLFVBQVVXLGNBQWM7SUFDdEIsTUFBTTNCLDhEQUFVQSxDQUFDUSw4REFBZUEsRUFBRWU7QUFDcEM7QUFFQSxVQUFVSyxjQUFjO0lBQ3RCLE1BQU01Qiw4REFBVUEsQ0FBQ1UsOERBQWVBLEVBQUVlO0FBQ3BDO0FBRWUsVUFBVUksV0FBVztJQUNsQyxNQUFNbkMsdURBQUdBLENBQUM7UUFBQ0Msd0RBQUlBLENBQUMrQjtRQUFhL0Isd0RBQUlBLENBQUNnQztRQUFjaEMsd0RBQUlBLENBQUNpQztLQUFhO0FBQ3BFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9jMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGZvcmssXHJcbiAgY2FsbCxcclxuICBwdXQsXHJcbiAgdGFrZUV2ZXJ5LFxyXG4gIHRha2UsXHJcbiAgdGFrZUxhdGVzdCxcclxuICB0aHJvdHRsZSxcclxuICBkZWxheSxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lOR19VUF9TVUNDRVNTLFxyXG4gIFNJTkdfVVBfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICAvLyBsb2dpbkFQSShhY3Rpb24uZGF0YSkg65286rOgIOyDneqwge2VmOuptCDrkKhcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAvLyDsi6TtjKgg6rKw6rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9zaWduVXBcIiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSU5HX1VQX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSU5HX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgLy8g66Gc6re47J24IOyVoeyFmOydtCDrk6TslrTsmKTrqbQsIGxvZ2luIO2VqOyImOulvCDsi6TtlolcclxuICAvLyDrk6TslrTsmKwg65WMIOq5jOyngCDquLDri6TrprwuIOydtOuypO2KuOumrOyKpOuEiCDqsJnsnYAg7Jet7ZWg7J2EIOyImO2WiVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dJbiksIGZvcmsod2F0Y2hMb2dPdXQpLCBmb3JrKHdhdGNoU2lnblVwKV0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwiY2FsbCIsInB1dCIsInRha2VFdmVyeSIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJkZWxheSIsImF4aW9zIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lOR19VUF9TVUNDRVNTIiwiU0lOR19VUF9GQUlMVVJFIiwibG9naW5BUEkiLCJkYXRhIiwicG9zdCIsImxvZ0luIiwiYWN0aW9uIiwidHlwZSIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n"));

/***/ })

});