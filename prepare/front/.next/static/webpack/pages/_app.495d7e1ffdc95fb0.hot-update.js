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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_COMMENT_FAILURE\": function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   \"ADD_COMMENT_REQUEST\": function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   \"ADD_COMMENT_SUCCESS\": function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   \"ADD_POST_FAILURE\": function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   \"ADD_POST_REQUEST\": function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   \"ADD_POST_SUCCESS\": function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   \"addCommentRequestAction\": function() { return /* binding */ addCommentRequestAction; },\n/* harmony export */   \"addPostRequestAction\": function() { return /* binding */ addPostRequestAction; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    mainPosts: [\n        {\n            // post1의 id\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            // post1의 user\n            User: {\n                id: 1,\n                nickname: \"채현이\"\n            },\n            // post1의 content\n            content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n                }\n            ],\n            // post1의 comment\n            Comment: [\n                {\n                    User: {\n                        nickname: \"태희\"\n                    },\n                    content: \"사보 그래도 선방했다.\"\n                },\n                {\n                    User: {\n                        nickname: \"진아\"\n                    },\n                    content: \"감기 조심해~\"\n                }\n            ]\n        }\n    ],\n    // mainPost array 끝\n    // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수\n    imagePaths: [],\n    // postAdded: 게시글 추가 완료 여부\n    postAdded: false,\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst addPostRequestAction = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addCommentRequestAction = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        id: 2,\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"민정\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: data.userId,\n        comment: data.comment,\n        postId: data.postID\n    });\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST_REQUEST:\n            return {\n                ...state,\n                addPostLoading: true,\n                addPostDone: false,\n                addPostError: null\n            };\n        case ADD_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost(action.data),\n                    ...state.mainPosts\n                ],\n                addPostLoading: false,\n                addPostDone: true\n            };\n        case ADD_POST_FAILURE:\n            return {\n                ...state,\n                addPostLoading: false,\n                addPostError: action.error\n            };\n        case ADD_COMMENT_REQUEST:\n            return {\n                ...state,\n                addCommentLoading: true,\n                addCommentDone: false,\n                addCommentError: null\n            };\n        case ADD_COMMENT_SUCCESS:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentDone: true\n            };\n        case ADD_COMMENT_FAILURE:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixtQkFBbUIsS0FBSztnQkFDeEJFLGlCQUFpQm9CLE9BQU9DLEtBQUs7WUFDL0I7UUFDRjtZQUNFLE9BQU9GO0lBQ1g7QUFDRjtBQUVBLCtEQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIC8vIHBvc3Qx7J2YIGlkXHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIC8vIHBvc3Qx7J2YIHVzZXJcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7LGE7ZiE7J20JyxcclxuICAgICAgfSxcclxuICAgICAgLy8gcG9zdDHsnZggY29udGVudFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgLy8gcG9zdDHsnZggY29tbWVudFxyXG4gICAgICBDb21tZW50OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+2DnO2drCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ+yCrOuztCDqt7jrnpjrj4Qg7ISg67Cp7ZaI64ukLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KeE7JWEJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAn6rCQ6riwIOyhsOyLrO2VtH4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gbWFpblBvc3QgYXJyYXkg64GdXHJcbiAgLy8gaW1hZ2VQYXRoOiDsnbTrr7jsp4Ag7JeF66Gc65Oc7ZWgIOuVjCDsnbTrr7jsp4Ag6rK966Gc65OkIOyggOyepe2VmOuKlCDrs4DsiJhcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICAvLyBwb3N0QWRkZWQ6IOqyjOyLnOq4gCDstpTqsIAg7JmE66OMIOyXrOu2gFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vLyDslaHshZgg7J2066aE7J2EIOyDgeyImOuhnCDrubzspIwuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogMixcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfrr7zsoJUnLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEudXNlcklkLFxyXG4gIGNvbW1lbnQ6IGRhdGEuY29tbWVudCxcclxuICBwb3N0SWQ6IGRhdGEucG9zdElELFxyXG5cclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJzaG9ydElkIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50IiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlQb3N0IiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJ1c2VySWQiLCJjb21tZW50IiwicG9zdElkIiwicG9zdElEIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});