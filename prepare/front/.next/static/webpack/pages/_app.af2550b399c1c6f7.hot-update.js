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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\n\nfunction addPostAPI(data) {\n    //data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\", data);\n}\nfunction* addPost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST\n        });\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    //data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/comment\", data);\n}\nfunction* addComment(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST\n        });\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVFBO0FBRTFCLFNBQVNnQixXQUFXQyxJQUFJLEVBQUU7SUFDeEIseUJBQXlCO0lBQ3pCLE9BQU9SLGtEQUFVLENBQUMsYUFBYVE7QUFDakM7QUFFQSxVQUFVRSxRQUFRQyxNQUFNLEVBQUU7SUFDeEIsSUFBSTtRQUNGLE1BQU1aLHlEQUFLQSxDQUFDO1FBRVosTUFBTUwsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1YLDREQUFnQkE7UUFDeEI7UUFDQSxrQkFBa0I7UUFDbEIsc0RBQXNEO1FBQ3RELE1BQU1QLHVEQUFHQSxDQUFDO1lBQ1JrQixNQUFNViw0REFBZ0JBO1lBQ3RCLDRCQUE0QjtZQUM1Qk0sTUFBTUcsT0FBT0gsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaLE1BQU1uQix1REFBR0EsQ0FBQztZQUNSa0IsTUFBTVQsNERBQWdCQTtZQUN0QixrQ0FBa0M7WUFDbENXLE9BQU9ELElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFQSxTQUFTUSxjQUFjUixJQUFJLEVBQUU7SUFDekIseUJBQXlCO0lBQ3pCLE9BQU9SLGtEQUFVLENBQUMsZ0JBQWdCUTtBQUNwQztBQUdGLFVBQVVTLFdBQVdOLE1BQU0sRUFBRTtJQUN6QixJQUFJO1FBQ0YsTUFBTVoseURBQUtBLENBQUM7UUFFWixNQUFNTCx1REFBR0EsQ0FBQztZQUNSa0IsTUFBTVIsK0RBQW1CQTtRQUMzQjtRQUNBLGtCQUFrQjtRQUNsQixzREFBc0Q7UUFDdEQsTUFBTVYsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1QLCtEQUFtQkE7WUFDekIsNEJBQTRCO1lBQzVCRyxNQUFNRyxPQUFPSCxJQUFJO1FBQ25CO0lBQ0YsRUFBRSxPQUFPSyxLQUFLO1FBQ1osTUFBTW5CLHVEQUFHQSxDQUFDO1lBQ1JrQixNQUFNTiwrREFBbUJBO1lBQ3pCLGtDQUFrQztZQUNsQ1EsT0FBT0QsSUFBSUUsUUFBUSxDQUFDUCxJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUNGLFVBQVVVLGVBQWU7SUFDdkIsTUFBTXJCLDhEQUFVQSxDQUFDSSw0REFBZ0JBLEVBQUVTO0FBQ3JDO0FBRUEsVUFBVVMsa0JBQWtCO0lBQ3hCLE1BQU10Qiw4REFBVUEsQ0FBQ08sK0RBQW1CQSxFQUFFYTtBQUMxQztBQUVlLFVBQVVHLFdBQVc7SUFDbEMsTUFBTTdCLHVEQUFHQSxDQUFDO1FBQUNDLHdEQUFJQSxDQUFDMEI7UUFBZTFCLHdEQUFJQSxDQUFDMkI7S0FBaUI7QUFDdkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYWdhcy9wb3N0LmpzPzk4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbGwsXHJcbiAgZm9yayxcclxuICBjYWxsLFxyXG4gIHB1dCxcclxuICB0YWtlRXZlcnksXHJcbiAgdGFrZSxcclxuICB0YWtlTGF0ZXN0LFxyXG4gIHRocm90dGxlLFxyXG4gIGRlbGF5LFxyXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAvL2RhdGE6IOqyjOyLnO2VoCBwb3N07JeQIOuMgO2VnCBkYXRhXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgLy9kYXRhOiDqsozsi5ztlaAgcG9zdOyXkCDrjIDtlZwgZGF0YVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRcIiwgZGF0YSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICBcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gYXhpb3Prpbwg7Ya17ZW0IOuwm+ydgCDqsrDqs7xcclxuICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KV0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwiY2FsbCIsInB1dCIsInRha2VFdmVyeSIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJkZWxheSIsImF4aW9zIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJwb3N0IiwiYWRkUG9zdCIsImFjdGlvbiIsInR5cGUiLCJlcnIiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});