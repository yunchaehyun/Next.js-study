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

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// 댓글 창\nfunction CommentForm(param) {\n    let { post  } = param;\n    _s();\n    // 현재 접속한 유저\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var ref;\n        return (ref = state.user.me) === null || ref === void 0 ? void 0 : ref.id;\n    });\n    const { addCommentDone , addCommentLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (addCommentDone) {\n            setCommentText(\"\");\n        }\n    });\n    const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        console.log(post.id, commentText);\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.ADD_COMMENT_REQUEST,\n            data: {\n                content: commentText,\n                postId: post.id,\n                userId: id\n            }\n        });\n    }, [\n        commentText,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        onFinish: onSubmitComment,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {\n            style: {\n                position: \"relative\",\n                margin: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.TextArea, {\n                    value: commentText,\n                    onChange: onChangeCommentText\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\CommentForm.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    style: {\n                        position: \"absolute\",\n                        right: 0,\n                        bottom: -40,\n                        zIndex: 1\n                    },\n                    type: \"primary\",\n                    htmlType: \"submit\",\n                    loading: addCommentLoading,\n                    children: \"작성\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\CommentForm.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\CommentForm.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\GitHub\\\\FRONT-END\\\\Redux-study\\\\prepare\\\\front\\\\components\\\\CommentForm.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(CommentForm, \"TkQ1pkz5HHxeoLHkjeNQHPXXfhA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CommentForm;\nCommentForm.propTypes = {\n    post: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNEO0FBQ1g7QUFDUjtBQUNvQjtBQUNkO0FBQ2M7QUFFdkQsT0FBTztBQUNQLFNBQVNXLFlBQVksS0FBUSxFQUFFO1FBQVYsRUFBRUMsS0FBSSxFQUFFLEdBQVI7O0lBQ25CLFlBQVk7SUFDWixNQUFNQyxXQUFXTix3REFBV0E7SUFFNUIsTUFBTU8sS0FBS04sd0RBQVdBLENBQUMsQ0FBQ087WUFBVUE7UUFBQUEsT0FBQUEsQ0FBQUEsTUFBQUEsTUFBTUMsSUFBSSxDQUFDQyxFQUFFLGNBQWJGLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFlRCxFQUFFOztJQUNuRCxNQUFNLEVBQUVJLGVBQWMsRUFBRUMsa0JBQWlCLEVBQUUsR0FBR1gsd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUgsSUFBSTtJQUUvRSxNQUFNLENBQUNRLGFBQWFDLHFCQUFxQkMsZUFBZSxHQUFHYiwyREFBUUEsQ0FBQztJQUNwRVAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlnQixnQkFBZ0I7WUFDbEJJLGVBQWU7UUFDakIsQ0FBQztJQUNIO0lBQ0EsTUFBTUMsa0JBQWtCdEIsa0RBQVdBLENBQUMsSUFBTTtRQUN4Q3VCLFFBQVFDLEdBQUcsQ0FBQ2IsS0FBS0UsRUFBRSxFQUFFTTtRQUNyQlAsU0FBUztZQUNQYSxNQUFNaEIsK0RBQW1CQTtZQUN6QmlCLE1BQU07Z0JBQUVDLFNBQVNSO2dCQUFhUyxRQUFRakIsS0FBS0UsRUFBRTtnQkFBRWdCLFFBQVFoQjtZQUFHO1FBQzVEO0lBQ0YsR0FBRztRQUFDTTtRQUFhTjtLQUFHO0lBRXBCLHFCQUNFLDhEQUFDWCxzQ0FBSUE7UUFBQzRCLFVBQVVSO2tCQUNkLDRFQUFDcEIsMkNBQVM7WUFBQzhCLE9BQU87Z0JBQUVDLFVBQVU7Z0JBQVlDLFFBQVE7WUFBRTs7OEJBQ2xELDhEQUFDL0IsZ0RBQWM7b0JBQUNpQyxPQUFPakI7b0JBQWFrQixVQUFVakI7Ozs7Ozs4QkFDOUMsOERBQUNoQix3Q0FBTUE7b0JBQ0w0QixPQUFPO3dCQUFFQyxVQUFVO3dCQUFZSyxPQUFPO3dCQUFHQyxRQUFRLENBQUM7d0JBQUlDLFFBQVE7b0JBQUU7b0JBQ2hFZixNQUFLO29CQUNMZ0IsVUFBUztvQkFDVEMsU0FBU3hCOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBcENTUjs7UUFFVUosb0RBQVdBO1FBRWpCQyxvREFBV0E7UUFDd0JBLG9EQUFXQTtRQUVFQyx1REFBUUE7OztLQVA1REU7QUFzQ1RBLFlBQVlpQyxTQUFTLEdBQUc7SUFDdEJoQyxNQUFNTixxRUFBMkI7QUFDbkM7QUFFQSwrREFBZUssV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLmpzPzhlNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG4vLyDrjJPquIAg7LC9XHJcbmZ1bmN0aW9uIENvbW1lbnRGb3JtKHsgcG9zdCB9KSB7XHJcbiAgLy8g7ZiE7J6sIOygkeyGje2VnCDsnKDsoIBcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbY29tbWVudFRleHQsIGlkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMSB9fVxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgbG9hZGluZz17YWRkQ29tbWVudExvYWRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7J6R7ISxXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJQcm9wVHlwZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlSW5wdXQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQ29tbWVudEZvcm0iLCJwb3N0IiwiZGlzcGF0Y2giLCJpZCIsInN0YXRlIiwidXNlciIsIm1lIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsIm9uRmluaXNoIiwiSXRlbSIsInN0eWxlIiwicG9zaXRpb24iLCJtYXJnaW4iLCJUZXh0QXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsImh0bWxUeXBlIiwibG9hZGluZyIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n"));

/***/ })

});