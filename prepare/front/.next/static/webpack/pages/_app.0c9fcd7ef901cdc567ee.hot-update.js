webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./reducers/post.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





// (이전상태, 액션) 로 다음상태를 만들어주는게 reducer
var rootReducer = function rootReducer(state, action) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
    // hydrate를 위해서 index 리듀서를 하나 추가해주는거임
    // SSR을 위한거임
    index: function index() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      switch (action.type) {
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
          console.log('HYDRATE', action);
          return _objectSpread(_objectSpread({}, state), action.payload);

        // 초기화
        default:
          return state;
      }
    },
    // user안에 user initialstate가 들어있음
    user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
    // post안에 post initialstate가 들어있음
    post: _post__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFDZDtBQUNBOztBQUUxQjtBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLEtBQUssRUFBRUMsTUFBTTtFQUFBLE9BQUtDLDZEQUFlLENBQUM7SUFDckQ7SUFDQTtJQUNBQyxLQUFLLEVBQUUsaUJBQXdCO01BQUEsSUFBdkJILEtBQUssdUVBQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUMsTUFBTTtNQUN4QixRQUFRQSxNQUFNLENBQUNHLElBQUk7UUFDakIsS0FBS0MsMERBQU87VUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFTixNQUFNLENBQUM7VUFDOUIsdUNBQ0tELEtBQUssR0FDTEMsTUFBTSxDQUFDTyxPQUFPOztRQUdyQjtRQUNBO1VBQ0UsT0FBT1IsS0FBSztNQUFDO0lBRW5CLENBQUM7SUFDRDtJQUNBUyxJQUFJLEVBQUpBLDZDQUFJO0lBQ0o7SUFDQUMsSUFBSSxFQUFKQSw2Q0FBSUE7RUFDTixDQUFDLENBQUM7QUFBQTtBQUVhWCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGM5ZmNkN2VmOTAxY2RjNTY3ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpIOuhnCDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja07KO864qU6rKMIHJlZHVjZXJcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gY29tYmluZVJlZHVjZXJzKHtcclxuICAvLyBoeWRyYXRl66W8IOychO2VtOyEnCBpbmRleCDrpqzrk4DshJzrpbwg7ZWY64KYIOy2lOqwgO2VtOyjvOuKlOqxsOyehFxyXG4gIC8vIFNTUuydhCDsnITtlZzqsbDsnoRcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAvLyDstIjquLDtmZRcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyB1c2Vy7JWI7JeQIHVzZXIgaW5pdGlhbHN0YXRl6rCAIOuTpOyWtOyeiOydjFxyXG4gIHVzZXIsXHJcbiAgLy8gcG9zdOyViOyXkCBwb3N0IGluaXRpYWxzdGF0ZeqwgCDrk6TslrTsnojsnYxcclxuICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9