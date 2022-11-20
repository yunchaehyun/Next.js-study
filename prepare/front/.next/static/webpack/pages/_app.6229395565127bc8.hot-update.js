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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_COMMENT_FAILURE\": function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   \"ADD_COMMENT_REQUEST\": function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   \"ADD_COMMENT_SUCCESS\": function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   \"ADD_POST_FAILURE\": function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   \"ADD_POST_REQUEST\": function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   \"ADD_POST_SUCCESS\": function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   \"REMOVE_POST_FAILURE\": function() { return /* binding */ REMOVE_POST_FAILURE; },\n/* harmony export */   \"REMOVE_POST_REQUEST\": function() { return /* binding */ REMOVE_POST_REQUEST; },\n/* harmony export */   \"REMOVE_POST_SUCCESS\": function() { return /* binding */ REMOVE_POST_SUCCESS; },\n/* harmony export */   \"addCommentRequestAction\": function() { return /* binding */ addCommentRequestAction; },\n/* harmony export */   \"addPostRequestAction\": function() { return /* binding */ addPostRequestAction; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    mainPosts: [\n        {\n            // post1의 id\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            // post1의 user\n            User: {\n                id: 1,\n                nickname: \"채현이\"\n            },\n            // post1의 content\n            content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n                }\n            ],\n            // post1의 comment\n            Comments: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"태희\"\n                    },\n                    content: \"사보 그래도 선방했다.\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"진아\"\n                    },\n                    content: \"감기 조심해~\"\n                }\n            ]\n        }\n    ],\n    // mainPost array 끝\n    // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수\n    imagePaths: [],\n    // postAdded: 게시글 추가 완료 여부\n    postAdded: false,\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null,\n    removePostLoading: false,\n    removePostDone: false,\n    removePostError: null\n};\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst addPostRequestAction = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addCommentRequestAction = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        // 게시글의 id\n        id: data.id,\n        // 게시글의 content\n        content: data.content,\n        User: {\n            id: 1,\n            nickname: \"민정\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"채채\"\n        }\n    });\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST_REQUEST:\n            return {\n                ...state,\n                addPostLoading: true,\n                addPostDone: false,\n                addPostError: null\n            };\n        case ADD_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost(action.data),\n                    ...state.mainPosts\n                ],\n                addPostLoading: false,\n                addPostDone: true\n            };\n        case ADD_POST_FAILURE:\n            return {\n                ...state,\n                addPostLoading: false,\n                addPostError: action.error\n            };\n        case REMOVE_POST_REQUEST:\n            return {\n                ...state,\n                removePostLoading: true,\n                removePostDone: false,\n                removePostError: null\n            };\n        case REMOVE_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: state.mainPosts.filter((v)=>v.id !== action.data),\n                removePostLoading: false,\n                removePostDone: true\n            };\n        case REMOVE_POST_FAILURE:\n            return {\n                ...state,\n                removePostLoading: false,\n                removePostError: action.error\n            };\n        case ADD_COMMENT_REQUEST:\n            return {\n                ...state,\n                addCommentLoading: true,\n                addCommentDone: false,\n                addCommentError: null\n            };\n        case ADD_COMMENT_SUCCESS:\n            {\n                // 넘겨준 postid를 통해 postIndex를 찾음.\n                const postIndex = state.mainPosts.findIndex((v)=>v.id === action.data.postId);\n                // postIndex로 새로운 post 객체 생성함. mainPost에서 postIndex객체가 들어있음.\n                const post = {\n                    ...state.mainPosts[postIndex]\n                };\n                // 새로운 post객체의 comment를 수정해줌. (불변성 지키기!!!!) 원래 comments를 전개 구문으로 펼쳐줌\n                post.Comments = [\n                    dummyComment(action.data.content),\n                    ...post.Comments\n                ];\n                // mainPosts 객체를 하나 복사해줌 (불변성)\n                const mainPosts = [\n                    ...state.mainPosts\n                ];\n                // mainPosts의 postIndex 위치에 comment를 추가한 postIndex의 post객체를 변경해줌.\n                mainPosts[postIndex] = post;\n                return {\n                    ...state,\n                    mainPosts,\n                    addCommentLoading: false,\n                    addCommentDone: true\n                };\n            }\n        case ADD_COMMENT_FAILURE:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1SLFlBQVk7dUJBQUlvQyxNQUFNcEMsU0FBUztpQkFBQztnQkFDdEMsaUVBQWlFO2dCQUNqRUEsU0FBUyxDQUFDeUMsVUFBVSxHQUFHRztnQkFDdkIsT0FBTztvQkFDTCxHQUFHUixLQUFLO29CQUNScEM7b0JBQ0FjLG1CQUFtQixLQUFLO29CQUN4QkMsZ0JBQWdCLElBQUk7Z0JBQ3RCO1lBQ0Y7UUFDQSxLQUFLVTtZQUNILE9BQU87Z0JBQ0wsR0FBR1csS0FBSztnQkFDUnRCLG1CQUFtQixLQUFLO2dCQUN4QkUsaUJBQWlCcUIsT0FBT0MsS0FBSztZQUMvQjtRQUNGO1lBQ0UsT0FBT0Y7SUFDWDtBQUNGO0FBRUEsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz82ZmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtcclxuICAgIHtcclxuICAgICAgLy8gcG9zdDHsnZggaWRcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgLy8gcG9zdDHsnZggdXNlclxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfssYTtmITsnbQnLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBwb3N0MeydmCBjb250ZW50XHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICAvLyBwb3N0MeydmCBjb21tZW50XHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICftg5ztnawnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgqzrs7Qg6re4656Y64+EIOyEoOuwqe2WiOuLpC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsp4TslYQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqsJDquLAg7KGw7Ius7ZW0ficsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyBtYWluUG9zdCBhcnJheSDrgZ1cclxuICAvLyBpbWFnZVBhdGg6IOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOydtOuvuOyngCDqsr3roZzrk6Qg7KCA7J6l7ZWY64qUIOuzgOyImFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIC8vIHBvc3RBZGRlZDog6rKM7Iuc6riAIOy2lOqwgCDsmYTro4wg7Jes67aAXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOykjC5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAvLyDqsozsi5zquIDsnZggaWRcclxuICBpZDogZGF0YS5pZCxcclxuICAvLyDqsozsi5zquIDsnZggY29udGVudFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn66+87KCVJyxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7LGE7LGEJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAvLyDrhJjqsqjspIAgcG9zdGlk66W8IO2Gte2VtCBwb3N0SW5kZXjrpbwg7LC+7J2MLlxyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxyXG4gICAgICAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQsXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHBvc3RJbmRleOuhnCDsg4jroZzsmrQgcG9zdCDqsJ3ssrQg7IOd7ISx7ZWoLiBtYWluUG9zdOyXkOyEnCBwb3N0SW5kZXjqsJ3ssrTqsIAg65Ok7Ja07J6I7J2MLlxyXG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyDsg4jroZzsmrQgcG9zdOqwneyytOydmCBjb21tZW5066W8IOyImOygle2VtOykjC4gKOu2iOuzgOyEsSDsp4DtgqTquLAhISEhKSDsm5DrnpggY29tbWVudHPrpbwg7KCE6rCcIOq1rOusuOycvOuhnCDtjrzss5DspIxcclxuICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHMg6rCd7LK066W8IO2VmOuCmCDrs7XsgqztlbTspIwgKOu2iOuzgOyEsSlcclxuICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIC8vIG1haW5Qb3N0c+ydmCBwb3N0SW5kZXgg7JyE7LmY7JeQIGNvbW1lbnTrpbwg7LaU6rCA7ZWcIHBvc3RJbmRleOydmCBwb3N06rCd7LK066W8IOuzgOqyve2VtOykjC5cclxuICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJzaG9ydElkIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJwb3N0SWQiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});