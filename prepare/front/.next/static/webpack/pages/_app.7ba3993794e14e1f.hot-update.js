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

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\n\nfunction addPostAPI(data) {\n    //data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\", data);\n}\nfunction* addPost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST\n        });\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    //data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\nfunction* addComment(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST\n        });\n        // axios를 통해 받은 결과\n        // const result = yield call(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVFBO0FBRTFCLFNBQVNnQixXQUFXQyxJQUFJLEVBQUU7SUFDeEIseUJBQXlCO0lBQ3pCLE9BQU9SLGtEQUFVLENBQUMsYUFBYVE7QUFDakM7QUFFQSxVQUFVRSxRQUFRQyxNQUFNLEVBQUU7SUFDeEIsSUFBSTtRQUNGLE1BQU1aLHlEQUFLQSxDQUFDO1FBRVosTUFBTUwsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1YLDREQUFnQkE7UUFDeEI7UUFDQSxrQkFBa0I7UUFDbEIsc0RBQXNEO1FBQ3RELE1BQU1QLHVEQUFHQSxDQUFDO1lBQ1JrQixNQUFNViw0REFBZ0JBO1lBQ3RCLDRCQUE0QjtZQUM1Qk0sTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU1uQix1REFBR0EsQ0FBQztZQUNSa0IsTUFBTVQsNERBQWdCQTtZQUN0QixrQ0FBa0M7WUFDbENXLE9BQU9ELElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFQSxTQUFTUSxjQUFjUixJQUFJLEVBQUU7SUFDM0IseUJBQXlCO0lBQ3pCLE9BQU9SLGtEQUFVLENBQUMsYUFBeUIsT0FBWlEsS0FBS1MsTUFBTSxFQUFDLGFBQVdUO0FBQ3hEO0FBRUEsVUFBVVUsV0FBV1AsTUFBTSxFQUFFO0lBQzNCLElBQUk7UUFDRixNQUFNWix5REFBS0EsQ0FBQztRQUVaLE1BQU1MLHVEQUFHQSxDQUFDO1lBQ1JrQixNQUFNUiwrREFBbUJBO1FBQzNCO1FBQ0Esa0JBQWtCO1FBQ2xCLHlEQUF5RDtRQUN6RCxNQUFNVix1REFBR0EsQ0FBQztZQUNSa0IsTUFBTVAsK0RBQW1CQTtZQUN6Qiw0QkFBNEI7WUFDNUJHLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9LLEtBQUs7UUFDWixNQUFNbkIsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1OLCtEQUFtQkE7WUFDekIsa0NBQWtDO1lBQ2xDUSxPQUFPRCxJQUFJRSxRQUFRLENBQUNQLElBQUk7UUFDMUI7SUFDRjtBQUNGO0FBQ0EsVUFBVVcsZUFBZTtJQUN2QixNQUFNdEIsOERBQVVBLENBQUNJLDREQUFnQkEsRUFBRVM7QUFDckM7QUFFQSxVQUFVVSxrQkFBa0I7SUFDMUIsTUFBTXZCLDhEQUFVQSxDQUFDTywrREFBbUJBLEVBQUVjO0FBQ3hDO0FBRWUsVUFBVUcsV0FBVztJQUNsQyxNQUFNOUIsdURBQUdBLENBQUM7UUFBQ0Msd0RBQUlBLENBQUMyQjtRQUFlM0Isd0RBQUlBLENBQUM0QjtLQUFpQjtBQUN2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanM/OThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VFdmVyeSxcclxuICB0YWtlLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIC8vZGF0YTog6rKM7Iuc7ZWgIHBvc3Tsl5Ag64yA7ZWcIGRhdGFcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgLy9kYXRhOiDqsozsi5ztlaAgcG9zdOyXkCDrjIDtlZwgZGF0YVxyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgLy8gYXhpb3Prpbwg7Ya17ZW0IOuwm+ydgCDqsrDqs7xcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAvLyDsi6TtjKgg6rKw6rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KV0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwiY2FsbCIsInB1dCIsInRha2VFdmVyeSIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJkZWxheSIsImF4aW9zIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJwb3N0IiwiYWRkUG9zdCIsImFjdGlvbiIsInR5cGUiLCJlcnIiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});