(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("React.addons.PureRenderMixin"), require("React.addons.update"), require("React.addons.createFragment"), require("ReactDOM"), require("React.addons.TransitionGroup"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "React.addons.PureRenderMixin", "React.addons.update", "React.addons.createFragment", "ReactDOM", "React.addons.TransitionGroup"], factory);
	else if(typeof exports === 'object')
		exports["NetworkFinder"] = factory(require("React"), require("React.addons.PureRenderMixin"), require("React.addons.update"), require("React.addons.createFragment"), require("ReactDOM"), require("React.addons.TransitionGroup"));
	else
		root["NetworkFinder"] = factory(root["React"], root["React.addons.PureRenderMixin"], root["React.addons.update"], root["React.addons.createFragment"], root["ReactDOM"], root["React.addons.TransitionGroup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_97__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = exports.component = undefined;

	var _reactRedux = __webpack_require__(1);

	var _network_finder = __webpack_require__(25);

	var _network_finder2 = _interopRequireDefault(_network_finder);

	var _network_finder_reducer = __webpack_require__(182);

	var _network_finder_reducer2 = _interopRequireDefault(_network_finder_reducer);

	var _network_lists_reducer = __webpack_require__(185);

	var _network_lists_reducer2 = _interopRequireDefault(_network_lists_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(186);

	function mapStateToProps(state) {
	  return {
	    networkLists: state.networkLists,
	    query: state.networkFinder.get('query'),
	    topbar: state.networkFinder.get('topbar'),
	    palette: state.networkFinder.get('style'),
	    viz: state.networkFinder.get('selected_viz'),
	    cart: state.networkFinder.get('cart'),
	    user: state.networkFinder.get('user'),
	    pass: state.networkFinder.get('pass'),
	    isSearching: state.networkFinder.get('isSearching'),
	    logged_in: state.networkFinder.get('logged_in')
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    vizSwitch: function vizSwitch(nextViz) {
	      return dispatch((0, _network_finder_reducer.vizSwitch)(nextViz));
	    },
	    updateQuery: function updateQuery(newText) {
	      return dispatch((0, _network_finder_reducer.updateQuery)(newText));
	    },
	    updateUser: function updateUser(newUser) {
	      return dispatch((0, _network_finder_reducer.updateUser)(newUser));
	    },
	    updatePass: function updatePass(newPass) {
	      return dispatch((0, _network_finder_reducer.updatePass)(newPass));
	    },
	    login: function login() {
	      return dispatch((0, _network_finder_reducer.login)());
	    },
	    logout: function logout() {
	      return dispatch((0, _network_finder_reducer.logout)());
	    },
	    addToCart: function addToCart(network) {
	      return dispatch((0, _network_finder_reducer.addToCart)(network));
	    },
	    removeFromCart: function removeFromCart(network) {
	      return dispatch((0, _network_finder_reducer.removeFromCart)(network));
	    },
	    startSearch: function startSearch() {
	      return dispatch((0, _network_finder_reducer.startSearch)());
	    },
	    endSearch: function endSearch() {
	      return dispatch((0, _network_finder_reducer.endSearch)());
	    },
	    addResults: function addResults(searchResults) {
	      return dispatch((0, _network_lists_reducer.addResults)(searchResults));
	    }
	  };
	}

	var component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_network_finder2.default);

	var reducers = {
	  networkFinder: _network_finder_reducer2.default,
	  networkLists: _network_lists_reducer2.default
	};

	exports.component = component;
	exports.reducers = reducers;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "network_finder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(2);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(7);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(4);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(4);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(9);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(23);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(24);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(10);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(11);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(18);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(20);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(21);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(22);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(19);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(16);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(13),
	    isHostObject = __webpack_require__(14),
	    isObjectLike = __webpack_require__(15);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(17)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				if (typeof Symbol.for === 'function') {
					result = Symbol.for('observable');
				} else {
					result = Symbol('observable');
				}
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(11);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(19);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(22);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {

	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _topbar = __webpack_require__(83);

	var _topbar2 = _interopRequireDefault(_topbar);

	var _search_area = __webpack_require__(142);

	var _search_area2 = _interopRequireDefault(_search_area);

	var _result_area = __webpack_require__(147);

	var _result_area2 = _interopRequireDefault(_result_area);

	var _themeManager = __webpack_require__(181);

	var _themeManager2 = _interopRequireDefault(_themeManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NetworkFinder = function (_React$Component) {
	  _inherits(NetworkFinder, _React$Component);

	  function NetworkFinder(props) {
	    _classCallCheck(this, NetworkFinder);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NetworkFinder).call(this, props));

	    _this.constructor.childContextTypes = {
	      muiTheme: _react2.default.PropTypes.object
	    };
	    return _this;
	  }

	  _createClass(NetworkFinder, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: _themeManager2.default.getMuiTheme(this.props.palette)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this);
	      if (this.props.topbar == true) {
	        var topbar = _react2.default.createElement(_topbar2.default, {
	          cart: this.props.cart,
	          user: this.props.user,
	          pass: this.props.pass,
	          logged_in: this.props.logged_in,
	          login: this.props.login,
	          logout: this.props.logout,
	          updateUser: this.props.updateUser,
	          updatePass: this.props.updatePass,
	          removeFromCart: this.props.removeFromCart });
	      }
	      var style = {
	        height: 900,
	        width: 1200
	      };
	      return _react2.default.createElement(
	        'div',
	        { style: style },
	        topbar,
	        _react2.default.createElement(_search_area2.default, {
	          search: this.props.search,
	          result: this.props.result,
	          error: this.props.error,
	          updateQuery: this.props.updateQuery,
	          startSearch: this.props.startSearch,
	          addResults: this.props.addResults,
	          endSearch: this.props.endSearch,
	          query: this.props.query
	        }),
	        _react2.default.createElement(_result_area2.default, {
	          networkLists: this.props.networkLists,
	          cart: this.props.cart,
	          isSearching: this.props.isSearching,
	          addToCart: this.props.addToCart,
	          vizSwitch: this.props.vizSwitch,
	          viz: this.props.viz })
	      );
	    }
	  }]);

	  return NetworkFinder;
	}(_react2.default.Component);

	exports.default = NetworkFinder;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "network_finder.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Paper = _react2.default.createClass({
	  displayName: 'Paper',

	  propTypes: {
	    /**
	     * Children passed into the paper element.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Set to true to generate a circlular paper container.
	     */
	    circle: _react2.default.PropTypes.bool,

	    /**
	     * By default, the paper container will have a border radius.
	     * Set this to false to generate a container with sharp corners.
	     */
	    rounded: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Set to false to disable CSS transitions for the paper element.
	     */
	    transitionEnabled: _react2.default.PropTypes.bool,

	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);

	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this.state.muiTheme.paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  }
	});

	exports.default = Paper;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = React.addons.PureRenderMixin;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This mixin isn't necessary and will be removed soon. DO NOT USE!
	 *
	 * All internal components that use this mixin should be switched to the
	 * `styleUtils` that this mixin now wraps. Notice the method signature of
	 * the `prepareStyles()` function of this mixin is different than the method
	 * signature of the `prepareStyles()` function in `styleUtils`.
	 *
	 * See `../utils/styles.js` for more details.
	 */
	exports.default = {

	  propTypes: {
	    style: _react2.default.PropTypes.object
	  },

	  mergeStyles: _styles.mergeStyles,

	  mergeAndPrefix: _styles.mergeAndPrefix,

	  prepareStyles: function prepareStyles() {
	    var _ref = this.state && this.state.muiTheme || this.context && this.context.muiTheme || this.props && this.props.muiTheme || {};

	    var _ref$prepareStyles = _ref.prepareStyles;
	    var prepareStyles = _ref$prepareStyles === undefined ? function (style) {
	      return style;
	    } : _ref$prepareStyles;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return prepareStyles(_styles.mergeStyles.apply(undefined, [{}].concat(args)));
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mergeStyles = mergeStyles;
	exports.mergeAndPrefix = mergeAndPrefix;
	exports.prepareStyles = prepareStyles;

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _reactAddonsUpdate = __webpack_require__(50);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;

	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return (0, _reactAddonsUpdate2.default)(objA, { $merge: objB });
	}

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function ensureDirection(muiTheme, style) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!style.didFlip, 'You\'re calling ensureDirection() on the same style\n      object twice.') : undefined;

	    style = mergeStyles({
	      didFlip: 'true'
	    }, style);
	  }

	  // Left to right is the default. No need to flip anything.
	  if (!muiTheme || !muiTheme.isRtl) return style;

	  var flippedAttributes = {
	    // Keys and their replacements.
	    right: 'left',
	    left: 'right',
	    marginRight: 'marginLeft',
	    marginLeft: 'marginRight',
	    paddingRight: 'paddingLeft',
	    paddingLeft: 'paddingRight',
	    borderRight: 'borderLeft',
	    borderLeft: 'borderRight'
	  };

	  var newStyle = {};

	  Object.keys(style).forEach(function (attribute) {
	    var value = style[attribute];
	    var key = attribute;

	    if (flippedAttributes.hasOwnProperty(attribute)) {
	      key = flippedAttributes[attribute];
	    }

	    switch (attribute) {
	      case 'float':
	      case 'textAlign':
	        if (value === 'right') {
	          value = 'left';
	        } else if (value === 'left') {
	          value = 'right';
	        }
	        break;

	      case 'direction':
	        if (value === 'ltr') {
	          value = 'rtl';
	        } else if (value === 'rtl') {
	          value = 'ltr';
	        }
	        break;

	      case 'transform':
	        var matches = undefined;
	        if (matches = value.match(reTranslate)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	        }
	        if (matches = value.match(reSkew)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	        }
	        break;

	      case 'transformOrigin':
	        if (value.indexOf('right') > -1) {
	          value = value.replace('right', 'left');
	        } else if (value.indexOf('left') > -1) {
	          value = value.replace('left', 'right');
	        }
	        break;
	    }

	    newStyle[key] = value;
	  });

	  return newStyle;
	}

	function mergeStyles(base) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  for (var i = 0; i < args.length; i++) {
	    if (args[i]) {
	      base = mergeSingle(base, args[i]);
	    }
	  }
	  return base;
	}

	/**
	 * `mergeAndPrefix` is used to merge styles and autoprefix them. It has has been deprecated
	 *  and should no longer be used.
	 */
	function mergeAndPrefix() {
	  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Use of mergeAndPrefix() has been deprecated. ' + 'Please use mergeStyles() for merging styles, and then prepareStyles() for prefixing and ensuring direction.') : undefined;
	  return _autoPrefix2.default.all(mergeStyles.apply(undefined, arguments));
	}

	/**
	 * `prepareStyles` is used to merge multiple styles, make sure they are flipped
	 * to rtl if needed, and then autoprefix them.
	 *
	 * Never call this on the same style object twice. As a rule of thumb, only
	 * call it when passing style attribute to html elements.
	 *
	 * If this method detects you called it twice on the same style object, it
	 * will produce a warning in the console.
	 */
	function prepareStyles(muiTheme) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  for (var _len2 = arguments.length, styles = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    styles[_key2 - 2] = arguments[_key2];
	  }

	  if (styles) {
	    //warning(false, 'Providing more than one style argument to prepareStyles has been deprecated. ' +
	    //  'Please pass a single style, such as the result from mergeStyles(...styles).');
	    style = mergeStyles.apply(undefined, [style].concat(styles));
	  }

	  var flipped = ensureDirection(muiTheme, style);
	  return muiTheme.prefix(flipped);
	}

	exports.default = {
	  mergeStyles: mergeStyles,
	  mergeAndPrefix: mergeAndPrefix,
	  prepareStyles: prepareStyles
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inlineStylePrefixer = __webpack_require__(31);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixers = {};

	var hasWarnedAboutUserAgent = false;

	exports.default = {
	  getTransform: function getTransform(userAgent) {
	    if (userAgent === undefined && typeof navigator !== 'undefined') {
	      userAgent = navigator.userAgent;
	    }

	    if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n        for server-side rendering.') : undefined;

	      hasWarnedAboutUserAgent = true;
	    }

	    if (userAgent === false) {
	      // Disabled autoprefixer
	      return function (style) {
	        return style;
	      };
	    } else if (userAgent === 'all' || userAgent === undefined) {
	      // Prefix for all user agent
	      return _inlineStylePrefixer2.default.prefixAll;
	    } else {
	      var _ret = function () {
	        var prefixer = new _inlineStylePrefixer2.default({
	          userAgent: userAgent
	        });

	        return {
	          v: function v(style) {
	            return prefixer.prefix(style);
	          }
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  },
	  getPrefixer: function getPrefixer() {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefixer() is no longer used. Do not use it.') : undefined;

	    if (typeof navigator === 'undefined') {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI expects the global navigator.userAgent to be defined\n        for server-side rendering. Set this property when receiving the request headers.') : undefined;

	      return null;
	    }

	    var userAgent = navigator.userAgent;

	    // Get prefixing instance for this user agent
	    var prefixer = prefixers[userAgent];
	    // None found, create a new instance
	    if (!prefixer) {
	      prefixer = new _inlineStylePrefixer2.default({ userAgent: userAgent });
	      prefixers[userAgent] = prefixer;
	    }

	    return prefixer;
	  },
	  all: function all(style) {
	    if (!style) {
	      return {};
	    }

	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: all() is no longer used, it will be removed. Do not use it') : undefined;

	    var prefixer = this.getPrefixer();

	    if (prefixer) {
	      return prefixer.prefix(style);
	    } else {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    }
	  },
	  set: function set(style, key, value, muiTheme) {
	    style[key] = value;

	    if (muiTheme) {
	      style = muiTheme.prefix(style);
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide the muiTheme to the autoPrefix.set()') : undefined;

	      var prefixer = this.getPrefixer();

	      if (prefixer) {
	        style = prefixer.prefix(style);
	      } else {
	        style = _inlineStylePrefixer2.default.prefixAll(style);
	      }
	    }
	  },
	  getPrefix: function getPrefix(key) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefix() is no longer used, it will be removed. Do not use it') : undefined;

	    var style = {};
	    style[key] = true;

	    var prefixer = this.getPrefixer();
	    var prefixes = undefined;

	    if (prefixer) {
	      prefixes = Object.keys(prefixer.prefix(style));
	    } else {
	      prefixes = Object.keys(_inlineStylePrefixer2.default.prefixAll(style));
	    }

	    return prefixes ? prefixes[0] : key;
	  }
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsGetBrowserInformation = __webpack_require__(32);

	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);

	var _utilsGetPrefixedKeyframes = __webpack_require__(34);

	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);

	var _utilsCapitalizeString = __webpack_require__(35);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(36);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _utilsWarn = __webpack_require__(37);

	var _utilsWarn2 = _interopRequireDefault(_utilsWarn);

	var _caniuseData = __webpack_require__(38);

	var _caniuseData2 = _interopRequireDefault(_caniuseData);

	var _Plugins = __webpack_require__(39);

	var _Plugins2 = _interopRequireDefault(_Plugins);

	var browserWhitelist = ['phantom'];

	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      (0, _utilsWarn2['default'])('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }

	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        return _extends({}, result, _defineProperty({}, name, true));
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      // check for whitelisted browsers
	      browserWhitelist.forEach(function (browser) {
	        if (_this._browserInfo[browser]) {
	          _this._isWhitelisted = true;
	        }
	      });
	      this._hasPropsRequiringPrefix = false;

	      // Do not throw a warning if whitelisted
	      if (this._isWhitelisted) {
	        return true;
	      }
	      (0, _utilsWarn2['default'])('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */

	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      styles = (0, _utilsAssign2['default'])({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }

	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix,
	              forceRun: false
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });

	      return styles;
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _utilsGetBrowserInformation2['default'])('*');

	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          (0, _utilsAssign2['default'])(prefixes, data);
	        }
	      });

	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }

	      styles = (0, _utilsAssign2['default'])({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            }

	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var resolvedStyles = plugin({
	                property: property,
	                value: value,
	                styles: styles,
	                browserInfo: {
	                  name: browser,
	                  prefix: style,
	                  version: 0 // assume lowest
	                },
	                prefix: {},
	                keepUnprefixed: true,
	                requiresPrefix: prefixes,
	                forceRun: true
	              });
	              (0, _utilsAssign2['default'])(styles, resolvedStyles);
	            });
	          });
	        }
	      });

	      return styles;
	    }
	  }]);

	  return Prefixer;
	})();

	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bowser = __webpack_require__(33);

	var _bowser2 = _interopRequireDefault(_bowser);

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};

	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;

	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  for (var i = 0; i < prefixKeys.length; i++) {
	    prefix = prefixKeys[i];

	    // Find a matching vendor
	    vendors = vendorPrefixes[prefix];
	    conditions = browsers[browser];

	    for (var j = 0; j < vendors.length; j++) {
	      prefixVendor = vendors[j];

	      for (var k = 0; k < conditions.length; k++) {
	        browserVendors = conditions[k];

	        if (browserVendors.indexOf(prefixVendor) !== -1) {
	          return {
	            inline: prefix,
	            css: '-' + prefix.toLowerCase() + '-'
	          };
	        }
	      }
	    }
	  }

	  // No prefix found for this browser
	  return { inline: '', css: '' };
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }

	  var info = {};

	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);

	    // Return prefixes associated by browser
	    info.prefixes = {};

	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });

	    return info;
	  }

	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */

	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result

	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};

	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// only throw warnings if devmode is enabled
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    console.warn.apply(console, arguments);
	  }
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":50,"userSelect":50,"fontKerning":32,"textEmphasisPosition":50,"textEmphasis":50,"textEmphasisStyle":50,"textEmphasisColor":50,"boxDecorationBreak":50,"clipPath":50,"maskImage":50,"maskMode":50,"maskRepeat":50,"maskPosition":50,"maskClip":50,"maskOrigin":50,"maskSize":50,"maskComposite":50,"mask":50,"maskBorderSource":50,"maskBorderMode":50,"maskBorderSlice":50,"maskBorderWidth":50,"maskBorderOutset":50,"maskBorderRepeat":50,"maskBorder":50,"maskType":50,"textDecorationStyle":50,"textDecorationSkip":50,"textDecorationLine":50,"textDecorationColor":50,"filter":50,"fontFeatureSettings":47,"breakAfter":50,"breakBefore":50,"breakInside":50,"columnCount":50,"columnFill":50,"columnGap":50,"columnRule":50,"columnRuleColor":50,"columnRuleStyle":50,"columnRuleWidth":50,"columns":50,"columnSpan":50,"columnWidth":50},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9.1,"userSelect":9.1,"backdropFilter":9.1,"fontKerning":9.1,"scrollSnapType":9.1,"scrollSnapPointsX":9.1,"scrollSnapPointsY":9.1,"scrollSnapDestination":9.1,"scrollSnapCoordinate":9.1,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9.1,"clipPath":9.1,"maskImage":9.1,"maskMode":9.1,"maskRepeat":9.1,"maskPosition":9.1,"maskClip":9.1,"maskOrigin":9.1,"maskSize":9.1,"maskComposite":9.1,"mask":9.1,"maskBorderSource":9.1,"maskBorderMode":9.1,"maskBorderSlice":9.1,"maskBorderWidth":9.1,"maskBorderOutset":9.1,"maskBorderRepeat":9.1,"maskBorder":9.1,"maskType":9.1,"textDecorationStyle":9.1,"textDecorationSkip":9.1,"textDecorationLine":9.1,"textDecorationColor":9.1,"shapeImageThreshold":9.1,"shapeImageMargin":9.1,"shapeImageOutside":9.1,"filter":9,"hyphens":9.1,"flowInto":9.1,"flowFrom":9.1,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9.1,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":46,"userSelect":46,"boxSizing":28,"textAlignLast":46,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":46,"hyphens":42,"fontFeatureSettings":33,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":36,"userSelect":36,"fontKerning":19,"textEmphasisPosition":36,"textEmphasis":36,"textEmphasisStyle":36,"textEmphasisColor":36,"boxDecorationBreak":36,"clipPath":36,"maskImage":36,"maskMode":36,"maskRepeat":36,"maskPosition":36,"maskClip":36,"maskOrigin":36,"maskSize":36,"maskComposite":36,"mask":36,"maskBorderSource":36,"maskBorderMode":36,"maskBorderSlice":36,"maskBorderWidth":36,"maskBorderOutset":36,"maskBorderRepeat":36,"maskBorder":36,"maskType":36,"filter":36,"fontFeatureSettings":36,"breakAfter":36,"breakBefore":36,"breakInside":36,"columnCount":36,"columnFill":36,"columnGap":36,"columnRule":36,"columnRuleColor":36,"columnRuleStyle":36,"columnRuleWidth":36,"columns":36,"columnSpan":36,"columnWidth":36},"ie":{"gridArea":11,"gridGap":11,"gridColumnStart":11,"userSelect":11,"grid":11,"breakInside":11,"hyphens":11,"gridTemplateAreas":11,"breakAfter":11,"scrollSnapCoordinate":11,"gridRowStart":11,"gridAutoFlow":11,"scrollSnapDestination":11,"gridTemplate":11,"gridTemplateColumns":11,"transformOrigin":9,"gridAutoRows":11,"gridColumnEnd":11,"transformOriginY":9,"scrollSnapPointsY":11,"breakBefore":11,"gridRowGap":11,"scrollSnapPointsX":11,"regionFragment":11,"flexWrap":10,"wrapFlow":11,"gridRowEnd":11,"flex":10,"flexDirection":10,"flowInto":11,"touchAction":10,"gridColumn":11,"transform":9,"gridTemplateRows":11,"flexFlow":10,"transformOriginX":9,"flowFrom":11,"scrollSnapType":11,"wrapMargin":11,"gridColumnGap":11,"gridRow":11,"wrapThrough":11,"gridAutoColumns":11,"textSizeAdjust":11},"edge":{"userSelect":14,"wrapFlow":14,"wrapThrough":14,"wrapMargin":14,"scrollSnapType":14,"scrollSnapPointsX":14,"scrollSnapPointsY":14,"scrollSnapDestination":14,"scrollSnapCoordinate":14,"hyphens":14,"flowInto":14,"flowFrom":14,"breakBefore":14,"breakAfter":14,"breakInside":14,"regionFragment":14,"gridTemplateColumns":14,"gridTemplateRows":14,"gridTemplateAreas":14,"gridTemplate":14,"gridAutoColumns":14,"gridAutoRows":14,"gridAutoFlow":14,"grid":14,"gridRowStart":14,"gridColumnStart":14,"gridRowEnd":14,"gridRow":14,"gridColumn":14,"gridColumnEnd":14,"gridColumnGap":14,"gridRowGap":14,"gridArea":14,"gridGap":14},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9.3,"userSelect":9.3,"backdropFilter":9.3,"fontKerning":9.3,"scrollSnapType":9.3,"scrollSnapPointsX":9.3,"scrollSnapPointsY":9.3,"scrollSnapDestination":9.3,"scrollSnapCoordinate":9.3,"boxDecorationBreak":9.3,"clipPath":9.3,"maskImage":9.3,"maskMode":9.3,"maskRepeat":9.3,"maskPosition":9.3,"maskClip":9.3,"maskOrigin":9.3,"maskSize":9.3,"maskComposite":9.3,"mask":9.3,"maskBorderSource":9.3,"maskBorderMode":9.3,"maskBorderSlice":9.3,"maskBorderWidth":9.3,"maskBorderOutset":9.3,"maskBorderRepeat":9.3,"maskBorder":9.3,"maskType":9.3,"textSizeAdjust":9.3,"textDecorationStyle":9.3,"textDecorationSkip":9.3,"textDecorationLine":9.3,"textDecorationColor":9.3,"shapeImageThreshold":9.3,"shapeImageMargin":9.3,"shapeImageOutside":9.3,"filter":9,"hyphens":9.3,"flowInto":9.3,"flowFrom":9.3,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9.3,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":46,"userSelect":46,"fontKerning":4.4,"textEmphasisPosition":46,"textEmphasis":46,"textEmphasisStyle":46,"textEmphasisColor":46,"boxDecorationBreak":46,"clipPath":46,"maskImage":46,"maskMode":46,"maskRepeat":46,"maskPosition":46,"maskClip":46,"maskOrigin":46,"maskSize":46,"maskComposite":46,"mask":46,"maskBorderSource":46,"maskBorderMode":46,"maskBorderSlice":46,"maskBorderWidth":46,"maskBorderOutset":46,"maskBorderRepeat":46,"maskBorder":46,"maskType":46,"filter":46,"fontFeatureSettings":46,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"and_chr":{"appearance":47,"userSelect":47,"textEmphasisPosition":47,"textEmphasis":47,"textEmphasisStyle":47,"textEmphasisColor":47,"boxDecorationBreak":47,"clipPath":47,"maskImage":47,"maskMode":47,"maskRepeat":47,"maskPosition":47,"maskClip":47,"maskOrigin":47,"maskSize":47,"maskComposite":47,"mask":47,"maskBorderSource":47,"maskBorderMode":47,"maskBorderSlice":47,"maskBorderWidth":47,"maskBorderOutset":47,"maskBorderRepeat":47,"maskBorder":47,"maskType":47,"textDecorationStyle":47,"textDecorationSkip":47,"textDecorationLine":47,"textDecorationColor":47,"filter":47,"fontFeatureSettings":47,"breakAfter":47,"breakBefore":47,"breakInside":47,"columnCount":47,"columnFill":47,"columnGap":47,"columnRule":47,"columnRuleColor":47,"columnRuleStyle":47,"columnRuleWidth":47,"columns":47,"columnSpan":47,"columnWidth":47},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pluginsCalc = __webpack_require__(40);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(41);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(42);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(43);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(44);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(45);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(47);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(48);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	exports['default'] = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (forceRun || browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    }).join(';' + property + ':') :
	    // default
	    value.replace(/calc\(/g, prefix.css + 'calc(');
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (property === 'cursor' && values[value] && (forceRun || browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return {
	      cursor: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;
	var values = { flex: true, 'inline-flex': true };

	function flex(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (property === 'display' && values[value] && (forceRun || browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value].join(';' + property + ':') :
	    // default
	    '-webkit-' + value;
	    return {
	      display: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (typeof value === 'string' && value.match(values) !== null && (forceRun || browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(46);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(35);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var requiresPrefix = pluginInterface.requiresPrefix;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (
	  // also check for already prefixed transitions
	  typeof value === 'string' && (property.toLowerCase().indexOf('transition') > -1 || property.toLowerCase().indexOf('transitionproperty') > -1)) {
	    var _ref;

	    var _ret = (function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (property) {
	        return (0, _utilsCamelToDashCase2['default'])(property);
	      });
	      var newValue = value;

	      // only split multi values, not cubic beziers
	      var multipleValues = newValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            var newVal = forceRun ?
	            // prefix all
	            ['-webkit-', '-moz-', '-ms-'].map(function (prefix) {
	              return val.replace(property, prefix + property);
	            }).join(',') :
	            // default
	            val.replace(property, prefix.css + property);
	            multipleValues[index] = newVal + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });
	      var outputValue = multipleValues.join(',');
	      if (forceRun) {
	        return {
	          v: (_ref = {}, _defineProperty(_ref, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'Moz' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'ms' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, property, outputValue), _ref)
	        };
	      }
	      return {
	        v: _defineProperty({}, property, outputValue)
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	var properties = Object.keys(alternativeProps).concat('display').reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});

	function flexboxIE(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (properties[property] && (forceRun || (browser === 'ie_mob' || browser === 'ie') && version == 10)) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }

	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = flexboxOld;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']).reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});

	function flexboxOld(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;

	  if (properties[property] && (forceRun || browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: prefix.css + alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = React.addons.update;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var horizontal = _react2.default.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react2.default.PropTypes.oneOf(['top', 'center', 'bottom']);

	exports.default = {

	  corners: _react2.default.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  horizontal: horizontal,

	  vertical: vertical,

	  origin: _react2.default.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),

	  cornersAndCenter: _react2.default.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),

	  zDepth: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {

	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMuiTheme;

	var _lodash = __webpack_require__(54);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _colorManipulator = __webpack_require__(72);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _lightBaseTheme = __webpack_require__(73);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _zIndex = __webpack_require__(75);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	var _transformers = __webpack_require__(76);

	var _lodash3 = __webpack_require__(80);

	var _lodash4 = _interopRequireDefault(_lodash3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(baseTheme, muiTheme) {
	  baseTheme = (0, _lodash2.default)({}, _lightBaseTheme2.default, baseTheme);
	  var _baseTheme = baseTheme;
	  var palette = _baseTheme.palette;
	  var spacing = _baseTheme.spacing;

	  muiTheme = (0, _lodash2.default)({
	    isRtl: false,
	    userAgent: undefined,
	    zIndex: _zIndex2.default,
	    baseTheme: baseTheme,
	    rawTheme: baseTheme, // To provide backward compatibility.
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement
	    },
	    avatar: {
	      borderColor: 'rgba(0, 0, 0, 0.08)'
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    flatButton: {
	      color: _colors2.default.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.accent1Color,
	      secondaryTextColor: palette.primary1Color
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.accent1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor
	    },
	    gridTile: {
	      textColor: _colors2.default.white
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    leftNav: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: 'rgba(0, 0, 0, .035)',
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    paper: {
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: _colorManipulator2.default.darken(palette.alternateTextColor, 0.1),
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3)
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: _colorManipulator2.default.lighten(palette.primary1Color, 0.55),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      backgroundColor: _colorManipulator2.default.darken(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: 'rgba(0, 0, 0, .40)',
	      separatorColor: 'rgba(0, 0, 0, .175)',
	      menuHoverColor: 'rgba(0, 0, 0, .10)'
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: _colorManipulator2.default.fade(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors2.default.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    }
	  }, muiTheme);

	  var transformers = [_transformers.autoprefixer, _transformers.rtl, _transformers.callOnce].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prefix = _autoPrefix2.default.getTransform(muiTheme.userAgent);
	  muiTheme.prepareStyles = _lodash4.default.apply(undefined, _toConsumableArray(transformers));

	  return muiTheme;
	}
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayCopy = __webpack_require__(55),
	    arrayEach = __webpack_require__(56),
	    createAssigner = __webpack_require__(57),
	    isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(62),
	    isPlainObject = __webpack_require__(63),
	    isTypedArray = __webpack_require__(66),
	    keys = __webpack_require__(67),
	    toPlainObject = __webpack_require__(69);

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);

	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];

	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;

	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it is invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);

	module.exports = merge;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(58),
	    isIterateeCall = __webpack_require__(59),
	    restParam = __webpack_require__(60);

	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = bindCallback;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isIterateeCall;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(64),
	    isArguments = __webpack_require__(61),
	    keysIn = __webpack_require__(65);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(62);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(68),
	    isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(62);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(70),
	    keysIn = __webpack_require__(65);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',

	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',

	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',

	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',

	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',

	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',

	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',

	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',

	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',

	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',

	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',

	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',

	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',

	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',

	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',

	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',

	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',

	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',

	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',

	  black: '#000000',
	  white: '#ffffff',

	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'
	};
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */

	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });

	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Calculating the relative luminance is not available\n        for HSL and HSLA.') : undefined;

	      return -1;
	    }
	  },

	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);

	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }

	    return str;
	  },

	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }

	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };

	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },

	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }

	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');

	    return { type: type, values: values };
	  },

	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },

	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }

	    if (color.type.indexOf('a') <= -1) color.type += 'a';

	    return this._convertColorToString(color, '0.15');
	  },
	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }

	    return this._convertColorToString(color);
	  },

	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);

	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },

	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };

	    var ratio = this.contrastRatio(background, foreground);

	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _colorManipulator = __webpack_require__(72);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _spacing = __webpack_require__(74);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */

	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2.default.cyan500,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey400,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.grey100,
	    accent3Color: _colors2.default.grey500,
	    textColor: _colors2.default.darkBlack,
	    alternateTextColor: _colors2.default.white,
	    canvasColor: _colors2.default.white,
	    borderColor: _colors2.default.grey300,
	    disabledColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.3),
	    pickerHeaderColor: _colors2.default.cyan500,
	    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.07),
	    shadowColor: _colors2.default.fullBlack
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  leftNavOverlay: 1200,
	  leftNav: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rtl = exports.callOnce = exports.autoprefixer = undefined;

	var _autoprefixer = __webpack_require__(77);

	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

	var _callOnce = __webpack_require__(78);

	var _callOnce2 = _interopRequireDefault(_callOnce);

	var _rtl = __webpack_require__(79);

	var _rtl2 = _interopRequireDefault(_rtl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.autoprefixer = _autoprefixer2.default;
	exports.callOnce = _callOnce2.default;
	exports.rtl = _rtl2.default;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (muiTheme) {
	  if (muiTheme.userAgent !== false) {
	    return function (style) {
	      return muiTheme.prefix(style);
	    };
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CALLED_ONCE = 'muiPrepared';

	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'You cannot call prepareStyles() on the same style object more than once.') : undefined;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtl;
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };

	      var newStyle = {};

	      Object.keys(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;

	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }

	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;

	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;

	          case 'transform':
	            var matches = undefined;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	            }
	            break;

	          case 'transformOrigin':
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }

	        newStyle[key] = value;
	      });

	      return newStyle;
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseFlatten = __webpack_require__(81),
	    rest = __webpack_require__(82);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return rest(function(funcs) {
	    funcs = baseFlatten(funcs, 1);

	    var length = funcs.length,
	        index = length;

	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      if (typeof funcs[index] != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	    }
	    return function() {
	      var index = 0,
	          result = length ? funcs[index].apply(this, arguments) : arguments[0];

	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}

	/**
	 * This method is like `_.flow` except that it creates a function that
	 * invokes the given functions from right to left.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] Functions to invoke.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flowRight(square, _.add);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flowRight = createFlow(true);

	module.exports = flowRight;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = baseFlatten;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = rest;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _appBar = __webpack_require__(84);

	var _appBar2 = _interopRequireDefault(_appBar);

	var _flatButton = __webpack_require__(106);

	var _flatButton2 = _interopRequireDefault(_flatButton);

	var _iconButton = __webpack_require__(86);

	var _iconButton2 = _interopRequireDefault(_iconButton);

	var _fontIcon = __webpack_require__(102);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _popover = __webpack_require__(108);

	var _popover2 = _interopRequireDefault(_popover);

	var _dialog = __webpack_require__(114);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _cart = __webpack_require__(117);

	var _cart2 = _interopRequireDefault(_cart);

	var _login = __webpack_require__(132);

	var _login2 = _interopRequireDefault(_login);

	var _badge = __webpack_require__(141);

	var _badge2 = _interopRequireDefault(_badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopBar = function (_React$Component) {
	  _inherits(TopBar, _React$Component);

	  function TopBar(props) {
	    _classCallCheck(this, TopBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TopBar).call(this, props));

	    _this.state = {
	      cart_open: false,
	      login_open: false
	    };
	    return _this;
	  }

	  _createClass(TopBar, [{
	    key: 'toggleCart',
	    value: function toggleCart() {
	      this.setState({
	        cart_open: !this.state.cart_open,
	        login_open: this.state.login_open
	      });
	    }
	  }, {
	    key: 'openLogin',
	    value: function openLogin(event) {
	      console.log("Opened");
	      this.setState({
	        cart_open: this.state.cart_open,
	        login_open: true,
	        anchor: event.currentTarget
	      });
	    }
	  }, {
	    key: 'closeLogin',
	    value: function closeLogin() {
	      this.setState({
	        cart_open: this.state.cart_open,
	        login_open: false
	      });
	    }
	  }, {
	    key: 'checkLoggedIn',
	    value: function checkLoggedIn() {
	      if (!this.props.logged_in) {
	        return _react2.default.createElement(_flatButton2.default, {
	          label: 'Login',
	          labelPosition: 'after',
	          onClick: this.openLogin.bind(this),
	          icon: _react2.default.createElement(
	            _fontIcon2.default,
	            { className: 'material-icons' },
	            'account_circle'
	          )
	        });
	      } else {
	        return _react2.default.createElement(_flatButton2.default, {
	          label: this.props.user,
	          labelPosition: 'after',
	          onClick: this.props.logout,
	          icon: _react2.default.createElement(
	            _fontIcon2.default,
	            { className: 'material-icons' },
	            'account_circle'
	          )
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_flatButton2.default, {
	        label: 'Close Cart',
	        secondary: true,
	        onTouchTap: this.toggleCart.bind(this)
	      }), _react2.default.createElement(_flatButton2.default, {
	        label: 'Begin',
	        primary: true
	      })];
	      var login = this.checkLoggedIn();
	      console.log(login);
	      return _react2.default.createElement(
	        _appBar2.default,
	        {
	          title: 'Network Cart',
	          onTitleTouchTap: this.toggleCart.bind(this),
	          iconElementLeft: _react2.default.createElement(
	            _iconButton2.default,
	            null,
	            _react2.default.createElement(
	              _fontIcon2.default,
	              {
	                className: 'material-icons',
	                onClick: this.toggleCart.bind(this)
	              },
	              'shopping_cart'
	            )
	          ),
	          iconElementRight: login
	        },
	        _react2.default.createElement(
	          _dialog2.default,
	          {
	            title: 'Network Shopping Cart',
	            actions: actions,
	            open: this.state.cart_open
	          },
	          _react2.default.createElement(_cart2.default, {
	            removeFromCart: this.props.removeFromCart,
	            cart: this.props.cart
	          })
	        ),
	        _react2.default.createElement(
	          _popover2.default,
	          {
	            open: this.state.login_open,
	            anchorEl: this.state.anchor,
	            onRequestClose: this.closeLogin.bind(this)
	          },
	          _react2.default.createElement(_login2.default, {
	            user: this.props.user,
	            pass: this.props.pass,
	            login: this.props.login,
	            updateUser: this.props.updateUser,
	            updatePass: this.props.updatePass
	          })
	        )
	      );
	    }
	  }]);

	  return TopBar;
	}(_react2.default.Component);

	exports.default = TopBar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "topbar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _typography = __webpack_require__(85);

	var _typography2 = _interopRequireDefault(_typography);

	var _iconButton = __webpack_require__(86);

	var _iconButton2 = _interopRequireDefault(_iconButton);

	var _menu = __webpack_require__(104);

	var _menu2 = _interopRequireDefault(_menu);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var AppBar = _react2.default.createClass({
	  displayName: 'AppBar',

	  propTypes: {
	    /**
	     * Can be used to render a tab inside an app bar for instance.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Applied to the app bar's root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The classname of the icon on the left of the app bar.
	     * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	     */
	    iconClassNameLeft: _react2.default.PropTypes.string,

	    /**
	     * Similiar to the iconClassNameLeft prop except that
	     * it applies to the icon displayed on the right of the app bar.
	     */
	    iconClassNameRight: _react2.default.PropTypes.string,

	    /**
	     * The custom element to be displayed on the left side of the
	     * app bar such as an SvgIcon.
	     */
	    iconElementLeft: _react2.default.PropTypes.element,

	    /**
	     * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	     */
	    iconElementRight: _react2.default.PropTypes.element,

	    /**
	     * Override the inline-styles of the element displayed on the right side of the app bar.
	     */
	    iconStyleRight: _react2.default.PropTypes.object,

	    /**
	     * Callback function for when the left icon is selected via a touch tap.
	     */
	    onLeftIconButtonTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the right icon is selected via a touch tap.
	     */
	    onRightIconButtonTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the title text is selected via a touch tap.
	     */
	    onTitleTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Determines whether or not to display the Menu icon next to the title.
	     * Setting this prop to false will hide the icon.
	     */
	    showMenuIconButton: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The title to display on the app bar.
	     */
	    title: _react2.default.PropTypes.node,

	    /**
	     * Override the inline-styles of the app bar's title element.
	     */
	    titleStyle: _react2.default.PropTypes.object,

	    /**
	     * The zDepth of the component.
	     * The shadow of the app bar is also dependent on this property.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      showMenuIconButton: true,
	      title: '',
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : undefined;

	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : undefined;
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;

	    var themeVariables = muiTheme.appBar;
	    var iconButtonSize = muiTheme.button.iconButtonSize;
	    var flatButtonSize = 36;

	    var styles = {
	      root: {
	        position: 'relative',
	        zIndex: muiTheme.zIndex.appBar,
	        width: '100%',
	        display: 'flex',
	        minHeight: themeVariables.height,
	        backgroundColor: themeVariables.color,
	        paddingLeft: rawTheme.spacing.desktopGutter,
	        paddingRight: rawTheme.spacing.desktopGutter
	      },
	      title: {
	        whiteSpace: 'nowrap',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        margin: 0,
	        paddingTop: 0,
	        letterSpacing: 0,
	        fontSize: 24,
	        fontWeight: _typography2.default.fontWeightNormal,
	        color: themeVariables.textColor,
	        lineHeight: themeVariables.height + 'px'
	      },
	      mainElement: {
	        boxFlex: 1,
	        flex: '1'
	      },
	      iconButton: {
	        style: {
	          marginTop: (themeVariables.height - iconButtonSize) / 2,
	          marginRight: 8,
	          marginLeft: -16
	        },
	        iconStyle: {
	          fill: themeVariables.textColor,
	          color: themeVariables.textColor
	        }
	      },
	      flatButton: {
	        color: themeVariables.textColor,
	        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
	      }
	    };

	    return styles;
	  },
	  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
	    if (this.props.onLeftIconButtonTouchTap) {
	      this.props.onLeftIconButtonTouchTap(event);
	    }
	  },
	  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
	    if (this.props.onRightIconButtonTouchTap) {
	      this.props.onRightIconButtonTouchTap(event);
	    }
	  },
	  _onTitleTouchTap: function _onTitleTouchTap(event) {
	    if (this.props.onTitleTouchTap) {
	      this.props.onTitleTouchTap(event);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var titleStyle = _props.titleStyle;
	    var iconStyleRight = _props.iconStyleRight;
	    var showMenuIconButton = _props.showMenuIconButton;
	    var iconElementLeft = _props.iconElementLeft;
	    var iconElementRight = _props.iconElementRight;
	    var iconClassNameLeft = _props.iconClassNameLeft;
	    var iconClassNameRight = _props.iconClassNameRight;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;
	    var children = _props.children;

	    var other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);

	    var menuElementLeft = undefined;
	    var menuElementRight = undefined;
	    var styles = this.getStyles();
	    var iconRightStyle = this.mergeStyles(styles.iconButton.style, {
	      marginRight: -16,
	      marginLeft: 'auto'
	    }, iconStyleRight);
	    var titleElement = undefined;

	    if (title) {
	      // If the title is a string, wrap in an h1 tag.
	      // If not, just use it as a node.
	      titleElement = typeof title === 'string' || title instanceof String ? _react2.default.createElement(
	        'h1',
	        {
	          onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle)
	        },
	        title
	      ) : _react2.default.createElement(
	        'div',
	        {
	          onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle)
	        },
	        title
	      );
	    }

	    if (showMenuIconButton) {
	      if (iconElementLeft) {
	        switch (iconElementLeft.type.displayName) {
	          case 'IconButton':
	            iconElementLeft = _react2.default.cloneElement(iconElementLeft, {
	              iconStyle: this.mergeStyles(styles.iconButton.iconStyle, iconElementLeft.props.iconStyle)
	            });
	            break;
	        }

	        menuElementLeft = _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.iconButton.style) },
	          iconElementLeft
	        );
	      } else {
	        var child = iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: this.mergeStyles(styles.iconButton.iconStyle) });
	        menuElementLeft = _react2.default.createElement(
	          _iconButton2.default,
	          {
	            style: this.mergeStyles(styles.iconButton.style),
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	            iconClassName: iconClassNameLeft,
	            onTouchTap: this._onLeftIconButtonTouchTap
	          },
	          child
	        );
	      }
	    }

	    if (iconElementRight) {
	      switch (iconElementRight.type.displayName) {
	        case 'IconMenu':
	        case 'IconButton':
	          iconElementRight = _react2.default.cloneElement(iconElementRight, {
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle, iconElementRight.props.iconStyle)
	          });
	          break;

	        case 'FlatButton':
	          iconElementRight = _react2.default.cloneElement(iconElementRight, {
	            style: this.mergeStyles(styles.flatButton, iconElementRight.props.style)
	          });
	          break;
	      }

	      menuElementRight = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(iconRightStyle) },
	        iconElementRight
	      );
	    } else if (iconClassNameRight) {
	      menuElementRight = _react2.default.createElement(_iconButton2.default, {
	        style: iconRightStyle,
	        iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	        iconClassName: iconClassNameRight,
	        onTouchTap: this._onRightIconButtonTouchTap
	      });
	    }

	    return _react2.default.createElement(
	      _paper2.default,
	      _extends({}, other, {
	        rounded: false,
	        className: className,
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth
	      }),
	      menuElementLeft,
	      titleElement,
	      menuElementRight,
	      children
	    );
	  }
	});

	exports.default = AppBar;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typography = function Typography() {
	  _classCallCheck(this, Typography);

	  // text colors
	  this.textFullBlack = _colors2.default.fullBlack;
	  this.textDarkBlack = _colors2.default.darkBlack;
	  this.textLightBlack = _colors2.default.lightBlack;
	  this.textMinBlack = _colors2.default.minBlack;
	  this.textFullWhite = _colors2.default.fullWhite;
	  this.textDarkWhite = _colors2.default.darkWhite;
	  this.textLightWhite = _colors2.default.lightWhite;

	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;

	  this.fontStyleButtonFontSize = 14;
	};

	exports.default = new Typography();
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _contextPure = __webpack_require__(87);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _enhancedButton = __webpack_require__(89);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _fontIcon = __webpack_require__(102);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _tooltip = __webpack_require__(103);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _children = __webpack_require__(90);

	var _children2 = _interopRequireDefault(_children);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var IconButton = _react2.default.createClass({
	  displayName: 'IconButton',

	  propTypes: {
	    /**
	     * Can be used to pass a font icon as the icon for the button.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Disables the icon button.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * If you are using a stylesheet for your
	     * icons, enter the class name for the icon to be used here.
	     */
	    iconClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the icon element.
	     */
	    iconStyle: _react2.default.PropTypes.object,

	    /**
	     * Callback function for when the component loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the component gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the component
	     * receives keyboard focus.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when mouse enters element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when mouse leaves element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The tooltip text to show.
	     */
	    tooltip: _react2.default.PropTypes.node,

	    /**
	     * Allows the tooltip to be viewed with different
	     * alignments: "bottom-center", "top-center",
	     * "bottom-right", "top-right", "bottom-left" and "top-left".
	     */
	    tooltipPosition: _propTypes2.default.cornersAndCenter,

	    /**
	     * Styles prop passed down to the tooltip.
	     */
	    tooltipStyles: _react2.default.PropTypes.object,

	    /**
	     * Prop for tooltip to make it larger for mobile.
	     */
	    touch: _react2.default.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default, _contextPure2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var spacing = muiTheme.rawTheme.spacing;
	      var palette = muiTheme.rawTheme.palette;

	      return {
	        iconSize: spacing.iconSize,
	        textColor: palette.textColor,
	        disabledColor: palette.disabledColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedButton2.default, _fontIcon2.default, _tooltip2.default];
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      iconStyle: {},
	      tooltipPosition: 'bottom-center',
	      touch: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      tooltipShown: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var iconSize = _constructor$getRelev.iconSize;
	    var textColor = _constructor$getRelev.textColor;
	    var disabledColor = _constructor$getRelev.disabledColor;

	    var styles = {
	      root: {
	        position: 'relative',
	        boxSizing: 'border-box',
	        transition: _transitions2.default.easeOut(),
	        padding: iconSize / 2,
	        width: iconSize * 2,
	        height: iconSize * 2,
	        fontSize: 0
	      },
	      tooltip: {
	        boxSizing: 'border-box'
	      },
	      icon: {
	        color: textColor,
	        fill: textColor
	      },
	      overlay: {
	        position: 'relative',
	        top: 0,
	        width: '100%',
	        height: '100%',
	        background: disabledColor
	      },
	      disabled: {
	        color: disabledColor,
	        fill: disabledColor
	      }
	    };

	    return styles;
	  },
	  setKeyboardFocus: function setKeyboardFocus() {
	    this.refs.button.setKeyboardFocus();
	  },
	  _showTooltip: function _showTooltip() {
	    if (this.props.tooltip) {
	      this.setState({ tooltipShown: true });
	    }
	  },
	  _hideTooltip: function _hideTooltip() {
	    if (this.props.tooltip) this.setState({ tooltipShown: false });
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._hideTooltip();
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    this._showTooltip();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this._showTooltip();
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this._showTooltip();
	      if (this.props.onFocus) this.props.onFocus(e);
	    } else if (!this.state.hovered) {
	      this._hideTooltip();
	      if (this.props.onBlur) this.props.onBlur(e);
	    }

	    if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused);
	  },
	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var iconClassName = _props.iconClassName;
	    var tooltip = _props.tooltip;
	    var touch = _props.touch;
	    var iconStyle = _props.iconStyle;

	    var other = _objectWithoutProperties(_props, ['disabled', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);

	    var fonticon = undefined;

	    var styles = this.getStyles();
	    var tooltipPosition = this.props.tooltipPosition.split('-');

	    var tooltipElement = tooltip ? _react2.default.createElement(_tooltip2.default, {
	      ref: 'tooltip',
	      label: tooltip,
	      show: this.state.tooltipShown,
	      touch: touch,
	      style: this.mergeStyles(styles.tooltip, this.props.tooltipStyles),
	      verticalPosition: tooltipPosition[0],
	      horizontalPosition: tooltipPosition[1]
	    }) : null;

	    if (iconClassName) {
	      var iconHoverColor = iconStyle.iconHoverColor;

	      var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);

	      fonticon = _react2.default.createElement(
	        _fontIcon2.default,
	        {
	          className: iconClassName,
	          hoverColor: disabled ? null : iconHoverColor,
	          style: this.mergeStyles(styles.icon, disabled ? styles.disabled : {}, iconStyleFontIcon)
	        },
	        this.props.children
	      );
	    }

	    var childrenStyle = disabled ? this.mergeStyles(iconStyle, styles.disabled) : iconStyle;

	    return _react2.default.createElement(
	      _enhancedButton2.default,
	      _extends({}, other, {
	        ref: 'button',
	        centerRipple: true,
	        disabled: disabled,
	        style: this.mergeStyles(styles.root, this.props.style),
	        onBlur: this._handleBlur,
	        onFocus: this._handleFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onKeyboardFocus: this._handleKeyboardFocus
	      }),
	      tooltipElement,
	      fonticon,
	      _children2.default.extend(this.props.children, {
	        style: childrenStyle
	      })
	    );
	  }
	});

	exports.default = IconButton;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shallowEqual = __webpack_require__(88);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function relevantContextKeysEqual(classObject, currentContext, nextContext) {

	  //Get those keys from current object's context that we care
	  //about and check whether those keys have changed or not
	  if (classObject.getRelevantContextKeys) {
	    var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
	    var nextContextKeys = classObject.getRelevantContextKeys(nextContext);

	    if (!(0, _shallowEqual2.default)(currentContextKeys, nextContextKeys)) {
	      return false;
	    }
	  }

	  //Check if children context keys changed
	  if (classObject.getChildrenClasses) {
	    var childrenArray = classObject.getChildrenClasses();
	    for (var i = 0; i < childrenArray.length; i++) {
	      if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
	        return false;
	      }
	    }
	  }

	  //context keys are equal
	  return true;
	}

	exports.default = {

	  //Don't update if state, prop, and context are equal

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {

	    //If either the props or state have changed, component should update
	    if (!(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState)) {
	      return true;
	    }

	    //If current theme and next theme are both undefined, do not update
	    if (!this.context.muiTheme && !nextContext.muiTheme) {
	      return false;
	    }

	    //If both themes exist, compare keys only if current theme is not static
	    if (this.context.muiTheme && nextContext.muiTheme) {
	      return !this.context.muiTheme.static && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
	    }

	    //At this point it is guaranteed that exactly one theme is undefined so simply update
	    return true;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _children = __webpack_require__(90);

	var _children2 = _interopRequireDefault(_children);

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	var _keyCode = __webpack_require__(93);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _focusRipple = __webpack_require__(94);

	var _focusRipple2 = _interopRequireDefault(_focusRipple);

	var _touchRipple = __webpack_require__(99);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var styleInjected = false;
	var listening = false;
	var tabPressed = false;

	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}

	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (e) {
	      tabPressed = e.keyCode === _keyCode2.default.TAB;
	    });
	    listening = true;
	  }
	}

	var EnhancedButton = _react2.default.createClass({
	  displayName: 'EnhancedButton',

	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    containerElement: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
	    disableFocusRipple: _react2.default.PropTypes.bool,
	    disableKeyboardFocus: _react2.default.PropTypes.bool,
	    disableTouchRipple: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    focusRippleColor: _react2.default.PropTypes.string,
	    focusRippleOpacity: _react2.default.PropTypes.number,
	    keyboardFocused: _react2.default.PropTypes.bool,
	    linkButton: _react2.default.PropTypes.bool,
	    onBlur: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    onKeyDown: _react2.default.PropTypes.func,
	    onKeyUp: _react2.default.PropTypes.func,
	    onKeyboardFocus: _react2.default.PropTypes.func,
	    onTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    tabIndex: _react2.default.PropTypes.number,
	    touchRippleColor: _react2.default.PropTypes.string,
	    touchRippleOpacity: _react2.default.PropTypes.number,
	    type: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      containerElement: 'button',
	      onBlur: function onBlur() {},
	      onFocus: function onFocus() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onKeyDown: function onKeyDown() {},
	      onKeyUp: function onKeyUp() {},
	      onTouchTap: function onTouchTap() {},
	      tabIndex: 0,
	      type: 'button'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused && !this.props.disableKeyboardFocus,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    injectStyle();
	    listenForTabPresses();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      if (nextProps.onKeyboardFocus) {
	        nextProps.onKeyboardFocus(null, false);
	      }
	    }
	  },
	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },
	  removeKeyboardFocus: function removeKeyboardFocus(e) {
	    if (this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      this.props.onKeyboardFocus(e, false);
	    }
	  },
	  setKeyboardFocus: function setKeyboardFocus(e) {
	    if (!this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: true });
	      this.props.onKeyboardFocus(e, true);
	    }
	  },
	  _cancelFocusTimeout: function _cancelFocusTimeout() {
	    if (this._focusTimeout) {
	      clearTimeout(this._focusTimeout);
	      this._focusTimeout = null;
	    }
	  },
	  _createButtonChildren: function _createButtonChildren() {
	    var _props = this.props;
	    var centerRipple = _props.centerRipple;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var focusRippleColor = _props.focusRippleColor;
	    var focusRippleOpacity = _props.focusRippleOpacity;
	    var touchRippleColor = _props.touchRippleColor;
	    var touchRippleOpacity = _props.touchRippleOpacity;
	    var isKeyboardFocused = this.state.isKeyboardFocused;

	    //Focus Ripple

	    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_focusRipple2.default, {
	      color: focusRippleColor,
	      muiTheme: this.state.muiTheme,
	      opacity: focusRippleOpacity,
	      show: isKeyboardFocused
	    }) : undefined;

	    //Touch Ripple
	    var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	      _touchRipple2.default,
	      {
	        centerRipple: centerRipple,
	        color: touchRippleColor,
	        muiTheme: this.state.muiTheme,
	        opacity: touchRippleOpacity
	      },
	      children
	    ) : undefined;

	    return _children2.default.create({
	      focusRipple: focusRipple,
	      touchRipple: touchRipple,
	      children: touchRipple ? undefined : children
	    });
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.ENTER && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyDown(e);
	  },
	  _handleKeyUp: function _handleKeyUp(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.SPACE && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyUp(e);
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._cancelFocusTimeout();
	    this.removeKeyboardFocus(e);
	    this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    var _this = this;

	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      //setTimeout is needed because the focus event fires first
	      //Wait so that we can capture if this was a keyboard focus
	      //or touch focus
	      this._focusTimeout = setTimeout(function () {
	        if (tabPressed) {
	          _this.setKeyboardFocus(e);
	        }
	      }, 150);

	      this.props.onFocus(e);
	    }
	  },
	  _handleTouchTap: function _handleTouchTap(e) {
	    this._cancelFocusTimeout();
	    if (!this.props.disabled) {
	      tabPressed = false;
	      this.removeKeyboardFocus(e);
	      this.props.onTouchTap(e);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var centerRipple = _props2.centerRipple;
	    var children = _props2.children;
	    var containerElement = _props2.containerElement;
	    var disabled = _props2.disabled;
	    var disableFocusRipple = _props2.disableFocusRipple;
	    var disableKeyboardFocus = _props2.disableKeyboardFocus;
	    var disableTouchRipple = _props2.disableTouchRipple;
	    var focusRippleColor = _props2.focusRippleColor;
	    var focusRippleOpacity = _props2.focusRippleOpacity;
	    var linkButton = _props2.linkButton;
	    var touchRippleColor = _props2.touchRippleColor;
	    var touchRippleOpacity = _props2.touchRippleOpacity;
	    var onBlur = _props2.onBlur;
	    var onFocus = _props2.onFocus;
	    var onKeyUp = _props2.onKeyUp;
	    var onKeyDown = _props2.onKeyDown;
	    var onTouchTap = _props2.onTouchTap;
	    var style = _props2.style;
	    var tabIndex = _props2.tabIndex;
	    var type = _props2.type;

	    var other = _objectWithoutProperties(_props2, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);

	    var mergedStyles = this.mergeStyles({
	      border: 10,
	      background: 'none',
	      boxSizing: 'border-box',
	      display: 'inline-block',
	      font: 'inherit',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      tapHighlightColor: _colors2.default.transparent,
	      appearance: linkButton ? null : 'button',
	      cursor: disabled ? 'default' : 'pointer',
	      textDecoration: 'none',
	      outline: 'none',
	      /*
	        This is needed so that ripples do not bleed
	        past border radius.
	        See: http://stackoverflow.com/questions/17298739/
	          css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	       */
	      transform: disableTouchRipple && disableFocusRipple ? null : 'translate3d(0, 0, 0)',
	      verticalAlign: other.hasOwnProperty('href') ? 'middle' : null
	    }, style);

	    if (disabled && linkButton) {
	      return _react2.default.createElement(
	        'span',
	        _extends({}, other, {
	          style: mergedStyles
	        }),
	        children
	      );
	    }

	    var buttonProps = _extends({}, other, {
	      style: this.prepareStyles(mergedStyles),
	      disabled: disabled,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus,
	      onTouchTap: this._handleTouchTap,
	      onKeyUp: this._handleKeyUp,
	      onKeyDown: this._handleKeyDown,
	      tabIndex: tabIndex,
	      type: type
	    });
	    var buttonChildren = this._createButtonChildren();

	    // Provides backward compatibity. Added to support wrapping around <a> element.
	    var targetLinkElement = buttonProps.hasOwnProperty('href') ? 'a' : 'span';

	    return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, buttonProps, buttonChildren) : _react2.default.createElement(linkButton ? targetLinkElement : containerElement, buttonProps, buttonChildren);
	  }
	});

	exports.default = EnhancedButton;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCreateFragment = __webpack_require__(91);

	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  create: function create(fragments) {
	    var newFragments = {};
	    var validChildrenCount = 0;
	    var firstKey = undefined;

	    //Only create non-empty key fragments
	    for (var key in fragments) {
	      var currentChild = fragments[key];

	      if (currentChild) {
	        if (validChildrenCount === 0) firstKey = key;
	        newFragments[key] = currentChild;
	        validChildrenCount++;
	      }
	    }

	    if (validChildrenCount === 0) return undefined;
	    if (validChildrenCount === 1) return newFragments[firstKey];
	    return (0, _reactAddonsCreateFragment2.default)(newFragments);
	  },
	  extend: function extend(children, extendedProps, extendedChildren) {

	    return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {

	      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

	      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

	      return _react2.default.cloneElement(child, newProps, newChildren);
	    }) : children;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = React.addons.createFragment;

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return callback(e);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(e) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(e.type) !== -1;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  DOWN: 40,
	  ESC: 27,
	  ENTER: 13,
	  LEFT: 37,
	  RIGHT: 39,
	  SPACE: 32,
	  TAB: 9,
	  UP: 38
	};
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _scaleIn = __webpack_require__(96);

	var _scaleIn2 = _interopRequireDefault(_scaleIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pulsateDuration = 750;

	var FocusRipple = _react2.default.createClass({
	  displayName: 'FocusRipple',

	  propTypes: {
	    color: _react2.default.PropTypes.string,
	    innerStyle: _react2.default.PropTypes.object,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,
	    show: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    } else {
	      if (this._timeout) clearTimeout(this._timeout);
	    }
	  },
	  _getRippleElement: function _getRippleElement(props) {
	    var color = props.color;
	    var innerStyle = props.innerStyle;
	    var opacity = props.opacity;

	    var innerStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      opacity: opacity ? opacity : 0.16,
	      backgroundColor: color,
	      transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	    }, innerStyle);

	    return _react2.default.createElement('div', { ref: 'innerCircle', style: this.prepareStyles(innerStyles) });
	  },
	  _pulsate: function _pulsate() {
	    if (!this.isMounted()) return;

	    var innerCircle = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    if (!innerCircle) return;

	    var startScale = 'scale(1)';
	    var endScale = 'scale(0.85)';
	    var currentScale = innerCircle.style.transform;
	    var nextScale = undefined;

	    currentScale = currentScale || startScale;
	    nextScale = currentScale === startScale ? endScale : startScale;

	    _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale, this.props.muiTheme);
	    this._timeout = setTimeout(this._pulsate, pulsateDuration);
	  },
	  _setRippleSize: function _setRippleSize() {
	    var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    var height = el.offsetHeight;
	    var width = el.offsetWidth;
	    var size = Math.max(height, width);

	    var oldTop = 0;
	    // For browsers that don't support endsWith()
	    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	      oldTop = parseInt(el.style.top);
	    }
	    el.style.height = size + 'px';
	    el.style.top = height / 2 - size / 2 + oldTop + 'px';
	  },
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;

	    var mergedRootStyles = this.mergeStyles({
	      height: '100%',
	      width: '100%',
	      position: 'absolute',
	      top: 0,
	      left: 0
	    }, style);

	    var ripple = show ? this._getRippleElement(this.props) : null;

	    return _react2.default.createElement(
	      _scaleIn2.default,
	      {
	        maxScale: 0.85,
	        style: mergedRootStyles
	      },
	      ripple
	    );
	  }
	});

	exports.default = FocusRipple;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactAddonsTransitionGroup = __webpack_require__(97);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _scaleInChild = __webpack_require__(98);

	var _scaleInChild2 = _interopRequireDefault(_scaleInChild);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ScaleIn = _react2.default.createClass({
	  displayName: 'ScaleIn',

	  propTypes: {
	    childStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var enterDelay = _props.enterDelay;
	    var maxScale = _props.maxScale;
	    var minScale = _props.minScale;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);

	    var newChildren = _react2.default.Children.map(children, function (child) {
	      return _react2.default.createElement(
	        _scaleInChild2.default,
	        {
	          key: child.key,
	          enterDelay: enterDelay,
	          maxScale: maxScale,
	          minScale: minScale,
	          style: childStyle
	        },
	        child
	      );
	    });

	    return _react2.default.createElement(
	      _reactAddonsTransitionGroup2.default,
	      _extends({}, other, {
	        style: this.prepareStyles(mergedRootStyles),
	        component: 'div'
	      }),
	      newChildren
	    );
	  }
	});

	exports.default = ScaleIn;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = React.addons.TransitionGroup;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ScaleInChild = _react2.default.createClass({
	  displayName: 'ScaleInChild',

	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      maxScale: 1,
	      minScale: 0
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')', this.state.muiTheme);

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '1';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')', this.state.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.state.muiTheme);

	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	    }, style);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(mergedRootStyles) }),
	      children
	    );
	  }
	});

	exports.default = ScaleInChild;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactAddonsTransitionGroup = __webpack_require__(97);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _dom = __webpack_require__(100);

	var _dom2 = _interopRequireDefault(_dom);

	var _circleRipple = __webpack_require__(101);

	var _circleRipple2 = _interopRequireDefault(_circleRipple);

	var _reactAddonsUpdate = __webpack_require__(50);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function push(array, obj) {
	  var newObj = Array.isArray(obj) ? obj : [obj];
	  return (0, _reactAddonsUpdate2.default)(array, { $push: newObj });
	}

	function shift(array) {
	  return (0, _reactAddonsUpdate2.default)(array, { $splice: [[0, 1]] });
	}

	var TouchRipple = _react2.default.createClass({
	  displayName: 'TouchRipple',

	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getInitialState: function getInitialState() {
	    //Touch start produces a mouse down event for compat reasons. To avoid
	    //showing ripples twice we skip showing a ripple for the first mouse down
	    //after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    //to avoid re-rendering when we change it
	    this._ignoreNextMouseDown = false;

	    return {
	      //This prop allows us to only render the ReactTransitionGroup
	      //on the first click of the component, making the inital
	      //render faster
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	  },
	  start: function start(e, isRippleTouchGenerated) {
	    if (this._ignoreNextMouseDown && !isRippleTouchGenerated) {
	      this._ignoreNextMouseDown = false;
	      return;
	    }

	    var ripples = this.state.ripples;

	    //Add a ripple to the ripples array
	    ripples = push(ripples, _react2.default.createElement(_circleRipple2.default, {
	      key: this.state.nextKey,
	      muiTheme: this.props.muiTheme,
	      style: !this.props.centerRipple ? this._getRippleStyle(e) : {},
	      color: this.props.color,
	      opacity: this.props.opacity,
	      touchGenerated: isRippleTouchGenerated
	    }));

	    this._ignoreNextMouseDown = isRippleTouchGenerated;
	    this.setState({
	      hasRipples: true,
	      nextKey: this.state.nextKey + 1,
	      ripples: ripples
	    });
	  },
	  end: function end() {
	    var currentRipples = this.state.ripples;
	    this.setState({
	      ripples: shift(currentRipples)
	    });
	  },
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) this.start(e, false);
	  },
	  _handleMouseUp: function _handleMouseUp() {
	    this.end();
	  },
	  _handleMouseLeave: function _handleMouseLeave() {
	    this.end();
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.start(e, true);
	  },
	  _handleTouchEnd: function _handleTouchEnd() {
	    this.end();
	  },
	  _getRippleStyle: function _getRippleStyle(e) {
	    var style = {};
	    var el = _reactDom2.default.findDOMNode(this);
	    var elHeight = el.offsetHeight;
	    var elWidth = el.offsetWidth;
	    var offset = _dom2.default.offset(el);
	    var isTouchEvent = e.touches && e.touches.length;
	    var pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
	    var pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
	    var pointerX = pageX - offset.left;
	    var pointerY = pageY - offset.top;
	    var topLeftDiag = this._calcDiag(pointerX, pointerY);
	    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
	    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
	    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
	    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	    var rippleSize = rippleRadius * 2;
	    var left = pointerX - rippleRadius;
	    var top = pointerY - rippleRadius;

	    style.height = rippleSize + 'px';
	    style.width = rippleSize + 'px';
	    style.top = top + 'px';
	    style.left = left + 'px';

	    return style;
	  },
	  _calcDiag: function _calcDiag(a, b) {
	    return Math.sqrt(a * a + b * b);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var _state = this.state;
	    var hasRipples = _state.hasRipples;
	    var ripples = _state.ripples;

	    var rippleGroup = undefined;
	    if (hasRipples) {
	      var mergedStyles = this.mergeStyles({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        overflow: 'hidden'
	      }, style);

	      rippleGroup = _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        { style: this.prepareStyles(mergedStyles) },
	        ripples
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        onMouseUp: this._handleMouseUp,
	        onMouseDown: this._handleMouseDown,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchStart: this._handleTouchStart,
	        onTouchEnd: this._handleTouchEnd
	      },
	      rippleGroup,
	      children
	    );
	  }
	});

	exports.default = TouchRipple;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;

	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }

	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  },

	  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	    var attrStyle = el.style[attr];
	    var attrNum = 0;
	    if (attrStyle && attrStyle.length) {
	      attrNum = parseInt(attrStyle);
	    }

	    return attrNum;
	  },

	  addClass: function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	  },
	  removeClass: function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else {
	      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  },
	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },
	  toggleClass: function toggleClass(el, className) {
	    if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	  },
	  forceRedraw: function forceRedraw(el) {
	    var originalDisplay = el.style.display;

	    el.style.display = 'none';
	    el.style.display = originalDisplay;
	  },
	  withoutTransition: function withoutTransition(el, callback) {
	    var originalTransition = el.style.transition;

	    //turn off transition
	    el.style.transition = null;

	    callback();

	    //force a redraw
	    this.forceRedraw(el);

	    //put the transition back
	    el.style.transition = originalTransition;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var CircleRipple = _react2.default.createClass({
	  displayName: 'CircleRipple',

	  propTypes: {
	    color: _react2.default.PropTypes.string,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack,
	      opacity: 0.16
	    };
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = 0;
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 2000);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;
	    var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ',' + _transitions2.default.easeOut('1s', 'transform');
	    _autoPrefix2.default.set(style, 'transition', transitionValue, this.props.muiTheme);
	    _autoPrefix2.default.set(style, 'transform', 'scale(1)', this.props.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.props.muiTheme);
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var opacity = _props.opacity;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);

	    var mergedStyles = this.mergeStyles({
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      backgroundColor: color
	    }, style);

	    return _react2.default.createElement('div', _extends({}, other, { style: this.prepareStyles(mergedStyles) }));
	  }
	});

	exports.default = CircleRipple;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FontIcon = _react2.default.createClass({
	  displayName: 'FontIcon',

	  propTypes: {
	    /**
	     * This is the font color of the font icon. If not specified,
	     * this component will default to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,

	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
	    if (this.props.onMouseLeave) {
	      this.props.onMouseLeave(e);
	    }
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);

	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var offColor = color ? color : style && style.color ? style.color : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.mergeStyles({
	      position: 'relative',
	      fontSize: spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      color: this.state.hovered ? onColor : offColor
	    });

	    return _react2.default.createElement('span', _extends({}, other, {
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      style: this.prepareStyles(mergedStyles)
	    }));
	  }
	});

	exports.default = FontIcon;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tooltip = _react2.default.createClass({
	  displayName: 'Tooltip',

	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    horizontalPosition: _react2.default.PropTypes.oneOf(['left', 'right', 'center']),
	    label: _react2.default.PropTypes.node.isRequired,
	    show: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    touch: _react2.default.PropTypes.bool,
	    verticalPosition: _react2.default.PropTypes.oneOf(['top', 'bottom'])
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      offsetWidth: null,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._setRippleSize();
	    this._setTooltipPosition();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this._setTooltipPosition();

	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._setRippleSize();
	  },
	  getStyles: function getStyles() {
	    var verticalPosition = this.props.verticalPosition;
	    var horizontalPosition = this.props.horizontalPosition;
	    var touchMarginOffset = this.props.touch ? 10 : 0;
	    var touchOffsetTop = this.props.touch ? -20 : -10;
	    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;

	    var styles = {
	      root: {
	        position: 'absolute',
	        fontFamily: rawTheme.fontFamily,
	        fontSize: '10px',
	        lineHeight: '22px',
	        padding: '0 8px',
	        zIndex: muiTheme.zIndex.tooltip,
	        color: _colors2.default.white,
	        overflow: 'hidden',
	        top: -10000,
	        borderRadius: 2,
	        userSelect: 'none',
	        opacity: 0,
	        right: horizontalPosition === 'left' ? 12 : null,
	        left: horizontalPosition === 'center' ? (this.state.offsetWidth - 48) / 2 * -1 : null,
	        transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      label: {
	        position: 'relative',
	        whiteSpace: 'nowrap'
	      },
	      ripple: {
	        position: 'absolute',
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? 0 : '100%',
	        transform: 'translate(-50%, -50%)',
	        borderRadius: '50%',
	        backgroundColor: 'transparent',
	        transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ',' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      },
	      rootWhenShown: {
	        top: verticalPosition === 'top' ? touchOffsetTop : 36,
	        opacity: 0.9,
	        transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	        transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      rootWhenTouched: {
	        fontSize: '14px',
	        lineHeight: '32px',
	        padding: '0 16px'
	      },
	      rippleWhenShown: {
	        backgroundColor: _colors2.default.grey700,
	        transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      }
	    };

	    return styles;
	  },
	  _setRippleSize: function _setRippleSize() {
	    var ripple = _reactDom2.default.findDOMNode(this.refs.ripple);
	    var tooltip = window.getComputedStyle(_reactDom2.default.findDOMNode(this));
	    var tooltipWidth = parseInt(tooltip.getPropertyValue('width'), 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	    var tooltipHeight = parseInt(tooltip.getPropertyValue('height'), 10);

	    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	    if (this.props.show) {
	      ripple.style.height = rippleDiameter + 'px';
	      ripple.style.width = rippleDiameter + 'px';
	    } else {
	      ripple.style.width = '0px';
	      ripple.style.height = '0px';
	    }
	  },
	  _setTooltipPosition: function _setTooltipPosition() {
	    var tooltip = _reactDom2.default.findDOMNode(this);
	    this.setState({ offsetWidth: tooltip.offsetWidth });
	  },
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;

	    var other = _objectWithoutProperties(_props, ['label']);

	    var styles = this.getStyles();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style)
	      }),
	      _react2.default.createElement('div', {
	        ref: 'ripple',
	        style: this.prepareStyles(styles.ripple, this.props.show && styles.rippleWhenShown)
	      }),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        label
	      )
	    );
	  }
	});

	exports.default = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(105);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationMenu = _react2.default.createClass({
	  displayName: 'NavigationMenu',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	    );
	  }
	});

	exports.default = NavigationMenu;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var SvgIcon = _react2.default.createClass({
	  displayName: 'SvgIcon',

	  propTypes: {
	    /**
	     * Elements passed into the SVG Icon.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * This is the fill color of the svg icon.
	     * If not specified, this component will default
	     * to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,

	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Allows you to redifine what the coordinates
	     * without units mean inside an svg element. For example,
	     * if the SVG element is 500 (width) by 200 (height), and you
	     * pass viewBox="0 0 50 20", this means that the coordinates inside
	     * the svg will go from the top left corner (0,0) to bottom right (50,20)
	     * and each unit will be worth 10px.
	     */
	    viewBox: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      viewBox: '0 0 24 24'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseLeave = _props.onMouseLeave;
	    var style = _props.style;
	    var viewBox = _props.viewBox;

	    var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

	    var offColor = color ? color : style && style.fill ? style.fill : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.mergeStyles({
	      display: 'inline-block',
	      height: 24,
	      width: 24,
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      // Make sure our fill color overrides fill provided in props.style
	      fill: this.state.hovered ? onColor : offColor
	    });

	    var events = hoverColor ? {
	      onMouseEnter: this._handleMouseEnter,
	      onMouseLeave: this._handleMouseLeave
	    } : {};

	    return _react2.default.createElement(
	      'svg',
	      _extends({}, other, events, {
	        style: this.prepareStyles(mergedStyles),
	        viewBox: viewBox
	      }),
	      children
	    );
	  }
	});

	exports.default = SvgIcon;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _contextPure = __webpack_require__(87);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _children = __webpack_require__(90);

	var _children2 = _interopRequireDefault(_children);

	var _colorManipulator = __webpack_require__(72);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _styles = __webpack_require__(29);

	var _typography = __webpack_require__(85);

	var _typography2 = _interopRequireDefault(_typography);

	var _enhancedButton = __webpack_require__(89);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _flatButtonLabel = __webpack_require__(107);

	var _flatButtonLabel2 = _interopRequireDefault(_flatButtonLabel);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label) {
	    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
	  }
	}

	var FlatButton = _react2.default.createClass({
	  displayName: 'FlatButton',

	  propTypes: {
	    /**
	     * Color of button when mouse is not hovering over it.
	     */
	    backgroundColor: _react2.default.PropTypes.string,

	    /**
	     * This is what will be displayed inside the button.
	     * If a label is specified, the text within the label prop will
	     * be displayed. Otherwise, the component will expect children
	     * which will then be displayed. (In our example,
	     * we are nesting an `<input type="file" />` and a `span`
	     * that acts as our label to be displayed.) This only
	     * applies to flat and raised buttons.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Disables the button if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Color of button when mouse hovers over.
	     */
	    hoverColor: _react2.default.PropTypes.string,

	    /**
	     * URL to link to when button clicked if `linkButton` is set to true.
	     */
	    href: _react2.default.PropTypes.string,

	    /**
	     * Use this property to display an icon.
	     */
	    icon: _react2.default.PropTypes.node,

	    /**
	     * Label for the button.
	     */
	    label: validateLabel,

	    /**
	     * Place label before or after the passed children.
	     */
	    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),

	    /**
	     * Override the inline-styles of the button's label element.
	     */
	    labelStyle: _react2.default.PropTypes.object,

	    /**
	     * Enables use of `href` property to provide a URL to link to if set to true.
	     */
	    linkButton: _react2.default.PropTypes.bool,

	    /**
	     * Called when element is focused by the keyboard.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,

	    /**
	     * Called when the mouse enters the element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Called when the mouse leaves the element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Called when a touch event is started inside the element.
	     */
	    onTouchStart: _react2.default.PropTypes.func,

	    /**
	     * If true, colors button according to
	     * primaryTextColor from the Theme.
	     */
	    primary: _react2.default.PropTypes.bool,

	    /**
	     * Color for the ripple after button is clicked.
	     */
	    rippleColor: _react2.default.PropTypes.string,

	    /**
	     * If true, colors button according to secondaryTextColor from the theme.
	     * The primary prop has precendent if set to true.
	     */
	    secondary: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_contextPure2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var buttonTheme = muiTheme.button;
	      var flatButtonTheme = muiTheme.flatButton;

	      return {
	        buttonColor: flatButtonTheme.color,
	        buttonFilterColor: flatButtonTheme.buttonFilterColor,
	        buttonHeight: buttonTheme.height,
	        buttonMinWidth: buttonTheme.minWidth,
	        disabledTextColor: flatButtonTheme.disabledTextColor,
	        primaryTextColor: flatButtonTheme.primaryTextColor,
	        secondaryTextColor: flatButtonTheme.secondaryTextColor,
	        textColor: flatButtonTheme.textColor,
	        textTransform: flatButtonTheme.textTransform ? flatButtonTheme.textTransform : buttonTheme.textTransform ? buttonTheme.textTransform : 'uppercase'
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedButton2.default, _flatButtonLabel2.default];
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      labelStyle: {},
	      labelPosition: 'after',
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onTouchStart: function onTouchStart() {},
	      primary: false,
	      secondary: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    //Cancel hover styles for touch devices
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var hoverColor = _props.hoverColor;
	    var backgroundColor = _props.backgroundColor;
	    var icon = _props.icon;
	    var label = _props.label;
	    var labelStyle = _props.labelStyle;
	    var labelPosition = _props.labelPosition;
	    var primary = _props.primary;
	    var rippleColor = _props.rippleColor;
	    var secondary = _props.secondary;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);

	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var buttonColor = _constructor$getRelev.buttonColor;
	    var buttonHeight = _constructor$getRelev.buttonHeight;
	    var buttonMinWidth = _constructor$getRelev.buttonMinWidth;
	    var disabledTextColor = _constructor$getRelev.disabledTextColor;
	    var buttonFilterColor = _constructor$getRelev.buttonFilterColor;
	    var primaryTextColor = _constructor$getRelev.primaryTextColor;
	    var secondaryTextColor = _constructor$getRelev.secondaryTextColor;
	    var textColor = _constructor$getRelev.textColor;
	    var textTransform = _constructor$getRelev.textTransform;

	    var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

	    var defaultHoverColor = _colorManipulator2.default.fade(buttonFilterColor, 0.2);
	    var defaultRippleColor = buttonFilterColor;
	    var buttonHoverColor = hoverColor || defaultHoverColor;
	    var buttonRippleColor = rippleColor || defaultRippleColor;
	    var buttonBackgroundColor = backgroundColor || buttonColor;
	    var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

	    var mergedRootStyles = (0, _styles.mergeStyles)({
	      color: defaultTextColor,
	      transition: _transitions2.default.easeOut(),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      letterSpacing: 0,
	      textTransform: textTransform,
	      fontWeight: _typography2.default.fontWeightMedium,
	      borderRadius: 2,
	      userSelect: 'none',
	      position: 'relative',
	      overflow: 'hidden',
	      backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	      lineHeight: buttonHeight + 'px',
	      minWidth: buttonMinWidth,
	      padding: 0,
	      margin: 0
	    }, style);

	    var iconCloned = undefined;
	    var labelStyleIcon = {};

	    if (icon) {
	      iconCloned = _react2.default.cloneElement(icon, {
	        color: mergedRootStyles.color,
	        style: {
	          verticalAlign: 'middle',
	          marginLeft: labelPosition === 'before' ? 0 : 12,
	          marginRight: labelPosition === 'before' ? 12 : 0
	        }
	      });

	      if (labelPosition === 'before') {
	        labelStyleIcon.paddingRight = 8;
	      } else {
	        labelStyleIcon.paddingLeft = 8;
	      }
	    }

	    var labelElement = label ? _react2.default.createElement(_flatButtonLabel2.default, { label: label, style: (0, _styles.mergeStyles)(labelStyleIcon, labelStyle) }) : undefined;

	    // Place label before or after children.
	    var childrenFragment = labelPosition === 'before' ? {
	      labelElement: labelElement,
	      iconCloned: iconCloned,
	      children: children
	    } : {
	      children: children,
	      iconCloned: iconCloned,
	      labelElement: labelElement
	    };
	    var enhancedButtonChildren = _children2.default.create(childrenFragment);

	    return _react2.default.createElement(
	      _enhancedButton2.default,
	      _extends({}, other, {
	        disabled: disabled,
	        focusRippleColor: buttonRippleColor,
	        focusRippleOpacity: 0.3,
	        onKeyboardFocus: this._handleKeyboardFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onTouchStart: this._handleTouchStart,
	        style: mergedRootStyles,
	        touchRippleColor: buttonRippleColor,
	        touchRippleOpacity: 0.3
	      }),
	      enhancedButtonChildren
	    );
	  }
	});

	exports.default = FlatButton;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _contextPure = __webpack_require__(87);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlatButtonLabel = _react2.default.createClass({
	  displayName: 'FlatButtonLabel',

	  propTypes: {
	    label: _react2.default.PropTypes.node,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_contextPure2.default, _stylePropable2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      return {
	        spacingDesktopGutterLess: muiTheme.rawTheme.spacing.desktopGutterLess
	      };
	    }
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var style = _props.style;

	    var contextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'relative',
	      paddingLeft: contextKeys.spacingDesktopGutterLess,
	      paddingRight: contextKeys.spacingDesktopGutterLess
	    }, style);

	    return _react2.default.createElement(
	      'span',
	      { style: this.prepareStyles(mergedRootStyles) },
	      label
	    );
	  }

	});

	exports.default = FlatButtonLabel;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _windowListenable = __webpack_require__(109);

	var _windowListenable2 = _interopRequireDefault(_windowListenable);

	var _renderToLayer = __webpack_require__(110);

	var _renderToLayer2 = _interopRequireDefault(_renderToLayer);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _lodash = __webpack_require__(111);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _popoverDefaultAnimation = __webpack_require__(113);

	var _popoverDefaultAnimation2 = _interopRequireDefault(_popoverDefaultAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Popover = _react2.default.createClass({
	  displayName: 'Popover',

	  propTypes: {
	    /**
	     * This is the DOM element that will be used to set the position of the
	     * component.
	     */
	    anchorEl: _react2.default.PropTypes.object,

	    /**
	     * This is the point on the anchor where the popover
	     * targetOrigin will stick to.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    anchorOrigin: _propTypes2.default.origin,

	    /**
	     * If true, the popover will apply transitions when
	     * added it gets added to the DOM.
	     */
	    animated: _react2.default.PropTypes.bool,

	    /**
	     * Override the default animation component used.
	     */
	    animation: _react2.default.PropTypes.func,

	    /**
	     * If true, the popover will hide when the anchor scrolls off the screen
	     */
	    autoCloseWhenOffScreen: _react2.default.PropTypes.bool,

	    /**
	     * If true, the popover (potentially) ignores targetOrigin
	     * and anchorOrigin to make itself fit on screen,
	     * which is useful for mobile devices.
	     */
	    canAutoPosition: _react2.default.PropTypes.bool,

	    /**
	     * Use this property to render your component inside the `Popover`.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * This is a callback that fires when the popover
	     * thinks it should close. (e.g. clickAway or offScreen)
	     *
	     * @param {string} reason Determines what triggered this request.
	     */
	    onRequestClose: _react2.default.PropTypes.func,

	    /**
	     * Controls the visibility of the popover.
	     */
	    open: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * This is the point on the popover which will stick to
	     * the anchors origin.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    targetOrigin: _propTypes2.default.origin,

	    /**
	     * If true, the popover will render on top of an invisible
	     * layer, which will prevent clicks to the underlying
	     * elements, and trigger an onRequestClose(clickAway) event.
	     */
	    useLayerForClickAway: _react2.default.PropTypes.bool,

	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default, _windowListenable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      anchorOrigin: {
	        vertical: 'bottom',
	        horizontal: 'left'
	      },
	      animated: true,
	      autoCloseWhenOffScreen: true,
	      canAutoPosition: true,
	      onRequestClose: function onRequestClose() {},
	      open: false,
	      style: {
	        overflowY: 'auto'
	      },
	      targetOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      useLayerForClickAway: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.setPlacementThrottled = (0, _lodash2.default)(this.setPlacement, 100);
	    this.setPlacementThrottledScrolled = (0, _lodash2.default)(this.setPlacement.bind(this, true), 100);

	    return {
	      open: this.props.open,
	      closing: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var _this = this;

	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (nextProps.open !== this.state.open) {
	      if (nextProps.open) {
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false,
	          muiTheme: newMuiTheme
	        });
	      } else {
	        if (nextProps.animated) {
	          this.setState({ closing: true });
	          this._timeout = setTimeout(function () {
	            if (_this.isMounted()) {
	              _this.setState({
	                open: false,
	                muiTheme: newMuiTheme
	              });
	            }
	          }, 500);
	        } else {
	          this.setState({
	            open: false,
	            muiTheme: newMuiTheme
	          });
	        }
	      }
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.setPlacement();
	  },

	  windowListeners: {
	    resize: 'setPlacementThrottled',
	    scroll: 'setPlacementThrottledScrolled'
	  },

	  renderLayer: function renderLayer() {
	    var _props = this.props;
	    var animated = _props.animated;
	    var animation = _props.animation;
	    var children = _props.children;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['animated', 'animation', 'children', 'style']);

	    var Animation = animation || _popoverDefaultAnimation2.default;

	    if (!Animation) {
	      Animation = _paper2.default;
	      style = {
	        position: 'fixed'
	      };
	      if (!this.state.open) {
	        return null;
	      }
	    }

	    return _react2.default.createElement(
	      Animation,
	      _extends({}, other, { style: style, open: this.state.open && !this.state.closing }),
	      children
	    );
	  },
	  requestClose: function requestClose(reason) {
	    if (this.props.onRequestClose) {
	      this.props.onRequestClose(reason);
	    }
	  },
	  componentClickAway: function componentClickAway() {
	    this.requestClose('clickAway');
	  },
	  _resizeAutoPosition: function _resizeAutoPosition() {
	    this.setPlacement();
	  },
	  getAnchorPosition: function getAnchorPosition(el) {
	    if (!el) {
	      el = _reactDom2.default.findDOMNode(this);
	    }

	    var rect = el.getBoundingClientRect();
	    var a = {
	      top: rect.top,
	      left: rect.left,
	      width: el.offsetWidth,
	      height: el.offsetHeight
	    };

	    a.right = rect.right || a.left + a.width;
	    a.bottom = rect.bottom || a.top + a.height;
	    a.middle = a.left + (a.right - a.left) / 2;
	    a.center = a.top + (a.bottom - a.top) / 2;

	    return a;
	  },
	  getTargetPosition: function getTargetPosition(targetEl) {
	    return {
	      top: 0,
	      center: targetEl.offsetHeight / 2,
	      bottom: targetEl.offsetHeight,
	      left: 0,
	      middle: targetEl.offsetWidth / 2,
	      right: targetEl.offsetWidth
	    };
	  },
	  setPlacement: function setPlacement(scrolling) {
	    if (!this.state.open) {
	      return;
	    }

	    var anchorEl = this.props.anchorEl || this.anchorEl;

	    if (!this.refs.layer.getLayer()) {
	      return;
	    }

	    var targetEl = this.refs.layer.getLayer().children[0];
	    if (!targetEl) {
	      return;
	    }

	    var _props2 = this.props;
	    var targetOrigin = _props2.targetOrigin;
	    var anchorOrigin = _props2.anchorOrigin;

	    var anchor = this.getAnchorPosition(anchorEl);
	    var target = this.getTargetPosition(targetEl);

	    var targetPosition = {
	      top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	      left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	    };

	    if (scrolling && this.props.autoCloseWhenOffScreen) {
	      this.autoCloseWhenOffScreen(anchor);
	    }

	    if (this.props.canAutoPosition) {
	      target = this.getTargetPosition(targetEl); // update as height may have changed
	      targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	    }

	    targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	    targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	    targetEl.style.maxHeight = window.innerHeight + 'px';
	  },
	  autoCloseWhenOffScreen: function autoCloseWhenOffScreen(anchorPosition) {
	    if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWith) {
	      this.requestClose('offScreen');
	    }
	  },
	  getOverlapMode: function getOverlapMode(anchor, target, median) {
	    if ([anchor, target].indexOf(median) >= 0) return 'auto';
	    if (anchor === target) return 'inclusive';
	    return 'exclusive';
	  },
	  getPositions: function getPositions(anchor, target) {
	    var a = _extends({}, anchor);
	    var t = _extends({}, target);

	    var positions = {
	      x: ['left', 'right'].filter(function (p) {
	        return p !== t.horizontal;
	      }),
	      y: ['top', 'bottom'].filter(function (p) {
	        return p !== t.vertical;
	      })
	    };

	    var overlap = {
	      x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	      y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	    };

	    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

	    if (overlap.y !== 'auto') {
	      a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	      if (overlap.y === 'inclusive') {
	        t.vertical = t.vertical;
	      }
	    }

	    if (overlap.x !== 'auto') {
	      a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	      if (overlap.y === 'inclusive') {
	        t.horizontal = t.horizontal;
	      }
	    }

	    return {
	      positions: positions,
	      anchorPos: a
	    };
	  },
	  applyAutoPositionIfNeeded: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	    var _getPositions = this.getPositions(anchorOrigin, targetOrigin);

	    var positions = _getPositions.positions;
	    var anchorPos = _getPositions.anchorPos;

	    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	      var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	      if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);else {
	        newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	        if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	      }
	    }
	    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	      var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	      if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);else {
	        newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	        if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	      }
	    }
	    return targetPosition;
	  },
	  render: function render() {
	    return _react2.default.createElement(_renderToLayer2.default, {
	      ref: 'layer',
	      open: this.state.open,
	      componentClickAway: this.componentClickAway,
	      useLayerForClickAway: this.props.useLayerForClickAway,
	      render: this.renderLayer
	    });
	  }
	});

	exports.default = Popover;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  componentDidMount: function componentDidMount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.on(window, eventName, this[callbackName]);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.off(window, eventName, this[callbackName]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _dom = __webpack_require__(100);

	var _dom2 = _interopRequireDefault(_dom);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = _react2.default.createClass({
	  displayName: 'RenderToLayer',

	  propTypes: {
	    componentClickAway: _react2.default.PropTypes.func,
	    open: _react2.default.PropTypes.bool.isRequired,
	    render: _react2.default.PropTypes.func.isRequired,
	    useLayerForClickAway: _react2.default.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      useLayerForClickAway: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._renderLayer();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderLayer();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderLayer();
	  },
	  onClickAway: function onClickAway(event) {
	    if (event.defaultPrevented) {
	      return;
	    }

	    if (!this.props.componentClickAway) {
	      return;
	    }

	    if (!this.props.open) {
	      return;
	    }

	    var el = this._layer;
	    if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	      this.props.componentClickAway(event);
	    }
	  },
	  getLayer: function getLayer() {
	    return this._layer;
	  },

	  _unrenderLayer: function _unrenderLayer() {
	    if (!this._layer) {
	      return;
	    }

	    if (this.props.useLayerForClickAway) {
	      this._layer.style.position = 'relative';
	      this._layer.removeEventListener('touchstart', this.onClickAway);
	      this._layer.removeEventListener('click', this.onClickAway);
	    } else {
	      window.removeEventListener('touchstart', this.onClickAway);
	      window.removeEventListener('click', this.onClickAway);
	    }

	    _reactDom2.default.unmountComponentAtNode(this._layer);
	    document.body.removeChild(this._layer);
	    this._layer = null;
	  },

	  _renderLayer: function _renderLayer() {
	    var _this = this;

	    var _props = this.props;
	    var open = _props.open;
	    var render = _props.render;

	    if (open) {
	      if (!this._layer) {
	        this._layer = document.createElement('div');
	        document.body.appendChild(this._layer);

	        if (this.props.useLayerForClickAway) {
	          this._layer.addEventListener('touchstart', this.onClickAway);
	          this._layer.addEventListener('click', this.onClickAway);
	          this._layer.style.position = 'fixed';
	          this._layer.style.top = 0;
	          this._layer.style.bottom = 0;
	          this._layer.style.left = 0;
	          this._layer.style.right = 0;
	          this._layer.style.zIndex = this.state.muiTheme.zIndex.layer;
	        } else {
	          setTimeout(function () {
	            window.addEventListener('touchstart', _this.onClickAway);
	            window.addEventListener('click', _this.onClickAway);
	          }, 0);
	        }
	      }

	      // By calling this method in componentDidMount() and
	      // componentDidUpdate(), you're effectively creating a "wormhole" that
	      // funnels React's hierarchical updates through to a DOM node on an
	      // entirely different part of the page.

	      var layerElement = render();

	      if (layerElement === null) {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, null, this._layer);
	      } else {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, layerElement, this._layer);
	      }
	    } else {
	      this._unrenderLayer();
	    }
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports.default = RenderToLayer;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(112);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = throttle;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(68);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopoverDefaultAnimation = _react2.default.createClass({
	  displayName: 'PopoverDefaultAnimation',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    open: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    targetOrigin: _propTypes2.default.origin,
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {},
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ open: true }); //eslint-disable-line react/no-did-mount-set-state
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    this.setState({
	      open: nextProps.open,
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    var targetOrigin = this.props.targetOrigin;

	    var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

	    return {
	      base: {
	        opacity: 0,
	        transform: 'scale(0, 0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        position: 'fixed',
	        zIndex: this.state.muiTheme.zIndex.popover,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	        maxHeight: '100%'

	      },
	      horizontal: {
	        maxHeight: '100%',
	        overflowY: 'auto',
	        transform: 'scaleX(0)',
	        opacity: 0,
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	      },
	      vertical: {
	        opacity: 0,
	        transform: 'scaleY(0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	      }
	    };
	  },
	  getOpenStyles: function getOpenStyles() {
	    return {
	      base: {
	        opacity: 1,
	        transform: 'scale(1, 1)'
	      },
	      horizontal: {
	        opacity: 1,
	        transform: 'scaleX(1)'
	      },
	      vertical: {
	        opacity: 1,
	        transform: 'scaleY(1)'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;

	    var styles = this.getStyles();
	    var openStyles = {};
	    if (this.state.open) openStyles = this.getOpenStyles();

	    return _react2.default.createElement(
	      _paper2.default,
	      {
	        style: this.mergeStyles(styles.base, style, openStyles.base),
	        zDepth: zDepth,
	        className: className
	      },
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.horizontal, openStyles.horizontal) },
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.vertical, openStyles.vertical) },
	          this.props.children
	        )
	      )
	    );
	  }
	});

	exports.default = PopoverDefaultAnimation;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _windowListenable = __webpack_require__(109);

	var _windowListenable2 = _interopRequireDefault(_windowListenable);

	var _keyCode = __webpack_require__(93);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _flatButton = __webpack_require__(106);

	var _flatButton2 = _interopRequireDefault(_flatButton);

	var _overlay = __webpack_require__(115);

	var _overlay2 = _interopRequireDefault(_overlay);

	var _renderToLayer = __webpack_require__(110);

	var _renderToLayer2 = _interopRequireDefault(_renderToLayer);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _deprecatedPropType = __webpack_require__(116);

	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);

	var _reactAddonsTransitionGroup = __webpack_require__(97);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var TransitionItem = _react2.default.createClass({
	  displayName: 'TransitionItem',

	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      style: {},
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this.componentWillAppear(callback);
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    var spacing = this.state.muiTheme.rawTheme.spacing;

	    this.setState({
	      style: {
	        opacity: 1,
	        transform: 'translate3d(0, ' + spacing.desktopKeylineIncrement + 'px, 0)'
	      }
	    });

	    setTimeout(callback, 450); // matches transition duration
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    this.setState({
	      style: {
	        opacity: 0,
	        transform: 'translate3d(0, 0, 0)'
	      }
	    });

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450); // matches transition duration
	  },
	  render: function render() {
	    var _props = this.props;
	    var style = _props.style;
	    var children = _props.children;

	    var other = _objectWithoutProperties(_props, ['style', 'children']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(this.state.style, style) }),
	      children
	    );
	  }
	});

	var DialogInline = _react2.default.createClass({
	  displayName: 'DialogInline',

	  propTypes: {
	    actionFocus: _react2.default.PropTypes.string,
	    actions: _react2.default.PropTypes.node,
	    actionsContainerClassName: _react2.default.PropTypes.string,
	    actionsContainerStyle: _react2.default.PropTypes.object,
	    autoDetectWindowHeight: _react2.default.PropTypes.bool,
	    autoScrollBodyContent: _react2.default.PropTypes.bool,
	    bodyClassName: _react2.default.PropTypes.string,
	    bodyStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.string,
	    contentClassName: _react2.default.PropTypes.string,
	    contentStyle: _react2.default.PropTypes.object,
	    modal: _react2.default.PropTypes.bool,
	    onRequestClose: _react2.default.PropTypes.func,
	    open: _react2.default.PropTypes.bool.isRequired,
	    overlayClassName: _react2.default.PropTypes.string,
	    overlayStyle: _react2.default.PropTypes.object,
	    repositionOnUpdate: _react2.default.PropTypes.bool,
	    style: _react2.default.PropTypes.object,
	    title: _react2.default.PropTypes.node,
	    titleClassName: _react2.default.PropTypes.string,
	    titleStyle: _react2.default.PropTypes.object,
	    width: _react2.default.PropTypes.any
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_windowListenable2.default, _stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._positionDialog();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._positionDialog();
	  },

	  windowListeners: {
	    keyup: '_handleWindowKeyUp',
	    resize: '_handleResize'
	  },

	  getStyles: function getStyles() {
	    var _props2 = this.props;
	    var autoScrollBodyContent = _props2.autoScrollBodyContent;
	    var open = _props2.open;
	    var width = _props2.width;

	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;
	    var spacing = rawTheme.spacing;
	    var gutter = spacing.desktopGutter;

	    return {
	      root: {
	        position: 'fixed',
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        zIndex: muiTheme.zIndex.dialog,
	        top: 0,
	        left: open ? 0 : -10000,
	        width: '100%',
	        height: '100%',
	        transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	      },
	      content: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        transition: _transitions2.default.easeOut(),
	        position: 'relative',
	        width: width || '75%',
	        maxWidth: spacing.desktopKeylineIncrement * 12,
	        margin: '0 auto',
	        zIndex: muiTheme.zIndex.dialog
	      },
	      body: {
	        padding: spacing.desktopGutter,
	        overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
	        overflowX: 'hidden'
	      },
	      actionsContainer: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        padding: 8,
	        marginBottom: 8,
	        width: '100%',
	        textAlign: 'right'
	      },
	      paper: {
	        background: rawTheme.palette.canvasColor
	      },
	      overlay: {
	        zIndex: muiTheme.zIndex.dialogOverlay
	      },
	      title: {
	        margin: 0,
	        padding: gutter + 'px ' + gutter + 'px 0 ' + gutter + 'px',
	        color: rawTheme.palette.textColor,
	        fontSize: 24,
	        lineHeight: '32px',
	        fontWeight: 400
	      }
	    };
	  },
	  _getAction: function _getAction(actionJSON) {
	    var _this2 = this;

	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'using actionsJSON is deprecated on Dialog, please provide an array of\n buttons, or any other components instead. For more information please refer to documentations.') : undefined;
	    var props = {
	      secondary: true,
	      onClick: actionJSON.onClick,
	      onTouchTap: function onTouchTap() {
	        if (actionJSON.onTouchTap) {
	          actionJSON.onTouchTap.call(undefined);
	        }
	        if (!(actionJSON.onClick || actionJSON.onTouchTap)) {
	          _this2._requestClose(true);
	        }
	      },
	      label: actionJSON.text,
	      style: {
	        marginRight: 8
	      }
	    };

	    if (actionJSON.ref) {
	      props.ref = actionJSON.ref;
	      props.keyboardFocused = actionJSON.ref === this.props.actionFocus;
	    }
	    if (actionJSON.id) {
	      props.id = actionJSON.id;
	    }

	    return _react2.default.createElement(_flatButton2.default, props);
	  },
	  _getActionObjects: function _getActionObjects(actions) {
	    var _this3 = this;

	    var actionObjects = [];

	    // ------- Replace this selction with:
	    //
	    // React.Children.forEach(actions, action => {
	    //   if (React.isValidElement(action)) {
	    //     actionObjects.push(action);
	    //   }
	    // });
	    //
	    // Also the return element will not need a call to React.Children.toArray
	    //
	    // for the 0.15.0 release

	    if (actions) {

	      if (_react2.default.isValidElement(actions)) {
	        actionObjects.push(actions);
	      } else {
	        actions.forEach(function (action) {
	          if (action) {
	            if (!_react2.default.isValidElement(action)) {
	              action = _this3._getAction(action);
	            }
	            actionObjects.push(action);
	          }
	        });
	      }
	    }

	    // ------- End of section

	    return actionObjects;
	  },
	  _getActionsContainer: function _getActionsContainer(actions, styles, className) {
	    var actionObjects = this._getActionObjects(actions);

	    return actionObjects.length > 0 && _react2.default.createElement(
	      'div',
	      { className: className, style: this.prepareStyles(styles) },
	      _react2.default.Children.toArray(actionObjects)
	    );
	  },
	  _positionDialog: function _positionDialog() {
	    var _props3 = this.props;
	    var actions = _props3.actions;
	    var autoDetectWindowHeight = _props3.autoDetectWindowHeight;
	    var autoScrollBodyContent = _props3.autoScrollBodyContent;
	    var bodyStyle = _props3.bodyStyle;
	    var open = _props3.open;
	    var repositionOnUpdate = _props3.repositionOnUpdate;
	    var title = _props3.title;

	    if (!open) {
	      return;
	    }

	    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	    var container = _reactDom2.default.findDOMNode(this);
	    var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	    var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	    var minPaddingTop = 16;

	    //Reset the height in case the window was resized.
	    dialogWindow.style.height = '';
	    dialogContent.style.height = '';

	    var dialogWindowHeight = dialogWindow.offsetHeight;
	    var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	    if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

	    //Vertically center the dialog window, but make sure it doesn't
	    //transition to that position.
	    if (repositionOnUpdate || !container.style.paddingTop) {
	      container.style.paddingTop = paddingTop + 'px';
	    }

	    // Force a height if the dialog is taller than clientHeight
	    if (autoDetectWindowHeight || autoScrollBodyContent) {
	      var styles = this.getStyles();
	      styles.body = this.mergeStyles(styles.body, bodyStyle);
	      var maxDialogContentHeight = clientHeight - 2 * (styles.body.padding + 64);

	      if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

	      var hasActions = this._getActionObjects(actions).length > 0;
	      if (hasActions) maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;

	      dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	    }
	  },
	  _requestClose: function _requestClose(buttonClicked) {

	    if (!buttonClicked && this.props.modal) {
	      return;
	    }

	    if (this.props.onRequestClose) {
	      this.props.onRequestClose(!!buttonClicked);
	    }
	  },
	  _handleOverlayTouchTap: function _handleOverlayTouchTap() {
	    this._requestClose(false);
	  },
	  _handleWindowKeyUp: function _handleWindowKeyUp(event) {
	    if (event.keyCode === _keyCode2.default.ESC) {
	      this._requestClose(false);
	    }
	  },
	  _handleResize: function _handleResize() {
	    if (this.props.open) {
	      this._positionDialog();
	    }
	  },
	  render: function render() {
	    var _props4 = this.props;
	    var actions = _props4.actions;
	    var actionsContainerClassName = _props4.actionsContainerClassName;
	    var actionsContainerStyle = _props4.actionsContainerStyle;
	    var bodyClassName = _props4.bodyClassName;
	    var bodyStyle = _props4.bodyStyle;
	    var children = _props4.children;
	    var className = _props4.className;
	    var contentClassName = _props4.contentClassName;
	    var contentStyle = _props4.contentStyle;
	    var overlayClassName = _props4.overlayClassName;
	    var overlayStyle = _props4.overlayStyle;
	    var open = _props4.open;
	    var titleClassName = _props4.titleClassName;
	    var titleStyle = _props4.titleStyle;
	    var title = _props4.title;
	    var style = _props4.style;

	    var styles = this.getStyles();

	    styles.root = this.mergeStyles(styles.root, style);
	    styles.content = this.mergeStyles(styles.content, contentStyle);
	    styles.body = this.mergeStyles(styles.body, bodyStyle);
	    styles.actionsContainer = this.mergeStyles(styles.actionsContainer, actionsContainerStyle);
	    styles.overlay = this.mergeStyles(styles.overlay, overlayStyle);
	    styles.title = this.mergeStyles(styles.title, titleStyle);

	    var actionsContainer = this._getActionsContainer(actions, styles.actionsContainer, actionsContainerClassName);

	    var titleElement = typeof title === 'string' ? _react2.default.createElement(
	      'h3',
	      { className: titleClassName, style: this.prepareStyles(styles.title) },
	      title
	    ) : title;

	    return _react2.default.createElement(
	      'div',
	      { className: className, style: this.prepareStyles(styles.root) },
	      _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        {
	          component: 'div', ref: 'dialogWindow',
	          transitionAppear: true, transitionAppearTimeout: 450,
	          transitionEnter: true, transitionEnterTimeout: 450
	        },
	        open && _react2.default.createElement(
	          TransitionItem,
	          {
	            className: contentClassName,
	            style: styles.content
	          },
	          _react2.default.createElement(
	            _paper2.default,
	            {
	              style: styles.paper,
	              zDepth: 4
	            },
	            titleElement,
	            _react2.default.createElement(
	              'div',
	              {
	                ref: 'dialogContent',
	                className: bodyClassName,
	                style: this.prepareStyles(styles.body)
	              },
	              children
	            ),
	            actionsContainer
	          )
	        )
	      ),
	      _react2.default.createElement(_overlay2.default, {
	        show: open,
	        className: overlayClassName,
	        style: styles.overlay,
	        onTouchTap: this._handleOverlayTouchTap
	      })
	    );
	  }
	});

	var Dialog = _react2.default.createClass({
	  displayName: 'Dialog',

	  propTypes: {
	    /**
	     * The `ref` of the action to focus on when the `Dialog` is displayed.
	     */
	    actionFocus: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.string, 'Instead, use a custom `actions` property.'),

	    /**
	     * This prop can be either a JSON object containing the actions to render (This is **DEPRECATED**),
	     * a react elements, or an array of react elements.
	     */
	    actions: _react2.default.PropTypes.node,

	    /**
	     * The `className` to add to the actions container's root element.
	     */
	    actionsContainerClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the actions container's root element.
	     */
	    actionsContainerStyle: _react2.default.PropTypes.object,

	    /**
	     * If set to true, the height of the `Dialog` will be auto detected. A max height
	     * will be enforced so that the content does not extend beyond the viewport.
	     */
	    autoDetectWindowHeight: _react2.default.PropTypes.bool,

	    /**
	     * If set to true, the body content of the `Dialog` will be scrollable.
	     */
	    autoScrollBodyContent: _react2.default.PropTypes.bool,

	    /**
	     * The `className` to add to the content's root element under the title.
	     */
	    bodyClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the content's root element under the title.
	     */
	    bodyStyle: _react2.default.PropTypes.object,

	    /**
	     * The contents of the `Dialog`.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The `className` to add to the content container.
	     */
	    contentClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the content container.
	     */
	    contentStyle: _react2.default.PropTypes.object,

	    /**
	     * Force the user to use one of the actions in the `Dialog`.
	     * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	     */
	    modal: _react2.default.PropTypes.bool,

	    /**
	     * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	     *
	     * @param {bool} buttonClicked Determines whether a button click triggered this request.
	     */
	    onRequestClose: _react2.default.PropTypes.func,

	    /**
	     * Controls whether the Dialog is opened or not.
	     */
	    open: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	     */
	    overlayClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	     */
	    overlayStyle: _react2.default.PropTypes.object,

	    /**
	     * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	     */
	    repositionOnUpdate: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	     */
	    title: _react2.default.PropTypes.node,

	    /**
	     * The `className` to add to the title's root container element.
	     */
	    titleClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the title's root container element.
	     */
	    titleStyle: _react2.default.PropTypes.object,

	    /**
	     * Changes the width of the `Dialog`.
	     */
	    width: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.any, 'Use the contentStyle.')
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoDetectWindowHeight: true,
	      autoScrollBodyContent: false,
	      modal: false,
	      repositionOnUpdate: true
	    };
	  },
	  renderLayer: function renderLayer() {
	    return _react2.default.createElement(DialogInline, this.props);
	  },
	  render: function render() {
	    return _react2.default.createElement(_renderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	  }
	});

	exports.default = Dialog;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Overlay = _react2.default.createClass({
	  displayName: 'Overlay',

	  propTypes: {
	    autoLockScrolling: _react2.default.PropTypes.bool,
	    show: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    transitionEnabled: _react2.default.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoLockScrolling: true,
	      transitionEnabled: true,
	      style: {}
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._applyAutoLockScrolling(this.props);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.show !== nextProps.show) {
	      this._applyAutoLockScrolling(nextProps);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.show === true) {
	      this._allowScrolling();
	    }
	  },

	  _originalBodyOverflow: '',

	  setOpacity: function setOpacity(opacity) {
	    var overlay = _reactDom2.default.findDOMNode(this);
	    overlay.style.opacity = opacity;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        position: 'fixed',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: '-100%',
	        opacity: 0,
	        backgroundColor: _colors2.default.lightBlack,
	        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

	        // Two ways to promote overlay to its own render layer
	        willChange: 'opacity',
	        transform: 'translateZ(0)',

	        transition: this.props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ',' + _transitions2.default.easeOut('400ms', 'opacity')
	      },
	      rootWhenShown: {
	        left: '0',
	        opacity: 1,
	        transition: this.props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left') + ',' + _transitions2.default.easeOut('400ms', 'opacity')
	      }
	    };
	  },
	  _applyAutoLockScrolling: function _applyAutoLockScrolling(props) {
	    if (props.autoLockScrolling) {
	      if (props.show) {
	        this._preventScrolling();
	      } else {
	        this._allowScrolling();
	      }
	    }
	  },
	  _preventScrolling: function _preventScrolling() {
	    var body = document.getElementsByTagName('body')[0];
	    this._originalBodyOverflow = body.style.overflow;

	    body.style.overflow = 'hidden';
	  },
	  _allowScrolling: function _allowScrolling() {
	    var body = document.getElementsByTagName('body')[0];
	    body.style.overflow = this._originalBodyOverflow || '';
	  },
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['show', 'style']);

	    var styles = this.mergeStyles(this.getStyles().root, style, show && this.getStyles().rootWhenShown);

	    return _react2.default.createElement('div', _extends({}, other, { style: this.prepareStyles(styles) }));
	  }
	});

	exports.default = Overlay;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecated;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation) : undefined;
	    }

	    return propType(props, propName, componentName);
	  };
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _flatButton = __webpack_require__(106);

	var _flatButton2 = _interopRequireDefault(_flatButton);

	var _fontIcon = __webpack_require__(102);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _table = __webpack_require__(118);

	var _table2 = _interopRequireDefault(_table);

	var _tableHeaderColumn = __webpack_require__(119);

	var _tableHeaderColumn2 = _interopRequireDefault(_tableHeaderColumn);

	var _tableRow = __webpack_require__(120);

	var _tableRow2 = _interopRequireDefault(_tableRow);

	var _tableHeader = __webpack_require__(121);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	var _tableRowColumn = __webpack_require__(129);

	var _tableRowColumn2 = _interopRequireDefault(_tableRowColumn);

	var _tableBody = __webpack_require__(130);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cart = function (_React$Component) {
	  _inherits(Cart, _React$Component);

	  function Cart(props) {
	    _classCallCheck(this, Cart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cart).call(this, props));
	  }

	  _createClass(Cart, [{
	    key: 'handleClick',
	    value: function handleClick(item) {
	      this.props.removeFromCart(item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var cartList, cartBody;
	      if (this.props.cart.length == 0) {
	        cartBody = "Your shopping cart is empty. Select networks to add them to the cart, then press Begin.";
	      } else {
	        cartList = this.props.cart.map(function (item) {
	          return _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              null,
	              _react2.default.createElement(_flatButton2.default, {
	                label: item.name,
	                labelPosition: 'after',
	                onClick: _this2.handleClick.bind(_this2, item),
	                icon: _react2.default.createElement(
	                  _fontIcon2.default,
	                  { className: 'material-icons' },
	                  'highlight_off'
	                )
	              })
	            )
	          );
	        });
	      }
	      return _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          cartList
	        )
	      );
	    }
	  }]);

	  return Cart;
	}(_react2.default.Component);

	exports.default = Cart;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cart.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Table = _react2.default.createClass({
	  displayName: 'Table',

	  propTypes: {
	    /**
	     * Set to true to indicate that all rows should be selected.
	     */
	    allRowsSelected: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the body's table element.
	     */
	    bodyStyle: _react2.default.PropTypes.object,

	    /**
	     * Children passed to table.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * If true, the footer will appear fixed below the table.
	     * The default value is true.
	     */
	    fixedFooter: _react2.default.PropTypes.bool,

	    /**
	     * If true, the header will appear fixed above the table.
	     * The default value is true.
	     */
	    fixedHeader: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the footer's table element.
	     */
	    footerStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the header's table element.
	     */
	    headerStyle: _react2.default.PropTypes.object,

	    /**
	     * The height of the table.
	     */
	    height: _react2.default.PropTypes.string,

	    /**
	     * If true, multiple table rows can be selected.
	     * CTRL/CMD+Click and SHIFT+Click are valid actions.
	     * The default value is false.
	     */
	    multiSelectable: _react2.default.PropTypes.bool,

	    /**
	     * Called when a row cell is clicked.
	     * rowNumber is the row number and columnId is
	     * the column number or the column key.
	     */
	    onCellClick: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is hovered.
	     * rowNumber is the row number of the hovered row
	     * and columnId is the column number or the column key of the cell.
	     */
	    onCellHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is no longer hovered.
	     * rowNumber is the row number of the row and columnId
	     * is the column number or the column key of the cell.
	     */
	    onCellHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is hovered.
	     * rowNumber is the row number of the hovered row.
	     */
	    onRowHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is no longer hovered.
	     * rowNumber is the row number of the row that is no longer hovered.
	     */
	    onRowHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Called when a row is selected.
	     * selectedRows is an array of all row selections.
	     * IF all rows have been selected, the string "all"
	     * will be returned instead to indicate that all rows have been selected.
	     */
	    onRowSelection: _react2.default.PropTypes.func,

	    /**
	     * If true, table rows can be selected.
	     * If multiple row selection is desired, enable multiSelectable.
	     * The default value is true.
	     */
	    selectable: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the table's wrapper element.
	     */
	    wrapperStyle: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      allRowsSelected: false,
	      fixedFooter: true,
	      fixedHeader: true,
	      height: 'inherit',
	      multiSelectable: false,
	      selectable: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      allRowsSelected: this.props.allRowsSelected
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.table;
	  },
	  getStyles: function getStyles() {
	    var styles = {
	      root: {
	        backgroundColor: this.getTheme().backgroundColor,
	        padding: '0 ' + this.state.muiTheme.rawTheme.spacing.desktopGutter + 'px',
	        width: '100%',
	        borderCollapse: 'collapse',
	        borderSpacing: 0,
	        tableLayout: 'fixed',
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily
	      },
	      bodyTable: {
	        height: this.props.fixedHeader || this.props.fixedFooter ? this.props.height : 'auto',
	        overflowX: 'hidden',
	        overflowY: 'auto'
	      },
	      tableWrapper: {
	        height: this.props.fixedHeader || this.props.fixedFooter ? 'auto' : this.props.height,
	        overflow: 'auto'
	      }
	    };

	    return styles;
	  },
	  isScrollbarVisible: function isScrollbarVisible() {
	    var tableDivHeight = _reactDom2.default.findDOMNode(this.refs.tableDiv).clientHeight;
	    var tableBodyHeight = _reactDom2.default.findDOMNode(this.refs.tableBody).clientHeight;

	    return tableBodyHeight > tableDivHeight;
	  },
	  _createTableHeader: function _createTableHeader(base) {
	    return _react2.default.cloneElement(base, {
	      enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
	      onSelectAll: this._onSelectAll,
	      selectAllSelected: this.state.allRowsSelected
	    });
	  },
	  _createTableBody: function _createTableBody(base) {
	    return _react2.default.cloneElement(base, {
	      allRowsSelected: this.state.allRowsSelected,
	      multiSelectable: this.props.multiSelectable,
	      onCellClick: this._onCellClick,
	      onCellHover: this._onCellHover,
	      onCellHoverExit: this._onCellHoverExit,
	      onRowHover: this._onRowHover,
	      onRowHoverExit: this._onRowHoverExit,
	      onRowSelection: this._onRowSelection,
	      selectable: this.props.selectable,
	      style: this.mergeStyles({ height: this.props.height }, base.props.style)
	    });
	  },
	  _createTableFooter: function _createTableFooter(base) {
	    return base;
	  },
	  _onCellClick: function _onCellClick(rowNumber, columnNumber) {
	    if (this.props.onCellClick) this.props.onCellClick(rowNumber, columnNumber);
	  },
	  _onCellHover: function _onCellHover(rowNumber, columnNumber) {
	    if (this.props.onCellHover) this.props.onCellHover(rowNumber, columnNumber);
	  },
	  _onCellHoverExit: function _onCellHoverExit(rowNumber, columnNumber) {
	    if (this.props.onCellHoverExit) this.props.onCellHoverExit(rowNumber, columnNumber);
	  },
	  _onRowHover: function _onRowHover(rowNumber) {
	    if (this.props.onRowHover) this.props.onRowHover(rowNumber);
	  },
	  _onRowHoverExit: function _onRowHoverExit(rowNumber) {
	    if (this.props.onRowHoverExit) this.props.onRowHoverExit(rowNumber);
	  },
	  _onRowSelection: function _onRowSelection(selectedRows) {
	    if (this.state.allRowsSelected) this.setState({ allRowsSelected: false });
	    if (this.props.onRowSelection) this.props.onRowSelection(selectedRows);
	  },
	  _onSelectAll: function _onSelectAll() {
	    if (this.props.onRowSelection) {
	      if (!this.state.allRowsSelected) {
	        this.props.onRowSelection('all');
	      } else {
	        this.props.onRowSelection('none');
	      }
	    }

	    this.setState({ allRowsSelected: !this.state.allRowsSelected });
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var fixedFooter = _props.fixedFooter;
	    var fixedHeader = _props.fixedHeader;
	    var style = _props.style;
	    var wrapperStyle = _props.wrapperStyle;
	    var headerStyle = _props.headerStyle;
	    var bodyStyle = _props.bodyStyle;
	    var footerStyle = _props.footerStyle;

	    var other = _objectWithoutProperties(_props, ['children', 'className', 'fixedFooter', 'fixedHeader', 'style', 'wrapperStyle', 'headerStyle', 'bodyStyle', 'footerStyle']);

	    var styles = this.getStyles();

	    var tHead = undefined;
	    var tFoot = undefined;
	    var tBody = undefined;

	    _react2.default.Children.forEach(children, function (child) {
	      if (!_react2.default.isValidElement(child)) return;

	      var displayName = child.type.displayName;
	      if (displayName === 'TableBody') {
	        tBody = _this._createTableBody(child);
	      } else if (displayName === 'TableHeader') {
	        tHead = _this._createTableHeader(child);
	      } else if (displayName === 'TableFooter') {
	        tFoot = _this._createTableFooter(child);
	      }
	    });

	    // If we could not find a table-header and a table-body, do not attempt to display anything.
	    if (!tBody && !tHead) return null;

	    var mergedTableStyle = this.mergeStyles(styles.root, style);
	    var headerTable = undefined;
	    var footerTable = undefined;
	    var inlineHeader = undefined;
	    var inlineFooter = undefined;

	    if (fixedHeader) {
	      headerTable = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(headerStyle) },
	        _react2.default.createElement(
	          'table',
	          { className: className, style: mergedTableStyle },
	          tHead
	        )
	      );
	    } else {
	      inlineHeader = tHead;
	    }

	    if (tFoot !== undefined) {
	      if (fixedFooter) {
	        footerTable = _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(footerStyle) },
	          _react2.default.createElement(
	            'table',
	            { className: className, style: this.prepareStyles(mergedTableStyle) },
	            tFoot
	          )
	        );
	      } else {
	        inlineFooter = tFoot;
	      }
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(styles.tableWrapper, wrapperStyle) },
	      headerTable,
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.bodyTable, bodyStyle), ref: 'tableDiv' },
	        _react2.default.createElement(
	          'table',
	          { className: className, style: mergedTableStyle, ref: 'tableBody' },
	          inlineHeader,
	          inlineFooter,
	          tBody
	        )
	      ),
	      footerTable
	    );
	  }
	});

	exports.default = Table;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _tooltip = __webpack_require__(103);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var TableHeaderColumn = _react2.default.createClass({
	  displayName: 'TableHeaderColumn',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Number to identify the header row. This property
	     * is automatically populated when used with TableHeader.
	     */
	    columnNumber: _react2.default.PropTypes.number,

	    /**
	     * Key prop for table header column.
	     */
	    key: _react2.default.PropTypes.string,

	    /**
	     * Callback function for click event.
	     */
	    onClick: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The string to supply to the tooltip. If not
	     * string is supplied no tooltip will be shown.
	     */
	    tooltip: _react2.default.PropTypes.string,

	    /**
	     * Additional styling that can be applied to the tooltip.
	     */
	    tooltipStyle: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      hovered: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.tableHeaderColumn;
	  },
	  getStyles: function getStyles() {
	    var theme = this.getTheme();
	    var styles = {
	      root: {
	        fontWeight: 'normal',
	        fontSize: 12,
	        paddingLeft: theme.spacing,
	        paddingRight: theme.spacing,
	        height: theme.height,
	        textAlign: 'left',
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        color: this.getTheme().textColor,
	        position: 'relative'
	      },
	      tooltip: {
	        boxSizing: 'border-box',
	        marginTop: theme.height / 2
	      }
	    };

	    return styles;
	  },
	  _onMouseEnter: function _onMouseEnter() {
	    if (this.props.tooltip !== undefined) this.setState({ hovered: true });
	  },
	  _onMouseLeave: function _onMouseLeave() {
	    if (this.props.tooltip !== undefined) this.setState({ hovered: false });
	  },
	  _onClick: function _onClick(e) {
	    if (this.props.onClick) this.props.onClick(e, this.props.columnNumber);
	  },
	  render: function render() {
	    var styles = this.getStyles();
	    var handlers = {
	      onMouseEnter: this._onMouseEnter,
	      onMouseLeave: this._onMouseLeave,
	      onClick: this._onClick
	    };
	    var _props = this.props;
	    var className = _props.className;
	    var columnNumber = _props.columnNumber;
	    var onClick = _props.onClick;
	    var style = _props.style;
	    var tooltip = _props.tooltip;
	    var tooltipStyle = _props.tooltipStyle;

	    var other = _objectWithoutProperties(_props, ['className', 'columnNumber', 'onClick', 'style', 'tooltip', 'tooltipStyle']);

	    if (this.props.tooltip !== undefined) {
	      tooltip = _react2.default.createElement(_tooltip2.default, {
	        label: this.props.tooltip,
	        show: this.state.hovered,
	        style: this.mergeStyles(styles.tooltip, tooltipStyle)
	      });
	    }

	    return _react2.default.createElement(
	      'th',
	      _extends({
	        key: this.props.key,
	        className: className,
	        style: this.prepareStyles(styles.root, style)
	      }, handlers, other),
	      tooltip,
	      this.props.children
	    );
	  }
	});

	exports.default = TableHeaderColumn;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var TableRow = _react2.default.createClass({
	  displayName: 'TableRow',

	  propTypes: {
	    /**
	     * Children passed to table row.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * If true, row border will be displayed for the row.
	     * If false, no border will be drawn.
	     */
	    displayBorder: _react2.default.PropTypes.bool,

	    /**
	     * Controls whether or not the row reponseds to hover events.
	     */
	    hoverable: _react2.default.PropTypes.bool,

	    /**
	     * Controls whether or not the row should be rendered as being
	     * hovered. This property is evaluated in addition to this.state.hovered
	     * and can be used to synchronize the hovered state with some other
	     * external events.
	     */
	    hovered: _react2.default.PropTypes.bool,

	    /**
	     * Called when a row cell is clicked.
	     * rowNumber is the row number and columnId is
	     * the column number or the column key.
	     */
	    onCellClick: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is hovered.
	     * rowNumber is the row number of the hovered row
	     * and columnId is the column number or the column key of the cell.
	     */
	    onCellHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is no longer hovered.
	     * rowNumber is the row number of the row and columnId
	     * is the column number or the column key of the cell.
	     */
	    onCellHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Called when row is clicked.
	     */
	    onRowClick: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is hovered.
	     * rowNumber is the row number of the hovered row.
	     */
	    onRowHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is no longer hovered.
	     * rowNumber is the row number of the row that is no longer hovered.
	     */
	    onRowHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Number to identify the row. This property is
	     * automatically populated when used with the TableBody component.
	     */
	    rowNumber: _react2.default.PropTypes.number,

	    /**
	     * If true, table rows can be selected. If multiple row
	     * selection is desired, enable multiSelectable.
	     * The default value is true.
	     */
	    selectable: _react2.default.PropTypes.bool,

	    /**
	     * Indicates that a particular row is selected.
	     * This property can be used to programmatically select rows.
	     */
	    selected: _react2.default.PropTypes.bool,

	    /**
	     * Indicates whether or not the row is striped.
	     */
	    striped: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      displayBorder: true,
	      hoverable: false,
	      hovered: false,
	      selectable: true,
	      selected: false,
	      striped: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      hovered: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.tableRow;
	  },
	  getStyles: function getStyles() {
	    var theme = this.getTheme();
	    var cellBgColor = 'inherit';
	    if (this.props.hovered || this.state.hovered) {
	      cellBgColor = theme.hoverColor;
	    } else if (this.props.selected) {
	      cellBgColor = theme.selectedColor;
	    } else if (this.props.striped) {
	      cellBgColor = theme.stripeColor;
	    }

	    var styles = {
	      root: {
	        borderBottom: '1px solid ' + theme.borderColor,
	        color: theme.textColor,
	        height: theme.height
	      },
	      cell: {
	        backgroundColor: cellBgColor
	      }
	    };

	    if (!this.props.displayBorder) {
	      styles.root.borderBottom = '';
	    }

	    return styles;
	  },
	  _createColumns: function _createColumns() {
	    var _this = this;

	    var columnNumber = 1;
	    return _react2.default.Children.map(this.props.children, function (child) {
	      if (_react2.default.isValidElement(child)) {
	        return _this._createColumn(child, columnNumber++);
	      }
	    });
	  },
	  _createColumn: function _createColumn(child, columnNumber) {
	    var key = this.props.rowNumber + '-' + columnNumber;
	    var styles = this.getStyles();
	    var handlers = {
	      onClick: this._onCellClick,
	      onHover: this._onCellHover,
	      onHoverExit: this._onCellHoverExit
	    };

	    return _react2.default.cloneElement(child, _extends({
	      columnNumber: columnNumber,
	      hoverable: this.props.hoverable,
	      key: child.props.key || key,
	      style: this.mergeStyles(styles.cell, child.props.style)
	    }, handlers));
	  },
	  _onRowClick: function _onRowClick(e) {
	    if (this.props.selectable && this.props.onRowClick) this.props.onRowClick(e, this.props.rowNumber);
	  },
	  _onRowHover: function _onRowHover(e) {
	    if (this.props.onRowHover) this.props.onRowHover(e, this.props.rowNumber);
	  },
	  _onRowHoverExit: function _onRowHoverExit(e) {
	    if (this.props.onRowHoverExit) this.props.onRowHoverExit(e, this.props.rowNumber);
	  },
	  _onCellClick: function _onCellClick(e, columnIndex) {
	    if (this.props.selectable && this.props.onCellClick) this.props.onCellClick(e, this.props.rowNumber, columnIndex);
	    e.ctrlKey = true;
	    this._onRowClick(e);
	  },
	  _onCellHover: function _onCellHover(e, columnIndex) {
	    if (this.props.hoverable) {
	      this.setState({ hovered: true });
	      if (this.props.onCellHover) this.props.onCellHover(e, this.props.rowNumber, columnIndex);
	      this._onRowHover(e);
	    }
	  },
	  _onCellHoverExit: function _onCellHoverExit(e, columnIndex) {
	    if (this.props.hoverable) {
	      this.setState({ hovered: false });
	      if (this.props.onCellHoverExit) this.props.onCellHoverExit(e, this.props.rowNumber, columnIndex);
	      this._onRowHoverExit(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var displayBorder = _props.displayBorder;
	    var hoverable = _props.hoverable;
	    var onCellClick = _props.onCellClick;
	    var onCellHover = _props.onCellHover;
	    var onCellHoverExit = _props.onCellHoverExit;
	    var onRowClick = _props.onRowClick;
	    var onRowHover = _props.onRowHover;
	    var onRowHoverExit = _props.onRowHoverExit;
	    var rowNumber = _props.rowNumber;
	    var selectable = _props.selectable;
	    var selected = _props.selected;
	    var striped = _props.striped;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'displayBorder', 'hoverable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowClick', 'onRowHover', 'onRowHoverExit', 'rowNumber', 'selectable', 'selected', 'striped', 'style']);

	    var rowColumns = this._createColumns();

	    return _react2.default.createElement(
	      'tr',
	      _extends({
	        className: className,
	        style: this.prepareStyles(this.getStyles().root, style)
	      }, other),
	      rowColumns
	    );
	  }
	});

	exports.default = TableRow;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _checkbox = __webpack_require__(122);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _tableHeaderColumn = __webpack_require__(119);

	var _tableHeaderColumn2 = _interopRequireDefault(_tableHeaderColumn);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var TableHeader = _react2.default.createClass({
	  displayName: 'TableHeader',

	  propTypes: {
	    /**
	     * Controls whether or not header rows should be
	     * adjusted for a checkbox column. If the select all
	     * checkbox is true, this property will not influence
	     * the number of columns. This is mainly useful for
	     * "super header" rows so that the checkbox column
	     * does not create an offset that needs to be accounted
	     * for manually.
	     */
	    adjustForCheckbox: _react2.default.PropTypes.bool,

	    /**
	     * Children passed to table header.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Controls whether or not the select all checkbox is displayed.
	     */
	    displaySelectAll: _react2.default.PropTypes.bool,

	    /**
	     * If set to true, the select all button will be interactable.
	     * If set to false, the button will not be interactable.
	     * To hide the checkbox, set displaySelectAll to false.
	     */
	    enableSelectAll: _react2.default.PropTypes.bool,

	    /**
	     * Callback when select all has been checked.
	     */
	    onSelectAll: _react2.default.PropTypes.func,

	    /**
	     * True when select all has been checked.
	     */
	    selectAllSelected: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      adjustForCheckbox: true,
	      displaySelectAll: true,
	      enableSelectAll: true,
	      selectAllSelected: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.tableHeader;
	  },
	  getStyles: function getStyles() {
	    var styles = {
	      root: {
	        borderBottom: '1px solid ' + this.getTheme().borderColor
	      }
	    };

	    return styles;
	  },
	  _createSuperHeaderRows: function _createSuperHeaderRows() {
	    var numChildren = _react2.default.Children.count(this.props.children);
	    if (numChildren === 1) return undefined;

	    var superHeaders = [];
	    for (var index = 0; index < numChildren - 1; index++) {
	      var child = this.props.children[index];

	      if (!_react2.default.isValidElement(child)) continue;

	      var props = {
	        key: 'sh' + index,
	        rowNumber: index
	      };
	      superHeaders.push(this._createSuperHeaderRow(child, props));
	    }

	    if (superHeaders.length) return superHeaders;
	  },
	  _createSuperHeaderRow: function _createSuperHeaderRow(child, props) {
	    var children = [];
	    if (this.props.adjustForCheckbox) {
	      children.push(this._getCheckboxPlaceholder(props));
	    }
	    _react2.default.Children.forEach(child.props.children, function (child) {
	      children.push(child);
	    });

	    return _react2.default.cloneElement(child, props, children);
	  },
	  _createBaseHeaderRow: function _createBaseHeaderRow() {
	    var numChildren = _react2.default.Children.count(this.props.children);
	    var child = numChildren === 1 ? this.props.children : this.props.children[numChildren - 1];
	    var props = {
	      key: 'h' + numChildren,
	      rowNumber: numChildren
	    };

	    var children = [this._getSelectAllCheckboxColumn(props)];
	    _react2.default.Children.forEach(child.props.children, function (child) {
	      children.push(child);
	    });

	    return _react2.default.cloneElement(child, props, children);
	  },
	  _getCheckboxPlaceholder: function _getCheckboxPlaceholder(props) {
	    if (!this.props.adjustForCheckbox) return null;

	    var key = 'hpcb' + props.rowNumber;
	    return _react2.default.createElement(_tableHeaderColumn2.default, { key: key, style: { width: 24 } });
	  },
	  _getSelectAllCheckboxColumn: function _getSelectAllCheckboxColumn(props) {
	    if (!this.props.displaySelectAll) return this._getCheckboxPlaceholder(props);

	    var checkbox = _react2.default.createElement(_checkbox2.default, {
	      key: 'selectallcb',
	      name: 'selectallcb',
	      value: 'selected',
	      disabled: !this.props.enableSelectAll,
	      checked: this.props.selectAllSelected,
	      onCheck: this._onSelectAll
	    });

	    var key = 'hpcb' + props.rowNumber;
	    return _react2.default.createElement(
	      _tableHeaderColumn2.default,
	      { key: key, style: { width: 24 } },
	      checkbox
	    );
	  },
	  _onSelectAll: function _onSelectAll(e, checked) {
	    if (this.props.onSelectAll) this.props.onSelectAll(checked);
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'style']);

	    var superHeaderRows = this._createSuperHeaderRows();
	    var baseHeaderRow = this._createBaseHeaderRow();

	    return _react2.default.createElement(
	      'thead',
	      { className: className, style: this.prepareStyles(this.getStyles().root, style) },
	      superHeaderRows,
	      baseHeaderRow
	    );
	  }
	});

	exports.default = TableHeader;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _enhancedSwitch = __webpack_require__(123);

	var _enhancedSwitch2 = _interopRequireDefault(_enhancedSwitch);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _checkBoxOutlineBlank = __webpack_require__(127);

	var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

	var _checkBox = __webpack_require__(128);

	var _checkBox2 = _interopRequireDefault(_checkBox);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Checkbox = _react2.default.createClass({
	  displayName: 'Checkbox',

	  propTypes: {
	    /**
	     * Checkbox is checked if true.
	     */
	    checked: _react2.default.PropTypes.bool,

	    /**
	     * The SvgIcon to use for the checked state.
	     * This is useful to create icon toggles.
	     */
	    checkedIcon: _react2.default.PropTypes.element,

	    /**
	     * The default state of our checkbox component.
	     */
	    defaultChecked: _react2.default.PropTypes.bool,

	    /**
	     * Disabled if true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Overrides the inline-styles of the icon element.
	     */
	    iconStyle: _react2.default.PropTypes.object,

	    /**
	     * Where the label will be placed next to the checkbox.
	     */
	    labelPosition: _react2.default.PropTypes.oneOf(['left', 'right']),

	    /**
	     * Overrides the inline-styles of the Checkbox element label.
	     */
	    labelStyle: _react2.default.PropTypes.object,

	    /**
	     * Callback function that is fired when the checkbox is checked.
	     */
	    onCheck: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The SvgIcon to use for the unchecked state.
	     * This is useful to create icon toggles.
	     */
	    unCheckedIcon: _react2.default.PropTypes.element,

	    /**
	     * ValueLink for when using controlled checkbox.
	     */
	    valueLink: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultChecked: false,
	      labelPosition: 'right',
	      disabled: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      switched: this.props.checked || this.props.defaultChecked || this.props.valueLink && this.props.valueLink.value || false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme,
	      switched: this.props.checked !== nextProps.checked ? nextProps.checked : this.state.switched
	    });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.checkbox;
	  },
	  getStyles: function getStyles() {
	    var checkboxSize = 24;
	    var styles = {
	      icon: {
	        height: checkboxSize,
	        width: checkboxSize
	      },
	      check: {
	        position: 'absolute',
	        opacity: 0,
	        transform: 'scale(0)',
	        transitionOrigin: '50% 50%',
	        transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
	        fill: this.getTheme().checkedColor
	      },
	      box: {
	        position: 'absolute',
	        opacity: 1,
	        fill: this.getTheme().boxColor,
	        transition: _transitions2.default.easeOut('2s', null, '200ms')
	      },
	      checkWhenSwitched: {
	        opacity: 1,
	        transform: 'scale(1)',
	        transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
	      },
	      boxWhenSwitched: {
	        transition: _transitions2.default.easeOut('100ms', null, '0ms'),
	        fill: this.getTheme().checkedColor
	      },
	      checkWhenDisabled: {
	        fill: this.getTheme().disabledColor
	      },
	      boxWhenDisabled: {
	        fill: this.getTheme().disabledColor
	      },
	      label: {
	        color: this.props.disabled ? this.getTheme().labelDisabledColor : this.getTheme().labelColor
	      }
	    };

	    return styles;
	  },
	  isChecked: function isChecked() {
	    return this.refs.enhancedSwitch.isSwitched();
	  },
	  setChecked: function setChecked(newCheckedValue) {
	    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
	  },
	  _handleCheck: function _handleCheck(e, isInputChecked) {
	    if (this.props.onCheck) this.props.onCheck(e, isInputChecked);
	  },
	  _handleStateChange: function _handleStateChange(newSwitched) {
	    this.setState({ switched: newSwitched });
	  },
	  render: function render() {
	    var _props = this.props;
	    var iconStyle = _props.iconStyle;
	    var onCheck = _props.onCheck;
	    var checkedIcon = _props.checkedIcon;
	    var unCheckedIcon = _props.unCheckedIcon;

	    var other = _objectWithoutProperties(_props, ['iconStyle', 'onCheck', 'checkedIcon', 'unCheckedIcon']);

	    var styles = this.getStyles();
	    var boxStyles = this.mergeStyles(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
	    var checkStyles = this.mergeStyles(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

	    var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
	      style: this.mergeStyles(checkStyles, checkedIcon.props.style)
	    }) : _react2.default.createElement(_checkBox2.default, {
	      style: checkStyles
	    });

	    var unCheckedElement = unCheckedIcon ? _react2.default.cloneElement(unCheckedIcon, {
	      style: this.mergeStyles(boxStyles, unCheckedIcon.props.style)
	    }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
	      style: boxStyles
	    });

	    var checkboxElement = _react2.default.createElement(
	      'div',
	      null,
	      unCheckedElement,
	      checkedElement
	    );

	    var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
	    var mergedIconStyle = this.mergeStyles(styles.icon, iconStyle);

	    var labelStyle = this.mergeStyles(styles.label, this.props.labelStyle);

	    var enhancedSwitchProps = {
	      ref: 'enhancedSwitch',
	      inputType: 'checkbox',
	      switched: this.state.switched,
	      switchElement: checkboxElement,
	      rippleColor: rippleColor,
	      iconStyle: mergedIconStyle,
	      onSwitch: this._handleCheck,
	      labelStyle: labelStyle,
	      onParentShouldUpdate: this._handleStateChange,
	      defaultSwitched: this.props.defaultChecked,
	      labelPosition: this.props.labelPosition
	    };

	    return _react2.default.createElement(_enhancedSwitch2.default, _extends({}, other, enhancedSwitchProps));
	  }
	});

	exports.default = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _keyCode = __webpack_require__(93);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _uniqueId = __webpack_require__(124);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _windowListenable = __webpack_require__(109);

	var _windowListenable2 = _interopRequireDefault(_windowListenable);

	var _clearfix = __webpack_require__(125);

	var _clearfix2 = _interopRequireDefault(_clearfix);

	var _focusRipple = __webpack_require__(94);

	var _focusRipple2 = _interopRequireDefault(_focusRipple);

	var _touchRipple = __webpack_require__(99);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var EnhancedSwitch = _react2.default.createClass({
	  displayName: 'EnhancedSwitch',

	  propTypes: {
	    checked: _react2.default.PropTypes.bool,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    defaultSwitched: _react2.default.PropTypes.bool,
	    disableFocusRipple: _react2.default.PropTypes.bool,
	    disableTouchRipple: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    iconStyle: _react2.default.PropTypes.object,
	    id: _react2.default.PropTypes.string,
	    inputType: _react2.default.PropTypes.string.isRequired,
	    label: _react2.default.PropTypes.node,
	    labelPosition: _react2.default.PropTypes.oneOf(['left', 'right']),
	    labelStyle: _react2.default.PropTypes.object,
	    name: _react2.default.PropTypes.string,
	    onBlur: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    onMouseDown: _react2.default.PropTypes.func,
	    onMouseLeave: _react2.default.PropTypes.func,
	    onMouseUp: _react2.default.PropTypes.func,
	    onParentShouldUpdate: _react2.default.PropTypes.func.isRequired,
	    onSwitch: _react2.default.PropTypes.func,
	    onTouchEnd: _react2.default.PropTypes.func,
	    onTouchStart: _react2.default.PropTypes.func,
	    required: _react2.default.PropTypes.bool,
	    rippleColor: _react2.default.PropTypes.string,
	    rippleStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    switchElement: _react2.default.PropTypes.element.isRequired,
	    switched: _react2.default.PropTypes.bool.isRequired,
	    thumbStyle: _react2.default.PropTypes.object,
	    trackStyle: _react2.default.PropTypes.object,
	    value: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_windowListenable2.default, _stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: false,
	      parentWidth: 100,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var inputNode = _reactDom2.default.findDOMNode(this.refs.checkbox);
	    if (!this.props.switched || inputNode.checked !== this.props.switched) {
	      this.props.onParentShouldUpdate(inputNode.checked);
	    }

	    window.addEventListener('resize', this._handleResize);

	    this._handleResize();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var hasCheckedLinkProp = nextProps.hasOwnProperty('checkedLink');
	    var hasCheckedProp = nextProps.hasOwnProperty('checked');
	    var hasToggledProp = nextProps.hasOwnProperty('toggled');
	    var hasNewDefaultProp = nextProps.hasOwnProperty('defaultSwitched') && nextProps.defaultSwitched !== this.props.defaultSwitched;
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (hasCheckedProp) {
	      newState.switched = nextProps.checked;
	    } else if (hasToggledProp) {
	      newState.switched = nextProps.toggled;
	    } else if (hasCheckedLinkProp) {
	      newState.switched = nextProps.checkedLink.value;
	    } else if (hasNewDefaultProp) {
	      newState.switched = nextProps.defaultSwitched;
	    }

	    if (newState.switched !== undefined && newState.switched !== this.props.switched) {
	      this.props.onParentShouldUpdate(newState.switched);
	    }

	    this.setState(newState);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('resize', this._handleResize);
	  },

	  windowListeners: {
	    keydown: '_handleWindowKeydown',
	    keyup: '_handleWindowKeyup'
	  },

	  getEvenWidth: function getEvenWidth() {
	    return parseInt(window.getComputedStyle(_reactDom2.default.findDOMNode(this.refs.root)).getPropertyValue('width'), 10);
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.rawTheme.palette;
	  },
	  getStyles: function getStyles() {
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var switchWidth = 60 - spacing.desktopGutterLess;
	    var labelWidth = 'calc(100% - 60px)';
	    var styles = {
	      root: {
	        position: 'relative',
	        cursor: this.props.disabled ? 'default' : 'pointer',
	        overflow: 'visible',
	        display: 'table',
	        height: 'auto',
	        width: '100%'
	      },
	      input: {
	        position: 'absolute',
	        cursor: this.props.disabled ? 'default' : 'pointer',
	        pointerEvents: 'all',
	        opacity: 0,
	        width: '100%',
	        height: '100%',
	        zIndex: 2,
	        left: 0,
	        boxSizing: 'border-box',
	        padding: 0,
	        margin: 0
	      },
	      controls: {
	        width: '100%',
	        height: '100%'
	      },
	      label: {
	        float: 'left',
	        position: 'relative',
	        display: 'block',
	        width: labelWidth,
	        lineHeight: '24px',
	        color: this.getTheme().textColor,
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily
	      },
	      wrap: {
	        transition: _transitions2.default.easeOut(),
	        float: 'left',
	        position: 'relative',
	        display: 'block',
	        width: switchWidth,
	        marginRight: this.props.labelPosition === 'right' ? spacing.desktopGutterLess : 0,
	        marginLeft: this.props.labelPosition === 'left' ? spacing.desktopGutterLess : 0
	      },
	      ripple: {
	        height: '200%',
	        width: '200%',
	        top: -12,
	        left: -12
	      }
	    };

	    return styles;
	  },
	  isSwitched: function isSwitched() {
	    return _reactDom2.default.findDOMNode(this.refs.checkbox).checked;
	  },

	  // no callback here because there is no event
	  setSwitched: function setSwitched(newSwitchedValue) {
	    if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
	      this.props.onParentShouldUpdate(newSwitchedValue);
	      _reactDom2.default.findDOMNode(this.refs.checkbox).checked = newSwitchedValue;
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Cannot call set method while checked is defined as a property.') : undefined;
	    }
	  },
	  getValue: function getValue() {
	    return _reactDom2.default.findDOMNode(this.refs.checkbox).value;
	  },
	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },
	  _handleChange: function _handleChange(e) {
	    this._tabPressed = false;
	    this.setState({
	      isKeyboardFocused: false
	    });

	    var isInputChecked = _reactDom2.default.findDOMNode(this.refs.checkbox).checked;

	    if (!this.props.hasOwnProperty('checked')) {
	      this.props.onParentShouldUpdate(isInputChecked);
	    }
	    if (this.props.onSwitch) {
	      this.props.onSwitch(e, isInputChecked);
	    }
	  },

	  // Checkbox inputs only use SPACE to change their state. Using ENTER will
	  // update the ui but not the input.
	  _handleWindowKeydown: function _handleWindowKeydown(e) {
	    if (e.keyCode === _keyCode2.default.TAB) {
	      this._tabPressed = true;
	    }
	    if (e.keyCode === _keyCode2.default.SPACE && this.state.isKeyboardFocused) {
	      this._handleChange(e);
	    }
	  },
	  _handleWindowKeyup: function _handleWindowKeyup(e) {
	    if (e.keyCode === _keyCode2.default.SPACE && this.state.isKeyboardFocused) {
	      this._handleChange(e);
	    }
	  },

	  /**
	   * Because both the ripples and the checkbox input cannot share pointer
	   * events, the checkbox input takes control of pointer events and calls
	   * ripple animations manually.
	   */
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.refs.touchRipple.start(e);
	    }
	  },
	  _handleMouseUp: function _handleMouseUp() {
	    this.refs.touchRipple.end();
	  },
	  _handleMouseLeave: function _handleMouseLeave() {
	    this.refs.touchRipple.end();
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.refs.touchRipple.start(e);
	  },
	  _handleTouchEnd: function _handleTouchEnd() {
	    this.refs.touchRipple.end();
	  },
	  _handleBlur: function _handleBlur(e) {
	    this.setState({
	      isKeyboardFocused: false
	    });

	    if (this.props.onBlur) {
	      this.props.onBlur(e);
	    }
	  },
	  _handleFocus: function _handleFocus(e) {
	    var _this = this;

	    //setTimeout is needed becuase the focus event fires first
	    //Wait so that we can capture if this was a keyboard focus
	    //or touch focus
	    setTimeout(function () {
	      if (_this._tabPressed) {
	        _this.setState({
	          isKeyboardFocused: true
	        });
	      }
	    }, 150);

	    if (this.props.onFocus) {
	      this.props.onFocus(e);
	    }
	  },
	  _handleResize: function _handleResize() {
	    this.setState({ parentWidth: this.getEvenWidth() });
	  },
	  render: function render() {
	    var _props = this.props;
	    var name = _props.name;
	    var value = _props.value;
	    var label = _props.label;
	    var onSwitch = _props.onSwitch;
	    var defaultSwitched = _props.defaultSwitched;
	    var onBlur = _props.onBlur;
	    var onFocus = _props.onFocus;
	    var onMouseUp = _props.onMouseUp;
	    var onMouseDown = _props.onMouseDown;
	    var onMouseLeave = _props.onMouseLeave;
	    var onTouchStart = _props.onTouchStart;
	    var onTouchEnd = _props.onTouchEnd;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var className = _props.className;

	    var other = _objectWithoutProperties(_props, ['name', 'value', 'label', 'onSwitch', 'defaultSwitched', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'disableTouchRipple', 'disableFocusRipple', 'className']);

	    var styles = this.getStyles();
	    var wrapStyles = this.mergeStyles(styles.wrap, this.props.iconStyle);
	    var rippleStyle = this.mergeStyles(styles.ripple, this.props.rippleStyle);
	    var rippleColor = this.props.hasOwnProperty('rippleColor') ? this.props.rippleColor : this.getTheme().primary1Color;

	    if (this.props.thumbStyle) {
	      wrapStyles.marginLeft /= 2;
	      wrapStyles.marginRight /= 2;
	    }

	    var inputId = this.props.id || _uniqueId2.default.generate();

	    var labelStyle = this.mergeStyles(styles.label, this.props.labelStyle);
	    var labelElement = this.props.label ? _react2.default.createElement(
	      'label',
	      { style: this.prepareStyles(labelStyle), htmlFor: inputId },
	      this.props.label
	    ) : null;

	    var inputProps = {
	      ref: 'checkbox',
	      type: this.props.inputType,
	      style: this.prepareStyles(styles.input),
	      name: this.props.name,
	      value: this.props.value,
	      defaultChecked: this.props.defaultSwitched,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus
	    };

	    var hideTouchRipple = this.props.disabled || disableTouchRipple;

	    if (!hideTouchRipple) {
	      inputProps.onMouseUp = this._handleMouseUp;
	      inputProps.onMouseDown = this._handleMouseDown;
	      inputProps.onMouseLeave = this._handleMouseLeave;
	      inputProps.onTouchStart = this._handleTouchStart;
	      inputProps.onTouchEnd = this._handleTouchEnd;
	    }

	    if (!this.props.hasOwnProperty('checkedLink')) {
	      inputProps.onChange = this._handleChange;
	    }

	    var inputElement = _react2.default.createElement('input', _extends({}, other, inputProps));

	    var touchRipple = _react2.default.createElement(_touchRipple2.default, {
	      ref: 'touchRipple',
	      key: 'touchRipple',
	      style: rippleStyle,
	      color: rippleColor,
	      muiTheme: this.state.muiTheme,
	      centerRipple: true
	    });

	    var focusRipple = _react2.default.createElement(_focusRipple2.default, {
	      key: 'focusRipple',
	      innerStyle: rippleStyle,
	      color: rippleColor,
	      muiTheme: this.state.muiTheme,
	      show: this.state.isKeyboardFocused
	    });

	    var ripples = [hideTouchRipple ? null : touchRipple, this.props.disabled || disableFocusRipple ? null : focusRipple];

	    // If toggle component (indicated by whether the style includes thumb) manually lay out
	    // elements in order to nest ripple elements
	    var switchElement = !this.props.thumbStyle ? _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(wrapStyles) },
	      this.props.switchElement,
	      ripples
	    ) : _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(wrapStyles) },
	      _react2.default.createElement('div', { style: this.prepareStyles(this.props.trackStyle) }),
	      _react2.default.createElement(
	        _paper2.default,
	        { style: this.props.thumbStyle, zDepth: 1, circle: true },
	        ' ',
	        ripples,
	        ' '
	      )
	    );

	    var labelPositionExist = this.props.labelPosition;

	    // Position is left if not defined or invalid.
	    var elementsInOrder = labelPositionExist && this.props.labelPosition.toUpperCase() === 'RIGHT' ? _react2.default.createElement(
	      _clearfix2.default,
	      { style: styles.controls },
	      switchElement,
	      labelElement
	    ) : _react2.default.createElement(
	      _clearfix2.default,
	      { style: styles.controls },
	      labelElement,
	      switchElement
	    );

	    return _react2.default.createElement(
	      'div',
	      { ref: 'root', className: className, style: this.prepareStyles(styles.root, this.props.style) },
	      inputElement,
	      elementsInOrder
	    );
	  }
	});

	exports.default = EnhancedSwitch;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var index = 0;

	exports.default = {
	  generate: function generate() {
	    return 'mui-id-' + index++;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beforeAfterWrapper = __webpack_require__(126);

	var _beforeAfterWrapper2 = _interopRequireDefault(_beforeAfterWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var styles = {
	  before: {
	    content: "' '",
	    display: 'table'
	  },
	  after: {
	    content: "' '",
	    clear: 'both',
	    display: 'table'
	  }
	};

	var ClearFix = function ClearFix(_ref) {
	  var style = _ref.style;
	  var children = _ref.children;

	  var other = _objectWithoutProperties(_ref, ['style', 'children']);

	  return _react2.default.createElement(
	    _beforeAfterWrapper2.default,
	    _extends({}, other, {
	      beforeStyle: styles.before,
	      afterStyle: styles.after,
	      style: style
	    }),
	    children
	  );
	};

	ClearFix.displayName = 'ClearFix';

	ClearFix.propTypes = {
	  children: _react2.default.PropTypes.node,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	exports.default = ClearFix;
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 *  BeforeAfterWrapper
	 *    An alternative for the ::before and ::after css pseudo-elements for
	 *    components whose styles are defined in javascript instead of css.
	 *
	 *  Usage: For the element that we want to apply before and after elements to,
	 *    wrap its children with BeforeAfterWrapper. For example:
	 *
	 *                                            <Paper>
	 *  <Paper>                                     <div> // See notice
	 *    <BeforeAfterWrapper>        renders         <div/> // before element
	 *      [children of paper]       ------>         [children of paper]
	 *    </BeforeAfterWrapper>                       <div/> // after element
	 *  </Paper>                                    </div>
	 *                                            </Paper>
	 *
	 *  Notice: Notice that this div bundles together our elements. If the element
	 *    that we want to apply before and after elements is a HTML tag (i.e. a
	 *    div, p, or button tag), we can avoid this extra nesting by passing using
	 *    the BeforeAfterWrapper in place of said tag like so:
	 *
	 *  <p>
	 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
	 *      [children of p]          ------>         [children of p]
	 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
	 *  </p>
	 *
	 *  BeforeAfterWrapper features spread functionality. This means that we can
	 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
	 *
	 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
	 *  and afterElement have a defined style position.
	 */

	var BeforeAfterWrapper = _react2.default.createClass({
	  displayName: 'BeforeAfterWrapper',

	  propTypes: {
	    afterElementType: _react2.default.PropTypes.string,
	    afterStyle: _react2.default.PropTypes.object,
	    beforeElementType: _react2.default.PropTypes.string,
	    beforeStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    elementType: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      beforeElementType: 'div',
	      afterElementType: 'div',
	      elementType: 'div'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var beforeStyle = _props.beforeStyle;
	    var afterStyle = _props.afterStyle;
	    var beforeElementType = _props.beforeElementType;
	    var afterElementType = _props.afterElementType;
	    var elementType = _props.elementType;

	    var other = _objectWithoutProperties(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);

	    var beforeElement = undefined;
	    var afterElement = undefined;

	    beforeStyle = {
	      boxSizing: 'border-box'
	    };

	    afterStyle = {
	      boxSizing: 'border-box'
	    };

	    if (this.props.beforeStyle) beforeElement = _react2.default.createElement(this.props.beforeElementType, {
	      style: this.prepareStyles(beforeStyle, this.props.beforeStyle),
	      key: '::before'
	    });
	    if (this.props.afterStyle) afterElement = _react2.default.createElement(this.props.afterElementType, {
	      style: this.prepareStyles(afterStyle, this.props.afterStyle),
	      key: '::after'
	    });

	    var children = [beforeElement, this.props.children, afterElement];

	    var props = other;
	    props.style = this.prepareStyles(this.props.style);

	    return _react2.default.createElement(this.props.elementType, props, children);
	  }
	});

	exports.default = BeforeAfterWrapper;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(105);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ToggleCheckBoxOutlineBlank = _react2.default.createClass({
	  displayName: 'ToggleCheckBoxOutlineBlank',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
	    );
	  }
	});

	exports.default = ToggleCheckBoxOutlineBlank;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(27);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(105);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ToggleCheckBox = _react2.default.createClass({
	  displayName: 'ToggleCheckBox',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
	    );
	  }
	});

	exports.default = ToggleCheckBox;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var TableRowColumn = _react2.default.createClass({
	  displayName: 'TableRowColumn',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Number to identify the header row. This property
	     * is automatically populated when used with TableHeader.
	     */
	    columnNumber: _react2.default.PropTypes.number,

	    /**
	     * If true, this column responds to hover events.
	     */
	    hoverable: _react2.default.PropTypes.bool,

	    /**
	     * Key for this element.
	     */
	    key: _react2.default.PropTypes.string,

	    /**
	     * Callback function for click event.
	     */
	    onClick: _react2.default.PropTypes.func,

	    /**
	     * Callback function for hover event.
	     */
	    onHover: _react2.default.PropTypes.func,

	    /**
	     * Callback function for hover exit event.
	     */
	    onHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      hoverable: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      hovered: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.tableRowColumn;
	  },
	  getStyles: function getStyles() {
	    var theme = this.getTheme();
	    var styles = {
	      root: {
	        paddingLeft: theme.spacing,
	        paddingRight: theme.spacing,
	        height: theme.height,
	        textAlign: 'left',
	        fontSize: 13,
	        overflow: 'hidden',
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis'
	      }
	    };

	    if (_react2.default.Children.count(this.props.children) === 1 && !isNaN(this.props.children)) {
	      styles.textAlign = 'right';
	    }

	    return styles;
	  },
	  _onClick: function _onClick(e) {
	    if (this.props.onClick) this.props.onClick(e, this.props.columnNumber);
	  },
	  _onMouseEnter: function _onMouseEnter(e) {
	    if (this.props.hoverable) {
	      this.setState({ hovered: true });
	      if (this.props.onHover) this.props.onHover(e, this.props.columnNumber);
	    }
	  },
	  _onMouseLeave: function _onMouseLeave(e) {
	    if (this.props.hoverable) {
	      this.setState({ hovered: false });
	      if (this.props.onHoverExit) this.props.onHoverExit(e, this.props.columnNumber);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var columnNumber = _props.columnNumber;
	    var hoverable = _props.hoverable;
	    var onClick = _props.onClick;
	    var onHover = _props.onHover;
	    var onHoverExit = _props.onHoverExit;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style']);

	    var styles = this.getStyles();
	    var handlers = {
	      onClick: this._onClick,
	      onMouseEnter: this._onMouseEnter,
	      onMouseLeave: this._onMouseLeave
	    };

	    return _react2.default.createElement(
	      'td',
	      _extends({
	        key: this.props.key,
	        className: className,
	        style: this.prepareStyles(styles.root, style)
	      }, handlers, other),
	      this.props.children
	    );
	  }
	});

	exports.default = TableRowColumn;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _checkbox = __webpack_require__(122);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tableRowColumn = __webpack_require__(129);

	var _tableRowColumn2 = _interopRequireDefault(_tableRowColumn);

	var _clickAwayable = __webpack_require__(131);

	var _clickAwayable2 = _interopRequireDefault(_clickAwayable);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var TableBody = _react2.default.createClass({
	  displayName: 'TableBody',

	  propTypes: {
	    /**
	     * Set to true to indicate that all rows should be selected.
	     */
	    allRowsSelected: _react2.default.PropTypes.bool,

	    /**
	     * Children passed to table body.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Controls whether or not to deselect all selected
	     * rows after clicking outside the table.
	     */
	    deselectOnClickaway: _react2.default.PropTypes.bool,

	    /**
	     * Controls the display of the row checkbox. The default value is true.
	     */
	    displayRowCheckbox: _react2.default.PropTypes.bool,

	    /**
	     * If true, multiple table rows can be selected.
	     * CTRL/CMD+Click and SHIFT+Click are valid actions.
	     * The default value is false.
	     */
	    multiSelectable: _react2.default.PropTypes.bool,

	    /**
	     * Callback function for when a cell is clicked.
	     */
	    onCellClick: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is hovered. rowNumber
	     * is the row number of the hovered row and columnId
	     * is the column number or the column key of the cell.
	     */
	    onCellHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table cell is no longer hovered.
	     * rowNumber is the row number of the row and columnId
	     * is the column number or the column key of the cell.
	     */
	    onCellHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is hovered.
	     * rowNumber is the row number of the hovered row.
	     */
	    onRowHover: _react2.default.PropTypes.func,

	    /**
	     * Called when a table row is no longer
	     * hovered. rowNumber is the row number of the row
	     * that is no longer hovered.
	     */
	    onRowHoverExit: _react2.default.PropTypes.func,

	    /**
	     * Called when a row is selected. selectedRows is an
	     * array of all row selections. IF all rows have been selected,
	     * the string "all" will be returned instead to indicate that
	     * all rows have been selected.
	     */
	    onRowSelection: _react2.default.PropTypes.func,

	    /**
	     * Controls whether or not the rows are pre-scanned to determine
	     * initial state. If your table has a large number of rows and
	     * you are experiencing a delay in rendering, turn off this property.
	     */
	    preScanRows: _react2.default.PropTypes.bool,

	    /**
	     * If true, table rows can be selected. If multiple
	     * row selection is desired, enable multiSelectable.
	     * The default value is true.
	     */
	    selectable: _react2.default.PropTypes.bool,

	    /**
	     * If true, table rows will be highlighted when
	     * the cursor is hovering over the row. The default
	     * value is false.
	     */
	    showRowHover: _react2.default.PropTypes.bool,

	    /**
	     * If true, every other table row starting
	     * with the first row will be striped. The default value is false.
	     */
	    stripedRows: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_clickAwayable2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      allRowsSelected: false,
	      deselectOnClickaway: true,
	      displayRowCheckbox: true,
	      multiSelectable: false,
	      preScanRows: true,
	      selectable: true,
	      style: {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      selectedRows: this._calculatePreselectedRows(this.props)
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    var newState = {};

	    if (this.props.allRowsSelected && !nextProps.allRowsSelected) {
	      newState.selectedRows = this.state.selectedRows.length > 0 ? [this.state.selectedRows[this.state.selectedRows.length - 1]] : [];
	    } else {
	      newState.selectedRows = this._calculatePreselectedRows(nextProps);
	    }

	    this.setState(newState);
	  },
	  componentClickAway: function componentClickAway() {
	    if (this.props.deselectOnClickaway && this.state.selectedRows.length) {
	      this.setState({ selectedRows: [] });
	      if (this.props.onRowSelection) this.props.onRowSelection([]);
	    }
	  },
	  _createRows: function _createRows() {
	    var _this = this;

	    var numChildren = _react2.default.Children.count(this.props.children);
	    var rowNumber = 0;
	    var handlers = {
	      onCellClick: this._onCellClick,
	      onCellHover: this._onCellHover,
	      onCellHoverExit: this._onCellHoverExit,
	      onRowHover: this._onRowHover,
	      onRowHoverExit: this._onRowHoverExit,
	      onRowClick: this._onRowClick
	    };

	    return _react2.default.Children.map(this.props.children, function (child) {
	      if (_react2.default.isValidElement(child)) {
	        var _ret = function () {
	          var props = {
	            displayRowCheckbox: _this.props.displayRowCheckbox,
	            hoverable: _this.props.showRowHover,
	            selected: _this._isRowSelected(rowNumber),
	            striped: _this.props.stripedRows && rowNumber % 2 === 0,
	            rowNumber: rowNumber++
	          };
	          var checkboxColumn = _this._createRowCheckboxColumn(props);

	          if (rowNumber === numChildren) {
	            props.displayBorder = false;
	          }

	          var children = [checkboxColumn];
	          _react2.default.Children.forEach(child.props.children, function (child) {
	            children.push(child);
	          });

	          return {
	            v: _react2.default.cloneElement(child, _extends({}, props, handlers), children)
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	    });
	  },
	  _createRowCheckboxColumn: function _createRowCheckboxColumn(rowProps) {
	    if (!this.props.displayRowCheckbox) return null;

	    var key = rowProps.rowNumber + '-cb';
	    var checkbox = _react2.default.createElement(_checkbox2.default, {
	      ref: 'rowSelectCB',
	      name: key,
	      value: 'selected',
	      disabled: !this.props.selectable,
	      checked: rowProps.selected
	    });

	    return _react2.default.createElement(
	      _tableRowColumn2.default,
	      {
	        key: key,
	        columnNumber: 0,
	        style: { width: 24 }
	      },
	      checkbox
	    );
	  },
	  _calculatePreselectedRows: function _calculatePreselectedRows(props) {
	    // Determine what rows are 'pre-selected'.
	    var preSelectedRows = [];

	    if (props.selectable && props.preScanRows) {
	      (function () {
	        var index = 0;
	        _react2.default.Children.forEach(props.children, function (child) {
	          if (_react2.default.isValidElement(child)) {
	            if (child.props.selected && (preSelectedRows.length === 0 || props.multiSelectable)) {
	              preSelectedRows.push(index);
	            }

	            index++;
	          }
	        });
	      })();
	    }

	    return preSelectedRows;
	  },
	  _isRowSelected: function _isRowSelected(rowNumber) {
	    if (this.props.allRowsSelected) {
	      return true;
	    }

	    for (var i = 0; i < this.state.selectedRows.length; i++) {
	      var selection = this.state.selectedRows[i];

	      if ((typeof selection === 'undefined' ? 'undefined' : _typeof(selection)) === 'object') {
	        if (this._isValueInRange(rowNumber, selection)) return true;
	      } else {
	        if (selection === rowNumber) return true;
	      }
	    }

	    return false;
	  },
	  _isValueInRange: function _isValueInRange(value, range) {
	    if (!range) return false;

	    if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
	      return true;
	    }

	    return false;
	  },
	  _onRowClick: function _onRowClick(e, rowNumber) {
	    e.stopPropagation();

	    if (this.props.selectable) {
	      // Prevent text selection while selecting rows.
	      window.getSelection().removeAllRanges();
	      this._processRowSelection(e, rowNumber);
	    }
	  },
	  _processRowSelection: function _processRowSelection(e, rowNumber) {
	    var selectedRows = this.state.selectedRows;

	    if (e.shiftKey && this.props.multiSelectable && selectedRows.length) {
	      var lastIndex = selectedRows.length - 1;
	      var lastSelection = selectedRows[lastIndex];

	      if ((typeof lastSelection === 'undefined' ? 'undefined' : _typeof(lastSelection)) === 'object') {
	        lastSelection.end = rowNumber;
	      } else {
	        selectedRows.splice(lastIndex, 1, { start: lastSelection, end: rowNumber });
	      }
	    } else if ((e.ctrlKey && !e.metaKey || e.metaKey && !e.ctrlKey) && this.props.multiSelectable) {
	      var idx = selectedRows.indexOf(rowNumber);
	      if (idx < 0) {
	        var foundRange = false;
	        for (var i = 0; i < selectedRows.length; i++) {
	          var range = selectedRows[i];
	          if ((typeof range === 'undefined' ? 'undefined' : _typeof(range)) !== 'object') continue;

	          if (this._isValueInRange(rowNumber, range)) {
	            var _selectedRows;

	            foundRange = true;
	            var values = this._splitRange(range, rowNumber);
	            (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat(_toConsumableArray(values)));
	          }
	        }

	        if (!foundRange) selectedRows.push(rowNumber);
	      } else {
	        selectedRows.splice(idx, 1);
	      }
	    } else {
	      if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
	        selectedRows = [];
	      } else {
	        selectedRows = [rowNumber];
	      }
	    }

	    this.setState({ selectedRows: selectedRows });
	    if (this.props.onRowSelection) this.props.onRowSelection(this._flattenRanges(selectedRows));
	  },
	  _splitRange: function _splitRange(range, splitPoint) {
	    var splitValues = [];
	    var startOffset = range.start - splitPoint;
	    var endOffset = range.end - splitPoint;

	    // Process start half
	    splitValues.push.apply(splitValues, _toConsumableArray(this._genRangeOfValues(splitPoint, startOffset)));

	    // Process end half
	    splitValues.push.apply(splitValues, _toConsumableArray(this._genRangeOfValues(splitPoint, endOffset)));

	    return splitValues;
	  },
	  _genRangeOfValues: function _genRangeOfValues(start, offset) {
	    var values = [];
	    var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
	    while (offset !== 0) {
	      values.push(start + offset);
	      offset += dir;
	    }

	    return values;
	  },
	  _flattenRanges: function _flattenRanges(selectedRows) {
	    var rows = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = selectedRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var selection = _step.value;

	        if ((typeof selection === 'undefined' ? 'undefined' : _typeof(selection)) === 'object') {
	          var values = this._genRangeOfValues(selection.end, selection.start - selection.end);
	          rows.push.apply(rows, [selection.end].concat(_toConsumableArray(values)));
	        } else {
	          rows.push(selection);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return rows.sort();
	  },
	  _onCellClick: function _onCellClick(e, rowNumber, columnNumber) {
	    e.stopPropagation();
	    if (this.props.onCellClick) this.props.onCellClick(rowNumber, this._getColumnId(columnNumber));
	  },
	  _onCellHover: function _onCellHover(e, rowNumber, columnNumber) {
	    if (this.props.onCellHover) this.props.onCellHover(rowNumber, this._getColumnId(columnNumber));
	    this._onRowHover(e, rowNumber);
	  },
	  _onCellHoverExit: function _onCellHoverExit(e, rowNumber, columnNumber) {
	    if (this.props.onCellHoverExit) this.props.onCellHoverExit(rowNumber, this._getColumnId(columnNumber));
	    this._onRowHoverExit(e, rowNumber);
	  },
	  _onRowHover: function _onRowHover(e, rowNumber) {
	    if (this.props.onRowHover) this.props.onRowHover(rowNumber);
	  },
	  _onRowHoverExit: function _onRowHoverExit(e, rowNumber) {
	    if (this.props.onRowHoverExit) this.props.onRowHoverExit(rowNumber);
	  },
	  _getColumnId: function _getColumnId(columnNumber) {
	    var columnId = columnNumber;
	    if (this.props.displayRowCheckbox) columnId--;

	    return columnId;
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'style']);

	    var rows = this._createRows();

	    return _react2.default.createElement(
	      'tbody',
	      { className: className, style: this.prepareStyles(style) },
	      rows
	    );
	  }
	});

	exports.default = TableBody;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	var _dom = __webpack_require__(100);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  //When the component mounts, listen to click events and check if we need to
	  //Call the componentClickAway function.

	  componentDidMount: function componentDidMount() {
	    if (!this.manuallyBindClickAway) this._bindClickAway();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindClickAway();
	  },
	  _checkClickAway: function _checkClickAway(event) {
	    if (this.isMounted()) {
	      var el = _reactDom2.default.findDOMNode(this);

	      // Check if the target is inside the current component
	      if (event.target !== el && !_dom2.default.isDescendant(el, event.target) && document.documentElement.contains(event.target)) {
	        if (this.componentClickAway) this.componentClickAway(event);
	      }
	    }
	  },
	  _bindClickAway: function _bindClickAway() {
	    // On touch-enabled devices, both events fire, and the handler is called twice,
	    // but it's fine since all operations for which the mixin is used
	    // are idempotent.
	    _events2.default.on(document, 'mouseup', this._checkClickAway);
	    _events2.default.on(document, 'touchend', this._checkClickAway);
	  },
	  _unbindClickAway: function _unbindClickAway() {
	    _events2.default.off(document, 'mouseup', this._checkClickAway);
	    _events2.default.off(document, 'touchend', this._checkClickAway);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _textField = __webpack_require__(133);

	var _textField2 = _interopRequireDefault(_textField);

	var _raisedButton = __webpack_require__(140);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));
	  }

	  _createClass(Login, [{
	    key: 'handleUserChange',
	    value: function handleUserChange(event) {
	      this.props.updateUser(event.target.value);
	    }
	  }, {
	    key: 'handlePassChange',
	    value: function handlePassChange(event) {
	      this.props.updatePass(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var loginName = "Login";
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_textField2.default, { value: this.props.user,
	          onChange: this.handleUserChange.bind(this),
	          fullWidth: true,
	          type: 'username',
	          hintText: 'Username'
	        }),
	        _react2.default.createElement(_textField2.default, { value: this.props.pass,
	          onChange: this.handlePassChange.bind(this),
	          fullWidth: true,
	          type: 'password',
	          hintText: 'Password'
	        }),
	        _react2.default.createElement(_raisedButton2.default, {
	          label: 'Login',
	          primary: true,
	          onClick: this.props.login,
	          style: { width: "100%" } })
	      );
	    }
	  }]);

	  return Login;
	}(_react2.default.Component);

	exports.default = Login;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TextField = __webpack_require__(134);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TextField = __webpack_require__(135);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colorManipulator = __webpack_require__(72);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _uniqueId = __webpack_require__(124);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _enhancedTextarea = __webpack_require__(136);

	var _enhancedTextarea2 = _interopRequireDefault(_enhancedTextarea);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _contextPure = __webpack_require__(87);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _TextFieldHint = __webpack_require__(137);

	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

	var _TextFieldLabel = __webpack_require__(138);

	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

	var _TextFieldUnderline = __webpack_require__(139);

	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return Boolean(value || value === 0);
	}

	var TextField = _react2.default.createClass({
	  displayName: 'TextField',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The text string to use for the default value.
	     */
	    defaultValue: _react2.default.PropTypes.any,

	    /**
	     * Disables the text field if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * The style object to use to override error styles.
	     */
	    errorStyle: _react2.default.PropTypes.object,

	    /**
	     * The error content to display.
	     */
	    errorText: _react2.default.PropTypes.node,

	    /**
	     * The style object to use to override floating label styles.
	     */
	    floatingLabelStyle: _react2.default.PropTypes.object,

	    /**
	     * The content to use for the floating label element.
	     */
	    floatingLabelText: _react2.default.PropTypes.node,

	    /**
	     * If true, the field receives the property width 100%.
	     */
	    fullWidth: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the TextField's hint text element.
	     */
	    hintStyle: _react2.default.PropTypes.object,

	    /**
	     * The hint content to display.
	     */
	    hintText: _react2.default.PropTypes.node,

	    /**
	     * The id prop for the text field.
	     */
	    id: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the TextField's input element.
	     */
	    inputStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, a textarea element will be rendered.
	     * The textarea also grows and shrinks according to the number of lines.
	     */
	    multiLine: _react2.default.PropTypes.bool,

	    /**
	     * Callback function that is fired when the textfield loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,

	    /**
	     * Callback function that is fired when the textfield's value changes.
	     */
	    onChange: _react2.default.PropTypes.func,

	    /**
	     * The function to call when the user presses the Enter key.
	     */
	    onEnterKeyDown: _react2.default.PropTypes.func,

	    /**
	     * Callback function that is fired when the textfield gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function fired when key is pressed down.
	     */
	    onKeyDown: _react2.default.PropTypes.func,

	    /**
	     * Number of rows to display when multiLine option is set to true.
	     */
	    rows: _react2.default.PropTypes.number,

	    /**
	     * Maximum number of rows to display when
	     * multiLine option is set to true.
	     */
	    rowsMax: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Specifies the type of input to display
	     * such as "password" or "text".
	     */
	    type: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the
	     * TextField's underline element when disabled.
	     */
	    underlineDisabledStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the TextField's
	     * underline element when focussed.
	     */
	    underlineFocusStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, shows the underline for the text field.
	     */
	    underlineShow: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the TextField's underline element.
	     */
	    underlineStyle: _react2.default.PropTypes.object,

	    /**
	     * The value of the text field.
	     */
	    value: _react2.default.PropTypes.any
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_contextPure2.default, _stylePropable2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var textFieldTheme = muiTheme.textField;

	      return {
	        floatingLabelColor: textFieldTheme.floatingLabelColor,
	        focusColor: textFieldTheme.focusColor,
	        textColor: textFieldTheme.textColor,
	        disabledTextColor: textFieldTheme.disabledTextColor,
	        backgroundColor: textFieldTheme.backgroundColor,
	        hintColor: textFieldTheme.hintColor,
	        errorColor: textFieldTheme.errorColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedTextarea2.default];
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      multiLine: false,
	      fullWidth: false,
	      type: 'text',
	      underlineShow: true,
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props.children ? this.props.children.props : this.props;

	    return {
	      isFocused: false,
	      errorText: this.props.errorText,
	      hasValue: isValid(props.value) || isValid(props.defaultValue) || props.valueLink && isValid(props.valueLink.value),
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._uniqueId = _uniqueId2.default.generate();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    newState.errorText = nextProps.errorText;
	    if (nextProps.children && nextProps.children.props) {
	      nextProps = nextProps.children.props;
	    }

	    var hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
	    var hasValueProp = nextProps.hasOwnProperty('value');
	    var hasNewDefaultValue = nextProps.defaultValue !== this.props.defaultValue;

	    if (hasValueLinkProp) {
	      newState.hasValue = isValid(nextProps.valueLink.value);
	    } else if (hasValueProp) {
	      newState.hasValue = isValid(nextProps.value);
	    } else if (hasNewDefaultValue) {
	      newState.hasValue = isValid(nextProps.defaultValue);
	    }

	    if (newState) this.setState(newState);
	  },
	  getStyles: function getStyles() {
	    var props = this.props;

	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var floatingLabelColor = _constructor$getRelev.floatingLabelColor;
	    var focusColor = _constructor$getRelev.focusColor;
	    var textColor = _constructor$getRelev.textColor;
	    var disabledTextColor = _constructor$getRelev.disabledTextColor;
	    var backgroundColor = _constructor$getRelev.backgroundColor;
	    var hintColor = _constructor$getRelev.hintColor;
	    var errorColor = _constructor$getRelev.errorColor;

	    var styles = {
	      root: {
	        fontSize: 16,
	        lineHeight: '24px',
	        width: props.fullWidth ? '100%' : 256,
	        height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	        display: 'inline-block',
	        position: 'relative',
	        backgroundColor: backgroundColor,
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	        transition: _transitions2.default.easeOut('200ms', 'height')
	      },
	      error: {
	        position: 'relative',
	        bottom: 2,
	        fontSize: 12,
	        lineHeight: '12px',
	        color: errorColor,
	        transition: _transitions2.default.easeOut()
	      },
	      floatingLabel: {
	        color: hintColor
	      },
	      input: {
	        tapHighlightColor: 'rgba(0,0,0,0)',
	        padding: 0,
	        position: 'relative',
	        width: '100%',
	        height: '100%',
	        border: 'none',
	        outline: 'none',
	        backgroundColor: 'transparent',
	        color: props.disabled ? disabledTextColor : textColor,
	        font: 'inherit'
	      }
	    };

	    styles.error = this.mergeStyles(styles.error, props.errorStyle);

	    styles.textarea = this.mergeStyles(styles.input, {
	      marginTop: props.floatingLabelText ? 36 : 12,
	      marginBottom: props.floatingLabelText ? -36 : -12,
	      boxSizing: 'border-box',
	      font: 'inherit'
	    });

	    if (this.state.isFocused) {
	      styles.floatingLabel.color = focusColor;
	    }

	    if (this.state.hasValue) {
	      styles.floatingLabel.color = _colorManipulator2.default.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
	    }

	    if (props.floatingLabelText) {
	      styles.input.boxSizing = 'border-box';

	      if (!props.multiLine) {
	        styles.input.marginTop = 14;
	      }

	      if (this.state.errorText) {
	        styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	      }
	    }

	    if (this.state.errorText) {
	      if (this.state.isFocused) {
	        styles.floatingLabel.color = styles.error.color;
	      }
	    }

	    return styles;
	  },
	  blur: function blur() {
	    if (this.isMounted()) this._getInputNode().blur();
	  },
	  clearValue: function clearValue() {
	    this.setValue('');
	  },
	  focus: function focus() {
	    if (this.isMounted()) this._getInputNode().focus();
	  },
	  getValue: function getValue() {
	    return this.isMounted() ? this._getInputNode().value : undefined;
	  },
	  setErrorText: function setErrorText(newErrorText) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'setErrorText() method is deprecated. Use the errorText property instead.') : undefined;

	    if (this.isMounted()) {
	      this.setState({ errorText: newErrorText });
	    }
	  },
	  setValue: function setValue(newValue) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'setValue() method is deprecated. Use the defaultValue property instead.\n      Or use the TextField as a controlled component with the value property.') : undefined;

	    if (this.isMounted()) {
	      if (this.props.multiLine) {
	        this.refs.input.setValue(newValue);
	      } else {
	        this._getInputNode().value = newValue;
	      }

	      this.setState({ hasValue: isValid(newValue) });
	    }
	  },
	  _getInputNode: function _getInputNode() {
	    return this.props.children || this.props.multiLine ? this.refs.input.getInputNode() : _reactDom2.default.findDOMNode(this.refs.input);
	  },
	  _handleInputBlur: function _handleInputBlur(e) {
	    this.setState({ isFocused: false });
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	  _handleInputChange: function _handleInputChange(e) {
	    this.setState({ hasValue: isValid(e.target.value) });
	    if (this.props.onChange) this.props.onChange(e);
	  },
	  _handleInputFocus: function _handleInputFocus(e) {
	    if (this.props.disabled) return;
	    this.setState({ isFocused: true });
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	  _handleInputKeyDown: function _handleInputKeyDown(e) {
	    if (e.keyCode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(e);
	    if (this.props.onKeyDown) this.props.onKeyDown(e);
	  },
	  _handleTextAreaHeightChange: function _handleTextAreaHeightChange(e, height) {
	    var newHeight = height + 24;
	    if (this.props.floatingLabelText) newHeight += 24;
	    _reactDom2.default.findDOMNode(this).style.height = newHeight + 'px';
	  },
	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var disabled = _props.disabled;
	    var errorStyle = _props.errorStyle;
	    var errorText = _props.errorText;
	    var floatingLabelText = _props.floatingLabelText;
	    var fullWidth = _props.fullWidth;
	    var hintText = _props.hintText;
	    var hintStyle = _props.hintStyle;
	    var id = _props.id;
	    var multiLine = _props.multiLine;
	    var onBlur = _props.onBlur;
	    var onChange = _props.onChange;
	    var onFocus = _props.onFocus;
	    var style = _props.style;
	    var type = _props.type;
	    var underlineDisabledStyle = _props.underlineDisabledStyle;
	    var underlineFocusStyle = _props.underlineFocusStyle;
	    var underlineShow = _props.underlineShow;
	    var underlineStyle = _props.underlineStyle;
	    var rows = _props.rows;
	    var rowsMax = _props.rowsMax;

	    var other = _objectWithoutProperties(_props, ['className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax']);

	    var styles = this.getStyles();

	    var inputId = id || this._uniqueId;

	    var errorTextElement = this.state.errorText ? _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(styles.error) },
	      this.state.errorText
	    ) : null;

	    var floatingLabelTextElement = floatingLabelText ? _react2.default.createElement(
	      _TextFieldLabel2.default,
	      {
	        muiTheme: this.state.muiTheme,
	        style: this.mergeStyles(styles.floatingLabel, this.props.floatingLabelStyle),
	        htmlFor: inputId,
	        shrink: this.state.hasValue || this.state.isFocused,
	        disabled: disabled,
	        onTouchTap: this.focus
	      },
	      floatingLabelText
	    ) : null;

	    var inputProps = undefined;
	    var inputElement = undefined;

	    inputProps = {
	      id: inputId,
	      ref: 'input',
	      onBlur: this._handleInputBlur,
	      onFocus: this._handleInputFocus,
	      disabled: this.props.disabled,
	      onKeyDown: this._handleInputKeyDown
	    };
	    var inputStyle = this.mergeStyles(styles.input, this.props.inputStyle);

	    if (!this.props.hasOwnProperty('valueLink')) {
	      inputProps.onChange = this._handleInputChange;
	    }

	    if (this.props.children) {
	      inputElement = _react2.default.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props, {
	        style: this.mergeStyles(inputStyle, this.props.children.props.style)
	      }));
	    } else {
	      inputElement = multiLine ? _react2.default.createElement(_enhancedTextarea2.default, _extends({}, other, inputProps, {
	        style: inputStyle,
	        rows: rows,
	        rowsMax: rowsMax,
	        onHeightChange: this._handleTextAreaHeightChange,
	        textareaStyle: styles.textarea
	      })) : _react2.default.createElement('input', _extends({}, other, inputProps, {
	        style: this.prepareStyles(inputStyle),
	        type: type
	      }));
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: className, style: this.prepareStyles(styles.root, this.props.style) },
	      floatingLabelTextElement,
	      hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	        muiTheme: this.state.muiTheme,
	        show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused),
	        style: hintStyle,
	        text: hintText
	      }) : null,
	      inputElement,
	      underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	        disabled: disabled,
	        disabledStyle: underlineDisabledStyle,
	        error: this.state.errorText ? true : false,
	        errorStyle: errorStyle,
	        focus: this.state.isFocused,
	        focusStyle: underlineFocusStyle,
	        muiTheme: this.state.muiTheme,
	        style: underlineStyle
	      }) : null,
	      errorTextElement
	    );
	  }
	});

	exports.default = TextField;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var rowsHeight = 24;

	var styles = {
	  textarea: {
	    width: '100%',
	    resize: 'none',
	    font: 'inherit',
	    padding: 0
	  },
	  shadow: {
	    width: '100%',
	    resize: 'none',
	    // Overflow also needed to here to remove the extra row
	    // added to textareas in Firefox.
	    overflow: 'hidden',
	    // Visibility needed to hide the extra text area on ipads
	    visibility: 'hidden',
	    font: 'inherit',
	    padding: 0,
	    position: 'absolute'
	  }
	};

	var EnhancedTextarea = _react2.default.createClass({
	  displayName: 'EnhancedTextarea',

	  propTypes: {
	    defaultValue: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func,
	    onHeightChange: _react2.default.PropTypes.func,
	    rows: _react2.default.PropTypes.number,
	    rowsMax: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    textareaStyle: _react2.default.PropTypes.object,
	    value: _react2.default.PropTypes.string,
	    valueLink: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      height: this.props.rows * rowsHeight,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._syncHeightWithShadow();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    if (nextProps.value !== this.props.value) {
	      this._syncHeightWithShadow(nextProps.value);
	    }
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	  },
	  getInputNode: function getInputNode() {
	    return _reactDom2.default.findDOMNode(this.refs.input);
	  },
	  setValue: function setValue(value) {
	    this.getInputNode().value = value;
	    this._syncHeightWithShadow(value);
	  },
	  _syncHeightWithShadow: function _syncHeightWithShadow(newValue, e) {
	    var shadow = _reactDom2.default.findDOMNode(this.refs.shadow);

	    if (newValue !== undefined) {
	      shadow.value = newValue;
	    }

	    var newHeight = shadow.scrollHeight;

	    if (this.props.rowsMax >= this.props.rows) {
	      newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	    }

	    newHeight = Math.max(newHeight, rowsHeight);

	    if (this.state.height !== newHeight) {
	      this.setState({
	        height: newHeight
	      });

	      if (this.props.onHeightChange) {
	        this.props.onHeightChange(e, newHeight);
	      }
	    }
	  },
	  _handleChange: function _handleChange(e) {
	    this._syncHeightWithShadow(e.target.value);

	    if (this.props.hasOwnProperty('valueLink')) {
	      this.props.valueLink.requestChange(e.target.value);
	    }

	    if (this.props.onChange) {
	      this.props.onChange(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var onChange = _props.onChange;
	    var onHeightChange = _props.onHeightChange;
	    var rows = _props.rows;
	    var style = _props.style;
	    var textareaStyle = _props.textareaStyle;
	    var valueLink = _props.valueLink;

	    var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'style', 'textareaStyle', 'valueLink']);

	    var textareaStyles = this.mergeStyles(styles.textarea, textareaStyle, {
	      height: this.state.height
	    });

	    var shadowStyles = styles.shadow;

	    if (this.props.hasOwnProperty('valueLink')) {
	      other.value = this.props.valueLink.value;
	    }

	    if (this.props.disabled) {
	      style.cursor = 'default';
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(this.props.style) },
	      _react2.default.createElement('textarea', {
	        ref: 'shadow',
	        style: this.prepareStyles(shadowStyles),
	        tabIndex: '-1',
	        rows: this.props.rows,
	        defaultValue: this.props.defaultValue,
	        readOnly: true,
	        value: this.props.value,
	        valueLink: this.props.valueLink
	      }),
	      _react2.default.createElement('textarea', _extends({}, other, {
	        ref: 'input',
	        rows: this.props.rows,
	        style: this.prepareStyles(textareaStyles),
	        onChange: this._handleChange
	      }))
	    );
	  }
	});

	exports.default = EnhancedTextarea;
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * The hint text displayed.
	   */
	  text: _react2.default.PropTypes.node
	};

	var defaultProps = {
	  show: true
	};

	var TextFieldHint = function TextFieldHint(props) {
	  var muiTheme = props.muiTheme;
	  var show = props.show;
	  var style = props.style;
	  var text = props.text;
	  var hintColor = muiTheme.textField.hintColor;

	  var styles = {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)) },
	    text
	  );
	};

	TextFieldHint.propTypes = propTypes;
	TextFieldHint.defaultProps = defaultProps;

	exports.default = TextFieldHint;
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * The label contents.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react2.default.PropTypes.bool,

	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react2.default.PropTypes.string,

	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react2.default.PropTypes.func,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  disabled: false,
	  shrink: false
	};

	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme;
	  var className = props.className;
	  var children = props.children;
	  var disabled = props.disabled;
	  var shrink = props.shrink;
	  var htmlFor = props.htmlFor;
	  var style = props.style;
	  var onTouchTap = props.onTouchTap;

	  var styles = {
	    root: {
	      position: 'absolute',
	      lineHeight: '22px',
	      top: 38,
	      transition: _transitions2.default.easeOut(),
	      zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	      cursor: disabled ? 'default' : 'text',
	      transform: shrink ? 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)' : 'scale(1) translate3d(0, 0, 0)',
	      transformOrigin: 'left top',
	      pointerEvents: shrink ? 'none' : 'auto',
	      userSelect: 'none'
	    }
	  };

	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};

	TextFieldLabel.propTypes = propTypes;
	TextFieldLabel.defaultProps = defaultProps;

	exports.default = TextFieldLabel;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react2.default.PropTypes.object,

	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react2.default.PropTypes.object,

	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react2.default.PropTypes.object,

	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};

	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled;
	  var disabledStyle = props.disabledStyle;
	  var error = props.error;
	  var errorStyle = props.errorStyle;
	  var focus = props.focus;
	  var focusStyle = props.focusStyle;
	  var muiTheme = props.muiTheme;
	  var style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var _muiTheme$textField = muiTheme.textField;
	  var borderColor = _muiTheme$textField.borderColor;
	  var disabledTextColor = _muiTheme$textField.disabledTextColor;
	  var errorColor = _muiTheme$textField.errorColor;
	  var focusColor = _muiTheme$textField.focusColor;

	  var styles = {
	    root: {
	      border: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };

	  var underline = (0, _styles.mergeStyles)(styles.root, style);
	  var focusedUnderline = (0, _styles.mergeStyles)(underline, styles.focus, focusStyle);

	  if (disabled) underline = (0, _styles.mergeStyles)(underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _styles.mergeStyles)(focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _styles.mergeStyles)(focusedUnderline, styles.error);

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: (0, _styles.prepareStyles)(muiTheme, underline) }),
	    _react2.default.createElement('hr', { style: (0, _styles.prepareStyles)(muiTheme, focusedUnderline) })
	  );
	};

	TextFieldUnderline.propTypes = propTypes;
	TextFieldUnderline.defaultProps = defaultProps;

	exports.default = TextFieldUnderline;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(72);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _children = __webpack_require__(90);

	var _children2 = _interopRequireDefault(_children);

	var _typography = __webpack_require__(85);

	var _typography2 = _interopRequireDefault(_typography);

	var _enhancedButton = __webpack_require__(89);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label) {
	    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
	  }
	}

	var RaisedButton = _react2.default.createClass({
	  displayName: 'RaisedButton',

	  propTypes: {
	    /**
	     * Override the background color. Always takes precedence unless the button is disabled.
	     */
	    backgroundColor: _react2.default.PropTypes.string,

	    /**
	     * This is what will be displayed inside the button.
	     * If a label is specified, the text within the label prop will
	     * be displayed. Otherwise, the component will expect children
	     * which will then be displayed. (In our example,
	     * we are nesting an `<input type="file" />` and a `span`
	     * that acts as our label to be displayed.) This only
	     * applies to flat and raised buttons.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Disables the button if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Override the background color if the button is disabled.
	     */
	    disabledBackgroundColor: _react2.default.PropTypes.string,

	    /**
	     * Color of the label if disabled is true.
	     */
	    disabledLabelColor: _react2.default.PropTypes.string,

	    /**
	     * If true, then the button will take up the full
	     * width of its container.
	     */
	    fullWidth: _react2.default.PropTypes.bool,

	    /**
	     * URL to link to when button clicked if `linkButton` is set to true.
	     */
	    href: _react2.default.PropTypes.string,

	    /**
	     * Use this property to display an icon.
	     */
	    icon: _react2.default.PropTypes.node,

	    /**
	     * The label for the button.
	     */
	    label: validateLabel,

	    /**
	     * The color of the label for the button.
	     */
	    labelColor: _react2.default.PropTypes.string,

	    /**
	     * Place label before or after the passed children.
	     */
	    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),

	    /**
	     * Override the inline-styles of the button's label element.
	     */
	    labelStyle: _react2.default.PropTypes.object,

	    /**
	     * Enables use of `href` property to provide a URL to link to if set to true.
	     */
	    linkButton: _react2.default.PropTypes.bool,

	    /**
	     * Callback function for when the mouse is pressed down inside this element.
	     */
	    onMouseDown: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse is realeased
	     * above this element.
	     */
	    onMouseUp: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when a touchTap event ends.
	     */
	    onTouchEnd: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when a touchTap event starts.
	     */
	    onTouchStart: _react2.default.PropTypes.func,

	    /**
	     * If true, colors button according to
	     * primaryTextColor from the Theme.
	     */
	    primary: _react2.default.PropTypes.bool,

	    /**
	     * If true, colors button according to secondaryTextColor from the theme.
	     * The primary prop has precendent if set to true.
	     */
	    secondary: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      labelPosition: 'after',
	      fullWidth: false,
	      primary: false,
	      secondary: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 1;
	    return {
	      hovered: false,
	      touched: false,
	      initialZDepth: zDepth,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var zDepth = nextProps.disabled ? 0 : 1;
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      zDepth: zDepth,
	      initialZDepth: zDepth,
	      muiTheme: newMuiTheme
	    });
	  },
	  _getBackgroundColor: function _getBackgroundColor() {
	    var disabledColor = this.props.disabledBackgroundColor ? this.props.disabledBackgroundColor : this.getTheme().disabledColor;

	    return this.props.disabled ? disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.primary ? this.getTheme().primaryColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
	  },
	  _getLabelColor: function _getLabelColor() {
	    var disabledColor = this.props.disabledLabelColor ? this.props.disabledLabelColor : this.getTheme().disabledTextColor;

	    return this.props.disabled ? disabledColor : this.props.labelColor ? this.props.labelColor : this.props.primary ? this.getTheme().primaryTextColor : this.props.secondary ? this.getTheme().secondaryTextColor : this.getTheme().textColor;
	  },
	  getThemeButton: function getThemeButton() {
	    return this.state.muiTheme.button;
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.raisedButton;
	  },
	  getStyles: function getStyles() {
	    var _props = this.props;
	    var icon = _props.icon;
	    var labelPosition = _props.labelPosition;
	    var primary = _props.primary;
	    var secondary = _props.secondary;

	    var amount = primary || secondary ? 0.4 : 0.08;
	    var styles = {
	      root: {
	        display: 'inline-block',
	        minWidth: this.props.fullWidth ? '100%' : this.getThemeButton().minWidth,
	        height: this.getThemeButton().height,
	        transition: _transitions2.default.easeOut()
	      },
	      container: {
	        position: 'relative',
	        height: '100%',
	        width: '100%',
	        padding: 0,
	        overflow: 'hidden',
	        borderRadius: 2,
	        transition: _transitions2.default.easeOut(),
	        backgroundColor: this._getBackgroundColor()
	      },
	      label: {
	        position: 'relative',
	        opacity: 1,
	        fontSize: '14px',
	        letterSpacing: 0,
	        textTransform: this.getTheme().textTransform ? this.getTheme().textTransform : this.getThemeButton().textTransform ? this.getThemeButton().textTransform : 'uppercase',
	        fontWeight: _typography2.default.fontWeightMedium,
	        margin: 0,
	        userSelect: 'none',
	        paddingLeft: this.state.muiTheme.rawTheme.spacing.desktopGutterLess,
	        paddingRight: this.state.muiTheme.rawTheme.spacing.desktopGutterLess,
	        lineHeight: this.props.style && this.props.style.height ? this.props.style.height : this.getThemeButton().height + 'px',
	        color: this._getLabelColor()
	      },
	      overlay: {
	        transition: _transitions2.default.easeOut(),
	        top: 0
	      },
	      overlayWhenHovered: {
	        backgroundColor: _colorManipulator2.default.fade(this._getLabelColor(), amount)
	      }
	    };

	    if (icon) {
	      if (labelPosition === 'before') {
	        styles.label.paddingRight = 8;
	      } else {
	        styles.label.paddingLeft = 8;
	      }
	    }

	    return styles;
	  },
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(e);
	  },
	  _handleMouseUp: function _handleMouseUp(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(e);
	  },
	  _handleTouchEnd: function _handleTouchEnd(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	      var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
	      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = _colorManipulator2.default.fade(this.prepareStyles(this.getStyles().label, this.props.labelStyle).color, amount);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var children = _props2.children;
	    var disabled = _props2.disabled;
	    var icon = _props2.icon;
	    var label = _props2.label;
	    var labelPosition = _props2.labelPosition;
	    var labelStyle = _props2.labelStyle;
	    var primary = _props2.primary;
	    var secondary = _props2.secondary;

	    var other = _objectWithoutProperties(_props2, ['children', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'secondary']);

	    var styles = this.getStyles();

	    var labelElement = undefined;
	    if (label) {
	      labelElement = _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label, labelStyle) },
	        label
	      );
	    }

	    var rippleColor = styles.label.color;
	    var rippleOpacity = !(primary || secondary) ? 0.1 : 0.16;

	    var buttonEventHandlers = disabled ? null : {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };

	    var iconCloned = undefined;

	    if (icon) {
	      iconCloned = _react2.default.cloneElement(icon, {
	        color: styles.label.color,
	        style: {
	          verticalAlign: 'middle',
	          marginLeft: labelPosition === 'before' ? 0 : 12,
	          marginRight: labelPosition === 'before' ? 12 : 0
	        }
	      });
	    }

	    // Place label before or after children.
	    var childrenFragment = labelPosition === 'before' ? {
	      labelElement: labelElement,
	      iconCloned: iconCloned,
	      children: children
	    } : {
	      children: children,
	      iconCloned: iconCloned,
	      labelElement: labelElement
	    };
	    var enhancedButtonChildren = _children2.default.create(childrenFragment);

	    return _react2.default.createElement(
	      _paper2.default,
	      {
	        style: this.mergeStyles(styles.root, this.props.style),
	        zDepth: this.state.zDepth
	      },
	      _react2.default.createElement(
	        _enhancedButton2.default,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeStyles(styles.container),
	          focusRippleColor: rippleColor,
	          touchRippleColor: rippleColor,
	          focusRippleOpacity: rippleOpacity,
	          touchRippleOpacity: rippleOpacity
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            ref: 'overlay',
	            style: this.prepareStyles(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered)
	          },
	          enhancedButtonChildren
	        )
	      )
	    );
	  }
	});

	exports.default = RaisedButton;
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _typography = __webpack_require__(85);

	var _typography2 = _interopRequireDefault(_typography);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// Badge
	var Badge = _react2.default.createClass({
	  displayName: 'Badge',

	  propTypes: {
	    /**
	     * This is the content rendered within the badge.
	     */
	    badgeContent: _react2.default.PropTypes.node.isRequired,

	    /**
	     * Override the inline-styles of the badge element.
	     */
	    badgeStyle: _react2.default.PropTypes.object,

	    /**
	     * The badge will be added relativelty to this node.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * If true, the badge will use the primary badge colors.
	     */
	    primary: _react2.default.PropTypes.bool,

	    /**
	     * If true, the badge will use the secondary badge colors.
	     */
	    secondary: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	  mixins: [_stylePropable2.default],
	  getDefaultProps: function getDefaultProps() {
	    return {
	      primary: false,
	      secondary: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    var theme = this.state.muiTheme.badge;

	    var badgeBackgroundColor = this.props.primary ? theme.primaryColor : this.props.secondary ? theme.secondaryColor : theme.color;

	    var badgeTextColor = this.props.primary ? theme.primaryTextColor : this.props.secondary ? theme.secondaryTextColor : theme.textColor;

	    var radius = 12;
	    var radius2x = Math.floor(2 * radius);

	    return {
	      root: {
	        position: 'relative',
	        display: 'inline-block',
	        padding: [radius2x + 'px', radius2x + 'px', radius + 'px', radius + 'px'].join(' ')
	      },
	      badge: {
	        display: 'flex',
	        flexDirection: 'row',
	        flexWrap: 'wrap',
	        justifyContent: 'center',
	        alignContent: 'center',
	        alignItems: 'center',
	        position: 'absolute',
	        top: 0,
	        right: 0,
	        fontWeight: _typography2.default.fontWeightMedium,
	        fontSize: radius,
	        width: radius2x,
	        height: radius2x,
	        borderRadius: '50%',
	        backgroundColor: badgeBackgroundColor,
	        color: badgeTextColor
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var style = _props.style;
	    var children = _props.children;
	    var badgeContent = _props.badgeContent;
	    var badgeStyle = _props.badgeStyle;

	    var other = _objectWithoutProperties(_props, ['style', 'children', 'badgeContent', 'badgeStyle']);

	    var styles = this.getStyles();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles.root, style) }),
	      children,
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.badge, badgeStyle) },
	        badgeContent
	      )
	    );
	  }
	});

	exports.default = Badge;
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _raisedButton = __webpack_require__(140);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	var _action_bar = __webpack_require__(143);

	var _action_bar2 = _interopRequireDefault(_action_bar);

	var _search_box = __webpack_require__(146);

	var _search_box2 = _interopRequireDefault(_search_box);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchArea = function (_React$Component) {
	  _inherits(SearchArea, _React$Component);

	  function SearchArea(props) {
	    _classCallCheck(this, SearchArea);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchArea).call(this, props));
	  }

	  _createClass(SearchArea, [{
	    key: 'handleSearch',
	    value: function handleSearch() {
	      var _this2 = this;

	      this.props.addResults([]);
	      this.props.startSearch();
	      window.fetch('http://dev2.ndexbio.org/rest/network/search/0/50', { mode: 'cors',
	        method: 'post',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({ searchString: this.props.query })
	      }).then(function (R) {
	        return R.json();
	      }).then(function (D) {
	        _this2.props.endSearch();
	        _this2.props.addResults(D);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        height: "100%",
	        width: "45%",
	        float: "left"
	      };
	      var boundry = {
	        height: '85%',
	        width: '90%',
	        margin: '5%',
	        marginBottom: '4%'
	      };
	      var searchButton = {
	        width: '90%',
	        margin: '5%',
	        marginTop: 0
	      };
	      return _react2.default.createElement(
	        'div',
	        { style: style },
	        _react2.default.createElement(
	          _paper2.default,
	          { style: boundry, zDepth: 2 },
	          _react2.default.createElement(_action_bar2.default, null),
	          _react2.default.createElement(_search_box2.default, { query: this.props.query, updateQuery: this.props.updateQuery })
	        ),
	        _react2.default.createElement(_raisedButton2.default, {
	          onClick: this.handleSearch.bind(this),
	          label: 'Search',
	          primary: true,
	          style: searchButton })
	      );
	    }
	  }]);

	  return SearchArea;
	}(_react2.default.Component);

	exports.default = SearchArea;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "search_area.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _fontIcon = __webpack_require__(102);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _toolbar = __webpack_require__(144);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _toolbarGroup = __webpack_require__(145);

	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Actionbar = function (_React$Component) {
	  _inherits(Actionbar, _React$Component);

	  function Actionbar(props) {
	    _classCallCheck(this, Actionbar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Actionbar).call(this, props));
	  }

	  _createClass(Actionbar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _toolbar2.default,
	        null,
	        _react2.default.createElement(_toolbarGroup2.default, { firstChild: true, float: 'left' }),
	        _react2.default.createElement(_toolbarGroup2.default, { firstChild: true, float: 'right' })
	      );
	    }
	  }]);

	  return Actionbar;
	}(_react2.default.Component);

	exports.default = Actionbar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "action_bar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Toolbar = _react2.default.createClass({
	  displayName: 'Toolbar',

	  propTypes: {
	    /**
	     * Can be a `ToolbarGroup` to render a group of related items.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Do not apply `desktopGutter` to the `Toolbar`.
	     */
	    noGutter: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      noGutter: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        backgroundColor: this.getTheme().backgroundColor,
	        height: this.getTheme().height,
	        width: '100%',
	        padding: this.props.noGutter ? 0 : '0px ' + this.getSpacing().desktopGutter + 'px'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'className', 'style']);

	    var styles = this.getStyles();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      children
	    );
	  }
	});

	exports.default = Toolbar;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _colors = __webpack_require__(71);

	var _colors2 = _interopRequireDefault(_colors);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ToolbarGroup = _react2.default.createClass({
	  displayName: 'ToolbarGroup',

	  propTypes: {
	    /**
	     * Can be any node or number of nodes.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Set this to true for if the `ToolbarGroup` is the first child of `Toolbar`
	     * to prevent setting the left gap.
	     */
	    firstChild: _react2.default.PropTypes.bool,

	    /**
	     * Determines the side the `ToolbarGroup` will snap to. Either 'left' or 'right'.
	     */
	    float: _react2.default.PropTypes.oneOf(['left', 'right']),

	    /**
	     * Set this to true for if the `ToolbarGroup` is the last child of `Toolbar`
	     * to prevent setting the right gap.
	     */
	    lastChild: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      firstChild: false,
	      float: 'left',
	      lastChild: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    var _props = this.props;
	    var firstChild = _props.firstChild;
	    var float = _props.float;
	    var lastChild = _props.lastChild;

	    var marginHorizontal = this.getSpacing().desktopGutter;
	    var marginVertical = (this.getTheme().height - this.state.muiTheme.button.height) / 2;
	    var styles = {
	      root: {
	        float: float,
	        position: 'relative',
	        marginLeft: firstChild ? -marginHorizontal : undefined,
	        marginRight: lastChild ? -marginHorizontal : undefined
	      },
	      dropDownMenu: {
	        root: {
	          float: 'left',
	          color: _colors2.default.lightBlack, // removes hover color change, we want to keep it
	          display: 'inline-block',
	          marginRight: this.getSpacing().desktopGutter
	        },
	        controlBg: {
	          backgroundColor: this.getTheme().menuHoverColor,
	          borderRadius: 0
	        },
	        underline: {
	          display: 'none'
	        }
	      },
	      button: {
	        float: 'left',
	        margin: marginVertical + 'px ' + marginHorizontal + 'px',
	        position: 'relative'
	      },
	      icon: {
	        root: {
	          float: 'left',
	          cursor: 'pointer',
	          color: this.getTheme().iconColor,
	          lineHeight: this.getTheme().height + 'px',
	          paddingLeft: this.getSpacing().desktopGutter
	        },
	        hover: {
	          color: _colors2.default.darkBlack
	        }
	      },
	      span: {
	        float: 'left',
	        color: this.getTheme().iconColor,
	        lineHeight: this.getTheme().height + 'px'
	      }
	    };

	    return styles;
	  },
	  _handleMouseEnterDropDownMenu: function _handleMouseEnterDropDownMenu(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },
	  _handleMouseLeaveDropDownMenu: function _handleMouseLeaveDropDownMenu(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  },
	  _handleMouseEnterFontIcon: function _handleMouseEnterFontIcon(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },
	  _handleMouseLeaveFontIcon: function _handleMouseLeaveFontIcon(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var children = _props2.children;
	    var className = _props2.className;
	    var style = _props2.style;

	    var other = _objectWithoutProperties(_props2, ['children', 'className', 'style']);

	    var styles = this.getStyles();
	    var newChildren = _react2.default.Children.map(children, function (currentChild) {
	      if (!currentChild) {
	        return null;
	      }
	      if (!currentChild.type) {
	        return currentChild;
	      }
	      switch (currentChild.type.displayName) {
	        case 'DropDownMenu':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.dropDownMenu.root, currentChild.props.style),
	            styleControlBg: styles.dropDownMenu.controlBg,
	            styleUnderline: styles.dropDownMenu.underline
	          });
	        case 'DropDownIcon':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles({ float: 'left' }, currentChild.props.style),
	            iconStyle: styles.icon.root,
	            onMouseEnter: _this._handleMouseEnterDropDownMenu,
	            onMouseLeave: _this._handleMouseLeaveDropDownMenu
	          });
	        case 'RaisedButton':
	        case 'FlatButton':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.button, currentChild.props.style)
	          });
	        case 'FontIcon':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.icon.root, currentChild.props.style),
	            onMouseEnter: _this._handleMouseEnterFontIcon,
	            onMouseLeave: _this._handleMouseLeaveFontIcon
	          });
	        case 'ToolbarSeparator':
	        case 'ToolbarTitle':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.span, currentChild.props.style)
	          });
	        default:
	          return currentChild;
	      }
	    }, this);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      newChildren
	    );
	  }
	});

	exports.default = ToolbarGroup;
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_React$Component) {
	  _inherits(SearchBox, _React$Component);

	  function SearchBox(props) {
	    _classCallCheck(this, SearchBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBox).call(this, props));
	  }

	  _createClass(SearchBox, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.props.updateQuery(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        margin: '2%',
	        marginBottom: 0,
	        height: '80%',
	        width: '95%',
	        resize: 'none',
	        border: 0,
	        fontSize: 20,
	        overflowY: 'auto'
	      };
	      return _react2.default.createElement('textarea', { style: style, placeholder: 'Enter your search terms here...', value: this.props.query, onChange: this.handleChange.bind(this) });
	    }
	  }]);

	  return SearchBox;
	}(_react2.default.Component);

	exports.default = SearchBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "search_box.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tabs = __webpack_require__(148);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tab = __webpack_require__(151);

	var _tab2 = _interopRequireDefault(_tab);

	var _viz_toolbar = __webpack_require__(152);

	var _viz_toolbar2 = _interopRequireDefault(_viz_toolbar);

	var _spinner = __webpack_require__(153);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _list = __webpack_require__(155);

	var _list2 = _interopRequireDefault(_list);

	var _grid = __webpack_require__(156);

	var _grid2 = _interopRequireDefault(_grid);

	var _stream = __webpack_require__(159);

	var _stream2 = _interopRequireDefault(_stream);

	var _props = __webpack_require__(180);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResultArea = function (_React$Component) {
	  _inherits(ResultArea, _React$Component);

	  function ResultArea(props) {
	    _classCallCheck(this, ResultArea);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResultArea).call(this, props));
	  }

	  _createClass(ResultArea, [{
	    key: 'getViz',
	    value: function getViz(viz, listname, networks) {
	      if (this.props.isSearching && listname == "Search") {
	        return _react2.default.createElement(_spinner2.default, null);
	      }
	      switch (viz) {
	        case "stream":
	          return _react2.default.createElement(_stream2.default, { networks: networks, addToCart: this.props.addToCart });
	        case "props":
	          return _react2.default.createElement(_props2.default, { networks: networks });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var style = {
	        height: "100%",
	        width: "55%",
	        float: "right"
	      };
	      var tabs = [];
	      this.props.networkLists.forEach(function (list, name) {
	        tabs.push(_react2.default.createElement(
	          _tab2.default,
	          { label: name, key: name },
	          _react2.default.createElement(_viz_toolbar2.default, { vizSwitch: _this2.props.vizSwitch }),
	          _this2.getViz(_this2.props.viz, name, list)
	        ));
	      });
	      if (tabs.length > 0) {
	        var page = _react2.default.createElement(
	          _tabs2.default,
	          null,
	          tabs
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        { style: style },
	        page
	      );
	    }
	  }]);

	  return ResultArea;
	}(_react2.default.Component);

	exports.default = ResultArea;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "result_area.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _tabTemplate = __webpack_require__(149);

	var _tabTemplate2 = _interopRequireDefault(_tabTemplate);

	var _inkBar = __webpack_require__(150);

	var _inkBar2 = _interopRequireDefault(_inkBar);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tabs = _react2.default.createClass({
	  displayName: 'Tabs',

	  propTypes: {
	    /**
	     * Should be used to pass `Tab` components.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The css class name of the content's container.
	     */
	    contentContainerClassName: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the content's container.
	     */
	    contentContainerStyle: _react2.default.PropTypes.object,

	    /**
	     * Specify initial visible tab index.
	     * Initial selected index is set by default to 0.
	     * If initialSelectedIndex is set but larger than the total amount of specified tabs,
	     * initialSelectedIndex will revert back to default.
	     */
	    initialSelectedIndex: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the InkBar.
	     */
	    inkBarStyle: _react2.default.PropTypes.object,

	    /**
	     * Called when the selected value change.
	     */
	    onChange: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the tab-labels container.
	     */
	    tabItemContainerStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the default tab template used to wrap the content of each tab element.
	     */
	    tabTemplate: _react2.default.PropTypes.func,

	    /**
	     * Makes Tabs controllable and selects the tab whose value prop matches this prop.
	     */
	    value: _react2.default.PropTypes.any
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialSelectedIndex: 0,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var valueLink = this.getValueLink(this.props);
	    var initialIndex = this.props.initialSelectedIndex;

	    return {
	      selectedIndex: valueLink.value !== undefined ? this._getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(newProps, nextContext) {
	    var valueLink = this.getValueLink(newProps);
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (valueLink.value !== undefined) {
	      this.setState({ selectedIndex: this._getSelectedIndex(newProps) });
	    }

	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getEvenWidth: function getEvenWidth() {
	    return parseInt(window.getComputedStyle(_reactDom2.default.findDOMNode(this)).getPropertyValue('width'), 10);
	  },
	  getTabCount: function getTabCount() {
	    return _react2.default.Children.count(this.props.children);
	  },

	  // Do not use outside of this component, it will be removed once valueLink is deprecated
	  getValueLink: function getValueLink(props) {
	    return props.valueLink || {
	      value: props.value,
	      requestChange: props.onChange
	    };
	  },
	  _getSelectedIndex: function _getSelectedIndex(props) {
	    var valueLink = this.getValueLink(props);
	    var selectedIndex = -1;

	    _react2.default.Children.forEach(props.children, function (tab, index) {
	      if (valueLink.value === tab.props.value) {
	        selectedIndex = index;
	      }
	    });

	    return selectedIndex;
	  },
	  _handleTabTouchTap: function _handleTabTouchTap(value, e, tab) {
	    var valueLink = this.getValueLink(this.props);
	    var tabIndex = tab.props.tabIndex;

	    if (valueLink.value && valueLink.value !== value || this.state.selectedIndex !== tabIndex) {
	      valueLink.requestChange(value, e, tab);
	    }

	    this.setState({ selectedIndex: tabIndex });

	    if (tab.props.onActive) {
	      tab.props.onActive(tab);
	    }
	  },
	  _getSelected: function _getSelected(tab, index) {
	    var valueLink = this.getValueLink(this.props);
	    return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var children = _props.children;
	    var contentContainerClassName = _props.contentContainerClassName;
	    var contentContainerStyle = _props.contentContainerStyle;
	    var initialSelectedIndex = _props.initialSelectedIndex;
	    var inkBarStyle = _props.inkBarStyle;
	    var style = _props.style;
	    var tabItemContainerStyle = _props.tabItemContainerStyle;
	    var tabTemplate = _props.tabTemplate;

	    var other = _objectWithoutProperties(_props, ['children', 'contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'style', 'tabItemContainerStyle', 'tabTemplate']);

	    var themeVariables = this.state.muiTheme.tabs;
	    var styles = {
	      tabItemContainer: {
	        margin: 0,
	        padding: 0,
	        width: '100%',
	        backgroundColor: themeVariables.backgroundColor,
	        whiteSpace: 'nowrap'
	      }
	    };

	    var valueLink = this.getValueLink(this.props);
	    var tabValue = valueLink.value;
	    var tabContent = [];

	    var width = 100 / this.getTabCount();

	    var tabs = _react2.default.Children.map(children, function (tab, index) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(tab.type && tab.type.displayName === 'Tab', 'Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.displayName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs') : undefined;

	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.') : undefined;

	      tabContent.push(tab.props.children ? _react2.default.createElement(tabTemplate || _tabTemplate2.default, {
	        key: index,
	        selected: _this._getSelected(tab, index)
	      }, tab.props.children) : undefined);

	      return _react2.default.cloneElement(tab, {
	        key: index,
	        selected: _this._getSelected(tab, index),
	        tabIndex: index,
	        width: width + '%',
	        onTouchTap: _this._handleTabTouchTap
	      });
	    });

	    var inkBar = this.state.selectedIndex !== -1 ? _react2.default.createElement(_inkBar2.default, {
	      left: width * this.state.selectedIndex + '%',
	      width: width + '%',
	      style: inkBarStyle
	    }) : null;

	    var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(style)
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.tabItemContainer, tabItemContainerStyle) },
	        tabs
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { width: inkBarContainerWidth } },
	        inkBar
	      ),
	      _react2.default.createElement(
	        'div',
	        {
	          style: this.prepareStyles(contentContainerStyle),
	          className: contentContainerClassName
	        },
	        tabContent
	      )
	    );
	  }
	});

	exports.default = Tabs;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabTemplate = function (_React$Component) {
	  _inherits(TabTemplate, _React$Component);

	  function TabTemplate() {
	    _classCallCheck(this, TabTemplate);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabTemplate).apply(this, arguments));
	  }

	  _createClass(TabTemplate, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        height: 0,
	        overflow: 'hidden',
	        width: '100%',
	        position: 'relative',
	        textAlign: 'initial'
	      };

	      if (this.props.selected) {
	        delete styles.height;
	        delete styles.overflow;
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);

	  return TabTemplate;
	}(_react2.default.Component);

	TabTemplate.propTypes = {
	  children: _react2.default.PropTypes.node,
	  selected: _react2.default.PropTypes.bool
	};
	exports.default = TabTemplate;
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var InkBar = _react2.default.createClass({
	  displayName: 'InkBar',

	  propTypes: {
	    color: _react2.default.PropTypes.string,
	    left: _react2.default.PropTypes.string.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    width: _react2.default.PropTypes.string.isRequired
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var left = _props.left;
	    var width = _props.width;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'left', 'width', 'style']);

	    var colorStyle = color ? { backgroundColor: color } : undefined;
	    var styles = this.mergeStyles({
	      left: left,
	      width: width,
	      bottom: 0,
	      display: 'block',
	      backgroundColor: this.state.muiTheme.inkBar.backgroundColor,
	      height: 2,
	      marginTop: -2,
	      position: 'relative',
	      transition: _transitions2.default.easeOut('1s', 'left')
	    }, this.props.style, colorStyle);

	    return _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(styles) },
	      ' '
	    );
	  }
	});

	exports.default = InkBar;
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _enhancedButton = __webpack_require__(89);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tab = _react2.default.createClass({
	  displayName: 'Tab',

	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
	     */
	    icon: _react2.default.PropTypes.node,

	    /**
	     * Sets the text value of the tab item to the string specified.
	     */
	    label: _react2.default.PropTypes.node,

	    /**
	     * Fired when the active tab changes by touch or tap.
	     * Use this event to specify any functionality when an active tab changes.
	     * For example - we are using this to route to home when the third tab becomes active.
	     * This function will always recieve the active tab as it\'s first argument.
	     */
	    onActive: _react2.default.PropTypes.func,

	    /**
	     * This property is overriden by the Tabs component.
	     */
	    onTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Defines if the current tab is selected or not.
	     * The Tabs component is responsible for setting this property.
	     */
	    selected: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * If value prop passed to Tabs component, this value prop is also required.
	     * It assigns a value to the tab so that it can be selected by the Tabs.
	     */
	    value: _react2.default.PropTypes.any,

	    /**
	     * This property is overriden by the Tabs component.
	     */
	    width: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleTouchTap: function _handleTouchTap(event) {
	    if (this.props.onTouchTap) {
	      this.props.onTouchTap(this.props.value, event, this);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var onActive = _props.onActive;
	    var onTouchTap = _props.onTouchTap;
	    var selected = _props.selected;
	    var style = _props.style;
	    var value = _props.value;
	    var width = _props.width;
	    var icon = _props.icon;

	    var other = _objectWithoutProperties(_props, ['label', 'onActive', 'onTouchTap', 'selected', 'style', 'value', 'width', 'icon']);

	    var textColor = selected ? this.state.muiTheme.tabs.selectedTextColor : this.state.muiTheme.tabs.textColor;

	    var styles = this.mergeStyles({
	      padding: '0px 12px',
	      height: label && icon ? 72 : 48,
	      color: textColor,
	      fontWeight: 500,
	      fontSize: 14,
	      width: width,
	      textTransform: 'uppercase'
	    }, style);

	    var iconElement = undefined;
	    if (icon && _react2.default.isValidElement(icon)) {
	      var params = {
	        style: {
	          fontSize: 24,
	          marginBottom: label ? 5 : 0,
	          display: label ? 'block' : 'inline-block',
	          color: textColor
	        }
	      };
	      // If it's svg icon set color via props
	      if (icon.type.displayName !== 'FontIcon') {
	        params.color = textColor;
	      }
	      iconElement = _react2.default.cloneElement(icon, params);
	    }

	    var rippleColor = styles.color;
	    var rippleOpacity = 0.3;

	    return _react2.default.createElement(
	      _enhancedButton2.default,
	      _extends({}, other, {
	        style: styles,
	        focusRippleColor: rippleColor,
	        touchRippleColor: rippleColor,
	        focusRippleOpacity: rippleOpacity,
	        touchRippleOpacity: rippleOpacity,
	        onTouchTap: this._handleTouchTap
	      }),
	      iconElement,
	      label
	    );
	  }
	});

	exports.default = Tab;
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _fontIcon = __webpack_require__(102);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _toolbar = __webpack_require__(144);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _toolbarGroup = __webpack_require__(145);

	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VizToolbar = function (_React$Component) {
	  _inherits(VizToolbar, _React$Component);

	  function VizToolbar(props) {
	    _classCallCheck(this, VizToolbar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VizToolbar).call(this, props));
	  }

	  _createClass(VizToolbar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      console.log(this);
	      return _react2.default.createElement(
	        _toolbar2.default,
	        null,
	        _react2.default.createElement(
	          _toolbarGroup2.default,
	          { firstChild: true, float: 'left' },
	          _react2.default.createElement(
	            _fontIcon2.default,
	            { className: 'material-icons', onClick: function onClick() {
	                _this2.props.vizSwitch("stream");
	              } },
	            'view_stream'
	          ),
	          _react2.default.createElement(
	            _fontIcon2.default,
	            { className: 'material-icons', onClick: function onClick() {
	                _this2.props.vizSwitch("props");
	              } },
	            'receipt'
	          )
	        )
	      );
	    }
	  }]);

	  return VizToolbar;
	}(_react2.default.Component);

	exports.default = VizToolbar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "viz_toolbar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _circularProgress = __webpack_require__(154);

	var _circularProgress2 = _interopRequireDefault(_circularProgress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spinner = function (_React$Component) {
	  _inherits(Spinner, _React$Component);

	  function Spinner(props) {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).call(this, props));
	  }

	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_circularProgress2.default, {
	          size: 3,
	          style: {
	            margin: '45%',
	            marginTop: '35%'
	          }
	        })
	      );
	    }
	  }]);

	  return Spinner;
	}(_react2.default.Component);

	exports.default = Spinner;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "spinner.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(30);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(52);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var CircularProgress = _react2.default.createClass({
	  displayName: 'CircularProgress',

	  propTypes: {
	    /**
	     * Override the progress's color.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * Style for inner wrapper div.
	     */
	    innerStyle: _react2.default.PropTypes.object,

	    /**
	     * The max value of progress, only works in determinate mode.
	     */
	    max: _react2.default.PropTypes.number,

	    /**
	     * The min value of progress, only works in determinate mode.
	     */
	    min: _react2.default.PropTypes.number,

	    /**
	     * The mode of show your progress, indeterminate
	     * for when there is no value for progress.
	     */
	    mode: _react2.default.PropTypes.oneOf(['determinate', 'indeterminate']),

	    /**
	     * The size of the progress.
	     */
	    size: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The value of progress, only works in determinate mode.
	     */
	    value: _react2.default.PropTypes.number
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'indeterminate',
	      value: 0,
	      min: 0,
	      max: 100,
	      size: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var wrapper = _reactDom2.default.findDOMNode(this.refs.wrapper);
	    var path = _reactDom2.default.findDOMNode(this.refs.path);

	    this._scalePath(path);
	    this._rotateWrapper(wrapper);
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.scalePathTimer);
	    clearTimeout(this.rotateWrapperTimer);
	  },
	  _getRelativeValue: function _getRelativeValue() {
	    var value = this.props.value;
	    var min = this.props.min;
	    var max = this.props.max;

	    var clampedValue = Math.min(Math.max(min, value), max);
	    var rangeValue = max - min;
	    var relValue = Math.round(clampedValue / rangeValue * 10000) / 10000;
	    return relValue * 100;
	  },

	  scalePathTimer: undefined,
	  rotateWrapperTimer: undefined,

	  _scalePath: function _scalePath(path, step) {
	    var _this = this;

	    if (this.props.mode !== 'indeterminate') return;

	    step = step || 0;
	    step %= 3;

	    if (step === 0) {
	      path.style.strokeDasharray = '1, 200';
	      path.style.strokeDashoffset = 0;
	      path.style.transitionDuration = '0ms';
	    } else if (step === 1) {
	      path.style.strokeDasharray = '89, 200';
	      path.style.strokeDashoffset = -35;
	      path.style.transitionDuration = '750ms';
	    } else {
	      path.style.strokeDasharray = '89,200';
	      path.style.strokeDashoffset = -124;
	      path.style.transitionDuration = '850ms';
	    }

	    this.scalePathTimer = setTimeout(function () {
	      return _this._scalePath(path, step + 1);
	    }, step ? 750 : 250);
	  },
	  _rotateWrapper: function _rotateWrapper(wrapper) {
	    var _this2 = this;

	    if (this.props.mode !== 'indeterminate') return;

	    _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)', this.state.muiTheme);
	    _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms', this.state.muiTheme);

	    setTimeout(function () {
	      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)', _this2.state.muiTheme);
	      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s', _this2.state.muiTheme);
	      _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear', _this2.state.muiTheme);
	    }, 50);

	    this.rotateWrapperTimer = setTimeout(function () {
	      return _this2._rotateWrapper(wrapper);
	    }, 10050);
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.rawTheme.palette;
	  },
	  getStyles: function getStyles(zoom) {
	    zoom *= 1.4;
	    var size = '50px';

	    var margin = Math.round((50 * zoom - 50) / 2);

	    if (margin < 0) margin = 0;

	    var styles = {
	      root: {
	        position: 'relative',
	        margin: margin + 'px',
	        display: 'inline-block',
	        width: size,
	        height: size
	      },
	      wrapper: {
	        width: size,
	        height: size,
	        display: 'inline-block',
	        transition: _transitions2.default.create('transform', '20s', null, 'linear')
	      },
	      svg: {
	        height: size,
	        position: 'relative',
	        transform: 'scale(' + zoom + ')',
	        width: size
	      },
	      path: {
	        strokeDasharray: '89,200',
	        strokeDashoffset: 0,
	        stroke: this.props.color || this.getTheme().primary1Color,
	        strokeLinecap: 'round',
	        transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
	      }
	    };

	    _autoPrefix2.default.set(styles.wrapper, 'transitionTimingFunction', 'linear', this.state.muiTheme);

	    if (this.props.mode === 'determinate') {
	      var relVal = this._getRelativeValue();
	      styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
	      styles.path.strokeDasharray = Math.round(relVal * 1.25) + ',200';
	    }

	    return styles;
	  },
	  render: function render() {
	    var _props = this.props;
	    var style = _props.style;
	    var innerStyle = _props.innerStyle;
	    var size = _props.size;

	    var other = _objectWithoutProperties(_props, ['style', 'innerStyle', 'size']);

	    var styles = this.getStyles(size || 1);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles.root, style) }),
	      _react2.default.createElement(
	        'div',
	        { ref: 'wrapper', style: this.prepareStyles(styles.wrapper, innerStyle) },
	        _react2.default.createElement(
	          'svg',
	          { style: this.prepareStyles(styles.svg) },
	          _react2.default.createElement('circle', {
	            ref: 'path', style: this.prepareStyles(styles.path), cx: '25',
	            cy: '25', r: '20', fill: 'none',
	            strokeWidth: '2.5', strokeMiterlimit: '10'
	          })
	        )
	      )
	    );
	  }
	});

	exports.default = CircularProgress;
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _table = __webpack_require__(118);

	var _table2 = _interopRequireDefault(_table);

	var _tableHeaderColumn = __webpack_require__(119);

	var _tableHeaderColumn2 = _interopRequireDefault(_tableHeaderColumn);

	var _tableRow = __webpack_require__(120);

	var _tableRow2 = _interopRequireDefault(_tableRow);

	var _tableHeader = __webpack_require__(121);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	var _tableRowColumn = __webpack_require__(129);

	var _tableRowColumn2 = _interopRequireDefault(_tableRowColumn);

	var _tableBody = __webpack_require__(130);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_React$Component) {
	  _inherits(List, _React$Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
	  }

	  _createClass(List, [{
	    key: 'add',
	    value: function add(network) {
	      console.log("Nothing");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var root = {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around'
	      };
	      var table = {
	        overflowY: 'auto'
	      };
	      var tiles = this.props.networks;
	      console.log(tiles);
	      return _react2.default.createElement(
	        'div',
	        { style: root },
	        _react2.default.createElement(
	          _table2.default,
	          { multiSelectable: true, style: table },
	          _react2.default.createElement(
	            _tableBody2.default,
	            null,
	            tiles.map(function (tile) {
	              return _react2.default.createElement(
	                _tableRow2.default,
	                null,
	                _react2.default.createElement(
	                  _tableRowColumn2.default,
	                  null,
	                  tile.title
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return List;
	}(_react2.default.Component);

	exports.default = List;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "list.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _gridList = __webpack_require__(157);

	var _gridList2 = _interopRequireDefault(_gridList);

	var _gridTile = __webpack_require__(158);

	var _gridTile2 = _interopRequireDefault(_gridTile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = function (_React$Component) {
	  _inherits(Grid, _React$Component);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));
	  }

	  _createClass(Grid, [{
	    key: 'render',
	    value: function render() {
	      var root = {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around'
	      };
	      var gridList = {
	        width: '100%',
	        height: '525',
	        overflowY: 'auto',
	        margin: 2
	      };
	      var tiles = this.props.networks;
	      return _react2.default.createElement(
	        'div',
	        { style: root },
	        _react2.default.createElement(
	          _gridList2.default,
	          {
	            cols: 2,
	            cellHeight: 125,
	            style: gridList },
	          tiles.map(function (tile) {
	            return _react2.default.createElement(_gridTile2.default, { style: { backgroundColor: 'grey' } });
	          })
	        )
	      );
	    }
	  }]);

	  return Grid;
	}(_react2.default.Component);

	exports.default = Grid;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grid.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var GridList = _react2.default.createClass({
	  displayName: 'GridList',

	  propTypes: {
	    /**
	     * Number of px for one cell height.
	     */
	    cellHeight: _react2.default.PropTypes.number,

	    /**
	     * Grid Tiles that will be in Grid List.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Number of columns.
	     */
	    cols: _react2.default.PropTypes.number,

	    /**
	     * Number of px for the padding/spacing between items.
	     */
	    padding: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      cols: 2,
	      padding: 4,
	      cellHeight: 180
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        margin: -this.props.padding / 2
	      },
	      item: {
	        boxSizing: 'border-box',
	        padding: this.props.padding / 2
	      }
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var cols = _props.cols;
	    var padding = _props.padding;
	    var cellHeight = _props.cellHeight;
	    var children = _props.children;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);

	    var styles = this.getStyles();

	    var mergedRootStyles = this.mergeStyles(styles.root, style);

	    var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {
	      var childCols = currentChild.props.cols || 1;
	      var childRows = currentChild.props.rows || 1;
	      var itemStyle = _this.mergeStyles(styles.item, {
	        width: 100 / cols * childCols + '%',
	        height: cellHeight * childRows + padding
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: _this.prepareStyles(itemStyle) },
	        currentChild
	      );
	    });

	    return _react2.default.createElement(
	      'div',
	      _extends({ style: this.prepareStyles(mergedRootStyles) }, other),
	      wrappedChildren
	    );
	  }
	});

	exports.default = GridList;
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var GridTile = _react2.default.createClass({
	  displayName: 'GridTile',

	  propTypes: {
	    /**
	     * An IconButton element to be used as secondary action target
	     * (primary action target is the tile itself).
	     */
	    actionIcon: _react2.default.PropTypes.element,

	    /**
	     * Position of secondary action IconButton.
	     */
	    actionPosition: _react2.default.PropTypes.oneOf(['left', 'right']),

	    /**
	     * Theoretically you can pass any node as children, but the main use case is to pass an img,
	     * in whichcase GridTile takes care of making the image "cover" available space
	     * (similar to background-size: cover or to object-fit:cover).
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Width of the tile in number of grid cells.
	     */
	    cols: _react2.default.PropTypes.number,

	    /**
	     * Either a string used as tag name for the tile root element, or a ReactComponent.
	     * This is useful when you have, for example, a custom implementation of
	     * a navigation link (that knowsabout your routes) and you want to use it as primary tile action.
	     * In case you pass a ReactComponent, please make sure that it passes all props,
	     * accepts styles overrides and render it's children.
	     */
	    rootClass: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),

	    /**
	     * Height of the tile in number of grid cells.
	     */
	    rows: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * String or element serving as subtitle (support text).
	     */
	    subtitle: _react2.default.PropTypes.node,

	    /**
	     * Title to be displayed on tile.
	     */
	    title: _react2.default.PropTypes.node,

	    /**
	     * Style used for title bar background.
	     * Useful for setting custom gradients for example
	     */
	    titleBackground: _react2.default.PropTypes.string,

	    /**
	     * Position of the title bar (container of title, subtitle and action icon).
	     */
	    titlePosition: _react2.default.PropTypes.oneOf(['top', 'bottom'])
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      titlePosition: 'bottom',
	      titleBackground: 'rgba(0, 0, 0, 0.4)',
	      actionPosition: 'right',
	      cols: 1,
	      rows: 1,
	      rootClass: 'div'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._ensureImageCover();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var _titleBar;

	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var themeVariables = this.state.muiTheme.gridTile;
	    var actionPos = this.props.actionIcon ? this.props.actionPosition : null;
	    var gutterLess = spacing.desktopGutterLess;

	    var styles = {
	      root: {
	        position: 'relative',
	        display: 'block',
	        height: '100%',
	        overflow: 'hidden'
	      },
	      titleBar: (_titleBar = {
	        position: 'absolute',
	        left: 0,
	        right: 0
	      }, _defineProperty(_titleBar, this.props.titlePosition, 0), _defineProperty(_titleBar, 'height', this.props.subtitle ? 68 : 48), _defineProperty(_titleBar, 'background', this.props.titleBackground), _defineProperty(_titleBar, 'display', 'flex'), _defineProperty(_titleBar, 'alignItems', 'center'), _titleBar),
	      titleWrap: {
	        flexGrow: 1,
	        marginLeft: actionPos !== 'left' ? gutterLess : 0,
	        marginRight: actionPos === 'left' ? gutterLess : 0,
	        color: themeVariables.textColor,
	        overflow: 'hidden'
	      },
	      title: {
	        fontSize: '16px',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        whiteSpace: 'nowrap'
	      },
	      subtitle: {
	        fontSize: '12px',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        whiteSpace: 'nowrap'
	      },
	      actionIcon: {
	        order: actionPos === 'left' ? -1 : 1
	      },
	      childImg: {
	        height: '100%',
	        transform: 'translateX(-50%)',
	        position: 'relative',
	        left: '50%'
	      }
	    };
	    return styles;
	  },
	  componeneDidUpdate: function componeneDidUpdate() {
	    this._ensureImageCover();
	  },
	  _ensureImageCover: function _ensureImageCover() {
	    var imgEl = _reactDom2.default.findDOMNode(this.refs.img);

	    if (imgEl) {
	      (function () {
	        var fit = function fit() {
	          if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
	            imgEl.style.height = 'auto';
	            imgEl.style.left = '0';
	            imgEl.style.width = '100%';
	            imgEl.style.top = '50%';
	            imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
	          }
	          imgEl.removeEventListener('load', fit);
	          imgEl = null; // prevent closure memory leak
	        };
	        if (imgEl.complete) {
	          fit();
	        } else {
	          imgEl.addEventListener('load', fit);
	        }
	      })();
	    }
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var title = _props.title;
	    var subtitle = _props.subtitle;
	    var titlePosition = _props.titlePosition;
	    var titleBackground = _props.titleBackground;
	    var actionIcon = _props.actionIcon;
	    var actionPosition = _props.actionPosition;
	    var style = _props.style;
	    var children = _props.children;
	    var rootClass = _props.rootClass;

	    var other = _objectWithoutProperties(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'actionIcon', 'actionPosition', 'style', 'children', 'rootClass']);

	    var styles = this.getStyles();

	    var mergedRootStyles = this.mergeStyles(styles.root, style);

	    var titleBar = null;

	    if (title) {
	      titleBar = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.titleBar) },
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.titleWrap) },
	          _react2.default.createElement(
	            'div',
	            { style: this.prepareStyles(styles.title) },
	            title
	          ),
	          subtitle ? _react2.default.createElement(
	            'div',
	            { style: this.prepareStyles(styles.subtitle) },
	            subtitle
	          ) : null
	        ),
	        actionIcon ? _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.actionIcon) },
	          actionIcon
	        ) : null
	      );
	    }

	    var newChildren = children;

	    // if there is an image passed as children
	    // clone it an put our styles
	    if (_react2.default.Children.count(children) === 1) {
	      newChildren = _react2.default.Children.map(children, function (child) {
	        if (child.type === 'img') {
	          return _react2.default.cloneElement(child, {
	            ref: 'img',
	            style: _this.prepareStyles(styles.childImg, child.props.style)
	          });
	        } else {
	          return child;
	        }
	      });
	    }

	    var RootTag = rootClass;
	    return _react2.default.createElement(
	      RootTag,
	      _extends({ style: this.prepareStyles(mergedRootStyles) }, other),
	      newChildren,
	      titleBar
	    );
	  }
	});

	exports.default = GridTile;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _toolbar = __webpack_require__(144);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _toolbarGroup = __webpack_require__(145);

	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);

	var _toolbarSeparator = __webpack_require__(160);

	var _toolbarSeparator2 = _interopRequireDefault(_toolbarSeparator);

	var _toolbarTitle = __webpack_require__(161);

	var _toolbarTitle2 = _interopRequireDefault(_toolbarTitle);

	var _checkbox = __webpack_require__(122);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _raisedButton = __webpack_require__(140);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	var _divider = __webpack_require__(162);

	var _divider2 = _interopRequireDefault(_divider);

	var _reactable = __webpack_require__(164);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Stream = function (_React$Component) {
	  _inherits(Stream, _React$Component);

	  function Stream(props) {
	    _classCallCheck(this, Stream);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stream).call(this, props));
	  }

	  _createClass(Stream, [{
	    key: 'add',
	    value: function add(Network) {
	      this.props.addToCart(Network);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var root = {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around',
	        height: 750,
	        overflow: 'scroll'
	      };
	      var gridList = {
	        width: '100%',
	        height: '525',
	        overflowY: 'auto',
	        margin: 2
	      };
	      var stream = this.props.networks.map(function (N) {
	        return _react2.default.createElement(
	          _paper2.default,
	          { zDepth: 1, style: { width: '96%', marginTop: '10px' } },
	          _react2.default.createElement(
	            _toolbar2.default,
	            null,
	            _react2.default.createElement(
	              _toolbarGroup2.default,
	              { float: 'right' },
	              _react2.default.createElement(_raisedButton2.default, { label: 'On NDEx', primary: true, linkButton: true,
	                href: "http://dev2.ndexbio.org/#/network/" + N.externalId,
	                style: {
	                  marginRight: 0
	                } })
	            )
	          ),
	          _react2.default.createElement(
	            'table',
	            { style: { width: '100%' } },
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    'Name:'
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    N.name
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    'Owner:'
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    N.owner
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    'Edges:'
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    N.edgeCount
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    'Nodes:'
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    N.nodeCount
	                  )
	                )
	              )
	            )
	          )
	        );
	      });

	      var table = this.props.networks.map(function (N) {
	        return _react2.default.createElement(
	          _reactable.Tr,
	          null,
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Image' },
	            _react2.default.createElement('img', { src: 'http://i.imgur.com/ieXnqQN.png?1', style: { width: 100, height: 100, backgroundColor: "grey" } })
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Name', value: N.name },
	            _react2.default.createElement(
	              'a',
	              { href: "http://dev2.ndexbio.org/#/network/" + N.externalId },
	              N.name
	            )
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Owner', value: N.owner },
	            _react2.default.createElement(
	              'a',
	              { href: "http://dev2.ndexbio.org/#/user/" + N.owner },
	              N.owner
	            )
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Edges' },
	            N.edgeCount
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Nodes' },
	            N.nodeCount
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Created' },
	            _this2.time(N.creationTime)
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Modified' },
	            _this2.time(N.modificationTime)
	          )
	        );
	      });
	      console.log(stream);
	      return _react2.default.createElement(
	        'div',
	        { style: root },
	        _react2.default.createElement(
	          _reactable.Table,
	          { sortable: true, style: { width: "100%" } },
	          table
	        )
	      );
	    }
	  }, {
	    key: 'time',
	    value: function time(T) {
	      var d = new Date(0);
	      d.setUTCSeconds(T / 1000.0);
	      return d.toLocaleDateString();
	    }
	  }]);

	  return Stream;
	}(_react2.default.Component);

	exports.default = Stream;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "stream.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ToolbarSeparator = _react2.default.createClass({
	  displayName: 'ToolbarSeparator',

	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        backgroundColor: this.getTheme().separatorColor,
	        display: 'inline-block',
	        height: this.getSpacing().desktopGutterMore,
	        marginLeft: this.getSpacing().desktopGutter,
	        position: 'relative',
	        top: (this.getTheme().height - this.getSpacing().desktopGutterMore) / 2,
	        width: 1
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'style']);

	    var styles = this.getStyles();

	    return _react2.default.createElement('span', _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }));
	  }
	});

	exports.default = ToolbarSeparator;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(28);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ToolbarTitle = _react2.default.createClass({
	  displayName: 'ToolbarTitle',

	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The text to be displayed.
	     */
	    text: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        paddingRight: this.getSpacing().desktopGutterLess,
	        lineHeight: this.getTheme().height + 'px',
	        fontSize: this.getTheme().titleFontSize + 'px',
	        display: 'inline-block',
	        position: 'relative'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var text = _props.text;

	    var other = _objectWithoutProperties(_props, ['className', 'style', 'text']);

	    var styles = this.getStyles();

	    return _react2.default.createElement(
	      'span',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      text
	    );
	  }
	});

	exports.default = ToolbarTitle;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _muiThemeable = __webpack_require__(163);

	var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

	var _styles = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * If true, the `Divider` will be indented `72px`.
	   */
	  inset: _react2.default.PropTypes.bool,

	  /**
	   * The material-ui theme applied to this component.
	   * @ignore
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  inset: false
	};

	var Divider = function Divider(props) {
	  var inset = props.inset;
	  var muiTheme = props.muiTheme;
	  var style = props.style;

	  var other = _objectWithoutProperties(props, ['inset', 'muiTheme', 'style']);

	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: muiTheme.rawTheme.palette.borderColor
	    }
	  };

	  return _react2.default.createElement('hr', _extends({}, other, { style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)) }));
	};

	Divider.displayName = 'Divider';
	Divider.propTypes = propTypes;
	Divider.defaultProps = defaultProps;
	Divider = (0, _muiThemeable2.default)(Divider);

	exports.default = Divider;
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = muiThemeable;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function muiThemeable(WrappedComponent) {
	  var MuiComponent = function MuiComponent(props, _ref) {
	    var _ref$muiTheme = _ref.muiTheme;
	    var muiTheme = _ref$muiTheme === undefined ? (0, _getMuiTheme2.default)() : _ref$muiTheme;

	    return _react2.default.createElement(WrappedComponent, _extends({}, props, { muiTheme: muiTheme }));
	  };

	  MuiComponent.displayName = getDisplayName(WrappedComponent);
	  MuiComponent.contextTypes = {
	    muiTheme: _react2.default.PropTypes.object
	  };
	  MuiComponent.childContextTypes = {
	    muiTheme: _react2.default.PropTypes.object
	  };

	  return MuiComponent;
	}
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactableTable = __webpack_require__(165);

	var _reactableTr = __webpack_require__(173);

	var _reactableTd = __webpack_require__(174);

	var _reactableTh = __webpack_require__(171);

	var _reactableTfoot = __webpack_require__(177);

	var _reactableThead = __webpack_require__(170);

	var _reactableSort = __webpack_require__(179);

	var _reactableUnsafe = __webpack_require__(169);

	_react2['default'].Children.children = function (children) {
	    return _react2['default'].Children.map(children, function (x) {
	        return x;
	    }) || [];
	};

	// Array.prototype.find polyfill - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	if (!Array.prototype.find) {
	    Object.defineProperty(Array.prototype, 'find', {
	        enumerable: false,
	        configurable: true,
	        writable: true,
	        value: function value(predicate) {
	            if (this === null) {
	                throw new TypeError('Array.prototype.find called on null or undefined');
	            }
	            if (typeof predicate !== 'function') {
	                throw new TypeError('predicate must be a function');
	            }
	            var list = Object(this);
	            var length = list.length >>> 0;
	            var thisArg = arguments[1];
	            var value;
	            for (var i = 0; i < length; i++) {
	                if (i in list) {
	                    value = list[i];
	                    if (predicate.call(thisArg, value, i, list)) {
	                        return value;
	                    }
	                }
	            }
	            return undefined;
	        }
	    });
	}

	var Reactable = { Table: _reactableTable.Table, Tr: _reactableTr.Tr, Td: _reactableTd.Td, Th: _reactableTh.Th, Tfoot: _reactableTfoot.Tfoot, Thead: _reactableThead.Thead, Sort: _reactableSort.Sort, unsafe: _reactableUnsafe.unsafe };

	exports['default'] = Reactable;

	if (typeof window !== 'undefined') {
	    window.Reactable = Reactable;
	}
	module.exports = exports['default'];


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _libFilter_props_from = __webpack_require__(166);

	var _libExtract_data_from = __webpack_require__(167);

	var _unsafe = __webpack_require__(169);

	var _thead = __webpack_require__(170);

	var _th = __webpack_require__(171);

	var _tr = __webpack_require__(173);

	var _tfoot = __webpack_require__(177);

	var _paginator = __webpack_require__(178);

	var Table = (function (_React$Component) {
	    _inherits(Table, _React$Component);

	    function Table(props) {
	        _classCallCheck(this, Table);

	        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

	        this.state = {
	            currentPage: 0,
	            currentSort: {
	                column: null,
	                direction: this.props.defaultSortDescending ? -1 : 1
	            },
	            filter: ''
	        };

	        // Set the state of the current sort to the default sort
	        if (props.sortBy !== false || props.defaultSort !== false) {
	            var sortingColumn = props.sortBy || props.defaultSort;
	            this.state.currentSort = this.getCurrentSort(sortingColumn);
	        }
	    }

	    _createClass(Table, [{
	        key: 'filterBy',
	        value: function filterBy(filter) {
	            this.setState({ filter: filter });
	        }

	        // Translate a user defined column array to hold column objects if strings are specified
	        // (e.g. ['column1'] => [{key: 'column1', label: 'column1'}])
	    }, {
	        key: 'translateColumnsArray',
	        value: function translateColumnsArray(columns) {
	            return columns.map((function (column, i) {
	                if (typeof column === 'string') {
	                    return {
	                        key: column,
	                        label: column
	                    };
	                } else {
	                    if (typeof column.sortable !== 'undefined') {
	                        var sortFunction = column.sortable === true ? 'default' : column.sortable;
	                        this._sortable[column.key] = sortFunction;
	                    }

	                    return column;
	                }
	            }).bind(this));
	        }
	    }, {
	        key: 'parseChildData',
	        value: function parseChildData(props) {
	            var data = [],
	                tfoot = undefined;

	            // Transform any children back to a data array
	            if (typeof props.children !== 'undefined') {
	                _react2['default'].Children.forEach(props.children, (function (child) {
	                    if (typeof child === 'undefined' || child === null) {
	                        return;
	                    }

	                    switch (child.type) {
	                        case _thead.Thead:
	                            break;
	                        case _tfoot.Tfoot:
	                            if (typeof tfoot !== 'undefined') {
	                                console.warn('You can only have one <Tfoot>, but more than one was specified.' + 'Ignoring all but the last one');
	                            }
	                            tfoot = child;
	                            break;
	                        case _tr.Tr:
	                            var childData = child.props.data || {};

	                            _react2['default'].Children.forEach(child.props.children, function (descendant) {
	                                // TODO
	                                /* if (descendant.type.ConvenienceConstructor === Td) { */
	                                if (typeof descendant !== 'object' || descendant == null) {
	                                    return;
	                                } else if (typeof descendant.props.column !== 'undefined') {
	                                    var value = undefined;

	                                    if (typeof descendant.props.data !== 'undefined') {
	                                        value = descendant.props.data;
	                                    } else if (typeof descendant.props.children !== 'undefined') {
	                                        value = descendant.props.children;
	                                    } else {
	                                        console.warn('exports.Td specified without ' + 'a `data` property or children, ' + 'ignoring');
	                                        return;
	                                    }

	                                    childData[descendant.props.column] = {
	                                        value: value,
	                                        props: (0, _libFilter_props_from.filterPropsFrom)(descendant.props),
	                                        __reactableMeta: true
	                                    };
	                                } else {
	                                    console.warn('exports.Td specified without a ' + '`column` property, ignoring');
	                                }
	                            });

	                            data.push({
	                                data: childData,
	                                props: (0, _libFilter_props_from.filterPropsFrom)(child.props),
	                                __reactableMeta: true
	                            });
	                            break;

	                        default:
	                            console.warn('The only possible children of <Table> are <Thead>, <Tr>, ' + 'or one <Tfoot>.');
	                    }
	                }).bind(this));
	            }

	            return { data: data, tfoot: tfoot };
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize(props) {
	            this.data = props.data || [];

	            var _parseChildData = this.parseChildData(props);

	            var data = _parseChildData.data;
	            var tfoot = _parseChildData.tfoot;

	            this.data = this.data.concat(data);
	            this.tfoot = tfoot;

	            this.initializeSorts(props);
	            this.initializeFilters(props);
	        }
	    }, {
	        key: 'initializeFilters',
	        value: function initializeFilters() {
	            this._filterable = {};
	            // Transform filterable properties into a more friendly list
	            for (var i in this.props.filterable) {
	                var column = this.props.filterable[i];
	                var columnName = undefined,
	                    filterFunction = undefined;

	                if (column instanceof Object) {
	                    if (typeof column.column !== 'undefined') {
	                        columnName = column.column;
	                    } else {
	                        console.warn('Filterable column specified without column name');
	                        continue;
	                    }

	                    if (typeof column.filterFunction === 'function') {
	                        filterFunction = column.filterFunction;
	                    } else {
	                        filterFunction = 'default';
	                    }
	                } else {
	                    columnName = column;
	                    filterFunction = 'default';
	                }

	                this._filterable[columnName] = filterFunction;
	            }
	        }
	    }, {
	        key: 'initializeSorts',
	        value: function initializeSorts() {
	            this._sortable = {};
	            // Transform sortable properties into a more friendly list
	            for (var i in this.props.sortable) {
	                var column = this.props.sortable[i];
	                var columnName = undefined,
	                    sortFunction = undefined;

	                if (column instanceof Object) {
	                    if (typeof column.column !== 'undefined') {
	                        columnName = column.column;
	                    } else {
	                        console.warn('Sortable column specified without column name');
	                        return;
	                    }

	                    if (typeof column.sortFunction === 'function') {
	                        sortFunction = column.sortFunction;
	                    } else {
	                        sortFunction = 'default';
	                    }
	                } else {
	                    columnName = column;
	                    sortFunction = 'default';
	                }

	                this._sortable[columnName] = sortFunction;
	            }
	        }
	    }, {
	        key: 'getCurrentSort',
	        value: function getCurrentSort(column) {
	            var columnName = undefined,
	                sortDirection = undefined;

	            if (column instanceof Object) {
	                if (typeof column.column !== 'undefined') {
	                    columnName = column.column;
	                } else {
	                    console.warn('Default column specified without column name');
	                    return;
	                }

	                if (typeof column.direction !== 'undefined') {
	                    if (column.direction === 1 || column.direction === 'asc') {
	                        sortDirection = 1;
	                    } else if (column.direction === -1 || column.direction === 'desc') {
	                        sortDirection = -1;
	                    } else {
	                        var defaultDirection = this.props.defaultSortDescending ? 'descending' : 'ascending';

	                        console.warn('Invalid default sort specified. Defaulting to ' + defaultDirection);
	                        sortDirection = this.props.defaultSortDescending ? -1 : 1;
	                    }
	                } else {
	                    sortDirection = this.props.defaultSortDescending ? -1 : 1;
	                }
	            } else {
	                columnName = column;
	                sortDirection = this.props.defaultSortDescending ? -1 : 1;
	            }

	            return {
	                column: columnName,
	                direction: sortDirection
	            };
	        }
	    }, {
	        key: 'updateCurrentSort',
	        value: function updateCurrentSort(sortBy) {
	            if (sortBy !== false && sortBy.column !== this.state.currentSort.column && sortBy.direction !== this.state.currentSort.direction) {

	                this.setState({ currentSort: this.getCurrentSort(sortBy) });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.initialize(this.props);
	            this.sortByCurrentSort();
	            this.filterBy(this.props.filterBy);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.initialize(nextProps);
	            this.updateCurrentSort(nextProps.sortBy);
	            this.sortByCurrentSort();
	            this.filterBy(nextProps.filterBy);
	        }
	    }, {
	        key: 'applyFilter',
	        value: function applyFilter(filter, children) {
	            // Helper function to apply filter text to a list of table rows
	            filter = filter.toLowerCase();
	            var matchedChildren = [];

	            for (var i = 0; i < children.length; i++) {
	                var data = children[i].props.data;

	                for (var filterColumn in this._filterable) {
	                    if (typeof data[filterColumn] !== 'undefined') {
	                        // Default filter
	                        if (typeof this._filterable[filterColumn] === 'undefined' || this._filterable[filterColumn] === 'default') {
	                            if ((0, _libExtract_data_from.extractDataFrom)(data, filterColumn).toString().toLowerCase().indexOf(filter) > -1) {
	                                matchedChildren.push(children[i]);
	                                break;
	                            }
	                        } else {
	                            // Apply custom filter
	                            if (this._filterable[filterColumn]((0, _libExtract_data_from.extractDataFrom)(data, filterColumn).toString(), filter)) {
	                                matchedChildren.push(children[i]);
	                                break;
	                            }
	                        }
	                    }
	                }
	            }

	            return matchedChildren;
	        }
	    }, {
	        key: 'sortByCurrentSort',
	        value: function sortByCurrentSort() {
	            // Apply a sort function according to the current sort in the state.
	            // This allows us to perform a default sort even on a non sortable column.
	            var currentSort = this.state.currentSort;

	            if (currentSort.column === null) {
	                return;
	            }

	            this.data.sort((function (a, b) {
	                var keyA = (0, _libExtract_data_from.extractDataFrom)(a, currentSort.column);
	                keyA = (0, _unsafe.isUnsafe)(keyA) ? keyA.toString() : keyA || '';
	                var keyB = (0, _libExtract_data_from.extractDataFrom)(b, currentSort.column);
	                keyB = (0, _unsafe.isUnsafe)(keyB) ? keyB.toString() : keyB || '';

	                // Default sort
	                if (typeof this._sortable[currentSort.column] === 'undefined' || this._sortable[currentSort.column] === 'default') {

	                    // Reverse direction if we're doing a reverse sort
	                    if (keyA < keyB) {
	                        return -1 * currentSort.direction;
	                    }

	                    if (keyA > keyB) {
	                        return 1 * currentSort.direction;
	                    }

	                    return 0;
	                } else {
	                    // Reverse columns if we're doing a reverse sort
	                    if (currentSort.direction === 1) {
	                        return this._sortable[currentSort.column](keyA, keyB);
	                    } else {
	                        return this._sortable[currentSort.column](keyB, keyA);
	                    }
	                }
	            }).bind(this));
	        }
	    }, {
	        key: 'onSort',
	        value: function onSort(column) {
	            // Don't perform sort on unsortable columns
	            if (typeof this._sortable[column] === 'undefined') {
	                return;
	            }

	            var currentSort = this.state.currentSort;

	            if (currentSort.column === column) {
	                currentSort.direction *= -1;
	            } else {
	                currentSort.column = column;
	                currentSort.direction = this.props.defaultSortDescending ? -1 : 1;
	            }

	            // Set the current sort and pass it to the sort function
	            this.setState({ currentSort: currentSort });
	            this.sortByCurrentSort();

	            if (typeof this.props.onSort === 'function') {
	                this.props.onSort(currentSort);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            var children = [];
	            var columns = undefined;
	            var userColumnsSpecified = false;

	            var firstChild = null;

	            if (this.props.children && this.props.children.length > 0 && this.props.children[0].type === _thead.Thead) {
	                firstChild = this.props.children[0];
	            } else if (typeof this.props.children !== 'undefined' && this.props.children.type === _thead.Thead) {
	                firstChild = this.props.children;
	            }

	            if (firstChild !== null) {
	                columns = _thead.Thead.getColumns(firstChild);
	            } else {
	                columns = this.props.columns || [];
	            }

	            if (columns.length > 0) {
	                userColumnsSpecified = true;
	                columns = this.translateColumnsArray(columns);
	            }

	            // Build up table rows
	            if (this.data && typeof this.data.map === 'function') {
	                // Build up the columns array
	                children = children.concat(this.data.map((function (rawData, i) {
	                    var data = rawData;
	                    var props = {};
	                    if (rawData.__reactableMeta === true) {
	                        data = rawData.data;
	                        props = rawData.props;
	                    }

	                    // Loop through the keys in each data row and build a td for it
	                    for (var k in data) {
	                        if (data.hasOwnProperty(k)) {
	                            // Update the columns array with the data's keys if columns were not
	                            // already specified
	                            if (userColumnsSpecified === false) {
	                                (function () {
	                                    var column = {
	                                        key: k,
	                                        label: k
	                                    };

	                                    // Only add a new column if it doesn't already exist in the columns array
	                                    if (columns.find(function (element) {
	                                        return element.key === column.key;
	                                    }) === undefined) {
	                                        columns.push(column);
	                                    }
	                                })();
	                            }
	                        }
	                    }

	                    return _react2['default'].createElement(_tr.Tr, _extends({ columns: columns, key: i, data: data }, props));
	                }).bind(this)));
	            }

	            if (this.props.sortable === true) {
	                for (var i = 0; i < columns.length; i++) {
	                    this._sortable[columns[i].key] = 'default';
	                }
	            }

	            // Determine if we render the filter box
	            var filtering = false;
	            if (this.props.filterable && Array.isArray(this.props.filterable) && this.props.filterable.length > 0 && !this.props.hideFilterInput) {
	                filtering = true;
	            }

	            // Apply filters
	            var filteredChildren = children;
	            if (this.state.filter !== '') {
	                filteredChildren = this.applyFilter(this.state.filter, filteredChildren);
	            }

	            // Determine pagination properties and which columns to display
	            var itemsPerPage = 0;
	            var pagination = false;
	            var numPages = undefined;
	            var currentPage = this.state.currentPage;
	            var pageButtonLimit = this.props.pageButtonLimit || 10;

	            var currentChildren = filteredChildren;
	            if (this.props.itemsPerPage > 0) {
	                itemsPerPage = this.props.itemsPerPage;
	                numPages = Math.ceil(filteredChildren.length / itemsPerPage);

	                if (currentPage > numPages - 1) {
	                    currentPage = numPages - 1;
	                }

	                pagination = true;
	                currentChildren = filteredChildren.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
	            }

	            // Manually transfer props
	            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

	            var noDataText = this.props.noDataText ? _react2['default'].createElement(
	                'tr',
	                { className: 'reactable-no-data' },
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: columns.length },
	                    this.props.noDataText
	                )
	            ) : null;

	            return _react2['default'].createElement(
	                'table',
	                props,
	                columns && columns.length > 0 ? _react2['default'].createElement(_thead.Thead, { columns: columns,
	                    filtering: filtering,
	                    onFilter: function (filter) {
	                        _this.setState({ filter: filter });
	                        if (_this.props.onFilter) {
	                            _this.props.onFilter(filter);
	                        }
	                    },
	                    filterPlaceholder: this.props.filterPlaceholder,
	                    currentFilter: this.state.filter,
	                    sort: this.state.currentSort,
	                    sortableColumns: this._sortable,
	                    onSort: this.onSort.bind(this),
	                    key: 'thead' }) : null,
	                _react2['default'].createElement(
	                    'tbody',
	                    { className: 'reactable-data', key: 'tbody' },
	                    currentChildren.length > 0 ? currentChildren : noDataText
	                ),
	                pagination === true ? _react2['default'].createElement(_paginator.Paginator, { colSpan: columns.length,
	                    pageButtonLimit: pageButtonLimit,
	                    numPages: numPages,
	                    currentPage: currentPage,
	                    onPageChange: function (page) {
	                        _this.setState({ currentPage: page });
	                        if (_this.props.onPageChange) {
	                            _this.props.onPageChange(page);
	                        }
	                    },
	                    previousPageLabel: this.props.previousPageLabel,
	                    nextPageLabel: this.props.nextPageLabel,
	                    key: 'paginator' }) : null,
	                this.tfoot
	            );
	        }
	    }]);

	    return Table;
	})(_react2['default'].Component);

	exports.Table = Table;

	Table.defaultProps = {
	    sortBy: false,
	    defaultSort: false,
	    defaultSortDescending: false,
	    itemsPerPage: 0,
	    filterBy: '',
	    hideFilterInput: false
	};


