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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user.js */ \"./reducers/user.js\");\n\n\n\nfunction loginAPI(data1) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data1);\n}\nfunction* logIn(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // axios를 통해 받은 결과\n        // loginAPI(action.data) 라고 생각하면 됨\n        // const result = yield call(loginAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction signUpAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data);\n}\nfunction* signUp(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SING_UP_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction* watchLogIn() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);\n}\nfunction* watchSignUp() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user_js__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);\n}\nfunction* userSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVdHO0FBRTdCLFNBQVNtQixTQUFTQyxLQUFJLEVBQUU7SUFDdEIsT0FBT1gsa0RBQVUsQ0FBQyxjQUFjVztBQUNsQztBQUVBLFVBQVVFLE1BQU1DLE1BQU0sRUFBRTtJQUN0QixJQUFJO1FBQ0YsTUFBTWYseURBQUtBLENBQUM7UUFDWixrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLG9EQUFvRDtRQUNwRCxNQUFNTCx1REFBR0EsQ0FBQztZQUNScUIsTUFBTWQsNkRBQWNBO1lBQ3BCLDRCQUE0QjtZQUM1QlUsTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVosNkRBQWNBO1lBQ3BCLGtDQUFrQztZQUNsQ2MsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNRLFlBQVk7SUFDbkIsT0FBT25CLGtEQUFVLENBQUM7QUFDcEI7QUFFQSxVQUFVb0IsU0FBUztJQUNqQixJQUFJO1FBQ0YsTUFBTXJCLHlEQUFLQSxDQUFDO1FBQ1osTUFBTUwsdURBQUdBLENBQUM7WUFDUnFCLE1BQU1ULDhEQUFlQTtRQUV2QjtJQUNGLEVBQUUsT0FBT1UsS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTVgsOERBQWVBO1lBQ3JCLGtDQUFrQztZQUNsQ2EsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNVLFlBQVk7SUFDakIsT0FBT3JCLGtEQUFVLENBQUMsY0FBY1c7QUFDbEM7QUFFRixVQUFVVyxPQUFPUixNQUFNLEVBQUU7SUFDdkIsSUFBSTtRQUNGLE1BQU1mLHlEQUFLQSxDQUFDO1FBQ1osTUFBTUwsdURBQUdBLENBQUM7WUFDUnFCLE1BQU1QLDhEQUFlQTtZQUNyQkcsTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU10Qix1REFBR0EsQ0FBQztZQUNScUIsTUFBTU4sOERBQWVBO1lBQ3JCUSxPQUFPRCxJQUFJRSxRQUFRLENBQUNQLElBQUk7UUFDMUI7SUFDRjtBQUNGO0FBRUEsVUFBVVksYUFBYTtJQUNyQiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLE1BQU0xQiw4REFBVUEsQ0FBQ0ssNkRBQWNBLEVBQUVXO0FBQ25DO0FBRUEsVUFBVVcsY0FBYztJQUN0QixNQUFNM0IsOERBQVVBLENBQUNRLDhEQUFlQSxFQUFFZTtBQUNwQztBQUVBLFVBQVVLLGNBQWM7SUFDdEIsTUFBTTVCLDhEQUFVQSxDQUFDVSw4REFBZUEsRUFBRWU7QUFDcEM7QUFFZSxVQUFVSSxXQUFXO0lBQ2xDLE1BQU1uQyx1REFBR0EsQ0FBQztRQUFDQyx3REFBSUEsQ0FBQytCO1FBQWEvQix3REFBSUEsQ0FBQ2dDO1FBQWNoQyx3REFBSUEsQ0FBQ2lDO0tBQWE7QUFDcEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYWdhcy91c2VyLmpzP2MyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbGwsXHJcbiAgZm9yayxcclxuICBjYWxsLFxyXG4gIHB1dCxcclxuICB0YWtlRXZlcnksXHJcbiAgdGFrZSxcclxuICB0YWtlTGF0ZXN0LFxyXG4gIHRocm90dGxlLFxyXG4gIGRlbGF5LFxyXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSU5HX1VQX1NVQ0NFU1MsXHJcbiAgU0lOR19VUF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gYXhpb3Prpbwg7Ya17ZW0IOuwm+ydgCDqsrDqs7xcclxuICAgIC8vIGxvZ2luQVBJKGFjdGlvbi5kYXRhKSDrnbzqs6Ag7IOd6rCB7ZWY66m0IOuQqFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lOR19VUF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lOR19VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIC8vIOuhnOq3uOyduCDslaHshZjsnbQg65Ok7Ja07Jik66m0LCBsb2dpbiDtlajsiJjrpbwg7Iuk7ZaJXHJcbiAgLy8g65Ok7Ja07JisIOuVjCDquYzsp4Ag6riw64uk66a8LiDsnbTrsqTtirjrpqzsiqTrhIgg6rCZ7J2AIOyXre2VoOydhCDsiJjtlolcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9nSW4pLCBmb3JrKHdhdGNoTG9nT3V0KSwgZm9yayh3YXRjaFNpZ25VcCldKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYWxsIiwiZm9yayIsImNhbGwiLCJwdXQiLCJ0YWtlRXZlcnkiLCJ0YWtlIiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwiZGVsYXkiLCJheGlvcyIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIlNJR05fVVBfUkVRVUVTVCIsIlNJTkdfVVBfU1VDQ0VTUyIsIlNJTkdfVVBfRkFJTFVSRSIsImxvZ2luQVBJIiwiZGF0YSIsInBvc3QiLCJsb2dJbiIsImFjdGlvbiIsInR5cGUiLCJlcnIiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n"));

/***/ })

});