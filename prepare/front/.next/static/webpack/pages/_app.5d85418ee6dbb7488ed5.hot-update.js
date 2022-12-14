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
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
    default:
      {
        var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNMO0FBQ2Q7QUFDQTs7QUFFMUI7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUVDLE1BQU0sRUFBSztFQUNyQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxRQUFRQSxNQUFNLENBQUNDLElBQUk7SUFDakIsS0FBS0MsMERBQU87TUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFSixNQUFNLENBQUM7SUFDaEM7TUFBUztRQUNQLElBQU1LLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztVQUN0Q0MsSUFBSSxFQUFKQSw2Q0FBSTtVQUNKQyxJQUFJLEVBQUpBLDZDQUFJQTtRQUNOLENBQUMsQ0FBQztRQUNGLE9BQU9ILGVBQWUsQ0FBQ04sS0FBSyxFQUFFQyxNQUFNLENBQUM7TUFDdkM7RUFBQztBQUVMLENBQUM7QUFFY0YsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVkODU0MThlZTZkYmI3NDg4ZWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSDroZwg64uk7J2M7IOB7YOc66W8IOunjOuTpOyWtOyjvOuKlOqyjCByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBoeWRyYXRl66W8IOychO2VtOyEnCBpbmRleCDrpqzrk4DshJzrpbwg7ZWY64KYIOy2lOqwgO2VtOyjvOuKlOqxsOyehFxyXG4gIC8vIFNTUuydhCDsnITtlZzqsbDsnoRcclxuICAvLyBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIC8vICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gIC8vICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gIC8vICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAvLyAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gIC8vICAgICAgIH07XHJcblxyXG4gIC8vICAgICAvLyDstIjquLDtmZRcclxuICAvLyAgICAgZGVmYXVsdDpcclxuICAvLyAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuICAvLyAvLyB1c2Vy7JWI7JeQIHVzZXIgaW5pdGlhbHN0YXRl6rCAIOuTpOyWtOyeiOydjFxyXG4gIC8vIHVzZXIsXHJcbiAgLy8gLy8gcG9zdOyViOyXkCBwb3N0IGluaXRpYWxzdGF0ZeqwgCDrk6TslrTsnojsnYxcclxuICAvLyBwb3N0LFxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=