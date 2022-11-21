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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // useSelector를 사용해 redux에 있는 상태 가져오기\n    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const { mainPosts , hasMorePosts , loadPostsLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onScroll() {\n            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n                if (hasMorePosts && !loadPostsLoading) {\n                    dispatch({\n                        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST,\n                        data: mainPosts[mainPosts.length - 1].id\n                    });\n                }\n            }\n        }\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", onScroll);\n        };\n    }, [\n        mainPosts,\n        hasMorePosts,\n        loadPostsLoading\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onScroll() {\n            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n                if (hasMorePosts && !loadPostsLoading) {\n                    dispatch({\n                        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__.LOAD_POSTS_REQUEST\n                    });\n                }\n            }\n        }\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", onScroll);\n        };\n    }, [\n        hasMorePosts,\n        loadPostsLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            me && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 14\n            }, this),\n            mainPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    post: post\n                }, post.id, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\pages\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ew/vP9bY+jtp+hHUc+FnMn9arqY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // next가 pages 폴더를 인식해서 이걸 다 page component로 만들어줌\n // code spliting된 page로 만들어주는거임\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2M7QUFDUDtBQUNGO0FBQ0E7QUFDUTtBQUV0RCxTQUFTUSxPQUFPOztJQUNkLHFDQUFxQztJQUNyQyxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHUCx3REFBV0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxJQUFJO0lBQ2hELE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxhQUFZLEVBQUVDLGlCQUFnQixFQUFFLEdBQUdaLHdEQUFXQSxDQUMvRCxDQUFDUSxRQUFVQSxNQUFNSyxJQUFJO0lBRXZCLE1BQU1DLFdBQVdiLHdEQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZSxTQUFTO1lBQ1BDLE1BQU1WLDhEQUFrQkE7UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNpQixXQUFXO1lBQ2xCLElBQ0VDLE9BQU9DLE9BQU8sR0FBR0MsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLEdBQ3BERixTQUFTQyxlQUFlLENBQUNFLFlBQVksR0FBRyxLQUMxQztnQkFDQSxJQUFJWCxnQkFBZ0IsQ0FBQ0Msa0JBQWtCO29CQUNyQ0UsU0FBUzt3QkFDUEMsTUFBTVYsOERBQWtCQTt3QkFDeEJrQixNQUFNYixTQUFTLENBQUNBLFVBQVVjLE1BQU0sR0FBRyxFQUFFLENBQUNDLEVBQUU7b0JBQzFDO2dCQUNGLENBQUM7WUFDSCxDQUFDO1FBQ0g7UUFDQVIsT0FBT1MsZ0JBQWdCLENBQUMsVUFBVVY7UUFDbEMsT0FBTyxJQUFNO1lBQ1hDLE9BQU9VLG1CQUFtQixDQUFDLFVBQVVYO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDTjtRQUFXQztRQUFjQztLQUFpQjtJQUU5Q2IsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNpQixXQUFXO1lBQ2xCLElBQ0VDLE9BQU9DLE9BQU8sR0FBR0MsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLEdBQ3BERixTQUFTQyxlQUFlLENBQUNFLFlBQVksR0FBRyxLQUMxQztnQkFDQSxJQUFJWCxnQkFBZ0IsQ0FBQ0Msa0JBQWtCO29CQUNyQ0UsU0FBUzt3QkFDUEMsTUFBTVYsOERBQWtCQTtvQkFDMUI7Z0JBQ0YsQ0FBQztZQUNILENBQUM7UUFDSDtRQUNBWSxPQUFPUyxnQkFBZ0IsQ0FBQyxVQUFVVjtRQUNsQyxPQUFPLElBQU07WUFDWEMsT0FBT1UsbUJBQW1CLENBQUMsVUFBVVg7UUFDdkM7SUFDRixHQUFHO1FBQUNMO1FBQWNDO0tBQWlCO0lBRW5DLHFCQUNFLDhEQUFDViw2REFBU0E7O1lBRVBLLG9CQUFNLDhEQUFDSiw0REFBUUE7Ozs7O1lBQ2ZPLFVBQVVrQixHQUFHLENBQUMsQ0FBQ2YscUJBQ2QsOERBQUNULDREQUFRQTtvQkFBZVMsTUFBTUE7bUJBQWZBLEtBQUtZLEVBQUU7Ozs7Ozs7Ozs7O0FBSTlCO0dBOURTbkI7O1FBRVFOLG9EQUFXQTtRQUM0QkEsb0RBQVdBO1FBR2hEQyxvREFBV0E7OztLQU5yQks7QUFnRVQsK0RBQWVBLElBQUlBLEVBQUMsQ0FFcEIsaURBQWlEO0NBQ2pELCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gdXNlU2VsZWN0b3Lrpbwg7IKs7Jqp7ZW0IHJlZHV47JeQIOyeiOuKlCDsg4Htg5wg6rCA7KC47Jik6riwXHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdCxcclxuICApO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICAgICA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgey8qIOqyjOyLnOusvCDsnpHshLEg7Y+87J2AIOuhnOq3uOyduO2VnCDsgqzsmqnsnpDsl5Dqsozrp4wg67O07J206rKMIO2VnOuLpC4gKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLy8gbmV4dOqwgCBwYWdlcyDtj7TrjZTrpbwg7J247Iud7ZW07IScIOydtOqxuCDri6QgcGFnZSBjb21wb25lbnTroZwg66eM65Ok7Ja07KSMXHJcbi8vIGNvZGUgc3BsaXRpbmfrkJwgcGFnZeuhnCDrp4zrk6TslrTso7zripTqsbDsnoRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkFwcExheW91dCIsIlBvc3RGb3JtIiwiUG9zdENhcmQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJIb21lIiwibWUiLCJzdGF0ZSIsInVzZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwicG9zdCIsImRpc3BhdGNoIiwidHlwZSIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});