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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // useSelector를 사용해 redux에 있는 상태 가져오기\n    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const { mainPosts , hasMorePosts , loadPostsLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__.LOAD_USER_REQUEST\n        });\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onScroll() {\n            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n                if (hasMorePosts && !loadPostsLoading) {\n                    var ref;\n                    const lastId = (ref = mainPosts[mainPosts.length - 1]) === null || ref === void 0 ? void 0 : ref.id;\n                    dispatch({\n                        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST,\n                        lastId\n                    });\n                }\n            }\n        }\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", onScroll);\n        };\n    }, [\n        hasMorePosts,\n        loadPostsLoading,\n        mainPosts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            me && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 14\n            }, this),\n            mainPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    post: post\n                }, post.id, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cWGJ8hKUlv7gW7QesOlI3UuQZ0c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // next가 pages 폴더를 인식해서 이걸 다 page component로 만들어줌\n // code spliting된 page로 만들어주는거임\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNjO0FBQ1A7QUFDRjtBQUNBO0FBQ1E7QUFDRDtBQUVyRCxTQUFTUyxPQUFPOztJQUNkLHFDQUFxQztJQUNyQyxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHUix3REFBV0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxJQUFJO0lBQ2hELE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxhQUFZLEVBQUVDLGlCQUFnQixFQUFFLEdBQUdiLHdEQUFXQSxDQUMvRCxDQUFDUyxRQUFVQSxNQUFNSyxJQUFJO0lBRXZCLE1BQU1DLFdBQVdkLHdEQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0IsU0FBUztZQUNQQyxNQUFNViw2REFBaUJBO1FBQ3pCO1FBQ0FTLFNBQVM7WUFDUEMsTUFBTVgsOERBQWtCQTtRQUMxQjtJQUNGLEdBQUcsRUFBRTtJQUVMTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsU0FBU2tCLFdBQVc7WUFDbEIsSUFDRUMsT0FBT0MsT0FBTyxHQUFHQyxTQUFTQyxlQUFlLENBQUNDLFlBQVksR0FDcERGLFNBQVNDLGVBQWUsQ0FBQ0UsWUFBWSxHQUFHLEtBQzFDO2dCQUNBLElBQUlYLGdCQUFnQixDQUFDQyxrQkFBa0I7d0JBQ3RCRjtvQkFBZixNQUFNYSxTQUFTYixDQUFBQSxNQUFBQSxTQUFTLENBQUNBLFVBQVVjLE1BQU0sR0FBRyxFQUFFLGNBQS9CZCxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBaUNlLEVBQUU7b0JBQ2xEWCxTQUFTO3dCQUNQQyxNQUFNWCw4REFBa0JBO3dCQUN4Qm1CO29CQUNGO2dCQUNGLENBQUM7WUFDSCxDQUFDO1FBQ0g7UUFDQU4sT0FBT1MsZ0JBQWdCLENBQUMsVUFBVVY7UUFDbEMsT0FBTyxJQUFNO1lBQ1hDLE9BQU9VLG1CQUFtQixDQUFDLFVBQVVYO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDTDtRQUFjQztRQUFrQkY7S0FBVTtJQUU5QyxxQkFDRSw4REFBQ1QsNkRBQVNBOztZQUVQTSxvQkFBTSw4REFBQ0wsNERBQVFBOzs7OztZQUNmUSxVQUFVa0IsR0FBRyxDQUFDLENBQUNmLHFCQUNkLDhEQUFDViw0REFBUUE7b0JBQWVVLE1BQU1BO21CQUFmQSxLQUFLWSxFQUFFOzs7Ozs7Ozs7OztBQUk5QjtHQS9DU25COztRQUVRUCxvREFBV0E7UUFDNEJBLG9EQUFXQTtRQUdoREMsb0RBQVdBOzs7S0FOckJNO0FBaURULCtEQUFlQSxJQUFJQSxFQUFDLENBRXBCLGlEQUFpRDtDQUNqRCwrQkFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIC8vIHVzZVNlbGVjdG9y66W8IOyCrOyaqe2VtCByZWR1eOyXkCDsnojripQg7IOB7YOcIOqwgOyguOyYpOq4sFxyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3QsXHJcbiAgKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIG1haW5Qb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgey8qIOqyjOyLnOusvCDsnpHshLEg7Y+87J2AIOuhnOq3uOyduO2VnCDsgqzsmqnsnpDsl5Dqsozrp4wg67O07J206rKMIO2VnOuLpC4gKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLy8gbmV4dOqwgCBwYWdlcyDtj7TrjZTrpbwg7J247Iud7ZW07IScIOydtOqxuCDri6QgcGFnZSBjb21wb25lbnTroZwg66eM65Ok7Ja07KSMXHJcbi8vIGNvZGUgc3BsaXRpbmfrkJwgcGFnZeuhnCDrp4zrk6TslrTso7zripTqsbDsnoRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkFwcExheW91dCIsIlBvc3RGb3JtIiwiUG9zdENhcmQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkhvbWUiLCJtZSIsInN0YXRlIiwidXNlciIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJwb3N0IiwiZGlzcGF0Y2giLCJ0eXBlIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});