(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcToast"] = factory();
	else
		root["vcToast"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(26)('wks')
  , uid        = __webpack_require__(27)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 1 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(10)
  , createDesc = __webpack_require__(24);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 5 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 7 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 8 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , toPrimitive    = __webpack_require__(60)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys')
  , uid    = __webpack_require__(27);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 12 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(46)
  , defined = __webpack_require__(8);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

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
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 19 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 21 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(49)
  , $export        = __webpack_require__(43)
  , redefine       = __webpack_require__(55)
  , hide           = __webpack_require__(2)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(3)
  , $iterCreate    = __webpack_require__(47)
  , setToStringTag = __webpack_require__(25)
  , getPrototypeOf = __webpack_require__(52)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 27 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(23)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(2)
  , Iterators     = __webpack_require__(3)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(32)
module.exports = __webpack_require__(68)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(35)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Toast.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Toast.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Toast.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Toast.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Toast.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-e85c9ea6&file=ToastItem.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./ToastItem.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-e85c9ea6&file=ToastItem.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./ToastItem.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-e8b9d80c&file=Toast.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Toast.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-e8b9d80c&file=Toast.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Toast.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".vc-toast-item-component {\n  width: auto;\n  white-space: nowrap;\n  display: inline-block;\n  vertical-align: middle;\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  z-index: 1080;\n}\n.vc-toast-item-component.stack {\n  position: static;\n  display: block!important;\n  margin: 3px;\n}\n.vc-toast-item-component.stack .toast-content {\n  right: 0;\n}\n.vc-toast-item-component .toast-content {\n  position: relative;\n  right: 50%;\n  padding: 7px 16px;\n  border-radius: 6px;\n  border: 1px solid #d9d9d9;\n  box-shadow: 0 1px 8px rgba(99, 99, 99, 0.2);\n  background: #fff;\n  display: block;\n}\n.vc-toast-item-component .toast-content i,\n.vc-toast-item-component .toast-content .toast-message {\n  font-size: 14px;\n  line-height: 18px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.vc-toast-item-component .toast-content i.info {\n  color: #2facf7;\n}\n.vc-toast-item-component .toast-content i.success {\n  color: #87d068;\n}\n.vc-toast-item-component .toast-content i.danger {\n  color: #f50;\n}\n.vc-toast-item-component .toast-content i.warning {\n  color: #fa0;\n}\n.toast-transition {\n  display: inline-block;\n}\n.toast-enter {\n  -webkit-animation: bounceInDown .3s;\n  animation: bounceInDown .3s;\n}\n.toast-enter.stack {\n  -webkit-animation: bounceInRight .3s;\n  animation: bounceInRight .3s;\n}\n.toast-leave {\n  -webkit-animation: fadeOutUp .3s;\n  animation: fadeOutUp .3s;\n}\n@-webkit-keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -50px, 0);\n    transform: translate3d(0, -50px, 0);\n  }\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n/* stack mode animation */\n@-webkit-keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n", ""]);

// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".vc-toast-component.stack {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n", ""]);

// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-toast-component\" :class=\"{ 'stack': stack }\" :style=\"{ 'top': cTop, 'right': cRight }\">\n        <template v-for=\"t in ts\">\n            <slot>\n            <vc-toast-item\n                :id=\"t._uuid\"\n                :message=\"t.message\"\n                :duration=\"t.duration\"\n                :type=\"t.type\"\n                :icon=\"t.icon\"\n            >\n            </vc-toast-item>\n            </slot>\n        </template>\n    </div>";

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-toast-item-component\"\n        v-if=\"show\"\n        transition=\"toast\"\n        :class=\"{ 'stack': stack }\"\n        :style=\"{ 'top': cTop, 'right': cRight }\"\n    >\n        <div class=\"toast-content\">\n            <i v-if=\"type === 'info' && !icon\" :class=\"[ 'glyphicon', 'glyphicon-cloud', type ]\"></i>\n            <i v-if=\"type === 'success' && !icon\" :class=\"[ 'glyphicon', 'glyphicon-ok', type ]\"></i>\n            <i v-if=\"type === 'danger' && !icon\" :class=\"[ 'glyphicon', 'glyphicon-remove', type ]\"></i>\n            <i v-if=\"type === 'warning' && !icon\" :class=\"['glyphicon', 'glyphicon-off', type ]\"></i>\n            <i v-if=\"icon\" :class=\"[ 'glyphicon', `glyphicon-${icon}` ]\"></i>\n            <span class=\"toast-message\"><slot>{{ message }}</slot></span>\n        </div>\n    </div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(28);
module.exports = __webpack_require__(62);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(28);
module.exports = __webpack_require__(63);

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(58)
  , toIndex   = __webpack_require__(57);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(42)
  , hide      = __webpack_require__(2)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(22)(function(){
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(50)
  , descriptor     = __webpack_require__(24)
  , setToStringTag = __webpack_require__(25)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(4)
  , dPs         = __webpack_require__(51)
  , enumBugKeys = __webpack_require__(21)
  , IE_PROTO    = __webpack_require__(11)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(10)
  , anObject = __webpack_require__(4)
  , getKeys  = __webpack_require__(54);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(59)
  , IE_PROTO    = __webpack_require__(11)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(41)(false)
  , IE_PROTO     = __webpack_require__(11)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(53)
  , enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12)
  , defined   = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(12)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(18)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(3);
module.exports = __webpack_require__(5).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4)
  , get      = __webpack_require__(61);
module.exports = __webpack_require__(5).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(18)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(3);
module.exports = __webpack_require__(5).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(40)
  , step             = __webpack_require__(48)
  , Iterators        = __webpack_require__(3)
  , toIObject        = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _isIterable2 = __webpack_require__(66);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(65);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(67);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _ToastItem = __webpack_require__(70);

var _ToastItem2 = _interopRequireDefault(_ToastItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'vc-toast',
    props: {
        toasts: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        stack: {
            type: Boolean,
            default: false
        },
        top: String,
        right: String,
        duration: [Number, String] // 全局设置duration，优先级大于子元素默认duraiton，小于快捷函数调用传入
    },
    components: {
        vcToastItem: _ToastItem2.default
    },
    computed: {
        ts: function ts() {
            return this.toasts.map(function (toast) {
                // KEY: 避免重置导致追踪失败
                if (!toast['_uuid']) {
                    toast['_uuid'] = Date.now();
                }
                return toast;
            });
        },
        cTop: function cTop() {
            if (this.top == null || this.top === '') {
                return null;
            }
            if (!isNaN(this.top)) {
                return this.top + 'px';
            }
            return this.top;
        },
        cRight: function cRight() {
            if (this.right == null || this.right === '') {
                return null;
            }
            if (!isNaN(this.right)) {
                return this.right + 'px';
            }
            return this.right;
        }
    },
    ready: function ready() {
        var _this = this;

        this.info = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            args.unshift('info');
            _this.showToast(args);
        };
        this.success = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            args.unshift('success');
            _this.showToast(args);
        };
        this.warning = function () {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            args.unshift('warning');
            _this.showToast(args);
        };
        this.danger = function () {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            args.unshift('danger');
            _this.showToast(args);
        };
        // export to window
        window.t = this;
        window.Toast = this;
    },

    methods: {
        // showToast (type, message, duration = DEFAULT_DURATION, icon) {
        showToast: function showToast(options) {
            var _options = (0, _slicedToArray3.default)(options, 4);

            var type = _options[0];
            var message = _options[1];
            var duration = _options[2];
            var icon = _options[3];

            if (isNaN(duration)) {
                var _ref = [duration, icon];
                icon = _ref[0];
                duration = _ref[1];
            }
            var toast = { type: type, message: message, duration: duration, icon: icon };
            this.toasts.push(toast);
        }
    }
};
// </script>
// <template>
//     <div class="vc-toast-component" :class="{ 'stack': stack }" :style="{ 'top': cTop, 'right': cRight }">
//         <template v-for="t in ts">
//             <slot>
//             <vc-toast-item
//                 :id="t._uuid"
//                 :message="t.message"
//                 :duration="t.duration"
//                 :type="t.type"
//                 :icon="t.icon"
//             >
//             </vc-toast-item>
//             </slot>
//         </template>
//     </div>
// </template>

