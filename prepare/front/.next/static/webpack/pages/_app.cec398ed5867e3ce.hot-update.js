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

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\n\nfunction addPostAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post\", data);\n}\nfunction* addPost(action) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        // axios를 통해 받은 결과\n        // const result = yield call(addPostAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,\n            // 성공 결과는 result.data에 담겨 있음\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,\n            // 실패 결과는 err.response.data에 담겨 있음\n            error: err.response.data\n        });\n    }\n}\nfunction addCommentAPI(data) {\n    // data: 게시할 post에 대한 data\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/post/\".concat(data.postId, \"/comment\"), data);\n}\n// function* addComment(action) {\n//   try {\n//     yield delay(1000);\n//     // axios를 통해 받은 결과\n//     // const result = yield call(addCommentAPI, action.data);\n//     yield put({\n//       type: ADD_COMMENT_SUCCESS,\n//       data: action.data,\n//       // 성공 결과는 result.data에 담겨 있음\n//     });\n//   } catch (err) {\n//     yield put({\n//       type: ADD_COMMENT_FAILURE,\n//       // 실패 결과는 err.response.data에 담겨 있음\n//       error: err.response.data,\n//     });\n//   }\n// }\nfunction* addComment(action) {\n    try {\n        // const result = yield call(addCommentAPI, action.data);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,\n            data: action.data\n        });\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,\n            data: err.response.data\n        });\n    }\n}\nfunction* watchAddPost() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);\n}\nfunction* watchAddComment() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, addComment);\n}\nfunction* postSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),\n        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment)\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVNEI7QUFDRjtBQVFBO0FBRTFCLFNBQVNnQixXQUFXQyxJQUFJLEVBQUU7SUFDeEIsMEJBQTBCO0lBQzFCLE9BQU9SLGtEQUFVLENBQUMsYUFBYVE7QUFDakM7QUFFQSxVQUFVRSxRQUFRQyxNQUFNLEVBQUU7SUFDeEIsSUFBSTtRQUNGLE1BQU1aLHlEQUFLQSxDQUFDO1FBRVosa0JBQWtCO1FBQ2xCLHNEQUFzRDtRQUN0RCxNQUFNTCx1REFBR0EsQ0FBQztZQUNSa0IsTUFBTVYsNERBQWdCQTtZQUN0Qiw0QkFBNEI7WUFDNUJNLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9LLEtBQUs7UUFDWixNQUFNbkIsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1ULDREQUFnQkE7WUFDdEIsa0NBQWtDO1lBQ2xDVyxPQUFPRCxJQUFJRSxRQUFRLENBQUNQLElBQUk7UUFDMUI7SUFDRjtBQUNGO0FBRUEsU0FBU1EsY0FBY1IsSUFBSSxFQUFFO0lBQzNCLDBCQUEwQjtJQUMxQixPQUFPUixrREFBVSxDQUFDLGFBQXlCLE9BQVpRLEtBQUtTLE1BQU0sRUFBQyxhQUFXVDtBQUN4RDtBQUVBLGlDQUFpQztBQUNqQyxVQUFVO0FBQ1YseUJBQXlCO0FBRXpCLHlCQUF5QjtBQUN6QixnRUFBZ0U7QUFDaEUsa0JBQWtCO0FBQ2xCLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IscUNBQXFDO0FBQ3JDLFVBQVU7QUFDVixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLFVBQVU7QUFDVixNQUFNO0FBQ04sSUFBSTtBQUVKLFVBQVVVLFdBQVdQLE1BQU0sRUFBRTtJQUMzQixJQUFJO1FBQ0YseURBQXlEO1FBQ3pELE1BQU1aLHlEQUFLQSxDQUFDO1FBQ1osTUFBTUwsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1QLCtEQUFtQkE7WUFDekJHLE1BQU1HLE9BQU9ILElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9LLEtBQUs7UUFDWixNQUFNbkIsdURBQUdBLENBQUM7WUFDUmtCLE1BQU1OLCtEQUFtQkE7WUFDekJFLE1BQU1LLElBQUlFLFFBQVEsQ0FBQ1AsSUFBSTtRQUN6QjtJQUNGO0FBQ0Y7QUFDQSxVQUFVVyxlQUFlO0lBQ3ZCLE1BQU10Qiw4REFBVUEsQ0FBQ0ksNERBQWdCQSxFQUFFUztBQUNyQztBQUVBLFVBQVVVLGtCQUFrQjtJQUMxQixNQUFNdkIsOERBQVVBLENBQUNPLCtEQUFtQkEsRUFBRWM7QUFDeEM7QUFDZSxVQUFVRyxXQUFXO0lBQ2xDLE1BQU05Qix1REFBR0EsQ0FBQztRQUFDQyx3REFBSUEsQ0FBQzJCO1FBQWUzQix3REFBSUEsQ0FBQzRCO0tBQWlCO0FBQ3ZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcz85OGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGZvcmssXHJcbiAgY2FsbCxcclxuICBwdXQsXHJcbiAgdGFrZUV2ZXJ5LFxyXG4gIHRha2UsXHJcbiAgdGFrZUxhdGVzdCxcclxuICB0aHJvdHRsZSxcclxuICBkZWxheSxcclxufSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgLy8gZGF0YTog6rKM7Iuc7ZWgIHBvc3Tsl5Ag64yA7ZWcIGRhdGFcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbiAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQIOuLtOqyqCDsnojsnYxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIC8vIGRhdGE6IOqyjOyLnO2VoCBwb3N07JeQIOuMgO2VnCBkYXRhXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbi8vICAgICAvLyBheGlvc+ulvCDthrXtlbQg67Cb7J2AIOqysOqzvFxyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4vLyAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCDri7Tqsqgg7J6I7J2MXHJcbi8vICAgICB9KTtcclxuLy8gICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbi8vICAgICAgIC8vIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKoIOyeiOydjFxyXG4vLyAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFsbCIsImZvcmsiLCJjYWxsIiwicHV0IiwidGFrZUV2ZXJ5IiwidGFrZSIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsImRlbGF5IiwiYXhpb3MiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwiZGF0YSIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwidHlwZSIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n"));

/***/ })

});