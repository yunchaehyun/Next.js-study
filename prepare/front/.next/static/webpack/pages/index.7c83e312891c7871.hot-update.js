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

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PostImages = (param)=>{\n    let { images  } = param;\n    _s();\n    const [showImageZoom, setShowImagesZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setShowImagesZoom(true);\n    }, []);\n    if (images.length === 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                src: images[0].src,\n                alt: images[0].src,\n                onClick: onZoom\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    }\n    if (images.length === 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    style: {\n                        width: \"50%\"\n                    },\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    style: {\n                        width: \"50%\"\n                    },\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    width: \"50%\",\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"presentation\",\n                    style: {\n                        display: \"inline-block\",\n                        width: \"50%\",\n                        textAlign: \"center\",\n                        verticalAlign: \"middle\"\n                    },\n                    onClick: onZoom,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        images.length - 1,\n                        \"개의 사진 더보기\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\PostImages.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PostImages, \"nXznhmoCPXT6Nzh2Zen0f/keBzg=\");\n_c = PostImages;\nPostImages.propTypes = {\n    images: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBcUQ7QUFDbEI7QUFDYztBQUVqRCxNQUFNSyxhQUFhLFNBQWdCO1FBQWYsRUFBRUMsT0FBTSxFQUFFOztJQUM1QixNQUFNLENBQUNDLGVBQWVDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3pELE1BQU1PLFNBQVNSLGtEQUFXQSxDQUFDLElBQU07UUFDL0JPLGtCQUFrQixJQUFJO0lBQ3hCLEdBQUcsRUFBRTtJQUNMLElBQUlGLE9BQU9JLE1BQU0sS0FBSyxHQUFHO1FBQ3ZCLHFCQUNFO3NCQUNFLDRFQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsS0FBS1AsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sR0FBRztnQkFDbEJDLEtBQUtSLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7Z0JBQ2xCRSxTQUFTTjs7Ozs7OztJQUlqQixDQUFDO0lBQ0QsSUFBSUgsT0FBT0ksTUFBTSxLQUFLLEdBQUc7UUFDdkIscUJBQ0U7OzhCQUNFLDhEQUFDQztvQkFDQ0MsTUFBSztvQkFDTEksT0FBUzt3QkFBQ0MsT0FBTztvQkFBSztvQkFDdEJKLEtBQUtQLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7b0JBQ2xCQyxLQUFLUixNQUFNLENBQUMsRUFBRSxDQUFDTyxHQUFHO29CQUNsQkUsU0FBU047Ozs7Ozs4QkFFWCw4REFBQ0U7b0JBQ0NDLE1BQUs7b0JBQ0xJLE9BQVM7d0JBQUNDLE9BQU87b0JBQUs7b0JBQ3RCSixLQUFLUCxNQUFNLENBQUMsRUFBRSxDQUFDTyxHQUFHO29CQUNsQkMsS0FBS1IsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sR0FBRztvQkFDbEJFLFNBQVNOOzs7Ozs7OztJQUlqQixDQUFDO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNTOzs4QkFDQyw4REFBQ1A7b0JBQ0NDLE1BQUs7b0JBQ0xLLE9BQU07b0JBQ05KLEtBQUtQLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7b0JBQ2xCQyxLQUFLUixNQUFNLENBQUMsRUFBRSxDQUFDTyxHQUFHO29CQUNsQkUsU0FBU047Ozs7Ozs4QkFFWCw4REFBQ1M7b0JBQ0NOLE1BQUs7b0JBQ0xJLE9BQU87d0JBQ0xHLFNBQVM7d0JBQ1RGLE9BQU87d0JBQ1BHLFdBQVc7d0JBQ1hDLGVBQWU7b0JBQ2pCO29CQUNBTixTQUFTTjs7c0NBRVQsOERBQUNMLDJEQUFZQTs7Ozs7c0NBQ2IsOERBQUNrQjs7Ozs7d0JBQ0FoQixPQUFPSSxNQUFNLEdBQUc7d0JBQUU7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBakVNTDtLQUFBQTtBQW1FTkEsV0FBV2tCLFNBQVMsR0FBRztJQUNyQmpCLFFBQVFILHlEQUFpQixDQUFDQSwwREFBZ0I7QUFDNUM7QUFFQSwrREFBZUUsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanM/NTFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0ltYWdlWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiBcIjUwJVwifX1cclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiBcIjUwJVwifX1cclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cclxuICAgICAgICAgIOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiUGx1c091dGxpbmVkIiwiUG9zdEltYWdlcyIsImltYWdlcyIsInNob3dJbWFnZVpvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsImxlbmd0aCIsImltZyIsInJvbGUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwic3R5bGUiLCJ3aWR0aCIsImRpdiIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiYnIiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostImages.js\n"));

/***/ })

});