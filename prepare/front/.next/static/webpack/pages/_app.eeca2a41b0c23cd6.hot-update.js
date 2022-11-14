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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ rootSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nfunction loginAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/login\", data);\n}\nfunction* logIn() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_REQUEST\"\n        });\n        // axios를 통해 받은 결과\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loginAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_SUCCESS\",\n            // 성공 결과는 result.data에 담겨 있음\n            data: result.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"LOG_IN_FAILURE\",\n            // 실패 결과는 err.response.data에 담겨 있음\n            data: err.response.data\n        });\n    }\n}\nfunction logOutAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/logout\");\n}\nfunction* logOut() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_REQUEST\"\n        });\n        // axios를 통해 받은 결과\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logOutAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_SUCCESS\",\n            // 성공 결과는 result.data에 담겨 있음\n            data: result.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_FAILURE\",\n            // 실패 결과는 err.response.data에 담겨 있음\n            data: err.response.data\n        });\n    }\n}\nfunction addPostAPI() {\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\");\n}\nfunction* addPost() {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_REQUEST\"\n        });\n        // axios를 통해 받은 결과\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_SUCCESS\",\n            // 성공 결과는 result.data에 담겨 있음\n            data: result.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: \"ADD_POST_FAILURE\",\n            // 실패 결과는 err.response.data에 담겨 있음\n            data: err.response.data\n        });\n    }\n}\nfunction* watchLogin() {\n    // 로그인 액션이 들어오면, login 함수를 실행\n    // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"LOG_IN_REQUEST\", logIn);\n}\nfunction* watchLogOut() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"ADD_POST_REQUEST\", logOut);\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.take)(\"ADD_POST_REQUEST\", addPost);\n}\nfunction* rootSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogin),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7QUFDdEM7QUFFMUIsU0FBU00sU0FBU0MsSUFBSSxFQUFFO0lBQ3RCLE9BQU9GLGtEQUFVLENBQUMsY0FBY0U7QUFDbEM7QUFFQSxVQUFVRSxRQUFRO0lBQ2hCLElBQUk7UUFDRixNQUFNTix1REFBR0EsQ0FBQztZQUNSTyxNQUFNO1FBQ1I7UUFDQSxrQkFBa0I7UUFDbEIsTUFBTUMsU0FBUyxNQUFNVCx3REFBSUEsQ0FBQ0k7UUFDMUIsTUFBTUgsdURBQUdBLENBQUM7WUFDUk8sTUFBTTtZQUNOLDRCQUE0QjtZQUM1QkgsTUFBTUksT0FBT0osSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU1ULHVEQUFHQSxDQUFDO1lBQ1JPLE1BQU07WUFDTixrQ0FBa0M7WUFDbENILE1BQU1LLElBQUlDLFFBQVEsQ0FBQ04sSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFFQSxTQUFTTyxZQUFZO0lBQ25CLE9BQU9ULGtEQUFVLENBQUM7QUFDcEI7QUFFQSxVQUFVVSxTQUFTO0lBQ2pCLElBQUk7UUFDRixNQUFNWix1REFBR0EsQ0FBQztZQUNSTyxNQUFNO1FBQ1I7UUFDQSxrQkFBa0I7UUFDbEIsTUFBTUMsU0FBUyxNQUFNVCx3REFBSUEsQ0FBQ1k7UUFDMUIsTUFBTVgsdURBQUdBLENBQUM7WUFDUk8sTUFBTTtZQUNOLDRCQUE0QjtZQUM1QkgsTUFBTUksT0FBT0osSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU1ULHVEQUFHQSxDQUFDO1lBQ1JPLE1BQU07WUFDTixrQ0FBa0M7WUFDbENILE1BQU1LLElBQUlDLFFBQVEsQ0FBQ04sSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFFQSxTQUFTUyxhQUFhO0lBQ3BCLE9BQU9YLGtEQUFVLENBQUM7QUFDcEI7QUFFQSxVQUFVWSxVQUFVO0lBQ2xCLElBQUk7UUFDRixNQUFNZCx1REFBR0EsQ0FBQztZQUNSTyxNQUFNO1FBQ1I7UUFDQSxrQkFBa0I7UUFDbEIsTUFBTUMsU0FBUyxNQUFNVCx3REFBSUEsQ0FBQ2M7UUFDMUIsTUFBTWIsdURBQUdBLENBQUM7WUFDUk8sTUFBTTtZQUNOLDRCQUE0QjtZQUM1QkgsTUFBTUksT0FBT0osSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU1ULHVEQUFHQSxDQUFDO1lBQ1JPLE1BQU07WUFDTixrQ0FBa0M7WUFDbENILE1BQU1LLElBQUlDLFFBQVEsQ0FBQ04sSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFDQSxVQUFVVyxhQUFhO0lBQ3JCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsTUFBTWQsd0RBQUlBLENBQUMsa0JBQWtCSztBQUMvQjtBQUVBLFVBQVVVLGNBQWM7SUFDdEIsTUFBTWYsd0RBQUlBLENBQUMsb0JBQW9CVztBQUNqQztBQUVBLFVBQVVLLGVBQWU7SUFDdkIsTUFBTWhCLHdEQUFJQSxDQUFDLG9CQUFvQmE7QUFDakM7QUFFZSxVQUFVSSxXQUFXO0lBQ2xDLE1BQU1yQix1REFBR0EsQ0FBQztRQUFDQyx3REFBSUEsQ0FBQ2lCO1FBQWFqQix3REFBSUEsQ0FBQ2tCO1FBQWNsQix3REFBSUEsQ0FBQ21CO0tBQWM7QUFDckUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYWdhcy9pbmRleC5qcz9kMDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX1JFUVVFU1RcIixcclxuICAgIH0pO1xyXG4gICAgLy8gYXhpb3Prpbwg7Ya17ZW0IOuwm+ydgCDqsrDqs7xcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJMT0dfSU5fU1VDQ0VTU1wiLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX0ZBSUxVUkVcIixcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJBRERfUE9TVF9SRVFVRVNUXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkFERF9QT1NUX1NVQ0NFU1NcIixcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkFERF9QT1NUX0ZBSUxVUkVcIixcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJBRERfUE9TVF9SRVFVRVNUXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJBRERfUE9TVF9TVUNDRVNTXCIsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJBRERfUE9TVF9GQUlMVVJFXCIsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAvLyDroZzqt7jsnbgg7JWh7IWY7J20IOuTpOyWtOyYpOuptCwgbG9naW4g7ZWo7IiY66W8IOyLpO2WiVxyXG4gIC8vIOuTpOyWtOyYrCDrlYwg6rmM7KeAIOq4sOuLpOumvC4g7J2067Kk7Yq466as7Iqk64SIIOqwmeydgCDsl63tlaDsnYQg7IiY7ZaJXHJcbiAgeWllbGQgdGFrZShcIkxPR19JTl9SRVFVRVNUXCIsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2UoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hMb2dPdXQpLCBmb3JrKHdhdGNoQWRkUG9zdCldKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYWxsIiwiZm9yayIsImNhbGwiLCJwdXQiLCJ0YWtlIiwiYXhpb3MiLCJsb2dpbkFQSSIsImRhdGEiLCJwb3N0IiwibG9nSW4iLCJ0eXBlIiwicmVzdWx0IiwiZXJyIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoQWRkUG9zdCIsInJvb3RTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n"));

/***/ })

});