/***/ },
/* 166 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.filterPropsFrom = filterPropsFrom;
	var internalProps = {
	    column: true,
	    columns: true,
	    sortable: true,
	    filterable: true,
	    sortBy: true,
	    defaultSort: true,
	    itemsPerPage: true,
	    childNode: true,
	    data: true,
	    children: true
	};

	function filterPropsFrom(baseProps) {
	    baseProps = baseProps || {};
	    var props = {};
	    for (var key in baseProps) {
	        if (!(key in internalProps)) {
	            props[key] = baseProps[key];
	        }
	    }

	    return props;
	}


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.extractDataFrom = extractDataFrom;

	var _stringable = __webpack_require__(168);

	function extractDataFrom(key, column) {
	    var value;
	    if (typeof key !== 'undefined' && key !== null && key.__reactableMeta === true) {
	        value = key.data[column];
	    } else {
	        value = key[column];
	    }

	    if (typeof value !== 'undefined' && value !== null && value.__reactableMeta === true) {
	        value = typeof value.props.value !== 'undefined' && value.props.value !== null ? value.props.value : value.value;
	    }

	    return (0, _stringable.stringable)(value) ? value : '';
	}


/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.stringable = stringable;

	function stringable(thing) {
	    return thing !== null && typeof thing !== 'undefined' && typeof (thing.toString === 'function');
	}


/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.unsafe = unsafe;
	exports.isUnsafe = isUnsafe;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Unsafe = (function () {
	    function Unsafe(content) {
	        _classCallCheck(this, Unsafe);

	        this.content = content;
	    }

	    _createClass(Unsafe, [{
	        key: "toString",
	        value: function toString() {
	            return this.content;
	        }
	    }]);

	    return Unsafe;
	})();

	function unsafe(str) {
	    return new Unsafe(str);
	}

	;

	function isUnsafe(obj) {
	    return obj instanceof Unsafe;
	}

	;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _th = __webpack_require__(171);

	var _filterer = __webpack_require__(172);

	var _libFilter_props_from = __webpack_require__(166);

	var Thead = (function (_React$Component) {
	    _inherits(Thead, _React$Component);

	    function Thead() {
	        _classCallCheck(this, Thead);

	        _get(Object.getPrototypeOf(Thead.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Thead, [{
	        key: 'handleClickTh',
	        value: function handleClickTh(column) {
	            this.props.onSort(column.key);
	        }
	    }, {
	        key: 'handleKeyDownTh',
	        value: function handleKeyDownTh(column, event) {
	            if (event.keyCode === 13) {
	                this.props.onSort(column.key);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // Declare the list of Ths
	            var Ths = [];
	            for (var index = 0; index < this.props.columns.length; index++) {
	                var column = this.props.columns[index];
	                var thClass = 'reactable-th-' + column.key.replace(/\s+/g, '-').toLowerCase();
	                var sortClass = '';

	                if (this.props.sortableColumns[column.key]) {
	                    sortClass += 'reactable-header-sortable ';
	                }

	                if (this.props.sort.column === column.key) {
	                    sortClass += 'reactable-header-sort';
	                    if (this.props.sort.direction === 1) {
	                        sortClass += '-asc';
	                    } else {
	                        sortClass += '-desc';
	                    }
	                }

	                if (sortClass.length > 0) {
	                    thClass += ' ' + sortClass;
	                }

	                if (typeof column.props === 'object' && typeof column.props.className === 'string') {
	                    thClass += ' ' + column.props.className;
	                }

	                Ths.push(_react2['default'].createElement(
	                    _th.Th,
	                    _extends({}, column.props, {
	                        className: thClass,
	                        key: index,
	                        onClick: this.handleClickTh.bind(this, column),
	                        onKeyDown: this.handleKeyDownTh.bind(this, column),
	                        role: 'button',
	                        tabIndex: '0' }),
	                    column.label
	                ));
	            }

	            // Manually transfer props
	            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

	            return _react2['default'].createElement(
	                'thead',
	                props,
	                this.props.filtering === true ? _react2['default'].createElement(_filterer.Filterer, {
	                    colSpan: this.props.columns.length,
	                    onFilter: this.props.onFilter,
	                    placeholder: this.props.filterPlaceholder,
	                    value: this.props.currentFilter
	                }) : null,
	                _react2['default'].createElement(
	                    'tr',
	                    { className: 'reactable-column-header' },
	                    Ths
	                )
	            );
	        }
	    }], [{
	        key: 'getColumns',
	        value: function getColumns(component) {
	            // Can't use React.Children.map since that doesn't return a proper array
	            var columns = [];
	            _react2['default'].Children.forEach(component.props.children, function (th) {
	                var column = {};
	                if (typeof th.props !== 'undefined') {
	                    column.props = (0, _libFilter_props_from.filterPropsFrom)(th.props);

	                    // use the content as the label & key
	                    if (typeof th.props.children !== 'undefined') {
	                        column.label = th.props.children;
	                        column.key = column.label;
	                    }

	                    // the key in the column attribute supersedes the one defined previously
	                    if (typeof th.props.column === 'string') {
	                        column.key = th.props.column;

	                        // in case we don't have a label yet
	                        if (typeof column.label === 'undefined') {
	                            column.label = column.key;
	                        }
	                    }
	                }

	                if (typeof column.key === 'undefined') {
	                    throw new TypeError('<th> must have either a "column" property or a string ' + 'child');
	                } else {
	                    columns.push(column);
	                }
	            });

	            return columns;
	        }
	    }]);

	    return Thead;
	})(_react2['default'].Component);

	exports.Thead = Thead;
	;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _unsafe = __webpack_require__(169);

	var _libFilter_props_from = __webpack_require__(166);

	var Th = (function (_React$Component) {
	    _inherits(Th, _React$Component);

	    function Th() {
	        _classCallCheck(this, Th);

	        _get(Object.getPrototypeOf(Th.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Th, [{
	        key: 'render',
	        value: function render() {
	            var childProps = undefined;

	            if ((0, _unsafe.isUnsafe)(this.props.children)) {
	                return _react2['default'].createElement('th', _extends({}, (0, _libFilter_props_from.filterPropsFrom)(this.props), {
	                    dangerouslySetInnerHTML: { __html: this.props.children.toString() } }));
	            } else {
	                return _react2['default'].createElement(
	                    'th',
	                    (0, _libFilter_props_from.filterPropsFrom)(this.props),
	                    this.props.children
	                );
	            }
	        }
	    }]);

	    return Th;
	})(_react2['default'].Component);

	exports.Th = Th;
	;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var FiltererInput = (function (_React$Component) {
	    _inherits(FiltererInput, _React$Component);

	    function FiltererInput() {
	        _classCallCheck(this, FiltererInput);

	        _get(Object.getPrototypeOf(FiltererInput.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(FiltererInput, [{
	        key: 'onChange',
	        value: function onChange() {
	            this.props.onFilter(_reactDom2['default'].findDOMNode(this).value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('input', { type: 'text',
	                className: 'reactable-filter-input',
	                placeholder: this.props.placeholder,
	                value: this.props.value,
	                onKeyUp: this.onChange.bind(this),
	                onChange: this.onChange.bind(this) });
	        }
	    }]);

	    return FiltererInput;
	})(_react2['default'].Component);

	exports.FiltererInput = FiltererInput;
	;

	var Filterer = (function (_React$Component2) {
	    _inherits(Filterer, _React$Component2);

	    function Filterer() {
	        _classCallCheck(this, Filterer);

	        _get(Object.getPrototypeOf(Filterer.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Filterer, [{
	        key: 'render',
	        value: function render() {
	            if (typeof this.props.colSpan === 'undefined') {
	                throw new TypeError('Must pass a colSpan argument to Filterer');
	            }

	            return _react2['default'].createElement(
	                'tr',
	                { className: 'reactable-filterer' },
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: this.props.colSpan },
	                    _react2['default'].createElement(FiltererInput, { onFilter: this.props.onFilter,
	                        value: this.props.value,
	                        placeholder: this.props.placeholder })
	                )
	            );
	        }
	    }]);

	    return Filterer;
	})(_react2['default'].Component);

	exports.Filterer = Filterer;
	;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _td = __webpack_require__(174);

	var _libTo_array = __webpack_require__(176);

	var _libFilter_props_from = __webpack_require__(166);

	var Tr = (function (_React$Component) {
	    _inherits(Tr, _React$Component);

	    function Tr() {
	        _classCallCheck(this, Tr);

	        _get(Object.getPrototypeOf(Tr.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Tr, [{
	        key: 'render',
	        value: function render() {
	            var children = (0, _libTo_array.toArray)(_react2['default'].Children.children(this.props.children));

	            if (this.props.data && this.props.columns && typeof this.props.columns.map === 'function') {
	                if (typeof children.concat === 'undefined') {
	                    console.log(children);
	                }

	                children = children.concat(this.props.columns.map((function (column, i) {
	                    if (this.props.data.hasOwnProperty(column.key)) {
	                        var value = this.props.data[column.key];
	                        var props = {};

	                        if (typeof value !== 'undefined' && value !== null && value.__reactableMeta === true) {
	                            props = value.props;
	                            value = value.value;
	                        }

	                        return _react2['default'].createElement(
	                            _td.Td,
	                            _extends({ column: column, key: column.key }, props),
	                            value
	                        );
	                    } else {
	                        return _react2['default'].createElement(_td.Td, { column: column, key: column.key });
	                    }
	                }).bind(this)));
	            }

	            // Manually transfer props
	            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

	            return _react2['default'].DOM.tr(props, children);
	        }
	    }]);

	    return Tr;
	})(_react2['default'].Component);

	exports.Tr = Tr;
	;

	Tr.childNode = _td.Td;
	Tr.dataType = 'object';


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _libIs_react_component = __webpack_require__(175);

	var _libStringable = __webpack_require__(168);

	var _unsafe = __webpack_require__(169);

	var Td = (function (_React$Component) {
	    _inherits(Td, _React$Component);

	    function Td() {
	        _classCallCheck(this, Td);

	        _get(Object.getPrototypeOf(Td.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Td, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            if (typeof this.props.handleClick === 'function') {
	                return this.props.handleClick(e, this);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var tdProps = {
	                className: this.props.className,
	                onClick: this.handleClick.bind(this)
	            };

	            if (typeof this.props.style !== 'undefined') {
	                tdProps.style = this.props.style;
	            }

	            // Attach any properties on the column to this Td object to allow things like custom event handlers
	            if (typeof this.props.column === 'object') {
	                for (var key in this.props.column) {
	                    if (key !== 'key' && key !== 'name') {
	                        tdProps[key] = this.props.column[key];
	                    }
	                }
	            }

	            var data = this.props.data;

	            if (typeof this.props.children !== 'undefined') {
	                if ((0, _libIs_react_component.isReactComponent)(this.props.children)) {
	                    data = this.props.children;
	                } else if (typeof this.props.data === 'undefined' && (0, _libStringable.stringable)(this.props.children)) {
	                    data = this.props.children.toString();
	                }

	                if ((0, _unsafe.isUnsafe)(this.props.children)) {
	                    tdProps.dangerouslySetInnerHTML = { __html: this.props.children.toString() };
	                } else {
	                    tdProps.children = data;
	                }
	            }

	            return _react2['default'].createElement('td', tdProps);
	        }
	    }]);

	    return Td;
	})(_react2['default'].Component);

	exports.Td = Td;
	;


/***/ },
/* 175 */
/***/ function(module, exports) {

	// this is a bit hacky - it'd be nice if React exposed an API for this
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.isReactComponent = isReactComponent;

	function isReactComponent(thing) {
	    return thing !== null && typeof thing === 'object' && typeof thing.props !== 'undefined';
	}


/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toArray = toArray;

	function toArray(obj) {
	    var ret = [];
	    for (var attr in obj) {
	        ret[attr] = obj;
	    }

	    return ret;
	}


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var Tfoot = (function (_React$Component) {
	    _inherits(Tfoot, _React$Component);

	    function Tfoot() {
	        _classCallCheck(this, Tfoot);

	        _get(Object.getPrototypeOf(Tfoot.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Tfoot, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('tfoot', this.props);
	        }
	    }]);

	    return Tfoot;
	})(_react2['default'].Component);

	exports.Tfoot = Tfoot;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function pageHref(num) {
	    return '#page-' + (num + 1);
	}

	var Paginator = (function (_React$Component) {
	    _inherits(Paginator, _React$Component);

	    function Paginator() {
	        _classCallCheck(this, Paginator);

	        _get(Object.getPrototypeOf(Paginator.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Paginator, [{
	        key: 'handlePrevious',
	        value: function handlePrevious(e) {
	            e.preventDefault();
	            this.props.onPageChange(this.props.currentPage - 1);
	        }
	    }, {
	        key: 'handleNext',
	        value: function handleNext(e) {
	            e.preventDefault();
	            this.props.onPageChange(this.props.currentPage + 1);
	        }
	    }, {
	        key: 'handlePageButton',
	        value: function handlePageButton(page, e) {
	            e.preventDefault();
	            this.props.onPageChange(page);
	        }
	    }, {
	        key: 'renderPrevious',
	        value: function renderPrevious() {
	            if (this.props.currentPage > 0) {
	                return _react2['default'].createElement(
	                    'a',
	                    { className: 'reactable-previous-page',
	                        href: pageHref(this.props.currentPage - 1),
	                        onClick: this.handlePrevious.bind(this) },
	                    this.props.previousPageLabel || 'Previous'
	                );
	            }
	        }
	    }, {
	        key: 'renderNext',
	        value: function renderNext() {
	            if (this.props.currentPage < this.props.numPages - 1) {
	                return _react2['default'].createElement(
	                    'a',
	                    { className: 'reactable-next-page',
	                        href: pageHref(this.props.currentPage + 1),
	                        onClick: this.handleNext.bind(this) },
	                    this.props.nextPageLabel || 'Next'
	                );
	            }
	        }
	    }, {
	        key: 'renderPageButton',
	        value: function renderPageButton(className, pageNum) {

	            return _react2['default'].createElement(
	                'a',
	                { className: className,
	                    key: pageNum,
	                    href: pageHref(pageNum),
	                    onClick: this.handlePageButton.bind(this, pageNum) },
	                pageNum + 1
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (typeof this.props.colSpan === 'undefined') {
	                throw new TypeError('Must pass a colSpan argument to Paginator');
	            }

	            if (typeof this.props.numPages === 'undefined') {
	                throw new TypeError('Must pass a non-zero numPages argument to Paginator');
	            }

	            if (typeof this.props.currentPage === 'undefined') {
	                throw new TypeError('Must pass a currentPage argument to Paginator');
	            }

	            var pageButtons = [];
	            var pageButtonLimit = this.props.pageButtonLimit;
	            var currentPage = this.props.currentPage;
	            var numPages = this.props.numPages;
	            var lowerHalf = Math.round(pageButtonLimit / 2);
	            var upperHalf = pageButtonLimit - lowerHalf;

	            for (var i = 0; i < this.props.numPages; i++) {
	                var showPageButton = false;
	                var pageNum = i;
	                var className = "reactable-page-button";
	                if (currentPage === i) {
	                    className += " reactable-current-page";
	                }
	                pageButtons.push(this.renderPageButton(className, pageNum));
	            }

	            if (currentPage - pageButtonLimit + lowerHalf > 0) {
	                if (currentPage > numPages - lowerHalf) {
	                    pageButtons.splice(0, numPages - pageButtonLimit);
	                } else {
	                    pageButtons.splice(0, currentPage - pageButtonLimit + lowerHalf);
	                }
	            }

	            if (numPages - currentPage > upperHalf) {
	                pageButtons.splice(pageButtonLimit, pageButtons.length - pageButtonLimit);
	            }

	            return _react2['default'].createElement(
	                'tbody',
	                { className: 'reactable-pagination' },
	                _react2['default'].createElement(
	                    'tr',
	                    null,
	                    _react2['default'].createElement(
	                        'td',
	                        { colSpan: this.props.colSpan },
	                        this.renderPrevious(),
	                        pageButtons,
	                        this.renderNext()
	                    )
	                )
	            );
	        }
	    }]);

	    return Paginator;
	})(_react2['default'].Component);

	exports.Paginator = Paginator;
	;


/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Sort = {
	    Numeric: function Numeric(a, b) {
	        var valA = parseFloat(a.toString().replace(/,/g, ''));
	        var valB = parseFloat(b.toString().replace(/,/g, ''));

	        // Sort non-numeric values alphabetically at the bottom of the list
	        if (isNaN(valA) && isNaN(valB)) {
	            valA = a;
	            valB = b;
	        } else {
	            if (isNaN(valA)) {
	                return 1;
	            }
	            if (isNaN(valB)) {
	                return -1;
	            }
	        }

	        if (valA < valB) {
	            return -1;
	        }
	        if (valA > valB) {
	            return 1;
	        }

	        return 0;
	    },

	    NumericInteger: function NumericInteger(a, b) {
	        if (isNaN(a) || isNaN(b)) {
	            return a > b ? 1 : -1;
	        }

	        return a - b;
	    },

	    Currency: function Currency(a, b) {
	        // Parse out dollar signs, then do a regular numeric sort
	        a = a.replace(/[^0-9\.\-\,]+/g, '');
	        b = b.replace(/[^0-9\.\-\,]+/g, '');

	        return exports.Sort.Numeric(a, b);
	    },

	    Date: (function (_Date) {
	        function Date(_x, _x2) {
	            return _Date.apply(this, arguments);
	        }

	        Date.toString = function () {
	            return _Date.toString();
	        };

	        return Date;
	    })(function (a, b) {
	        // Note: this function tries to do a standard javascript string -> date conversion
	        // If you need more control over the date string format, consider using a different
	        // date library and writing your own function
	        var valA = Date.parse(a);
	        var valB = Date.parse(b);

	        // Handle non-date values with numeric sort
	        // Sort non-numeric values alphabetically at the bottom of the list
	        if (isNaN(valA) || isNaN(valB)) {
	            return exports.Sort.Numeric(a, b);
	        }

	        if (valA > valB) {
	            return 1;
	        }
	        if (valB > valA) {
	            return -1;
	        }

	        return 0;
	    }),

	    CaseInsensitive: function CaseInsensitive(a, b) {
	        return a.toLowerCase().localeCompare(b.toLowerCase());
	    }
	};
	exports.Sort = Sort;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _paper = __webpack_require__(26);

	var _paper2 = _interopRequireDefault(_paper);

	var _toolbar = __webpack_require__(144);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _toolbarGroup = __webpack_require__(145);

	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);

	var _toolbarSeparator = __webpack_require__(160);

	var _toolbarSeparator2 = _interopRequireDefault(_toolbarSeparator);

	var _toolbarTitle = __webpack_require__(161);

	var _toolbarTitle2 = _interopRequireDefault(_toolbarTitle);

	var _checkbox = __webpack_require__(122);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _raisedButton = __webpack_require__(140);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	var _divider = __webpack_require__(162);

	var _divider2 = _interopRequireDefault(_divider);

	var _reactable = __webpack_require__(164);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Props = function (_React$Component) {
	  _inherits(Props, _React$Component);

	  function Props(props) {
	    _classCallCheck(this, Props);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Props).call(this, props));
	  }

	  _createClass(Props, [{
	    key: 'add',
	    value: function add(Network) {
	      this.props.addToCart(Network);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var root = {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around',
	        height: 750,
	        overflow: 'scroll'
	      };
	      var gridList = {
	        width: '100%',
	        height: '525',
	        overflowY: 'auto',
	        margin: 2
	      };
	      var table = this.props.networks.map(function (N) {
	        return _react2.default.createElement(
	          _reactable.Tr,
	          null,
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Name', value: N.name },
	            _react2.default.createElement(
	              'a',
	              { href: "http://dev2.ndexbio.org/#/network/" + N.externalId },
	              N.name
	            )
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Owner', value: N.owner },
	            _react2.default.createElement(
	              'a',
	              { href: "http://dev2.ndexbio.org/#/user/" + N.owner },
	              N.owner
	            )
	          ),
	          _react2.default.createElement(
	            _reactable.Td,
	            { column: 'Properties' },
	            _react2.default.createElement(_reactable.Table, { style: { width: "100%" }, data: N.properties })
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { style: root },
	        _react2.default.createElement(
	          _reactable.Table,
	          { sortable: true, style: { width: "100%" } },
	          table
	        )
	      );
	    }
	  }]);

	  return Props;
	}(_react2.default.Component);

	exports.default = Props;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "props.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactAddonsUpdate = __webpack_require__(50);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _lodash = __webpack_require__(54);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _getMuiTheme = __webpack_require__(53);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import deprecatedExport from '../utils/deprecatedExport';

	exports.default = // deprecatedExport(
	{
	  getMuiTheme: _getMuiTheme2.default,
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, spacing) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { spacing: { $set: spacing } }));
	  },
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, palette) {
	    var newPalette = (0, _lodash2.default)(muiTheme.baseTheme.palette, palette);
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { palette: { $set: newPalette } }));
	  },
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, fontFamily) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { fontFamily: { $set: fontFamily } }));
	  }
	}; // ,
	//  'material-ui/lib/styles/theme-manager',
	//  'material-ui/lib/styles/themeManager'
	//);

	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = networkFinder;
	exports.vizSwitch = vizSwitch;
	exports.updateQuery = updateQuery;
	exports.startSearch = startSearch;
	exports.endSearch = endSearch;
	exports.updateUser = updateUser;
	exports.updatePass = updatePass;
	exports.login = login;
	exports.logout = logout;
	exports.addToCart = addToCart;
	exports.removeFromCart = removeFromCart;

	var _actions = __webpack_require__(183);

	var _immutable = __webpack_require__(184);

	var defaultState = (0, _immutable.Map)({
	  style: {},
	  topbar: true,
	  query: "",
	  isSearching: false,
	  user: "",
	  pass: "",
	  logged_in: false,
	  selected_viz: "props",
	  selected_tab: "",
	  results: (0, _immutable.Set)(),
	  cart: (0, _immutable.Set)()
	});

	function networkFinder() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	  var action = arguments[1];

	  if (!state.hydrated) {
	    state = defaultState.merge((0, _immutable.Map)(state)).merge((0, _immutable.Map)({ hydrated: true }));
	  }
	  switch (action.type) {
	    case _actions.VIZ_SWITCH:
	      return state.set('selected_viz', action.viz.slice(0));
	    case _actions.UPDATE_QUERY:
	      return state.set('query', action.query.slice(0));
	    case _actions.START_SEARCH:
	      return state.set('isSearching', true);
	    case _actions.END_SEARCH:
	      return state.set('isSearching', false);
	    case _actions.UPDATE_USER:
	      return state.set('user', action.user.slice(0));
	    case _actions.UPDATE_PASS:
	      return state.set('pass', action.pass.slice(0));
	    case _actions.LOGIN:
	      return state.set('logged_in', true);
	    case _actions.LOGOUT:
	      return state.set('logged_in', false);
	    case _actions.ADD_TO_CART:
	      return state.set('cart', state.get('cart').add(action.network));
	    case _actions.REMOVE_FROM_CART:
	      return state.set('cart', state.get('cart').remove(action.network));
	    default:
	      return state;
	  }
	}

	function vizSwitch(nextViz) {
	  return {
	    type: _actions.VIZ_SWITCH,
	    viz: nextViz
	  };
	}

	function updateQuery(nextQuery) {
	  return {
	    type: _actions.UPDATE_QUERY,
	    query: nextQuery
	  };
	}

	function startSearch() {
	  return {
	    type: _actions.START_SEARCH
	  };
	}

	function endSearch() {
	  return {
	    type: _actions.END_SEARCH
	  };
	}

	function updateUser(user) {
	  return {
	    type: _actions.UPDATE_USER,
	    user: user
	  };
	}

	function updatePass(pass) {
	  return {
	    type: _actions.UPDATE_PASS,
	    pass: pass
	  };
	}

	function login() {
	  return {
	    type: _actions.LOGIN
	  };
	}

	function logout() {
	  return {
	    type: _actions.LOGOUT
	  };
	}

	function addToCart(network) {
	  return {
	    type: _actions.ADD_TO_CART,
	    network: network
	  };
	}

	function removeFromCart(network) {
	  return {
	    type: _actions.REMOVE_FROM_CART,
	    network: network
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "network_finder_reducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VIZ_SWITCH = exports.VIZ_SWITCH = "VIZ_SWITCH";
	var UPDATE_QUERY = exports.UPDATE_QUERY = "UPDATE_QUERY";
	var START_SEARCH = exports.START_SEARCH = "START_SEARCH";
	var ADD_RESULTS = exports.ADD_RESULTS = "ADD_RESULTS";
	var END_SEARCH = exports.END_SEARCH = "END_SEARCH";
	var UPDATE_USER = exports.UPDATE_USER = "UPDATE_USER";
	var UPDATE_PASS = exports.UPDATE_PASS = "UPDATE_PASS";
	var LOGIN = exports.LOGIN = "LOGIN";
	var LOGOUT = exports.LOGOUT = "LOGOUT";
	var ADD_TO_CART = exports.ADD_TO_CART = "ADD_TO_CART";
	var REMOVE_FROM_CART = exports.REMOVE_FROM_CART = "REMOVE_FROM_CART";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/root/Code/src/network-finder/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/root/Code/src/network-finder/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = networkLists;
	exports.addResults = addResults;

	var _actions = __webpack_require__(183);

	var _immutable = __webpack_require__(184);

	var defaultNetworkLists = (0, _immutable.Map)({});

	function networkLists() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultNetworkLists : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.ADD_RESULTS:
	      return state.set('Results', action.results);
	    default:
	      return state;
	  }
	}

	function addResults(searchResults) {
	  return {
	    type: _actions.ADD_RESULTS,
	    results: searchResults
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/root/Code/src/network-finder/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "network_lists_reducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(189)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(188)();
	// imports


	// module
	exports.push([module.id, "body {\n  font-family: 'Roboto', sans-serif; }\n\ntextarea:focus {\n  outline: 0; }\n", ""]);

	// exports


/***/ },
/* 188 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;