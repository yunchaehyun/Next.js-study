"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst UserProfile = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { me , logOutLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const onLogOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_3__.logoutRequestAction)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            actions: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"twit\"\n                }, \"twit\", false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"팔로잉\"\n                }, \"followings\", false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"팔로워\"\n                }, \"followers\", false, void 0, void 0)\n            ],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                    avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                        children: me.nickname[0]\n                    }, void 0, false, void 0, void 0),\n                    title: me.nickname\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\UserProfile.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    onClick: onLogOut,\n                    loading: logOutLoading,\n                    children: \"로그아웃\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\UserProfile.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\UserProfile.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(UserProfile, \"vyrowHTqhqIO66L5UXqqoOurJQ4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ0M7QUFDVztBQUNBO0FBRXZELE1BQU1RLGNBQWMsSUFBTTs7SUFDeEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssR0FBRSxFQUFFQyxjQUFhLEVBQUUsR0FBR0wsd0RBQVdBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUMsSUFBSTtJQUMvRCxNQUFNQyxXQUFXYixrREFBV0EsQ0FBQyxJQUFNO1FBQ2pDUSxTQUFTRixtRUFBbUJBO0lBQzlCLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDSixzQ0FBSUE7WUFDSFksU0FBUzs4QkFDUCw4REFBQ0M7OEJBQWU7bUJBQVA7OEJBQ1QsOERBQUNBOzhCQUFxQjttQkFBYjs4QkFDVCw4REFBQ0E7OEJBQW9CO21CQUFaO2FBQ1Y7OzhCQUVELDhEQUFDYiwyQ0FBUztvQkFDUmUsc0JBQVEsOERBQUNoQix3Q0FBTUE7a0NBQUVRLEdBQUdTLFFBQVEsQ0FBQyxFQUFFOztvQkFDL0JDLE9BQU9WLEdBQUdTLFFBQVE7Ozs7Ozs4QkFFcEIsOERBQUNmLHdDQUFNQTtvQkFBQ2lCLFNBQVNQO29CQUFVUSxTQUFTWDs4QkFBZTs7Ozs7Ozs7Ozs7OztBQU0zRDtHQTFCTUg7O1FBQ2FILG9EQUFXQTtRQUNFQyxvREFBV0E7OztLQUZyQ0U7QUE0Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz83MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPnR3aXQ8L2Rpdj4sXHJcbiAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsnok8L2Rpdj4sXHJcbiAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPu2MlOuhnOybjDwvZGl2PixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfT5cclxuICAgICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwiQXZhdGFyIiwiQ2FyZCIsIkJ1dHRvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiVXNlclByb2ZpbGUiLCJkaXNwYXRjaCIsIm1lIiwibG9nT3V0TG9hZGluZyIsInN0YXRlIiwidXNlciIsIm9uTG9nT3V0IiwiYWN0aW9ucyIsImRpdiIsIk1ldGEiLCJhdmF0YXIiLCJuaWNrbmFtZSIsInRpdGxlIiwib25DbGljayIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});