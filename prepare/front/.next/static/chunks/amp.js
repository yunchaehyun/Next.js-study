_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();
          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead
            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });
            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }
            _context.next = 18;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);
          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.
function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NvQkE7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBTEE7QUFPQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBWixFQUF5QjtFQUN2QkQsTUFBTSxDQUFDQyxXQUFQRCxHQUFxQkUsK0JBQXJCRjtBQUNEO0FBRUQsSUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUxELENBQVdFLFFBQVEsQ0FBQ0MsY0FBVEQsQ0FBd0IsZUFBeEJBLEVBQXlDRSxXQUFwREosQ0FBYjtBQUNBLElBQU1LLFdBQUYsR0FBd0JOLElBQTVCLENBQU1NLFdBQUY7RUFBZUMsSUFBZixHQUF3QlAsSUFBNUIsQ0FBbUJPLElBQWY7QUFDSkQsV0FBVyxHQUFHQSxXQUFXLElBQUksRUFBN0JBO0FBQ0EsSUFBSUUsY0FBYyxHQUFHLElBQXJCLENBQ0E7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLHVCQUFkO0FBQ0EsSUFBTUMsYUFBYSxHQUNqQkwsV0FBVyxJQUFJQSxXQUFXLENBQUNNLFFBQVpOLENBQXFCLEdBQXJCQSxJQUE0QixFQUE1QkEsR0FBaUMsR0FBckMsQ0FBWEEsR0FBdUQsdUJBRHpELENBR0E7QUFDQSxT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QUNBLHlCQUFNdE8sUUFBUSxDQUFDdU8sSUFBZixFQUFxQjtVQUNuQm5HLFdBQVcsRUFBRTtRQURNLENBQXJCLEVBRUdFLElBRkgsQ0FFU2tHLGlCQUFELEVBQWE7VUFDbkIsSUFBSUEsT0FBTyxDQUFDelAsTUFBUnlQLEtBQW1CLEdBQXZCLEVBQTRCO1lBQzFCeE8sUUFBUSxDQUFDQyxNQUFURDtVQUNEO1FBQ0YsQ0FORDtNQU9EO0lBQ0YsQ0FBQyxRQUFPeU8sR0FBUCxFQUFZO01BQ1p2TyxPQUFPLENBQUNDLEtBQVJELENBQWMsNENBQWRBLEVBQTREdU8sR0FBNUR2TztJQUNEO0VBQ0YsQ0FsQkQ2TjtBQW1CRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guanMubWFwXG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tICcuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcbmltcG9ydCB7IHNldHVwUGluZyB9IGZyb20gJy4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHMnXG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudCB9IGZyb20gJy4vZm91YydcblxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgd2luZG93LkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2VQb2x5ZmlsbFxufVxuXG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KVxubGV0IHsgYXNzZXRQcmVmaXgsIHBhZ2UgfSA9IGRhdGFcbmFzc2V0UHJlZml4ID0gYXNzZXRQcmVmaXggfHwgJydcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGxcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fXG5jb25zdCBob3RVcGRhdGVQYXRoID1cbiAgYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nXG5cbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gIC8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4gIC8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfX1xufVxuXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJ1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKVxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IGN1clBhZ2UgPSBwYWdlID09PSAnLycgPyAnaW5kZXgnIDogcGFnZVxuICAgIC8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcbiAgICBjb25zdCBwYWdlVXBkYXRlZCA9IChBcnJheS5pc0FycmF5KGpzb25EYXRhLmMpXG4gICAgICA/IGpzb25EYXRhLmNcbiAgICAgIDogT2JqZWN0LmtleXMoanNvbkRhdGEuYylcbiAgICApLnNvbWUoKG1vZCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YFxuICAgICAgICApICE9PSAtMSB8fFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke1xuICAgICAgICAgICAgY3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gXG4gICAgICAgICAgfWAucmVwbGFjZSgvXFwvL2csICdcXFxcJylcbiAgICAgICAgKSAhPT0gLTFcbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKHBhZ2VVcGRhdGVkKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VySGFzaCA9IG1vc3RSZWNlbnRIYXNoXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKVxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICB9XG59XG5cbmdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gIHBhdGg6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcmAsXG59KS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaFxuICAgICAgdHJ5QXBwbHlVcGRhdGVzKClcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgfVxufSlcblxuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBwYWdlKVxuZGlzcGxheUNvbnRlbnQoKVxuIiwiY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICB2YXIgc291cmNlXG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIHZhciBsaXN0ZW5lcnMgPSBbXVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwXG4gIH1cblxuICBpbml0KClcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aClcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lXG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKVxuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudClcbiAgICB9XG5cbiAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgaWYgKCFjYi51bmZpbHRlcmVkICYmIGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgPT09IC0xKSByZXR1cm5cbiAgICAgIGNiKGV2ZW50KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgc291cmNlLmNsb3NlKClcbiAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvc2U6ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICBzb3VyY2UuY2xvc2UoKVxuICAgIH0sXG4gICAgYWRkTWVzc2FnZUxpc3RlbmVyOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKGZuKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vbmRlbWFuZCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IChjYikgPT4ge1xuICAgICAgICBldmVudENhbGxiYWNrcy5wdXNoKGNiKVxuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5cbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudFxudmFyIFJlc3BvbnNlID0gd2luZG93LlJlc3BvbnNlXG52YXIgVGV4dERlY29kZXIgPSB3aW5kb3cuVGV4dERlY29kZXJcbnZhciBUZXh0RW5jb2RlciA9IHdpbmRvdy5UZXh0RW5jb2RlclxudmFyIEFib3J0Q29udHJvbGxlciA9IHdpbmRvdy5BYm9ydENvbnRyb2xsZXJcblxuaWYgKEFib3J0Q29udHJvbGxlciA9PSB1bmRlZmluZWQpIHtcbiAgQWJvcnRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2lnbmFsID0gbnVsbFxuICAgIHRoaXMuYWJvcnQgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gIHRoaXMuYml0c05lZWRlZCA9IDBcbiAgdGhpcy5jb2RlUG9pbnQgPSAwXG59XG5cblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChvY3RldHMpIHtcbiAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMDgwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDA3ZmZcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoY29kZVBvaW50ID49IDB4MDgwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhkN2ZmKSB8fFxuICAgICAgICAoY29kZVBvaW50ID49IDB4ZTAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhmZmZmKVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMTAwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MTBmZmZmXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMikge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDJcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAzKSB7XG4gICAgICByZXR1cm4gM1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIHZhciBSRVBMQUNFUiA9IDB4ZmZmZFxuICB2YXIgc3RyaW5nID0gJydcbiAgdmFyIGJpdHNOZWVkZWQgPSB0aGlzLmJpdHNOZWVkZWRcbiAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2N0ZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldXG4gICAgaWYgKGJpdHNOZWVkZWQgIT09IDApIHtcbiAgICAgIGlmIChcbiAgICAgICAgb2N0ZXQgPCAxMjggfHxcbiAgICAgICAgb2N0ZXQgPiAxOTEgfHxcbiAgICAgICAgIXZhbGlkKFxuICAgICAgICAgIChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MyksXG4gICAgICAgICAgYml0c05lZWRlZCAtIDYsXG4gICAgICAgICAgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKG9jdGV0ID49IDAgJiYgb2N0ZXQgPD0gMTI3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDE5MiAmJiBvY3RldCA8PSAyMjMpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAxXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMzFcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjI0ICYmIG9jdGV0IDw9IDIzOSkge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDJcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAxNVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyNDAgJiYgb2N0ZXQgPD0gMjQ3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogM1xuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGJpdHNOZWVkZWQgIT09IDAgJiZcbiAgICAgICAgIXZhbGlkKGNvZGVQb2ludCwgYml0c05lZWRlZCwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSlcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBiaXRzTmVlZGVkIC09IDZcbiAgICAgIGNvZGVQb2ludCA9IChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MylcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgPj4gMTApKVxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgICAweGRjMDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpICYgMHgzZmYpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZFxuICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludFxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSwge1xuICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICB9KSA9PT0gJ3Rlc3QnXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBJRSwgRWRnZVxuaWYgKFxuICBUZXh0RGVjb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgVGV4dEVuY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gICFzdXBwb3J0c1N0cmVhbU9wdGlvbigpXG4pIHtcbiAgVGV4dERlY29kZXIgPSBUZXh0RGVjb2RlclBvbHlmaWxsXG59XG5cbnZhciBrID0gZnVuY3Rpb24gKCkge31cblxuZnVuY3Rpb24gWEhSV3JhcHBlcih4aHIpIHtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICB0aGlzLnJlc3BvbnNlVHlwZSA9ICcnXG4gIHRoaXMucmVhZHlTdGF0ZSA9IDBcbiAgdGhpcy5zdGF0dXMgPSAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9ICcnXG4gIHRoaXMucmVzcG9uc2VUZXh0ID0gJydcbiAgdGhpcy5vbnByb2dyZXNzID0ga1xuICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgdGhpcy5fY29udGVudFR5cGUgPSAnJ1xuICB0aGlzLl94aHIgPSB4aHJcbiAgdGhpcy5fc2VuZFRpbWVvdXQgPSAwXG4gIHRoaXMuX2Fib3J0ID0ga1xufVxuXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gIHRoaXMuX2Fib3J0KHRydWUpXG5cbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgdmFyIHN0YXRlID0gMVxuICB2YXIgdGltZW91dCA9IDBcblxuICB0aGlzLl9hYm9ydCA9IGZ1bmN0aW9uIChzaWxlbnQpIHtcbiAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dClcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgeGhyLm9ubG9hZCA9IGtcbiAgICAgIHhoci5vbmVycm9yID0ga1xuICAgICAgeGhyLm9uYWJvcnQgPSBrXG4gICAgICB4aHIub25wcm9ncmVzcyA9IGtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gICAgICAvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0gMFxuICB9XG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlID09PSAxKSB7XG4gICAgICAvLyBzdGF0ZSA9IDI7XG4gICAgICB2YXIgc3RhdHVzID0gMFxuICAgICAgdmFyIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICBpZiAoISgnY29udGVudFR5cGUnIGluIHhocikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbiAgICAgICAgICBzdGF0dXMgPSAwXG4gICAgICAgICAgc3RhdHVzVGV4dCA9ICcnXG4gICAgICAgICAgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgICAgICAvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgc3RhdHVzVGV4dCA9ICdPSydcbiAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGVcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcbiAgICAgICAgc3RhdGUgPSAyXG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXNcbiAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dFxuICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlXG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgb25TdGFydCgpXG4gICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDNcbiAgICAgIHZhciByZXNwb25zZVRleHQgPSAnJ1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gM1xuICAgICAgdGhhdC5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHRcbiAgICAgIHRoYXQub25wcm9ncmVzcygpXG4gICAgfVxuICB9XG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4gICAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbiAgICBvblByb2dyZXNzKClcbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgfVxuICB9XG4gIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE9wZXJhIDEyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgb25GaW5pc2goKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICBvblByb2dyZXNzKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgb25TdGFydCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCA1MDApXG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICBvblByb2dyZXNzKClcbiAgICB9XG4gIH1cblxuICAvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxuICB4aHIub25sb2FkID0gb25GaW5pc2hcbiAgeGhyLm9uZXJyb3IgPSBvbkZpbmlzaFxuICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gIHhoci5vbmFib3J0ID0gb25GaW5pc2hcblxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgaWYgKFxuICAgICEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzXG4gIH1cblxuICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gIC8vIE9wZXJhIDwgMTJcbiAgLy8gRmlyZWZveCA8IDMuNVxuICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgLy8gc2VlIGFsc28gIzY0XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2VcblxuICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnXG4gIH1cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG5cbiAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAvLyAjOTFcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDApXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hYm9ydChmYWxzZSlcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgIDogJydcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICBpZiAoXG4gICAgISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICAgIHRoYXQuc2VuZCgpXG4gICAgfSwgNClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgdHJ5IHtcbiAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgeGhyLnNlbmQodW5kZWZpbmVkKVxuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGxpbmUgPSBhcnJheVtpXVxuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJylcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KClcbiAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpXG4gICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlXG4gIH1cbiAgdGhpcy5fbWFwID0gbWFwXG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldXG59XG5cbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHt9XG5cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB4aHIub3BlbignR0VUJywgdXJsKVxuICB2YXIgb2Zmc2V0ID0gMFxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aFxuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgfVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH1cbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpIHtcbiAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSlcbn1cblxuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7fVxuXG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBzaWduYWw6IHNpZ25hbCxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLFxuICAgICAgICBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZWFkZXIuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVhZGVyXG4gICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwgeyBzdHJlYW06IHRydWUgfSlcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZVxuICB9LCAwKVxufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICB0eXBlTGlzdGVuZXJzID0gW11cbiAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzXG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICBmb3VuZCA9IHRydWVcbiAgICB9XG4gIH1cbiAgaWYgKCFmb3VuZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YVxuICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZFxufVxuXG5NZXNzYWdlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG59XG5cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxudmFyIFdBSVRJTkcgPSAtMVxudmFyIENPTk5FQ1RJTkcgPSAwXG52YXIgT1BFTiA9IDFcbnZhciBDTE9TRUQgPSAyXG5cbnZhciBBRlRFUl9DUiA9IC0xXG52YXIgRklFTERfU1RBUlQgPSAwXG52YXIgRklFTEQgPSAxXG52YXIgVkFMVUVfU1RBUlQgPSAyXG52YXIgVkFMVUUgPSAzXG5cbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2lcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwXG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwXG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcbiAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZlxuICB9XG4gIHJldHVybiBjbGFtcER1cmF0aW9uKG4pXG59XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTilcbn1cblxudmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGYuY2FsbCh0aGF0LCBldmVudClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvd0Vycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKVxuXG4gIHRoaXMub25vcGVuID0gdW5kZWZpbmVkXG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkXG4gIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZFxuXG4gIHRoaXMudXJsID0gdW5kZWZpbmVkXG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZFxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG4gIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkXG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9XG4gIGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gIHVybCA9IFN0cmluZyh1cmwpXG4gIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKVxuXG4gIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMClcblxuICB2YXIgbGFzdEV2ZW50SWQgPSAnJ1xuICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWRcbiAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLlRyYW5zcG9ydFxuICAgICAgOiBYTUxIdHRwUmVxdWVzdFxuICB2YXIgeGhyID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKVxuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpXG4gIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICB2YXIgdGltZW91dCA9IDBcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgdmFyIGRhdGFCdWZmZXIgPSAnJ1xuICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJ1xuICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJydcblxuICB2YXIgdGV4dEJ1ZmZlciA9ICcnXG4gIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gIHZhciBmaWVsZFN0YXJ0ID0gMFxuICB2YXIgdmFsdWVTdGFydCA9IDBcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0dXMgPT09IDIwMCAmJlxuICAgICAgICBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTlxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJydcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgK1xuICAgICAgICAgICAgc3RhdHVzICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBzdGF0dXNUZXh0ICtcbiAgICAgICAgICAgICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgK1xuICAgICAgICAgICAgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgK1xuICAgICAgICAgICAgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgICAgICBjbG9zZSgpXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgdmFyIG4gPSAtMVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgbiA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSlcbiAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKVxuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKVxuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKFxuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgK1xuICAgICAgICAgICAgICAgICAgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbidcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KVxuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvblxuICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgfSwgcmV0cnkpXG4gICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpXG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICB9XG4gIH1cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFN0YXRlID0gQ0xPU0VEXG4gICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgdGltZW91dCA9IDBcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRFxuICB9XG5cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gMFxuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gYWN0aXZpdHkgd2l0aGluICcgK1xuICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ICtcbiAgICAgICAgICAgICAgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuXG4gICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElOR1xuICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZFxuICAgIHRleHRCdWZmZXIgPSAnJ1xuICAgIGZpZWxkU3RhcnQgPSAwXG4gICAgdmFsdWVTdGFydCA9IDBcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG5cbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmxcbiAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICByZXF1ZXN0VVJMICs9XG4gICAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArXG4gICAgICAgICAgJ2xhc3RFdmVudElkPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge31cbiAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nXG4gICAgaWYgKGhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyc1tuYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbG9zZSgpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGVzLnVybCA9IHVybFxuICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgZXMuX2Nsb3NlID0gY2xvc2VcblxuICBvblRpbWVvdXQoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jbG9zZSgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VQb2x5ZmlsbFxuIiwiLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gIDsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0KShmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDtcbiAgICAgIGktLTtcblxuICAgICkge1xuICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pXG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuXG5sZXQgZXZ0U291cmNlXG5leHBvcnQgbGV0IGN1cnJlbnRQYWdlXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBpbmcoKSB7XG4gIGlmIChldnRTb3VyY2UpIGV2dFNvdXJjZS5jbG9zZSgpXG4gIGV2dFNvdXJjZSA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCwgcGF0aG5hbWVGbiwgcmV0cnkpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKClcblxuICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuICBpZiAocGF0aG5hbWUgPT09IGN1cnJlbnRQYWdlICYmICFyZXRyeSkgcmV0dXJuXG4gIGN1cnJlbnRQYWdlID0gcGF0aG5hbWVcbiAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG4gIGNsb3NlUGluZygpXG5cbiAgY29uc3QgdXJsID0gYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gXG4gIGV2dFNvdXJjZSA9IGdldEV2ZW50U291cmNlV3JhcHBlcih7IHBhdGg6IHVybCwgdGltZW91dDogNTAwMCwgb25kZW1hbmQ6IDEgfSlcblxuICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kYXRhLmluZGV4T2YoJ3snKSA9PT0gLTEpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCkge1xuICAgICAgICAvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHJlbG9hZGluZy5cbiAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKChwYWdlUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHBhZ2VSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJywgZXJyKVxuICAgIH1cbiAgfSlcbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==