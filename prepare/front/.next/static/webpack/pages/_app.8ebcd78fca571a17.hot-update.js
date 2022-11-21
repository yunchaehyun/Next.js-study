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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nfunction logInAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data);\n}\nfunction* logIn(action) {\n    try {\n        console.log(\"saga logIn\");\n        // const result = yield call(logInAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        // const result = yield call(logOutAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction signUpAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/signUp\");\n}\nfunction* signUp() {\n    try {\n        // const result = yield call(signUpAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_SUCCESS\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction followAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/follow\");\n}\nfunction* follow(action) {\n    try {\n        // const result = yield call(followAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction unfollowAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/unfollow\");\n}\nfunction* unfollow(action) {\n    try {\n        // const result = yield call(unfollowAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_FAILURE,\n            error: err.response.data\n        });\n    }\n}\nfunction* watchFollow() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_REQUEST, follow);\n}\nfunction* watchUnfollow() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_REQUEST, unfollow);\n}\nfunction* watchLogIn() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);\n}\nfunction* watchSignUp() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);\n}\nfunction* userSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnfollow),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVJLGdCQUFnQjtJQUN4QixNQUFNckMsOERBQVVBLENBQUNlLDREQUFnQkEsRUFBRW9CO0FBQ3JDO0FBRUEsVUFBVUcsYUFBYTtJQUNyQixNQUFNdEMsOERBQVVBLENBQUNNLDBEQUFjQSxFQUFFYztBQUNuQztBQUVBLFVBQVVtQixjQUFjO0lBQ3RCLE1BQU12Qyw4REFBVUEsQ0FBQ1MsMkRBQWVBLEVBQUVvQjtBQUNwQztBQUVBLFVBQVVXLGNBQWM7SUFDdEIsTUFBTXhDLDhEQUFVQSxDQUFDWSwyREFBZUEsRUFBRW1CO0FBQ3BDO0FBRWUsVUFBVVUsV0FBVztJQUNsQyxNQUFNN0MsdURBQUdBLENBQUM7UUFDUkUsd0RBQUlBLENBQUNzQztRQUNMdEMsd0RBQUlBLENBQUN1QztRQUNMdkMsd0RBQUlBLENBQUN3QztRQUNMeEMsd0RBQUlBLENBQUN5QztRQUNMekMsd0RBQUlBLENBQUMwQztLQUNOO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYWdhcy91c2VyLmpzP2MyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dJbicpO1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFsbCIsImRlbGF5IiwiZm9yayIsInB1dCIsInRha2VMYXRlc3QiLCJheGlvcyIsIkZPTExPV19GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsImxvZ0luQVBJIiwiZGF0YSIsInBvc3QiLCJsb2dJbiIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n"));

/***/ })

});