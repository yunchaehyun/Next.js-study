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

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostForm = ()=>{\n    _s();\n    const { imagePaths  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const onChangeText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        setText(e.target.value);\n    }, []);\n    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.addPost);\n    }, []);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            style: {\n                margin: \"10px 0 20px\"\n            },\n            encType: \"multipart/form-data\",\n            onFinish: onSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.TextArea, {\n                    value: text,\n                    onChange: onChangeText,\n                    maxLength: 140,\n                    placeholder: \"어떤 신기한 일이 있었나요?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            multiple: true,\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            children: \"이미지 업로드\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            type: \"primary\",\n                            style: {\n                                float: \"right\"\n                            },\n                            htmlType: \"submit\",\n                            children: \"게시글 작성\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: imagePaths.map((v)=>{\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"inline-block\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: v,\n                                    style: {\n                                        width: \"200px\"\n                                    },\n                                    alt: v\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        children: \"제거\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, v, true, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostForm.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PostForm, \"WBOsVG1WGq9cYXphNh/jyoO+wqI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ1A7QUFDSTtBQUNlO0FBQ1o7QUFDM0MsTUFBTVMsV0FBVyxJQUFNOztJQUNyQixNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJO0lBQ3hELE1BQU1DLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNUSxlQUFlWCxrREFBV0EsQ0FBQyxDQUFDWSxJQUFNO1FBQ3RDQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDeEIsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsV0FBV2hCLGtEQUFXQSxDQUFDLElBQU07UUFDakNVLFNBQVNMLG1EQUFPQTtJQUNsQixHQUFHLEVBQUU7SUFDTCxNQUFNLENBQUNZLE1BQU1KLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFakMscUJBQ0U7a0JBR0UsNEVBQUNMLHNDQUFJQTtZQUNIcUIsT0FBTztnQkFBRUMsUUFBUTtZQUFjO1lBQy9CQyxTQUFRO1lBQ1JDLFVBQVVMOzs4QkFFViw4REFBQ2xCLGdEQUFjO29CQUNiaUIsT0FBT0U7b0JBQ1BNLFVBQVVaO29CQUNWYSxXQUFXO29CQUNYQyxhQUFZOzs7Ozs7OEJBR2QsOERBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLFFBQVE7NEJBQUNDLE1BQU07Ozs7OztzQ0FDbEMsOERBQUMvQix3Q0FBTUE7c0NBQUM7Ozs7OztzQ0FDUiw4REFBQ0Esd0NBQU1BOzRCQUFDNkIsTUFBSzs0QkFBVVYsT0FBTztnQ0FBRWEsT0FBTzs0QkFBUTs0QkFBR0MsVUFBUztzQ0FBUzs7Ozs7Ozs7Ozs7OzhCQUl0RSw4REFBQ047OEJBQ0VuQixXQUFXMEIsR0FBRyxDQUFDLENBQUNDLElBQU07c0NBQ3JCLDhEQUFDUjs0QkFBWVIsT0FBTztnQ0FBRWlCLFNBQVM7NEJBQWU7OzhDQUM1Qyw4REFBQ0M7b0NBQUlDLEtBQUtIO29DQUFHaEIsT0FBTzt3Q0FBRW9CLE9BQU87b0NBQVE7b0NBQUdDLEtBQUtMOzs7Ozs7OENBQzdDLDhEQUFDUjs4Q0FDQyw0RUFBQzNCLHdDQUFNQTtrREFBQzs7Ozs7Ozs7Ozs7OzJCQUhGbUM7Ozs7O29CQU1aOzs7Ozs7Ozs7Ozs7O0FBS1Y7R0EvQ001Qjs7UUFDbUJGLG9EQUFXQTtRQUNqQkQsb0RBQVdBOzs7S0FGeEJHO0FBaUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdEZvcm0uanM/MDU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIOydvOuLqCDquLDriqUg6rWs7ZiEIO2VmOqzoCByZWZhY29yaW5n7ZWgIOuVjCwg7ISx64qlIOy4oeyglSDtlbTrs7TrqbTshJwgdXNlTWVtbyDsgqzsmqntlbTso7zquLAuICovfVxyXG5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxyXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIOqyjOyLnOq4gCDsnpHshLFcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iXSwibmFtZXMiOlsiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImFkZFBvc3QiLCJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJzdGF0ZSIsInBvc3QiLCJkaXNwYXRjaCIsIm9uQ2hhbmdlVGV4dCIsImUiLCJzZXRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInRleHQiLCJzdHlsZSIsIm1hcmdpbiIsImVuY1R5cGUiLCJvbkZpbmlzaCIsIlRleHRBcmVhIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsImRpdiIsImlucHV0IiwidHlwZSIsIm11bHRpcGxlIiwiaGlkZGVuIiwiZmxvYXQiLCJodG1sVHlwZSIsIm1hcCIsInYiLCJkaXNwbGF5IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostForm.js\n"));

/***/ })

});