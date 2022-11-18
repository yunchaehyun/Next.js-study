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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user.js */ \"./reducers/user.js\");\n\n\n\nfunction loginAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data);\n}\nfunction* logIn(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // axios를 통해 받은 결과\n        // loginAPI(action.data) 라고 생각하면 됨\n        // const result = yield call(loginAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction signUpAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/signUp\");\n}\nfunction* signUp(action) {\n    try {\n        // const result = yield call(signUpAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_SUCCESS\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction* watchLogIn() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);\n}\nfunction* watchSignUp() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);\n}\nfunction* userSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVdHO0FBRTdCLFNBQVNtQixTQUFTQyxJQUFJLEVBQUU7SUFDdEIsT0FBT1gsa0RBQVUsQ0FBQyxjQUFjVztBQUNsQztBQUVBLFVBQVVFLE1BQU1DLE1BQU0sRUFBRTtJQUN0QixJQUFJO1FBQ0YsTUFBTWYseURBQUtBLENBQUM7UUFDWixrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLG9EQUFvRDtRQUNwRCxNQUFNTCx1REFBR0EsQ0FBQztZQUNScUIsTUFBTWQsNkRBQWNBO1lBQ3BCLDRCQUE0QjtZQUM1QlUsTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVosNkRBQWNBO1lBQ3BCLGtDQUFrQztZQUNsQ2MsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNRLFlBQVk7SUFDbkIsT0FBT25CLGtEQUFVLENBQUM7QUFDcEI7QUFFQSxVQUFVb0IsU0FBUztJQUNqQixJQUFJO1FBQ0YsTUFBTXJCLHlEQUFLQSxDQUFDO1FBQ1osTUFBTUwsdURBQUdBLENBQUM7WUFDUnFCLE1BQU1ULDhEQUFlQTtRQUV2QjtJQUNGLEVBQUUsT0FBT1UsS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVgsOERBQWVBO1lBQ3JCLGtDQUFrQztZQUNsQ2EsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNVLFlBQVk7SUFDakIsT0FBT3JCLGtEQUFVLENBQUM7QUFDcEI7QUFFRixVQUFVc0IsT0FBT1IsTUFBTSxFQUFFO0lBQ3ZCLElBQUk7UUFDRix3Q0FBd0M7UUFDeEMsTUFBTWYseURBQUtBLENBQUM7UUFDWixNQUFNTCx1REFBR0EsQ0FBQztZQUNScUIsTUFBTVAsOERBQWVBO1FBQ3ZCO0lBQ0YsRUFBRSxPQUFPUSxLQUFLO1FBQ1osTUFBTXRCLHVEQUFHQSxDQUFDO1lBQ1JxQixNQUFNTiw4REFBZUE7WUFDckJRLE9BQU9ELElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFQSxVQUFVWSxhQUFhO0lBQ3JCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsTUFBTTFCLDhEQUFVQSxDQUFDSyw2REFBY0EsRUFBRVc7QUFDbkM7QUFFQSxVQUFVVyxjQUFjO0lBQ3RCLE1BQU0zQiw4REFBVUEsQ0FBQ1EsOERBQWVBLEVBQUVlO0FBQ3BDO0FBRUEsVUFBVUssY0FBYztJQUN0QixNQUFNNUIsOERBQVVBLENBQUNVLDhEQUFlQSxFQUFFZTtBQUNwQztBQUVlLFVBQVVJLFdBQVc7SUFDbEMsTUFBTW5DLHVEQUFHQSxDQUFDO1FBQUNDLHdEQUFJQSxDQUFDK0I7UUFBYS9CLHdEQUFJQSxDQUFDZ0M7UUFBY2hDLHdEQUFJQSxDQUFDaUM7S0FBYTtBQUNwRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3VzZXIuanM/YzIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VFdmVyeSxcclxuICB0YWtlLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJTkdfVVBfU1VDQ0VTUyxcclxuICBTSU5HX1VQX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXIuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4gICAgLy8gbG9naW5BUEkoYWN0aW9uLmRhdGEpIOudvOqzoCDsg53qsIHtlZjrqbQg65CoXHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAvLyDsi6TtjKgg6rKw6rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvc2lnblVwXCIpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lOR19VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSU5HX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgLy8g66Gc6re47J24IOyVoeyFmOydtCDrk6TslrTsmKTrqbQsIGxvZ2luIO2VqOyImOulvCDsi6TtlolcclxuICAvLyDrk6TslrTsmKwg65WMIOq5jOyngCDquLDri6TrprwuIOydtOuypO2KuOumrOyKpOuEiCDqsJnsnYAg7Jet7ZWg7J2EIOyImO2WiVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dJbiksIGZvcmsod2F0Y2hMb2dPdXQpLCBmb3JrKHdhdGNoU2lnblVwKV0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwiY2FsbCIsInB1dCIsInRha2VFdmVyeSIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJkZWxheSIsImF4aW9zIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lOR19VUF9TVUNDRVNTIiwiU0lOR19VUF9GQUlMVVJFIiwibG9naW5BUEkiLCJkYXRhIiwicG9zdCIsImxvZ0luIiwiYWN0aW9uIiwidHlwZSIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n"));

/***/ })

});