// <style>
// .vc-toast-component {
//     &.stack {
//         position: absolute;
//         top: 0;
//         right: 0;
//     }
// }
// </style>

// <script>

/***/ },
/* 69 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <div class="vc-toast-item-component"
//         v-if="show"
//         transition="toast"
//         :class="{ 'stack': stack }"
//         :style="{ 'top': cTop, 'right': cRight }"
//     >
//         <div class="toast-content">
//             <i v-if="type === 'info' && !icon" :class="[ 'glyphicon', 'glyphicon-cloud', type ]"></i>
//             <i v-if="type === 'success' && !icon" :class="[ 'glyphicon', 'glyphicon-ok', type ]"></i>
//             <i v-if="type === 'danger' && !icon" :class="[ 'glyphicon', 'glyphicon-remove', type ]"></i>
//             <i v-if="type === 'warning' && !icon" :class="['glyphicon', 'glyphicon-off', type ]"></i>
//             <i v-if="icon" :class="[ 'glyphicon', `glyphicon-${icon}` ]"></i>
//             <span class="toast-message"><slot>{{ message }}</slot></span>
//         </div>
//     </div>
// </template>

// <style lang="less">
// @blue: #2facf7;
// @yellow: #fa0;
// @red: #f50;
// @green: #87d068;
// .vc-toast-item-component {
//     width: auto;
//     white-space: nowrap;
//     display: inline-block;
//     vertical-align: middle;
//     position: fixed;
//     top: 20%;
//     left: 50%;
//     z-index: 1080;
//     // 定位想用transform，但是和animation.css里的样式冲突，只能在.toast-content里right: 50%了

//     // 堆叠模式下的样式重置
//     &.stack {
//         position: static;
//         display: block!important;
//         margin: 3px;

//         .toast-content {
//             right: 0;
//         }
//     }

//     .toast-content {
//         position: relative;
//         right: 50%;
//         padding: 7px 16px;
//         border-radius: 6px;
//         border: 1px solid #d9d9d9;
//         box-shadow: 0 1px 8px hsla(0, 0%, 39%, .2);
//         background: #fff;
//         display: block;

//         i,
//         .toast-message {
//             font-size: 14px;
//             line-height: 18px;
//             display: inline-block;
//             vertical-align: middle;
//         }
//         i.info {
//             color: @blue;
//         }
//         i.success {
//             color: @green;
//         }
//         i.danger {
//             color: @red;
//         }
//         i.warning {
//             color: @yellow;
//         }
//     }
// }
// .toast-transition {
//     display: inline-block;
// }
// .toast-enter {
//     -webkit-animation: bounceInDown .3s;
//     animation: bounceInDown .3s;

//     &.stack {
//         -webkit-animation: bounceInRight .3s;
//         animation: bounceInRight .3s;
//     }
// }
// .toast-leave {
//     -webkit-animation: fadeOutUp .3s;
//     animation: fadeOutUp .3s;
// }

// @-webkit-keyframes bounceInDown {
//   from, 60%, 75%, 90%, to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }

//   0% {
//     opacity: 0;
//     -webkit-transform: translate3d(0, -3000px, 0);
//     transform: translate3d(0, -3000px, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 25px, 0);
//     transform: translate3d(0, 25px, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(0, -10px, 0);
//     transform: translate3d(0, -10px, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(0, -50px, 0);
//     transform: translate3d(0, -50px, 0);
//   }

//   to {
//     -webkit-transform: none;
//     transform: none;
//   }
// }

// @keyframes bounceInDown {
//   from, 60%, 75%, 90%, to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }

//   0% {
//     opacity: 0;
//     -webkit-transform: translate3d(0, -3000px, 0);
//     transform: translate3d(0, -3000px, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 25px, 0);
//     transform: translate3d(0, 25px, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(0, -10px, 0);
//     transform: translate3d(0, -10px, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(0, 5px, 0);
//     transform: translate3d(0, 5px, 0);
//   }

//   to {
//     -webkit-transform: none;
//     transform: none;
//   }
// }

// @-webkit-keyframes fadeOutUp {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, -100%, 0);
//     transform: translate3d(0, -100%, 0);
//   }
// }

// @keyframes fadeOutUp {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, -100%, 0);
//     transform: translate3d(0, -100%, 0);
//   }
// }

// /* stack mode animation */
// @-webkit-keyframes bounceInRight {
//   from, 60%, 75%, 90%, to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }

