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

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_COMMENT_FAILURE\": function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   \"ADD_COMMENT_REQUEST\": function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   \"ADD_COMMENT_SUCCESS\": function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   \"ADD_POST_FAILURE\": function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   \"ADD_POST_REQUEST\": function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   \"ADD_POST_SUCCESS\": function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   \"LOAD_POSTS_FAILURE\": function() { return /* binding */ LOAD_POSTS_FAILURE; },\n/* harmony export */   \"LOAD_POSTS_REQUEST\": function() { return /* binding */ LOAD_POSTS_REQUEST; },\n/* harmony export */   \"LOAD_POSTS_SUCCESS\": function() { return /* binding */ LOAD_POSTS_SUCCESS; },\n/* harmony export */   \"REMOVE_POST_FAILURE\": function() { return /* binding */ REMOVE_POST_FAILURE; },\n/* harmony export */   \"REMOVE_POST_REQUEST\": function() { return /* binding */ REMOVE_POST_REQUEST; },\n/* harmony export */   \"REMOVE_POST_SUCCESS\": function() { return /* binding */ REMOVE_POST_SUCCESS; },\n/* harmony export */   \"addCommentRequestAction\": function() { return /* binding */ addCommentRequestAction; },\n/* harmony export */   \"generateDummyPost\": function() { return /* binding */ generateDummyPost; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.mjs\");\n\n\n\nconst initialState = {\n    mainPosts: [],\n    imagePaths: [],\n    // 더 이상 불러올게 없는 경우 false\n    hasMorePost: true,\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    removePostLoading: false,\n    removePostDone: false,\n    removePostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\nconst generateDummyPost = (number)=>Array(number).fill().map(()=>({\n            content: faker__WEBPACK_IMPORTED_MODULE_1___default().lorem.paragraph().toString(),\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            User: {\n                id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                nickname: faker__WEBPACK_IMPORTED_MODULE_1___default().name.findName().toString()\n            },\n            Images: [\n                {\n                    src: faker__WEBPACK_IMPORTED_MODULE_1___default().image.image()\n                }\n            ],\n            Comments: [\n                {\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: faker__WEBPACK_IMPORTED_MODULE_1___default().name.findName().toString()\n                    },\n                    content: faker__WEBPACK_IMPORTED_MODULE_1___default().lorem.sentence().toString()\n                }\n            ]\n        }));\ninitialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst LOAD_POSTS_REQUEST = \"LOAD_POSTS_REQUEST\";\nconst LOAD_POSTS_SUCCESS = \"LOAD_POSTS_SUCCESS\";\nconst LOAD_POSTS_FAILURE = \"LOAD_POSTS_FAILURE\";\n// export const addPostRequestAction = (data) => ({\n//   type: ADD_POST_REQUEST,\n//   data,\n// });\nconst addCommentRequestAction = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        // 게시글의 id\n        id: data.id,\n        // 게시글의 content\n        content: data.content,\n        User: {\n            id: 1,\n            nickname: \"chae\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"채채\"\n        }\n    });\n// reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    return (0,immer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state, (draft)=>{\n        switch(action.type){\n            case LOAD_POSTS_REQUEST:\n                draft.loadPostsLoading = true;\n                draft.loadPostsDone = false;\n                draft.loadPostsError = null;\n                break;\n            case LOAD_POSTS_SUCCESS:\n                draft.loadPostsLoading = false;\n                draft.loadPostsDone = true;\n                draft.mainPosts = action.data.concat(draft.mainPosts);\n                draft.hasMorePost = draft.mainPosts.length < 50;\n                break;\n            case LOAD_POSTS_FAILURE:\n                draft.loadPostsLoading = false;\n                draft.loadPostsError = action.error;\n                break;\n            case ADD_POST_REQUEST:\n                draft.addPostLoading = true;\n                draft.addPostDone = false;\n                draft.addPostError = null;\n                break;\n            case ADD_POST_SUCCESS:\n                draft.addPostLoading = false;\n                draft.addPostDone = true;\n                draft.mainPosts.unshift(dummyPost(action.data));\n                break;\n            case ADD_POST_FAILURE:\n                draft.addPostLoading = false;\n                draft.addPostError = action.error;\n                break;\n            case REMOVE_POST_REQUEST:\n                draft.removePostLoading = true;\n                draft.removePostDone = false;\n                draft.removePostError = null;\n                break;\n            case REMOVE_POST_SUCCESS:\n                draft.removePostLoading = false;\n                draft.removePostDone = true;\n                draft.mainPosts = draft.mainPosts.filter((v)=>v.id !== action.data);\n                break;\n            case REMOVE_POST_FAILURE:\n                draft.removePostLoading = false;\n                draft.removePostError = action.error;\n                break;\n            case ADD_COMMENT_REQUEST:\n                draft.addCommentLoading = true;\n                draft.addCommentDone = false;\n                draft.addCommentError = null;\n                break;\n            case ADD_COMMENT_SUCCESS:\n                {\n                    const post = draft.mainPosts.find((v)=>v.id === action.data.postId);\n                    post.Comments.unshift(dummyComment(action.data.content));\n                    draft.addCommentLoading = false;\n                    draft.addCommentDone = true;\n                    break;\n                }\n            case ADD_COMMENT_FAILURE:\n                draft.addCommentLoading = false;\n                draft.addCommentError = action.error;\n                break;\n            default:\n                break;\n        }\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtZQUNSLEtBQUtMO2dCQUNIWSxNQUFNL0MsaUJBQWlCLEdBQUcsS0FBSztnQkFDL0IrQyxNQUFNN0MsZUFBZSxHQUFHNEMsT0FBT00sS0FBSztnQkFDcEMsS0FBTTtZQUNSLEtBQUt0QjtnQkFDSGlCLE1BQU01QyxpQkFBaUIsR0FBRyxJQUFJO2dCQUM5QjRDLE1BQU0zQyxjQUFjLEdBQUcsS0FBSztnQkFDNUIyQyxNQUFNMUMsZUFBZSxHQUFHLElBQUk7Z0JBQzVCLEtBQU07WUFDUixLQUFLMEI7Z0JBQXFCO29CQUN4QixNQUFNeUIsT0FBT1QsTUFBTXJELFNBQVMsQ0FBQytELElBQUksQ0FBQyxDQUFDRixJQUFNQSxFQUFFeEMsRUFBRSxLQUFLK0IsT0FBT04sSUFBSSxDQUFDa0IsTUFBTTtvQkFDcEVGLEtBQUtoQyxRQUFRLENBQUM2QixPQUFPLENBQUNWLGFBQWFHLE9BQU9OLElBQUksQ0FBQzdCLE9BQU87b0JBQ3REb0MsTUFBTTVDLGlCQUFpQixHQUFHLEtBQUs7b0JBQy9CNEMsTUFBTTNDLGNBQWMsR0FBRyxJQUFJO29CQUMzQixLQUFNO2dCQUNSO1lBQ0EsS0FBSzRCO2dCQUNIZSxNQUFNNUMsaUJBQWlCLEdBQUcsS0FBSztnQkFDL0I0QyxNQUFNMUMsZUFBZSxHQUFHeUMsT0FBT00sS0FBSztnQkFDcEMsS0FBTTtZQUNSO2dCQUNFLEtBQU07UUFDVjtJQUNGO0FBQUM7QUFFRCwrREFBZVIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICAvLyDrjZQg7J207IOBIOu2iOufrOyYrOqyjCDsl4bripQg6rK97JqwIGZhbHNlXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpXHJcbiAgLmZpbGwoKVxyXG4gIC5tYXAoKCkgPT4gKHtcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLnRvU3RyaW5nKCksXHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgQ29tbWVudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pKTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5cclxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m87KSMLlxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbi8vICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuLy8gICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAvLyDqsozsi5zquIDsnZggaWRcclxuICBpZDogZGF0YS5pZCxcclxuICAvLyDqsozsi5zquIDsnZggY29udGVudFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnY2hhZScsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+yxhOyxhCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyByZWR1Y2VyOiDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOuLqCwg67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbInNob3J0SWQiLCJmYWtlciIsInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsInRvU3RyaW5nIiwiaWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsIm5hbWUiLCJmaW5kTmFtZSIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJkcmFmdCIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});