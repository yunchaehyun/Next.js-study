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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_COMMENT_FAILURE\": function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   \"ADD_COMMENT_REQUEST\": function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   \"ADD_COMMENT_SUCCESS\": function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   \"ADD_POST_FAILURE\": function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   \"ADD_POST_REQUEST\": function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   \"ADD_POST_SUCCESS\": function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   \"addCommentRequestAction\": function() { return /* binding */ addCommentRequestAction; },\n/* harmony export */   \"addPostRequestAction\": function() { return /* binding */ addPostRequestAction; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    mainPosts: [\n        {\n            // post1의 id\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            // post1의 user\n            User: {\n                id: 1,\n                nickname: \"채현이\"\n            },\n            // post1의 content\n            content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n                }\n            ],\n            // post1의 comment\n            Comment: [\n                {\n                    User: {\n                        nickname: \"태희\"\n                    },\n                    content: \"사보 그래도 선방했다.\"\n                },\n                {\n                    User: {\n                        nickname: \"진아\"\n                    },\n                    content: \"감기 조심해~\"\n                }\n            ]\n        }\n    ],\n    // mainPost array 끝\n    // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수\n    imagePaths: [],\n    // postAdded: 게시글 추가 완료 여부\n    postAdded: false,\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst addPostRequestAction = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addCommentRequestAction = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        id: 2,\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"민정\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: data.userId,\n        comment: data.comment,\n        postId: data.postID\n    });\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST_REQUEST:\n            return {\n                ...state,\n                addPostLoading: true,\n                addPostDone: false,\n                addPostError: null\n            };\n        case ADD_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost(action.data),\n                    ...state.mainPosts\n                ],\n                addPostLoading: false,\n                addPostDone: true\n            };\n        case ADD_POST_FAILURE:\n            return {\n                ...state,\n                addPostLoading: false,\n                addPostError: action.error\n            };\n        case ADD_COMMENT_REQUEST:\n            return {\n                ...state,\n                addCommentLoading: true,\n                addCommentDone: false,\n                addCommentError: null\n            };\n        case ADD_COMMENT_SUCCESS:\n            const postIndex = state.mainPosts.findIndex((v)=>v.id === action.state.postId);\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentDone: true\n            };\n        case ADD_COMMENT_FAILURE:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR0csS0FBSztnQkFDUnJCLG1CQUFtQixLQUFLO2dCQUN4QkMsZ0JBQWdCLElBQUk7WUFDdEI7UUFDRixLQUFLTztZQUNILE9BQU87Z0JBQ0wsR0FBR2EsS0FBSztnQkFDUnJCLG1CQUFtQixLQUFLO2dCQUN4QkUsaUJBQWlCb0IsT0FBT0MsS0FBSztZQUMvQjtRQUNGO1lBQ0UsT0FBT0Y7SUFDWDtBQUNGO0FBRUEsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz82ZmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtcclxuICAgIHtcclxuICAgICAgLy8gcG9zdDHsnZggaWRcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgLy8gcG9zdDHsnZggdXNlclxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfssYTtmITsnbQnLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBwb3N0MeydmCBjb250ZW50XHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICAvLyBwb3N0MeydmCBjb21tZW50XHJcbiAgICAgIENvbW1lbnQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7YOc7Z2sJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAn7IKs67O0IOq3uOuemOuPhCDshKDrsKntlojri6QuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsp4TslYQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqsJDquLAg7KGw7Ius7ZW0ficsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyBtYWluUG9zdCBhcnJheSDrgZ1cclxuICAvLyBpbWFnZVBhdGg6IOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOydtOuvuOyngCDqsr3roZzrk6Qg7KCA7J6l7ZWY64qUIOuzgOyImFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIC8vIHBvc3RBZGRlZDog6rKM7Iuc6riAIOy2lOqwgCDsmYTro4wg7Jes67aAXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOykjC5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiAyLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+uvvOyglScsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS51c2VySWQsXHJcbiAgY29tbWVudDogZGF0YS5jb21tZW50LFxyXG4gIHBvc3RJZDogZGF0YS5wb3N0SUQsXHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uc3RhdGUucG9zdElkKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJzaG9ydElkIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50IiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlQb3N0IiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJ1c2VySWQiLCJjb21tZW50IiwicG9zdElkIiwicG9zdElEIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});