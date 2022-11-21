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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\nfunction loadPostsAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/post\", data);\n}\nfunction* loadPosts(action) {\n    try {\n        // const result = yield call(loadPostsAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_SUCCESS,\n            data: (0,_reducers_post__WEBPACK_IMPORTED_MODULE_3__.generateDummyPost)(10)\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction addPostAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\", data);\n}\nfunction* addPost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        const id = shortid__WEBPACK_IMPORTED_MODULE_2___default().generate();\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: {\n                id,\n                content: action.data\n            }\n        });\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_TO_ME,\n            data: id\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction removePostAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"/api/post\", data);\n}\nfunction* removePost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        const id = shortid__WEBPACK_IMPORTED_MODULE_2___default().generate();\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        // post reducer\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_SUCCESS,\n            // 어떤 게시글을 지웠는지 게시글의 id가 action.data에 들어있음.\n            data: action.data\n        });\n        // user reducer\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.REMOVE_POST_OF_ME,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\nfunction* addComment(action) {\n    try {\n        // const result = yield call(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // 게시글의 id\n        const id = shortid__WEBPACK_IMPORTED_MODULE_2___default().generate();\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchRemovePost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_REQUEST, removePost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* watchLoadPosts() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_REQUEST, loadPosts);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CQTtZQUN6QlcsTUFBTUssSUFBSUMsUUFBUSxDQUFDTixJQUFJO1FBQ3pCO0lBQ0Y7QUFDRjtBQUVBLFVBQVVvQixlQUFlO0lBQ3ZCLE1BQU16Qyw4REFBVUEsQ0FBQ0ssNERBQWdCQSxFQUFFeUI7QUFDckM7QUFDQSxVQUFVWSxrQkFBa0I7SUFDMUIsTUFBTTFDLDhEQUFVQSxDQUFDVywrREFBbUJBLEVBQUUwQjtBQUN4QztBQUNBLFVBQVVNLGtCQUFrQjtJQUMxQixNQUFNM0MsOERBQVVBLENBQUNRLCtEQUFtQkEsRUFBRWdDO0FBQ3hDO0FBQ0EsVUFBVUksaUJBQWlCO0lBQ3pCLE1BQU01Qyw4REFBVUEsQ0FBQ2UsOERBQWtCQSxFQUFFUTtBQUN2QztBQUVlLFVBQVVzQixXQUFXO0lBQ2xDLE1BQU1uRCx1REFBR0EsQ0FBQztRQUNSQyx3REFBSUEsQ0FBQzhDO1FBQ0w5Qyx3REFBSUEsQ0FBQ2dEO1FBQ0xoRCx3REFBSUEsQ0FBQytDO1FBQ0wvQyx3REFBSUEsQ0FBQ2lEO0tBQ047QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanM/OThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VFdmVyeSxcclxuICB0YWtlLFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgZ2VuZXJhdGVEdW1teVBvc3QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgLy8gZGF0YTog6rKM7Iuc7ZWgIHBvc3Tsl5Ag64yA7ZWcIGRhdGFcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIC8vIGRhdGE6IOqyjOyLnO2VoCBwb3N07JeQIOuMgO2VnCBkYXRhXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vIGF4aW9z66W8IO2Gte2VtCDrsJvsnYAg6rKw6rO8XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgLy8g7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgLy8gZGF0YTog6rKM7Iuc7ZWgIHBvc3Tsl5Ag64yA7ZWcIGRhdGFcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgLy8gcG9zdCByZWR1Y2VyXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAvLyDslrTrlqQg6rKM7Iuc6riA7J2EIOyngOyboOuKlOyngCDqsozsi5zquIDsnZggaWTqsIAgYWN0aW9uLmRhdGHsl5Ag65Ok7Ja07J6I7J2MLlxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gICAgLy8gdXNlciByZWR1Y2VyXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIC8vIGRhdGE6IOqyjOyLnO2VoCBwb3N07JeQIOuMgO2VnCBkYXRhXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g6rKM7Iuc6riA7J2YIGlkXHJcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhbGwiLCJmb3JrIiwiY2FsbCIsInB1dCIsInRha2VFdmVyeSIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJkZWxheSIsImF4aW9zIiwic2hvcnRJZCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImdlbmVyYXRlRHVtbXlQb3N0IiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvYWRQb3N0c0FQSSIsImRhdGEiLCJnZXQiLCJsb2FkUG9zdHMiLCJhY3Rpb24iLCJ0eXBlIiwiZXJyIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicG9zdCIsImFkZFBvc3QiLCJpZCIsImdlbmVyYXRlIiwiY29udGVudCIsImVycm9yIiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3RzIiwicG9zdFNhZ2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});