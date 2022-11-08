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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\nconst initialState = {\n    mainPosts: [\n        {\n            //post1의 id\n            id: 1,\n            //post1의 user\n            User: {\n                id: 1,\n                nickname: \"채현이\"\n            },\n            //post1의 content\n            content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n                },\n                {\n                    src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n                }\n            ],\n            // post1의 comment\n            Comment: [\n                {\n                    User: {\n                        nickname: \"태희\"\n                    },\n                    content: \"사보 그래도 선방했다.\"\n                },\n                {\n                    User: {\n                        nickname: \"진아\"\n                    },\n                    content: \"감기 조심해~\"\n                }\n            ]\n        }\n    ],\n    // mainPost array 끝\n    // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수\n    imagePath: [],\n    // postAdded: 게시글 추가 완료 여부\n    postAdded: false\n};\n// 액션 이름을 상수로 빼줌.\nconst ADD_POST = \"ADD_POST\";\nconst addPost = {\n    type: ADD_POST\n};\nconst dummyPost = {\n    id: 2,\n    content: \"더미데이터입니다.\",\n    User: {\n        id: 1,\n        nickname: \"민정\"\n    },\n    Images: [],\n    Comments: []\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost,\n                    ...state.mainPosts\n                ]\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsZUFBZTtJQUMxQkMsV0FBVztRQUNUO1lBQ0UsV0FBVztZQUNYQyxJQUFJO1lBQ0osYUFBYTtZQUNiQyxNQUFNO2dCQUNKRCxJQUFJO2dCQUNKRSxVQUFVO1lBQ1o7WUFDQSxnQkFBZ0I7WUFDaEJDLFNBQVM7WUFDVEMsUUFBUTtnQkFDTjtvQkFDRUMsS0FBSztnQkFDUDtnQkFDQTtvQkFDRUEsS0FBSztnQkFDUDtnQkFDQTtvQkFDRUEsS0FBSztnQkFDUDthQUNEO1lBQ0QsaUJBQWlCO1lBQ2pCQyxTQUFTO2dCQUNQO29CQUNFTCxNQUFNO3dCQUNKQyxVQUFVO29CQUNaO29CQUNBQyxTQUFTO2dCQUNYO2dCQUNBO29CQUNFRixNQUFNO3dCQUNKQyxVQUFVO29CQUNaO29CQUNBQyxTQUFTO2dCQUNYO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Q0ksV0FBVyxFQUFFO0lBQ2IsMEJBQTBCO0lBQzFCQyxXQUFXLEtBQUs7QUFDbEIsRUFBRTtBQUVGLGlCQUFpQjtBQUNqQixNQUFNQyxXQUFXO0FBRVYsTUFBTUMsVUFBVTtJQUNyQkMsTUFBTUY7QUFDUixFQUFDO0FBRUQsTUFBTUcsWUFBWTtJQUNoQlosSUFBSTtJQUNKRyxTQUFTO0lBQ1RGLE1BQU07UUFDSkQsSUFBSTtRQUNKRSxVQUFVO0lBQ1o7SUFDQUUsUUFBUSxFQUFFO0lBQ1ZTLFVBQVUsRUFBRTtBQUNkO0FBRUEsTUFBTUMsVUFBVSxXQUFrQztRQUFqQ0MseUVBQVFqQixjQUFja0I7SUFDckMsT0FBUUEsT0FBT0wsSUFBSTtRQUNqQixLQUFLRjtZQUNMLE9BQU87Z0JBQ0wsR0FBR00sS0FBSztnQkFDUmhCLFdBQVc7b0JBQUNhO3VCQUFjRyxNQUFNaEIsU0FBUztpQkFBQztZQUM1QztRQUNBO1lBQ0UsT0FBT2dCO0lBQ1g7QUFDRjtBQUVBLCtEQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICAvL3Bvc3Qx7J2YIGlkXHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICAvL3Bvc3Qx7J2YIHVzZXJcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuyxhO2YhOydtFwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvL3Bvc3Qx7J2YIGNvbnRlbnRcclxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgLy8gcG9zdDHsnZggY29tbWVudFxyXG4gICAgICBDb21tZW50OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCLtg5ztnaxcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuyCrOuztCDqt7jrnpjrj4Qg7ISg67Cp7ZaI64ukLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCLsp4TslYRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuqwkOq4sCDsobDsi6ztlbR+XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyBtYWluUG9zdCBhcnJheSDrgZ1cclxuICAvLyBpbWFnZVBhdGg6IOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOydtOuvuOyngCDqsr3roZzrk6Qg7KCA7J6l7ZWY64qUIOuzgOyImFxyXG4gIGltYWdlUGF0aDogW10sXHJcbiAgLy8gcG9zdEFkZGVkOiDqsozsi5zquIAg7LaU6rCAIOyZhOujjCDsl6zrtoBcclxuICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m87KSMLlxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICB0eXBlOiBBRERfUE9TVCwgXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICBpZDogMixcclxuICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+uvvOyglScsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50IiwiaW1hZ2VQYXRoIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsIkNvbW1lbnRzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n"));

/***/ })

});