//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(3000px, 0, 0);
//     transform: translate3d(3000px, 0, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(-25px, 0, 0);
//     transform: translate3d(-25px, 0, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(10px, 0, 0);
//     transform: translate3d(10px, 0, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(-5px, 0, 0);
//     transform: translate3d(-5px, 0, 0);
//   }

//   to {
//     -webkit-transform: none;
//     transform: none;
//   }
// }

// @keyframes bounceInRight {
//   from, 60%, 75%, 90%, to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }

//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(3000px, 0, 0);
//     transform: translate3d(3000px, 0, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(-25px, 0, 0);
//     transform: translate3d(-25px, 0, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(10px, 0, 0);
//     transform: translate3d(10px, 0, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(-5px, 0, 0);
//     transform: translate3d(-5px, 0, 0);
//   }

//   to {
//     -webkit-transform: none;
//     transform: none;
//   }
// }
// </style>

// <script>
var DEFAULT_DURATION = 2;

var ToastItem = {
    name: 'vc-toast-item',
    props: {
        id: [Number, String],
        message: String,
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: [Number, String]
        },
        icon: String
    },
    data: function data() {
        return {
            stack: true,
            show: false,
            cTop: null,
            cRight: null
        };
    },
    created: function created() {
        if (!this.duration) {
            this.duration = this.$parent.duration || DEFAULT_DURATION;
        }
        this.show = true;
        this.cTop = this.$parent.cTop;
        this.stack = this.$parent.stack;
        var right = this.$parent.cRight;
        if (this.stack) {
            this.cRight = right;
        } else {
            if (right) {
                this.cRight = null;
                console.warn('[vcToast warn]: prop `right` is stack mode only!');
            }
        }
    },

    watch: {
        show: function show(val) {
            var _this = this;

            if (val) {
                if (this.duration) {
                    (function () {
                        var find = false;
                        setTimeout(function () {
                            var ts = _this.$parent.toasts;
                            ts.forEach(function (t, index) {
                                if (t._uuid === _this.id) {
                                    ts.splice(index, 1);
                                    // NOTE: put this here to avoid TypeError: this.op is not a function
                                    _this.show = false;
                                    find = true;
                                }
                            });
                            if (!find) {
                                _this.show = false;
                            }
                        }, _this.duration * 1000);
                    })();
                }
            }
        },
        duration: function duration(val) {
            if (val > 10) {
                console.warn('pay attention, the unit of duration is second, now ' + this.duration + ' may be too...');
            }
        }
    }
};
exports.default = ToastItem;
// </script>

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(31)
module.exports = __webpack_require__(69)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(36)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ToastItem.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ToastItem.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./ToastItem.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ToastItem.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./ToastItem.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Toast = __webpack_require__(30);

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Toast2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map