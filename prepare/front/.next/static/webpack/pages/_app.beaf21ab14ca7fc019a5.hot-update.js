webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");





// (이전상태, 액션) 로 다음상태를 만들어주는게 reducer
var rootReducer = function rootReducer(state, action) {
  // hydrate를 위해서 index 리듀서를 하나 추가해주는거임
  // SSR을 위한거임
  // index: (state = {}, action) => {
  //   switch (action.type) {
  //     case HYDRATE:
  //       console.log('HYDRATE', action);
  //       return {
  //         ...state,
  //         ...action.payload,
  //       };

  //     // 초기화
  //     default:
  //       return state;
  //   }
  // },
  // // user안에 user initialstate가 들어있음
  // user,
  // // post안에 post initialstate가 들어있음
  // post,
  switch (action.type) {
    default:
      {
        var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDTDtBQUNkO0FBQ0E7O0FBRTFCO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsS0FBSyxFQUFFQyxNQUFNLEVBQUs7RUFDckM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsUUFBUUEsTUFBTSxDQUFDQyxJQUFJO0lBQ2pCO01BQVM7UUFDUCxJQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7VUFDdENDLElBQUksRUFBSkEsNkNBQUk7VUFDSkMsSUFBSSxFQUFKQSw2Q0FBSUE7UUFDTixDQUFDLENBQUM7TUFDSjtFQUFDO0FBRUwsQ0FBQztBQUVjUCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmVhZjIxYWIxNGNhN2ZjMDE5YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpIOuhnCDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja07KO864qU6rKMIHJlZHVjZXJcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGh5ZHJhdGXrpbwg7JyE7ZW07IScIGluZGV4IOumrOuTgOyEnOulvCDtlZjrgpgg7LaU6rCA7ZW07KO864qU6rGw7J6EXHJcbiAgLy8gU1NS7J2EIOychO2VnOqxsOyehFxyXG4gIC8vIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgLy8gICAgIGNhc2UgSFlEUkFURTpcclxuICAvLyAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gIC8vICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgLy8gICAgICAgfTtcclxuXHJcbiAgLy8gICAgIC8vIOy0iOq4sO2ZlFxyXG4gIC8vICAgICBkZWZhdWx0OlxyXG4gIC8vICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAvLyAgIH1cclxuICAvLyB9LFxyXG4gIC8vIC8vIHVzZXLslYjsl5AgdXNlciBpbml0aWFsc3RhdGXqsIAg65Ok7Ja07J6I7J2MXHJcbiAgLy8gdXNlcixcclxuICAvLyAvLyBwb3N07JWI7JeQIHBvc3QgaW5pdGlhbHN0YXRl6rCAIOuTpOyWtOyeiOydjFxyXG4gIC8vIHBvc3QsXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=