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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FOLLOW_FAILURE\": function() { return /* binding */ FOLLOW_FAILURE; },\n/* harmony export */   \"FOLLOW_REQUEST\": function() { return /* binding */ FOLLOW_REQUEST; },\n/* harmony export */   \"FOLLOW_SUCCESS\": function() { return /* binding */ FOLLOW_SUCCESS; },\n/* harmony export */   \"LOG_IN_FAILURE\": function() { return /* binding */ LOG_IN_FAILURE; },\n/* harmony export */   \"LOG_IN_REQUEST\": function() { return /* binding */ LOG_IN_REQUEST; },\n/* harmony export */   \"LOG_IN_SUCCESS\": function() { return /* binding */ LOG_IN_SUCCESS; },\n/* harmony export */   \"LOG_OUT_FAILURE\": function() { return /* binding */ LOG_OUT_FAILURE; },\n/* harmony export */   \"LOG_OUT_REQUEST\": function() { return /* binding */ LOG_OUT_REQUEST; },\n/* harmony export */   \"LOG_OUT_SUCCESS\": function() { return /* binding */ LOG_OUT_SUCCESS; },\n/* harmony export */   \"SIGN_UP_FAILURE\": function() { return /* binding */ SIGN_UP_FAILURE; },\n/* harmony export */   \"SIGN_UP_REQUEST\": function() { return /* binding */ SIGN_UP_REQUEST; },\n/* harmony export */   \"SIGN_UP_SUCCESS\": function() { return /* binding */ SIGN_UP_SUCCESS; },\n/* harmony export */   \"UNFOLLOW_FAILURE\": function() { return /* binding */ UNFOLLOW_FAILURE; },\n/* harmony export */   \"UNFOLLOW_REQUEST\": function() { return /* binding */ UNFOLLOW_REQUEST; },\n/* harmony export */   \"UNFOLLOW_SUCCESS\": function() { return /* binding */ UNFOLLOW_SUCCESS; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"loginRequestAction\": function() { return /* binding */ loginRequestAction; },\n/* harmony export */   \"logoutRequestAction\": function() { return /* binding */ logoutRequestAction; }\n/* harmony export */ });\nconst initialState = {\n    logInLoading: false,\n    logInDone: false,\n    logInError: null,\n    logOutLoading: false,\n    logOutDone: false,\n    logOutError: null,\n    signUpLoading: false,\n    signUpDone: false,\n    signUpFailure: null,\n    me: null,\n    signUpData: {},\n    loginData: {}\n};\n// 자주 사용되는 변수들 상수화\nconst LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nconst LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nconst LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nconst LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nconst LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nconst LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\";\nconst SIGN_UP_REQUEST = \"SIGN_UP_REQUEST\";\nconst SIGN_UP_SUCCESS = \"SIGN_UP_SUCCESS\";\nconst SIGN_UP_FAILURE = \"SIGN_UP_FAILURE\";\nconst FOLLOW_REQUEST = \"FOLLOW_REQUEST\";\nconst FOLLOW_SUCCESS = \"FOLLOW_SUCCESS\";\nconst FOLLOW_FAILURE = \"FOLLOW_FAILURE\";\nconst UNFOLLOW_REQUEST = \"UNFOLLOW_REQUEST\";\nconst UNFOLLOW_SUCCESS = \"UNFOLLOW_SUCCESS\";\nconst UNFOLLOW_FAILURE = \"UNFOLLOW_FAILURE\";\nconst dummyUser = (data)=>({\n        ...data,\n        nickname: \"채현\",\n        id: 1,\n        Posts: [],\n        Followings: [],\n        Followers: []\n    });\n// action creater > 동적으로 액션 만들어줌\n// export 해줌\nconst loginRequestAction = (data)=>{\n    return {\n        // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명\n        type: LOG_IN_REQUEST,\n        data\n    };\n};\n// export 해줌\nconst logoutRequestAction = ()=>{\n    return {\n        type: LOG_OUT_REQUEST\n    };\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case LOG_IN_REQUEST:\n            return {\n                // // 참조 관계 때문에 객체 생성\n                // ...state,\n                // // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리\n                // // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state\n                // user: {\n                ...state,\n                logInLoading: true,\n                logInError: null,\n                logInDone: false\n            };\n        case LOG_IN_SUCCESS:\n            return {\n                ...state,\n                logInLoading: false,\n                logInDone: true,\n                me: dummyUser(action.data)\n            };\n        case LOG_IN_FAILURE:\n            return {\n                ...state,\n                logInLoading: false,\n                logInError: action.error\n            };\n        case LOG_OUT_REQUEST:\n            return {\n                ...state,\n                logOutLoading: true,\n                logOutDone: false,\n                logOutError: null\n            };\n        case LOG_OUT_SUCCESS:\n            return {\n                ...state,\n                logOutLoading: false,\n                logOutDone: true,\n                me: null\n            };\n        case LOG_OUT_FAILURE:\n            return {\n                ...state,\n                logOutLoading: false,\n                logOutError: action.error\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGVBQWU7SUFDMUJDLGNBQWMsS0FBSztJQUNuQkMsV0FBVyxLQUFLO0lBQ2hCQyxZQUFZLElBQUk7SUFDaEJDLGVBQWUsS0FBSztJQUNwQkMsWUFBWSxLQUFLO0lBQ2pCQyxhQUFhLElBQUk7SUFDakJDLGVBQWUsS0FBSztJQUNwQkMsWUFBWSxLQUFLO0lBQ2pCQyxlQUFlLElBQUk7SUFDbkJDLElBQUksSUFBSTtJQUNSQyxZQUFZLENBQUM7SUFDYkMsV0FBVyxDQUFDO0FBQ2QsRUFBRTtBQUVGLGtCQUFrQjtBQUNYLE1BQU1DLGlCQUFpQixpQkFBaUI7QUFDeEMsTUFBTUMsaUJBQWlCLGlCQUFpQjtBQUN4QyxNQUFNQyxpQkFBaUIsaUJBQWlCO0FBQ3hDLE1BQU1DLGtCQUFrQixrQkFBa0I7QUFDMUMsTUFBTUMsa0JBQWtCLGtCQUFrQjtBQUMxQyxNQUFNQyxrQkFBa0Isa0JBQWtCO0FBRTFDLE1BQU1DLGtCQUFrQixrQkFBa0I7QUFDMUMsTUFBTUMsa0JBQWtCLGtCQUFrQjtBQUMxQyxNQUFNQyxrQkFBa0Isa0JBQWtCO0FBRTFDLE1BQU1DLGlCQUFpQixpQkFBaUI7QUFDeEMsTUFBTUMsaUJBQWlCLGlCQUFpQjtBQUN4QyxNQUFNQyxpQkFBaUIsaUJBQWlCO0FBRXhDLE1BQU1DLG1CQUFtQixtQkFBbUI7QUFDNUMsTUFBTUMsbUJBQW1CLG1CQUFtQjtBQUM1QyxNQUFNQyxtQkFBbUIsbUJBQW1CO0FBRW5ELE1BQU1DLFlBQVksQ0FBQ0MsT0FBVTtRQUMzQixHQUFHQSxJQUFJO1FBQ1BDLFVBQVU7UUFDVkMsSUFBSTtRQUNKQyxPQUFPLEVBQUU7UUFDVEMsWUFBWSxFQUFFO1FBQ2RDLFdBQVcsRUFBRTtJQUNmO0FBRUEsZ0NBQWdDO0FBQ2hDLFlBQVk7QUFDTCxNQUFNQyxxQkFBcUIsQ0FBQ04sT0FBUztJQUMxQyxPQUFPO1FBQ0wseUNBQXlDO1FBQ3pDTyxNQUFNdkI7UUFDTmdCO0lBQ0Y7QUFDRixFQUFFO0FBQ0YsWUFBWTtBQUNMLE1BQU1RLHNCQUFzQixJQUFNO0lBQ3ZDLE9BQU87UUFDTEQsTUFBTXBCO0lBQ1I7QUFDRixFQUFFO0FBRUYsTUFBTXNCLFVBQVUsV0FBa0M7UUFBakNDLHlFQUFRdkMsY0FBY3dDO0lBQ3JDLE9BQVFBLE9BQU9KLElBQUk7UUFDakIsS0FBS3ZCO1lBQ0gsT0FBTztnQkFDTCxxQkFBcUI7Z0JBQ3JCLFlBQVk7Z0JBQ1osNENBQTRDO2dCQUM1QyxrREFBa0Q7Z0JBQ2xELFVBQVU7Z0JBQ1YsR0FBRzBCLEtBQUs7Z0JBQ1J0QyxjQUFjLElBQUk7Z0JBQ2xCRSxZQUFZLElBQUk7Z0JBQ2hCRCxXQUFXLEtBQUs7WUFDbEI7UUFDRixLQUFLWTtZQUNILE9BQU87Z0JBQ0wsR0FBR3lCLEtBQUs7Z0JBQ1J0QyxjQUFjLEtBQUs7Z0JBQ25CQyxXQUFXLElBQUk7Z0JBQ2ZRLElBQUlrQixVQUFVWSxPQUFPWCxJQUFJO1lBRTNCO1FBQ0YsS0FBS2Q7WUFDSCxPQUFPO2dCQUNMLEdBQUd3QixLQUFLO2dCQUNSdEMsY0FBYyxLQUFLO2dCQUNuQkUsWUFBWXFDLE9BQU9DLEtBQUs7WUFFMUI7UUFDRixLQUFLekI7WUFDSCxPQUFPO2dCQUNMLEdBQUd1QixLQUFLO2dCQUNSbkMsZUFBZSxJQUFJO2dCQUNuQkMsWUFBWSxLQUFLO2dCQUNqQkMsYUFBYSxJQUFJO1lBQ25CO1FBQ0YsS0FBS1c7WUFDSCxPQUFPO2dCQUNMLEdBQUdzQixLQUFLO2dCQUNSbkMsZUFBZSxLQUFLO2dCQUNwQkMsWUFBWSxJQUFJO2dCQUNoQkssSUFBSSxJQUFJO1lBQ1Y7UUFDRixLQUFLUTtZQUNILE9BQU87Z0JBQ0wsR0FBR3FCLEtBQUs7Z0JBQ1JuQyxlQUFlLEtBQUs7Z0JBQ3BCRSxhQUFha0MsT0FBT0MsS0FBSztZQUMzQjtRQUNGO1lBQ0UsT0FBT0Y7SUFDWDtBQUNGO0FBRUEsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8wZGY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsIC8vIOuhnOq3uOyduCDsg4Htg5xcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRmFpbHVyZTogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuLy8g7J6Q7KO8IOyCrOyaqeuQmOuKlCDrs4DsiJjrk6Qg7IOB7IiY7ZmUXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiAn7LGE7ZiEJyxcclxuICBpZDogMSxcclxuICBQb3N0czogW10sXHJcbiAgRm9sbG93aW5nczogW10sXHJcbiAgRm9sbG93ZXJzOiBbXSxcclxufSlcclxuXHJcbi8vIGFjdGlvbiBjcmVhdGVyID4g64+Z7KCB7Jy866GcIOyVoeyFmCDrp4zrk6TslrTspIxcclxuLy8gZXhwb3J0IO2VtOykjFxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gdHlwZeydgCByZWR1Y2Vy66GcIOyghOuLrOuQmOuKlCBrZXnqsJnsnYAg6rCc64WQIO2VqOyImOyXkCDrjIDtlZwg7ISk66qFXHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuLy8gZXhwb3J0IO2VtOykjFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIC8vIOywuOyhsCDqtIDqs4Qg65WM66y47JeQIOqwneyytCDsg53shLFcclxuICAgICAgICAvLyAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAvLyDrsJTqvrjqs6DsnpAg7ZWY64qU6rKMIOqwneyytCDslYjsl5Ag7J6I7Jy866m0IOqwneyytCDrsJTquaXsnYAgLi4uc3RhdGXroZwg7KCV66asXHJcbiAgICAgICAgLy8gLy8g6re466as6rOgIOqwneyytCDslYjsl5DshJzrj4Qg67CU6r646rOg7J6QIO2VmOuKlCDrgrTsmqnrp4wg7KCV7J2Y7ZW07KO86rOgLCDrgpjrqLjsp4DripQgLi4uc3RhdGVcclxuICAgICAgICAvLyB1c2VyOiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dPdXREb25lOiB0cnVlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n"));

/***/ })

});