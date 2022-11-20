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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_COMMENT_FAILURE\": function() { return /* binding */ ADD_COMMENT_FAILURE; },\n/* harmony export */   \"ADD_COMMENT_REQUEST\": function() { return /* binding */ ADD_COMMENT_REQUEST; },\n/* harmony export */   \"ADD_COMMENT_SUCCESS\": function() { return /* binding */ ADD_COMMENT_SUCCESS; },\n/* harmony export */   \"ADD_POST_FAILURE\": function() { return /* binding */ ADD_POST_FAILURE; },\n/* harmony export */   \"ADD_POST_REQUEST\": function() { return /* binding */ ADD_POST_REQUEST; },\n/* harmony export */   \"ADD_POST_SUCCESS\": function() { return /* binding */ ADD_POST_SUCCESS; },\n/* harmony export */   \"REMOVE_POST_FAILURE\": function() { return /* binding */ REMOVE_POST_FAILURE; },\n/* harmony export */   \"REMOVE_POST_REQUEST\": function() { return /* binding */ REMOVE_POST_REQUEST; },\n/* harmony export */   \"REMOVE_POST_SUCCESS\": function() { return /* binding */ REMOVE_POST_SUCCESS; },\n/* harmony export */   \"addCommentRequestAction\": function() { return /* binding */ addCommentRequestAction; },\n/* harmony export */   \"addPostRequestAction\": function() { return /* binding */ addPostRequestAction; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    mainPosts: [\n        {\n            // post1의 id\n            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n            // post1의 user\n            User: {\n                id: 1,\n                nickname: \"채현이\"\n            },\n            // post1의 content\n            content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n                }\n            ],\n            // post1의 comment\n            Comments: [\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"태희\"\n                    },\n                    content: \"사보 그래도 선방했다.\"\n                },\n                {\n                    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                    User: {\n                        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n                        nickname: \"진아\"\n                    },\n                    content: \"감기 조심해~\"\n                }\n            ]\n        }\n    ],\n    // mainPost array 끝\n    // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수\n    imagePaths: [],\n    // postAdded: 게시글 추가 완료 여부\n    postAdded: false,\n    addPostLoading: false,\n    addPostDone: false,\n    addPostError: null,\n    addCommentLoading: false,\n    addCommentDone: false,\n    addCommentError: null\n};\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst addPostRequestAction = (data)=>({\n        type: ADD_POST_REQUEST,\n        data\n    });\nconst addCommentRequestAction = (data)=>({\n        type: ADD_COMMENT_REQUEST,\n        data\n    });\nconst dummyPost = (data)=>({\n        // 게시글의 id\n        id: data.id,\n        // 게시글의 content\n        content: data.content,\n        User: {\n            id: 1,\n            nickname: \"민정\"\n        },\n        Images: [],\n        Comments: []\n    });\nconst dummyComment = (data)=>({\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),\n        content: data,\n        User: {\n            id: 1,\n            nickname: \"채채\"\n        }\n    });\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST_REQUEST:\n            return {\n                ...state,\n                addPostLoading: true,\n                addPostDone: false,\n                addPostError: null\n            };\n        case ADD_POST_SUCCESS:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost(action.data),\n                    ...state.mainPosts\n                ],\n                addPostLoading: false,\n                addPostDone: true\n            };\n        case ADD_POST_FAILURE:\n            return {\n                ...state,\n                addPostLoading: false,\n                addPostError: action.error\n            };\n        case ADD_COMMENT_REQUEST:\n            return {\n                ...state,\n                addCommentLoading: true,\n                addCommentDone: false,\n                addCommentError: null\n            };\n        case ADD_COMMENT_SUCCESS:\n            {\n                // 넘겨준 postid를 통해 postIndex를 찾음.\n                const postIndex = state.mainPosts.findIndex((v)=>v.id === action.data.postId);\n                // postIndex로 새로운 post 객체 생성함. mainPost에서 postIndex객체가 들어있음.\n                const post = {\n                    ...state.mainPosts[postIndex]\n                };\n                // 새로운 post객체의 comment를 수정해줌. (불변성 지키기!!!!) 원래 comments를 전개 구문으로 펼쳐줌\n                post.Comments = [\n                    dummyComment(action.data.content),\n                    ...post.Comments\n                ];\n                // mainPosts 객체를 하나 복사해줌 (불변성)\n                const mainPosts = [\n                    ...state.mainPosts\n                ];\n                // mainPosts의 postIndex 위치에 comment를 추가한 postIndex의 post객체를 변경해줌.\n                mainPosts[postIndex] = post;\n                return {\n                    ...state,\n                    mainPosts,\n                    addCommentLoading: false,\n                    addCommentDone: true\n                };\n            }\n        case ADD_COMMENT_FAILURE:\n            return {\n                ...state,\n                addCommentLoading: false,\n                addCommentError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsS0FBSztnQkFDckJFLGNBQWNxQixPQUFPQyxLQUFLO1lBQzVCO1FBQ0YsS0FBS2Y7WUFDSCxPQUFPO2dCQUNMLEdBQUdhLEtBQUs7Z0JBQ1JuQixtQkFBbUIsSUFBSTtnQkFDdkJDLGdCQUFnQixLQUFLO2dCQUNyQkMsaUJBQWlCLElBQUk7WUFDdkI7UUFDRixLQUFLSztZQUFxQjtnQkFDeEIsZ0NBQWdDO2dCQUNoQyxNQUFNZSxZQUFZSCxNQUFNakMsU0FBUyxDQUFDcUMsU0FBUyxDQUN6QyxDQUFDQyxJQUFNQSxFQUFFckMsRUFBRSxLQUFLaUMsT0FBT1AsSUFBSSxDQUFDWSxNQUFNO2dCQUVwQyw0REFBNEQ7Z0JBQzVELE1BQU1DLE9BQU87b0JBQUUsR0FBR1AsTUFBTWpDLFNBQVMsQ0FBQ29DLFVBQVU7Z0JBQUM7Z0JBQzdDLG9FQUFvRTtnQkFDcEVJLEtBQUtoQyxRQUFRLEdBQUc7b0JBQUN1QixhQUFhRyxPQUFPUCxJQUFJLENBQUN0QixPQUFPO3VCQUFNbUMsS0FBS2hDLFFBQVE7aUJBQUM7Z0JBQ3JFLDhCQUE4QjtnQkFDOUIsTUFBTVIsWUFBWTt1QkFBSWlDLE1BQU1qQyxTQUFTO2lCQUFDO2dCQUN0QyxpRUFBaUU7Z0JBQ2pFQSxTQUFTLENBQUNvQyxVQUFVLEdBQUdJO2dCQUN2QixPQUFPO29CQUNMLEdBQUdQLEtBQUs7b0JBQ1JqQztvQkFDQWMsbUJBQW1CLEtBQUs7b0JBQ3hCQyxnQkFBZ0IsSUFBSTtnQkFDdEI7WUFDRjtRQUNBLEtBQUtPO1lBQ0gsT0FBTztnQkFDTCxHQUFHVyxLQUFLO2dCQUNSbkIsbUJBQW1CLEtBQUs7Z0JBQ3hCRSxpQkFBaUJrQixPQUFPQyxLQUFLO1lBQy9CO1FBQ0Y7WUFDRSxPQUFPRjtJQUNYO0FBQ0Y7QUFFQSwrREFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICAvLyBwb3N0MeydmCBpZFxyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAvLyBwb3N0MeydmCB1c2VyXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+yxhO2YhOydtCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHBvc3Qx7J2YIGNvbnRlbnRcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHBvc3Qx7J2YIGNvbW1lbnRcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+2DnO2drCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ+yCrOuztCDqt7jrnpjrj4Qg7ISg67Cp7ZaI64ukLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ynhOyVhCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ+qwkOq4sCDsobDsi6ztlbR+JyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIC8vIG1haW5Qb3N0IGFycmF5IOuBnVxyXG4gIC8vIGltYWdlUGF0aDog7J2066+47KeAIOyXheuhnOuTnO2VoCDrlYwg7J2066+47KeAIOqyveuhnOuTpCDsoIDsnqXtlZjripQg67OA7IiYXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgLy8gcG9zdEFkZGVkOiDqsozsi5zquIAg7LaU6rCAIOyZhOujjCDsl6zrtoBcclxuICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m87KSMLlxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIC8vIOqyjOyLnOq4gOydmCBpZFxyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIC8vIOqyjOyLnOq4gOydmCBjb250ZW50XHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfrr7zsoJUnLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfssYTssYQnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgLy8g64SY6rKo7KSAIHBvc3RpZOulvCDthrXtlbQgcG9zdEluZGV466W8IOywvuydjC5cclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkLFxyXG4gICAgICApO1xyXG4gICAgICAvLyBwb3N0SW5kZXjroZwg7IOI66Gc7Jq0IHBvc3Qg6rCd7LK0IOyDneyEse2VqC4gbWFpblBvc3Tsl5DshJwgcG9zdEluZGV46rCd7LK06rCAIOuTpOyWtOyeiOydjC5cclxuICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgLy8g7IOI66Gc7Jq0IHBvc3TqsJ3ssrTsnZggY29tbWVudOulvCDsiJjsoJXtlbTspIwuICjrtojrs4DshLEg7KeA7YKk6riwISEhISkg7JuQ656YIGNvbW1lbnRz66W8IOyghOqwnCDqtazrrLjsnLzroZwg7Y687LOQ7KSMXHJcbiAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgLy8gbWFpblBvc3RzIOqwneyytOulvCDtlZjrgpgg67O17IKs7ZW07KSMICjrtojrs4DshLEpXHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHPsnZggcG9zdEluZGV4IOychOy5mOyXkCBjb21tZW5066W8IOy2lOqwgO2VnCBwb3N0SW5kZXjsnZggcG9zdOqwneyytOulvCDrs4Dqsr3tlbTspIwuXHJcbiAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsic2hvcnRJZCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});