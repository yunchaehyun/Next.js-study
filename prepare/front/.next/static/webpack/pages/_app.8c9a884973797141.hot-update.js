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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\nfunction addPostAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\", data);\n}\nfunction* addPost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        const id = shortid__WEBPACK_IMPORTED_MODULE_2___default().generate();\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: {\n                id,\n                content: action.data\n            }\n        });\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_TO_ME,\n            data: id\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\nfunction* addComment(action) {\n    try {\n        // const result = yield call(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // 게시글의 id\n        const id = shortid__WEBPACK_IMPORTED_MODULE_2___default().generate();\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchRemovePost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_REQUEST, removePost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVNEI7QUFDRjtBQUNJO0FBV0o7QUFDd0I7QUFFbEQsU0FBU3FCLFdBQVdDLElBQUksRUFBRTtJQUN4QiwwQkFBMEI7SUFDMUIsT0FBT2Isa0RBQVUsQ0FBQyxhQUFhYTtBQUNqQztBQUVBLFVBQVVFLFFBQVFDLE1BQU0sRUFBRTtJQUN4QixJQUFJO1FBQ0YsTUFBTWpCLHlEQUFLQSxDQUFDO1FBQ1osTUFBTWtCLEtBQUtoQix1REFBZ0I7UUFDM0Isa0JBQWtCO1FBQ2xCLHNEQUFzRDtRQUN0RCxNQUFNUCx1REFBR0EsQ0FBQztZQUNSeUIsTUFBTWhCLDREQUFnQkE7WUFDdEIsNEJBQTRCO1lBQzVCVSxNQUFNO2dCQUNKSTtnQkFDQUcsU0FBU0osT0FBT0gsSUFBSTtZQUN0QjtRQUNGO1FBQ0EsTUFBTW5CLHVEQUFHQSxDQUFDO1lBQ1J5QixNQUFNUiwwREFBY0E7WUFDcEJFLE1BQU1JO1FBQ1I7SUFDRixFQUFFLE9BQU9JLEtBQUs7UUFDWixNQUFNM0IsdURBQUdBLENBQUM7WUFDUnlCLE1BQU1mLDREQUFnQkE7WUFDdEIsa0NBQWtDO1lBQ2xDa0IsT0FBT0QsSUFBSUUsUUFBUSxDQUFDVixJQUFJO1FBQzFCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNXLGNBQWNYLElBQUksRUFBRTtJQUMzQiwwQkFBMEI7SUFDMUIsT0FBT2Isa0RBQVUsQ0FBQyxhQUF5QixPQUFaYSxLQUFLWSxNQUFNLEVBQUMsYUFBV1o7QUFDeEQ7QUFFQSxVQUFVYSxXQUFXVixNQUFNLEVBQUU7SUFDM0IsSUFBSTtRQUNGLHlEQUF5RDtRQUN6RCxNQUFNakIseURBQUtBLENBQUM7UUFDWixVQUFVO1FBQ1YsTUFBTWtCLEtBQUtoQix1REFBZ0I7UUFDM0IsTUFBTVAsdURBQUdBLENBQUM7WUFDUnlCLE1BQU1iLCtEQUFtQkE7WUFDekJPLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9RLEtBQUs7UUFDWixNQUFNM0IsdURBQUdBLENBQUM7WUFDUnlCLE1BQU1aLCtEQUFtQkE7WUFDekJNLE1BQU1RLElBQUlFLFFBQVEsQ0FBQ1YsSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFDQSxVQUFVYyxlQUFlO0lBQ3ZCLE1BQU05Qiw4REFBVUEsQ0FBQ0ssNERBQWdCQSxFQUFFYTtBQUNyQztBQUNBLFVBQVVhLGtCQUFrQjtJQUMxQixNQUFNL0IsOERBQVVBLENBQUNXLCtEQUFtQkEsRUFBRXFCO0FBQ3hDO0FBQ0EsVUFBVUMsa0JBQWtCO0lBQzFCLE1BQU1qQyw4REFBVUEsQ0FBQ1EsK0RBQW1CQSxFQUFFcUI7QUFDeEM7QUFDZSxVQUFVSyxXQUFXO0lBQ2xDLE1BQU14Qyx1REFBR0EsQ0FBQztRQUFDQyx3REFBSUEsQ0FBQ21DO1FBQWVuQyx3REFBSUEsQ0FBQ3NDO1FBQWtCdEMsd0RBQUlBLENBQUNvQztLQUFpQjtBQUM5RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanM/OThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VFdmVyeSxcclxuICB0YWtlLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAvLyBkYXRhOiDqsozsi5ztlaAgcG9zdOyXkCDrjIDtlZwgZGF0YVxyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIC8vIGRhdGE6IOqyjOyLnO2VoCBwb3N07JeQIOuMgO2VnCBkYXRhXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g6rKM7Iuc6riA7J2YIGlkXHJcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KSwgZm9yayh3YXRjaFJlbW92ZVBvc3QpXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFsbCIsImZvcmsiLCJjYWxsIiwicHV0IiwidGFrZUV2ZXJ5IiwidGFrZSIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsImRlbGF5IiwiYXhpb3MiLCJzaG9ydElkIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJhZGRQb3N0QVBJIiwiZGF0YSIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwiaWQiLCJnZW5lcmF0ZSIsInR5cGUiLCJjb250ZW50IiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwicmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});