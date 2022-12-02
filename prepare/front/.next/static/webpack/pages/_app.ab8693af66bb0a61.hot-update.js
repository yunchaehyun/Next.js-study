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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\nfunction loadPostsAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/posts\", data);\n}\nfunction* loadPosts(action) {\n    try {\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadPostsAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_SUCCESS,\n            data: result.data\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction addPostAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/post\", {\n        content: data\n    }, {\n        withCredentials: true\n    });\n}\nfunction* addPost(action) {\n    try {\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,\n            data: result.data\n        });\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_TO_ME,\n            data: result.data.id\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction removePostAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"/api/post\", data, {\n        withCredentials: true\n    });\n}\nfunction* removePost(action) {\n    try {\n        // const result = yield call(removePostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_SUCCESS,\n            data: action.data\n        });\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_OF_ME,\n            data: action.data\n        });\n    } catch (err) {\n        console.error(err);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/post/\".concat(data.postId, \"/comment\"), data, {\n        withCredentials: true\n    });\n}\nfunction* addComment(action) {\n    try {\n        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,\n            data: result.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction* watchLoadPosts() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_REQUEST, loadPosts);\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchRemovePost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_REQUEST, removePost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadPosts),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchRemovePost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddComment)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlHLFFBQVEsQ0FBQ1QsSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFFQSxVQUFVc0IsaUJBQWlCO0lBQ3pCLE1BQU12Qyw0REFBUUEsQ0FBQyxNQUFNUyw4REFBa0JBLEVBQUVVO0FBQzNDO0FBRUEsVUFBVXFCLGVBQWU7SUFDdkIsTUFBTXpDLDhEQUFVQSxDQUFDTSw0REFBZ0JBLEVBQUUwQjtBQUNyQztBQUVBLFVBQVVVLGtCQUFrQjtJQUMxQixNQUFNMUMsOERBQVVBLENBQUNhLCtEQUFtQkEsRUFBRXVCO0FBQ3hDO0FBRUEsVUFBVU8sa0JBQWtCO0lBQzFCLE1BQU0zQyw4REFBVUEsQ0FBQ0csK0RBQW1CQSxFQUFFb0M7QUFDeEM7QUFFZSxVQUFVSyxXQUFXO0lBQ2xDLE1BQU1qRCx1REFBR0EsQ0FBQztRQUNSRSx3REFBSUEsQ0FBQzRDO1FBQ0w1Qyx3REFBSUEsQ0FBQzJDO1FBQ0wzQyx3REFBSUEsQ0FBQzZDO1FBQ0w3Qyx3REFBSUEsQ0FBQzhDO0tBQ047QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanM/OThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIGFsbCxcclxuICBkZWxheSxcclxuICBmb3JrLFxyXG4gIHB1dCxcclxuICBjYWxsLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgZ2VuZXJhdGVEdW1teVBvc3QsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFxyXG4gICAgJy9wb3N0JyxcclxuICAgIHsgY29udGVudDogZGF0YSB9LFxyXG4gICAge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9LFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYWxsIiwiZGVsYXkiLCJmb3JrIiwicHV0IiwiY2FsbCIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsImdlbmVyYXRlRHVtbXlQb3N0IiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvYWRQb3N0c0FQSSIsImRhdGEiLCJnZXQiLCJsb2FkUG9zdHMiLCJhY3Rpb24iLCJyZXN1bHQiLCJ0eXBlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNvbnRlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhZGRQb3N0IiwiaWQiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});