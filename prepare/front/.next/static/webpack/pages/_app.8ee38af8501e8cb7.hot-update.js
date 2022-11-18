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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOG_IN_FAILURE\": function() { return /* binding */ LOG_IN_FAILURE; },\n/* harmony export */   \"LOG_IN_REQUEST\": function() { return /* binding */ LOG_IN_REQUEST; },\n/* harmony export */   \"LOG_IN_SUCCESS\": function() { return /* binding */ LOG_IN_SUCCESS; },\n/* harmony export */   \"LOG_OUT_FAILURE\": function() { return /* binding */ LOG_OUT_FAILURE; },\n/* harmony export */   \"LOG_OUT_REQUEST\": function() { return /* binding */ LOG_OUT_REQUEST; },\n/* harmony export */   \"LOG_OUT_SUCCESS\": function() { return /* binding */ LOG_OUT_SUCCESS; },\n/* harmony export */   \"SIGN_UP_REQUEST\": function() { return /* binding */ SIGN_UP_REQUEST; },\n/* harmony export */   \"SING_UP_FAILURE\": function() { return /* binding */ SING_UP_FAILURE; },\n/* harmony export */   \"SING_UP_SUCCESS\": function() { return /* binding */ SING_UP_SUCCESS; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"loginRequestAction\": function() { return /* binding */ loginRequestAction; },\n/* harmony export */   \"logoutRequestAction\": function() { return /* binding */ logoutRequestAction; }\n/* harmony export */ });\nconst initialState = {\n    isLoggingIn: false,\n    isLoggedIn: false,\n    isLoggingOut: false,\n    me: null,\n    signUpData: {},\n    loginData: {}\n};\n// 자주 사용되는 변수들 상수화\nconst LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nconst LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nconst LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nconst LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nconst LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nconst LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\";\nconst SIGN_UP_REQUEST = \"SIGN_UP_REQUEST\";\nconst SING_UP_SUCCESS = \"SING_UP_SUCCESS\";\nconst SING_UP_FAILURE = \"SING_UP_FAILURE\";\n// action creater > 동적으로 액션 만들어줌\n// export 해줌\nconst loginRequestAction = (data)=>{\n    return {\n        // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명\n        type: \"LOG_IN_REQUEST\",\n        data\n    };\n};\n// export 해줌\nconst logoutRequestAction = ()=>{\n    return {\n        type: \"LOG_OUT_REQUEST\"\n    };\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"LOG_IN_REQUEST\":\n            return {\n                // // 참조 관계 때문에 객체 생성\n                // ...state,\n                // // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리\n                // // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state\n                // user: {\n                ...state,\n                isLoggingIn: true,\n                me: action.data\n            };\n        case \"LOG_IN_SUCCESS\":\n            return {\n                ...state,\n                isLoggingIn: false,\n                isLoggedIn: true,\n                me: {\n                    ...action.data,\n                    nickname: \"chaehyun\"\n                }\n            };\n        case \"LOG_IN_FAILURE\":\n            return {\n                ...state,\n                isLoggingIn: false,\n                isLoggedIn: false\n            };\n        case \"LOG_OUT_REQUEST\":\n            return {\n                ...state.user,\n                isLoggingOut: true\n            };\n        case \"LOG_OUT_SUCCESS\":\n            return {\n                ...state.user,\n                isLoggedIn: false,\n                isLoggingOut: false,\n                me: null\n            };\n        case \"LOG_OUT_FAILURE\":\n            return {\n                ...state.user,\n                isLoggingOut: false,\n                isLoggedIn: false\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGVBQWU7SUFDMUJDLGFBQWEsS0FBSztJQUNsQkMsWUFBWSxLQUFLO0lBQ2pCQyxjQUFjLEtBQUs7SUFDbkJDLElBQUksSUFBSTtJQUNSQyxZQUFZLENBQUM7SUFDYkMsV0FBVyxDQUFDO0FBQ2QsRUFBRTtBQUVGLGtCQUFrQjtBQUNYLE1BQU1DLGlCQUFpQixpQkFBaUI7QUFDeEMsTUFBTUMsaUJBQWlCLGlCQUFpQjtBQUN4QyxNQUFNQyxpQkFBaUIsaUJBQWlCO0FBQ3hDLE1BQU1DLGtCQUFrQixrQkFBa0I7QUFDMUMsTUFBTUMsa0JBQWtCLGtCQUFrQjtBQUMxQyxNQUFNQyxrQkFBa0Isa0JBQWtCO0FBRTFDLE1BQU1DLGtCQUFrQixrQkFBa0I7QUFDMUMsTUFBTUMsa0JBQWtCLGtCQUFrQjtBQUMxQyxNQUFNQyxrQkFBa0Isa0JBQWtCO0FBRWpELGdDQUFnQztBQUNoQyxZQUFZO0FBQ0wsTUFBTUMscUJBQXFCLENBQUNDLE9BQVM7SUFDMUMsT0FBTztRQUNMLHlDQUF5QztRQUN6Q0MsTUFBTTtRQUNORDtJQUNGO0FBQ0YsRUFBRTtBQUNGLFlBQVk7QUFDTCxNQUFNRSxzQkFBc0IsSUFBTTtJQUN2QyxPQUFPO1FBQ0xELE1BQU07SUFDUjtBQUNGLEVBQUU7QUFFRixNQUFNRSxVQUFVLFdBQWtDO1FBQWpDQyx5RUFBUXJCLGNBQWNzQjtJQUNyQyxPQUFRQSxPQUFPSixJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPO2dCQUNMLHFCQUFxQjtnQkFDckIsWUFBWTtnQkFDWiw0Q0FBNEM7Z0JBQzVDLGtEQUFrRDtnQkFDbEQsVUFBVTtnQkFDVixHQUFHRyxLQUFLO2dCQUNScEIsYUFBYSxJQUFJO2dCQUNqQkcsSUFBSWtCLE9BQU9MLElBQUk7WUFFakI7UUFDRixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHSSxLQUFLO2dCQUNScEIsYUFBYSxLQUFLO2dCQUNsQkMsWUFBWSxJQUFJO2dCQUNoQkUsSUFBSTtvQkFBRSxHQUFHa0IsT0FBT0wsSUFBSTtvQkFBRU0sVUFBVTtnQkFBVztZQUU3QztRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdGLEtBQUs7Z0JBQ1JwQixhQUFhLEtBQUs7Z0JBQ2xCQyxZQUFZLEtBQUs7WUFFbkI7UUFDRixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHbUIsTUFBTUcsSUFBSTtnQkFDYnJCLGNBQWMsSUFBSTtZQUNwQjtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdrQixNQUFNRyxJQUFJO2dCQUNidEIsWUFBWSxLQUFLO2dCQUNqQkMsY0FBYyxLQUFLO2dCQUNuQkMsSUFBSSxJQUFJO1lBQ1Y7UUFDRixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHaUIsTUFBTUcsSUFBSTtnQkFDYnJCLGNBQWMsS0FBSztnQkFDbkJELFlBQVksS0FBSztZQUNuQjtRQUNGO1lBQ0UsT0FBT21CO0lBQ1g7QUFDRjtBQUVBLCtEQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7IOB7YOcXHJcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG4vLyDsnpDso7wg7IKs7Jqp65CY64qUIOuzgOyImOuTpCDsg4HsiJjtmZRcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJTkdfVVBfU1VDQ0VTUyA9ICdTSU5HX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lOR19VUF9GQUlMVVJFID0gJ1NJTkdfVVBfRkFJTFVSRSc7XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRlciA+IOuPmeyggeycvOuhnCDslaHshZgg66eM65Ok7Ja07KSMXHJcbi8vIGV4cG9ydCDtlbTspIxcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIHR5cGXsnYAgcmVkdWNlcuuhnCDsoITri6zrkJjripQga2V56rCZ7J2AIOqwnOuFkCDtlajsiJjsl5Ag64yA7ZWcIOyEpOuqhVxyXG4gICAgdHlwZTogXCJMT0dfSU5fUkVRVUVTVFwiLFxyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG4vLyBleHBvcnQg7ZW07KSMXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRfUkVRVUVTVFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiTE9HX0lOX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAvLyDssLjsobAg6rSA6rOEIOuVjOusuOyXkCDqsJ3ssrQg7IOd7ISxXHJcbiAgICAgICAgLy8gLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gLy8g67CU6r646rOg7J6QIO2VmOuKlOqyjCDqsJ3ssrQg7JWI7JeQIOyeiOycvOuptCDqsJ3ssrQg67CU6rml7J2AIC4uLnN0YXRl66GcIOygleumrFxyXG4gICAgICAgIC8vIC8vIOq3uOumrOqzoCDqsJ3ssrQg7JWI7JeQ7ISc64+EIOuwlOq+uOqzoOyekCDtlZjripQg64K07Jqp66eMIOygleydmO2VtOyjvOqzoCwg64KY66i47KeA64qUIC4uLnN0YXRlXHJcbiAgICAgICAgLy8gdXNlcjoge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19JTl9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgbWU6IHsgLi4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiBcImNoYWVoeXVuXCIgfSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19JTl9GQUlMVVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVF9SRVFVRVNUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVF9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRfRkFJTFVSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lOR19VUF9TVUNDRVNTIiwiU0lOR19VUF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmlja25hbWUiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n"));

/***/ })

});