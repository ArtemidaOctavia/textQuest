/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html {\\r\\n    font-family: \\\"Courier New\\\";\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: lightgray;\\r\\n}\\r\\n\\r\\n.inventory-holder {\\r\\n    height: 58%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.skills-holder {\\r\\n    height: 58%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.skills-holder {\\r\\n    height: 58%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.inventory-item {\\r\\n    display: inline-block;\\r\\n    width: 15%;\\r\\n    margin: 10px;\\r\\n    border: 3px solid black;\\r\\n}\\r\\n\\r\\n.inventory-item:hover {\\r\\n    cursor: pointer;\\r\\n    color: gray;\\r\\n    border-color: gray;\\r\\n}\\r\\n\\r\\n.inventory-item-name {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.inventory-item-picture {\\r\\n    width: 100%;\\r\\n    max-height: 90px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.backToMenu {\\r\\n    background-color: darkgray;\\r\\n    float: left;\\r\\n    clear: both;\\r\\n    margin-bottom: 10px;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.backToMenu:hover {\\r\\n    text-decoration: underline;\\r\\n    cursor: pointer;\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    height: 600px;\\r\\n    width: 800px;\\r\\n    border: 1px solid black;\\r\\n    background-color: lightgray;\\r\\n}\\r\\n\\r\\n.menu-buttons {\\r\\n    margin-top: 20%;\\r\\n    margin-left: 40%;\\r\\n}\\r\\n\\r\\n.menu-button {\\r\\n    background-color: darkgray;\\r\\n    display: inline-block;\\r\\n    float: left;\\r\\n    clear: both;\\r\\n    margin-bottom: 30px;\\r\\n    padding: 10px;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.menu-button:hover {\\r\\n    cursor: pointer;\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n.game-holder {\\r\\n    height: 800px;\\r\\n    width: 1220px;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n.left-side-holder {\\r\\n    position: absolute;\\r\\n    display: inline-block;\\r\\n\\r\\n    height: 99%;\\r\\n    width: 46%;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.right-side-holder {\\r\\n    left: 47%;\\r\\n    position: absolute;\\r\\n    display: inline-block;\\r\\n\\r\\n    height: 99%;\\r\\n    width: 51%;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.description-holder {\\r\\n    height: 58%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.options-holder {\\r\\n    height: 37%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.illustration-holder {\\r\\n    height: 69%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    border: 1px solid black;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n\\r\\n.status-holder {\\r\\n    height: 26%;\\r\\n    width: 95%;\\r\\n    display: inline-block;\\r\\n    margin-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    margin-top: 5px;\\r\\n    border: 1px solid black;\\r\\n}\\r\\n\\r\\n.options {\\r\\n\\r\\n}\\r\\n\\r\\n.option {\\r\\n    background-color: darkgray;\\r\\n    display: inline-block;\\r\\n    float: left;\\r\\n    clear: both;\\r\\n    margin-bottom: 10px;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.option:hover {\\r\\n    text-decoration: underline;\\r\\n    cursor: pointer;\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n.image {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.status-button {\\r\\n    display: inline-block;\\r\\n    clear: none;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n.indicator {\\r\\n    display: block;\\r\\n    clear: both;\\r\\n    margin-left: 5px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n    display: none;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/content/effects.js":
/*!********************************!*\
  !*** ./src/content/effects.js ***!
  \********************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"effects\", function() { return effects; });\n/* harmony import */ var _playerStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerStatus */ \"./src/content/playerStatus.js\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills */ \"./src/content/skills.js\");\n/* harmony import */ var _utility_killChildren__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/killChildren */ \"./src/utility/killChildren.js\");\n/* harmony import */ var _utility_renderScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/renderScene */ \"./src/utility/renderScene.js\");\n/* harmony import */ var _utility_changeStatusIndicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/changeStatusIndicators */ \"./src/utility/changeStatusIndicators.js\");\n/* harmony import */ var _utility_killPlayerIfExhausted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/killPlayerIfExhausted */ \"./src/utility/killPlayerIfExhausted.js\");\n/* harmony import */ var _utility_getRandomDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/getRandomDirection */ \"./src/utility/getRandomDirection.js\");\n/* harmony import */ var _utility_domElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/domElements */ \"./src/utility/domElements.js\");\n/* harmony import */ var _utility_setItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility/setItem */ \"./src/utility/setItem.js\");\n/* harmony import */ var _utility_getRandomKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility/getRandomKey */ \"./src/utility/getRandomKey.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items */ \"./src/content/items.js\");\n/* harmony import */ var _utility_getSkillInDom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility/getSkillInDom */ \"./src/utility/getSkillInDom.js\");\n/* harmony import */ var _utility_resetStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utility/resetStatus */ \"./src/utility/resetStatus.js\");\n/* harmony import */ var _initialStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./initialStatus */ \"./src/content/initialStatus.js\");\n/* harmony import */ var _utility_changeLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utility/changeLocation */ \"./src/utility/changeLocation.js\");\n/* harmony import */ var _utility_cutInventory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utility/cutInventory */ \"./src/utility/cutInventory.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst effects = {\n  getItem: ({ ...payload }) => {\n    Object.entries(payload).forEach(([key, value]) => {\n      let quantity = value;\n      if (Array.isArray(value)) {\n        quantity = value[0] + Math.random() * (value[1] + 1 - value[0]);\n      }\n      for (let i = 1; i <= quantity; i += 1) {\n        let item = _items__WEBPACK_IMPORTED_MODULE_10__[\"items\"][key];\n        if (key === 'randomItem') { item = Object(_utility_getRandomKey__WEBPACK_IMPORTED_MODULE_9__[\"getRandomKey\"])(_items__WEBPACK_IMPORTED_MODULE_10__[\"items\"]); }\n        _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].inventory.push(item.name);\n        Object(_utility_setItem__WEBPACK_IMPORTED_MODULE_8__[\"setItem\"])(item);\n        Object(_utility_cutInventory__WEBPACK_IMPORTED_MODULE_15__[\"cutInventory\"])();\n      }\n    });\n  },\n  takeAwayItems: (itemsForTake) => {\n    itemsForTake.forEach(({ name, id }) => {\n      const itemIndex = _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].inventory.indexOf(name);\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].inventory.splice(itemIndex, 1);\n      document.getElementById(id).remove();\n    });\n  },\n  moveTo: (id) => {\n    Object(_utility_renderScene__WEBPACK_IMPORTED_MODULE_3__[\"renderScene\"])(id);\n    Object(_utility_changeLocation__WEBPACK_IMPORTED_MODULE_14__[\"changeLocation\"])(id);\n  },\n  changeNeeds: ({\n    ...needs\n  }) => {\n    Object.entries(needs).forEach(([key, value]) => {\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"][key] += value;\n    });\n    if (_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].health >= _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].health) {\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].health = _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].health;\n    }\n    if (_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].fatigue <= _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].fatigue) {\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].fatigue = _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].fatigue;\n    }\n    if (_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].hunger <= _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].hunger) {\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].hunger = _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].hunger;\n    }\n    if (_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].thirst <= _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].thirst) {\n      _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].thirst = _initialStatus__WEBPACK_IMPORTED_MODULE_13__[\"initialStatus\"].thirst;\n    }\n    Object(_utility_changeStatusIndicators__WEBPACK_IMPORTED_MODULE_4__[\"changeStatusIndicators\"])();\n    Object(_utility_killPlayerIfExhausted__WEBPACK_IMPORTED_MODULE_5__[\"killPlayerIfExhausted\"])();\n  },\n  moveForward: () => {\n    Object(_utility_renderScene__WEBPACK_IMPORTED_MODULE_3__[\"renderScene\"])(Object(_utility_getRandomDirection__WEBPACK_IMPORTED_MODULE_6__[\"getRandomDirection\"])());\n  },\n  startNewGame: () => {\n    Object(_utility_resetStatus__WEBPACK_IMPORTED_MODULE_12__[\"resetStatus\"])();\n    Object(_utility_killChildren__WEBPACK_IMPORTED_MODULE_2__[\"killChildren\"])(_utility_domElements__WEBPACK_IMPORTED_MODULE_7__[\"inventoryHolder\"]);\n    Object(_utility_killChildren__WEBPACK_IMPORTED_MODULE_2__[\"killChildren\"])(_utility_domElements__WEBPACK_IMPORTED_MODULE_7__[\"skillsHolder\"]);\n    Object(_utility_renderScene__WEBPACK_IMPORTED_MODULE_3__[\"renderScene\"])('woodScene');\n    Object(_utility_changeStatusIndicators__WEBPACK_IMPORTED_MODULE_4__[\"changeStatusIndicators\"])();\n    effects.getItem({ randomItem: 1 });\n    effects.getSkill('findRiver');\n  },\n  backToMainMenu: () => {\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_7__[\"menu\"].classList.remove('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_7__[\"gameplayUI\"].classList.add('hide');\n  },\n  getSkill: (skill) => {\n    const target = _skills__WEBPACK_IMPORTED_MODULE_1__[\"skills\"][skill];\n    _playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].skills.push(target.name);\n    Object(_utility_getSkillInDom__WEBPACK_IMPORTED_MODULE_11__[\"getSkillInDom\"])(target);\n  },\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/effects.js?");

/***/ }),

/***/ "./src/content/initialStatus.js":
/*!**************************************!*\
  !*** ./src/content/initialStatus.js ***!
  \**************************************/
/*! exports provided: initialStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialStatus\", function() { return initialStatus; });\nconst initialStatus = {\n  inventory: [],\n  skills: [],\n  health: 100, // max 100\n  fatigue: 0, // max 15\n  hunger: 0, // max 15\n  thirst: 0, // max 10\n  location: '',\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/initialStatus.js?");

/***/ }),

/***/ "./src/content/items.js":
/*!******************************!*\
  !*** ./src/content/items.js ***!
  \******************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\nconst items = {\n  apple: {\n    name: 'Сытное яблочко',\n    id: 'apple',\n    src: 'https://i.ibb.co/K7D7Jjn/apple.jpg',\n    consumable: true,\n    effects: {\n      changeNeeds: { hunger: -2 },\n    },\n  },\n  food: {\n    name: 'Вкуснейший супец',\n    id: 'food',\n    src: 'https://i.ibb.co/H7bqV3R/food.jpg',\n    consumable: true,\n    effects: {\n      changeNeeds: { hunger: -2 },\n    },\n  },\n  mushroom: {\n    name: 'Съедобный грибочек',\n    id: 'mushroom',\n    src: 'https://i.ibb.co/1LZgZbn/mushroom.jpg',\n    consumable: true,\n    effects: {\n      changeNeeds: { hunger: -2 },\n    },\n  },\n  hazelnut: {\n    name: 'Лесной орешек',\n    id: 'hazelnut',\n    src: 'https://i.ibb.co/b3jmR3k/hazelnut.jpg',\n    consumable: true,\n    effects: {\n      changeNeeds: { hunger: -2 },\n    },\n  },\n  fullBottle: {\n    name: 'Полная бутылка',\n    id: 'fullBottle',\n    src: 'https://i.ibb.co/NV2zCNr/full-Bottle.jpg',\n    specific: true,\n    consumable: true,\n    effects: {\n      changeNeeds: { fatigue: -1, thirst: -2 },\n    },\n  },\n  emptyBottle: {\n    name: 'Пустая бутылка',\n    id: 'emptyBottle',\n    src: 'https://i.ibb.co/pvKYzJR/empty-Bottle.jpg',\n    consumable: true,\n    effects: {\n      getItem: { fullBottle: 1 },\n      changeNeeds: { fatigue: 2, thirst: 1 },\n    },\n  },\n  roach: {\n    name: 'Плотва',\n    id: 'roach',\n    src: 'http://www.fishinginireland.info/images/coarse/roach.jpg',\n    consumable: true,\n    specific: true,\n    effects: {\n      changeNeeds: { hunger: -2 },\n    },\n  },\n  fishingRod: {\n    name: 'Удочка',\n    id: 'fishingRod',\n    src: 'https://i5.walmartimages.com/asr/30881e20-ce61-4778-a949-39b088fd6009_1.497868596fdf88bc6936ff4c19b3cfee.jpeg',\n    effects: {\n      getItem: { roach: [0, 2] },\n      changeNeeds: { fatigue: 2, thirst: 1, hunger: 1 },\n    },\n  },\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/items.js?");

/***/ }),

/***/ "./src/content/paramsMap.js":
/*!**********************************!*\
  !*** ./src/content/paramsMap.js ***!
  \**********************************/
/*! exports provided: paramsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paramsMap\", function() { return paramsMap; });\nconst paramsMap = {\n  health: [\n    {\n      threshold: 25,\n      label: 'при смерти',\n      colorIndicator: 'red',\n    },\n    {\n      threshold: 50,\n      label: 'покоцан',\n      colorIndicator: 'orange',\n    },\n    {\n      threshold: 75,\n      label: 'подбит',\n      colorIndicator: 'yellow',\n    },\n    {\n      threshold: 100,\n      label: 'здоров',\n      colorIndicator: 'green',\n    },\n  ],\n  fatigue: [\n    {\n      threshold: 0,\n      label: 'бодр',\n      colorIndicator: 'green',\n    },\n    {\n      threshold: 4,\n      label: 'подустал',\n      colorIndicator: 'yellow',\n    },\n    {\n      threshold: 8,\n      label: 'устал',\n      colorIndicator: 'orange',\n    },\n    {\n      threshold: 12,\n      label: 'измотан',\n      colorIndicator: 'red',\n    },\n  ],\n  hunger: [\n    {\n      threshold: 0,\n      label: 'сыт',\n      colorIndicator: 'green',\n    },\n    {\n      threshold: 4,\n      label: 'проголодался',\n      colorIndicator: 'yellow',\n    },\n    {\n      threshold: 8,\n      label: 'урчит в животе',\n      colorIndicator: 'orange',\n    },\n    {\n      threshold: 12,\n      label: 'голоден',\n      colorIndicator: 'red',\n    },\n  ],\n  thirst: [\n    {\n      threshold: 0,\n      label: 'Нагидрирован',\n      colorIndicator: 'green',\n    },\n    {\n      threshold: 4,\n      label: 'Недогидрирован',\n      colorIndicator: 'yellow',\n    },\n    {\n      threshold: 6,\n      label: 'Не нагидрирован',\n      colorIndicator: 'orange',\n    },\n    {\n      threshold: 9,\n      label: 'Дегидрирован',\n      colorIndicator: 'red',\n    },\n  ],\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/paramsMap.js?");

/***/ }),

/***/ "./src/content/playerStatus.js":
/*!*************************************!*\
  !*** ./src/content/playerStatus.js ***!
  \*************************************/
/*! exports provided: playerStatus, statusLethalValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerStatus\", function() { return playerStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statusLethalValues\", function() { return statusLethalValues; });\nconst playerStatus = {\n  inventory: [],\n  skills: [],\n  health: 100, // max 100\n  fatigue: 0, // max 15\n  hunger: 0, // max 15\n  thirst: 0, // max 10\n  location: '',\n};\n\nconst statusLethalValues = {\n  health: 0,\n  fatigue: 15,\n  hunger: 15,\n  thirst: 10,\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/playerStatus.js?");

/***/ }),

/***/ "./src/content/scenes.js":
/*!*******************************!*\
  !*** ./src/content/scenes.js ***!
  \*******************************/
/*! exports provided: scenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scenes\", function() { return scenes; });\nconst scenes = {\n  // scene name = id //\n  woodScene: {\n    description: 'Лес — экологическая система, биоценоз, в которой главной жизненной формой являются деревья '\n        + 'Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе —'\n        + ' это часть биосферы, в локальном — это может быть насаждение. Лес также можно рассматривать как '\n        + 'природно-зональное подразделение, как провинциальное подразделение, как лесной массив (Шипов лес, '\n        + 'Шатилов лес, Чёрный лес), как экосистему. Леса занимают около трети площади суши, площадь леса на '\n        + 'Земле составляет 38 млн км² Из них 264 млн га, или 7 %, посажены человеком к началу XXI века'\n        + ' человек уничтожил около 50 % площадей лесов, ранее существовавших на планете. Половина лесной зоны '\n        + 'принадлежит тропическим лесам. Площади, занятые деревьями с сомкнутостью крон менее 0,2—0,3, считаются '\n        + 'редколесьем.',\n    image: 'https://i.ibb.co/mD7WjyV/wood.jpg',\n    items: ['hazelnut', 'mushroom'],\n    actions: {\n      forward: {\n        actionDescription: 'Идти вперёд',\n        effects: [\n          { type: 'moveForward', payload: 'randomDirection' },\n          { type: 'changeNeeds', payload: { fatigue: 1, thirst: 1, hunger: 1 } },\n        ],\n      },\n      rest: {\n        actionDescription: 'Отдохнуть',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: -4, thirst: 1, hunger: 1 } },\n        ],\n      },\n      search: {\n        actionDescription: 'Порыскать по кустам',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: 2, thirst: 2, hunger: 1 } },\n          { type: 'getItem', payload: { hazelnut: [0, 2], mushroom: [0, 1] } },\n        ],\n      },\n    },\n  },\n  gardenScene: {\n    description: 'Огород — относительно небольшой участок земли, предназначенный преимущественно для '\n        + 'выращивания овощей. На огороде могут также присутствовать посадки ягод и плодовых деревьев. Обычно '\n        + 'огород огорожен забором или живой изгородью. На выбранном участке также допускается применение парников'\n        + ' и теплиц. Возделывание огородов называется огородничеством.',\n    image: 'https://i.ibb.co/h8kfBtT/garden.jpg',\n    actions: {\n      forward: {\n        actionDescription: 'Идти вперёд',\n        effects: [\n          { type: 'moveForward', payload: 'randomDirection' },\n          { type: 'changeNeeds', payload: { fatigue: 1, thirst: 1, hunger: 1 } },\n        ],\n      },\n      rest: {\n        actionDescription: 'Отдохнуть',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: -4, thirst: 1, hunger: 1 } },\n        ],\n      },\n      search: {\n        actionDescription: 'Поискать по огородам',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: 1, thirst: 1, hunger: 1 } },\n          { type: 'getItem', payload: { fishingRod: [0, 1], food: [0, 3], emptyBottle: [0, 1] } },\n        ],\n      },\n    },\n  },\n  riverScene: {\n    description: 'Река — природный водный поток значительных размеров с естественным течением по руслу '\n        + '(выработанному им естественному углублению) от истока вниз до устья[2] и питающийся за счёт поверхностного'\n        + ' и подземного стока с его бассейна. Реки являются составной частью гидрологического цикла. Вода в реке, '\n        + 'как правило, собирается с поверхностных стоков, образующихся в результате атмосферных осадков с'\n        + ' определённой площади, ограниченной водоразделом (бассейн реки), а также из других источников, '\n        + 'например запасов подземных вод, влаги, хранящейся в естественном льду (в процессе таяния ледников) '\n        + 'и снеговом покрове. В местах естественных или искусственных препятствий течению реки появляются '\n        + 'водохранилища (проточные озёра либо искусственные моря). Лимноло́гия (греч. λίμνε — озеро, λόγος — учение)'\n        + ' или озерове́дение — раздел гидрологии, наука о физических, химических и биологических аспектах озёр и '\n        + 'других пресных водоёмов, в том числе и водохранилищ. В свою очередь реки являются предметом одного из '\n        + 'крупнейших разделов гидрологии суши — речной гидрологии или потамоло́гии '\n        + '(от др.-греч. ποταμός — река, λόγος — учение — буквально наука о реках), которая занимается'\n        + ' изучением строения речных сетей, стока рек, морфометрией речных бассейнов и так далее. Как правило,'\n        + ' реки прокладывают свой путь и текут по зонам наименьшего напряжения и сопротивления — по тектоническим '\n        + 'разломам.',\n    image: 'https://i.ibb.co/Cv46J0Y/river.jpg',\n    actions: {\n      forward: {\n        actionDescription: 'Идти вперёд',\n        effects: [\n          { type: 'moveForward', payload: 'randomDirection' },\n          { type: 'changeNeeds', payload: { fatigue: 1, thirst: 1, hunger: 1 } },\n\n        ],\n      },\n      rest: {\n        actionDescription: 'Отдохнуть',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: -4, thirst: 1, hunger: 1 } },\n        ],\n      },\n      search: {\n        actionDescription: 'Напиться воды',\n        effects: [\n          { type: 'changeNeeds', payload: { fatigue: 1, hunger: 1, thirst: -15 } },\n        ],\n      },\n    },\n  },\n  youDiedScene: {\n    description: 'Смерть (гибель, кончина) — прекращение, полная остановка биологических и физиологических'\n        + ' процессов жизнедеятельности организма. В медицине изучением смерти занимается наука танатология.'\n        + ' В естественной среде после смерти тела умерших организмов начинают разлагаться. Смерть всегда '\n        + 'несла отпечаток таинственности и мистичности. Непредсказуемость, неизбежность, неожиданность и подчас '\n        + 'незначительность причин, приводящих к смерти, выводили само понятие смерти за пределы человеческого '\n        + 'восприятия. Многие религии превращали смерть в божественную кару за греховное существование либо в '\n        + 'божественный дар, после которого человека ожидает счастливая и вечная жизнь (чаще всего понятие «смерть» '\n        + 'люди применяют по отношению к своему виду).',\n    image: 'https://i.ibb.co/485c7pc/youDied.jpg',\n    actions: {\n      newGame: {\n        actionDescription: 'Новая игра',\n        effects: [\n          { type: 'startNewGame' },\n        ],\n      },\n      menu: {\n        actionDescription: 'Главное меню',\n        effects: [\n          { type: 'backToMainMenu' },\n          { type: 'startNewGame' },\n        ],\n      },\n    },\n  },\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/scenes.js?");

/***/ }),

/***/ "./src/content/skills.js":
/*!*******************************!*\
  !*** ./src/content/skills.js ***!
  \*******************************/
/*! exports provided: skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skills\", function() { return skills; });\nconst skills = {\n  findRiver: {\n    name: 'Найти реку',\n    src: 'https://i.ibb.co/YyV7ZfD/compass.jpg',\n    effects: {\n      moveTo: 'riverScene',\n      changeNeeds: {hunger: 1, thirst: 1, fatigue: 1},\n    },\n  },\n};\n\n\n\n\n//# sourceURL=webpack:///./src/content/skills.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_isOpen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/isOpen */ \"./src/utility/isOpen.js\");\n/* harmony import */ var _content_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/effects */ \"./src/content/effects.js\");\n/* harmony import */ var _utility_domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/domElements */ \"./src/utility/domElements.js\");\n\n\n\n\n\n\n\n_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"aboutProject\"].addEventListener('click', () => {\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"menuButtons\"].classList.add('hide');\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"projectInformation\"].classList.remove('hide');\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"backButton\"].classList.remove('hide');\n});\n\n_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].addEventListener('click', () => {\n  _content_effects__WEBPACK_IMPORTED_MODULE_2__[\"effects\"].startNewGame();\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"menu\"].classList.add('hide');\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"gameplayUI\"].classList.remove('hide');\n});\n\n_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"backButton\"].addEventListener('click', () => {\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"menuButtons\"].classList.remove('hide');\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"projectInformation\"].classList.add('hide');\n  _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"backButton\"].classList.add('hide');\n});\n\n_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsButton\"].addEventListener('click', () => {\n  if (Object(_utility_isOpen__WEBPACK_IMPORTED_MODULE_1__[\"isOpen\"])(_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsHolder\"])) {\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"descriptionHolder\"].classList.remove('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryHolder\"].classList.add('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsHolder\"].classList.add('hide');\n  } else {\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsHolder\"].classList.remove('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"descriptionHolder\"].classList.add('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryHolder\"].classList.add('hide');\n  }\n});\n\n_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryButton\"].addEventListener('click', () => {\n  if (Object(_utility_isOpen__WEBPACK_IMPORTED_MODULE_1__[\"isOpen\"])(_utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryHolder\"])) {\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"descriptionHolder\"].classList.remove('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryHolder\"].classList.add('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsHolder\"].classList.add('hide');\n  } else {\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"descriptionHolder\"].classList.add('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"inventoryHolder\"].classList.remove('hide');\n    _utility_domElements__WEBPACK_IMPORTED_MODULE_3__[\"skillsHolder\"].classList.add('hide');\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/utility/changeLocation.js":
/*!***************************************!*\
  !*** ./src/utility/changeLocation.js ***!
  \***************************************/
/*! exports provided: changeLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLocation\", function() { return changeLocation; });\n/* harmony import */ var _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/playerStatus */ \"./src/content/playerStatus.js\");\n\n\nconst changeLocation = (scene) => {\n  _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].location = scene;\n};\n\n\n\n//# sourceURL=webpack:///./src/utility/changeLocation.js?");

/***/ }),

/***/ "./src/utility/changeStatusIndicator.js":
/*!**********************************************!*\
  !*** ./src/utility/changeStatusIndicator.js ***!
  \**********************************************/
/*! exports provided: changeStatusIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeStatusIndicator\", function() { return changeStatusIndicator; });\n/* harmony import */ var _content_paramsMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/paramsMap */ \"./src/content/paramsMap.js\");\n/* harmony import */ var _content_playerStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/playerStatus */ \"./src/content/playerStatus.js\");\n\n\n\nconst changeStatusIndicator = (param, target) => {\n  _content_paramsMap__WEBPACK_IMPORTED_MODULE_0__[\"paramsMap\"][param].forEach((item) => {\n    if (_content_playerStatus__WEBPACK_IMPORTED_MODULE_1__[\"playerStatus\"][param] >= item.threshold) {\n      target.textContent = item.label;\n      target.style.color = item.colorIndicator;\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/changeStatusIndicator.js?");

/***/ }),

/***/ "./src/utility/changeStatusIndicators.js":
/*!***********************************************!*\
  !*** ./src/utility/changeStatusIndicators.js ***!
  \***********************************************/
/*! exports provided: changeStatusIndicators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeStatusIndicators\", function() { return changeStatusIndicators; });\n/* harmony import */ var _changeStatusIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeStatusIndicator */ \"./src/utility/changeStatusIndicator.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n\n\n\n\nconst changeStatusIndicators = () => {\n  Object(_changeStatusIndicator__WEBPACK_IMPORTED_MODULE_0__[\"changeStatusIndicator\"])('health', _domElements__WEBPACK_IMPORTED_MODULE_1__[\"health\"]);\n  Object(_changeStatusIndicator__WEBPACK_IMPORTED_MODULE_0__[\"changeStatusIndicator\"])('fatigue', _domElements__WEBPACK_IMPORTED_MODULE_1__[\"fatigue\"]);\n  Object(_changeStatusIndicator__WEBPACK_IMPORTED_MODULE_0__[\"changeStatusIndicator\"])('thirst', _domElements__WEBPACK_IMPORTED_MODULE_1__[\"thirst\"]);\n  Object(_changeStatusIndicator__WEBPACK_IMPORTED_MODULE_0__[\"changeStatusIndicator\"])('hunger', _domElements__WEBPACK_IMPORTED_MODULE_1__[\"hunger\"]);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/changeStatusIndicators.js?");

/***/ }),

/***/ "./src/utility/cutInventory.js":
/*!*************************************!*\
  !*** ./src/utility/cutInventory.js ***!
  \*************************************/
/*! exports provided: cutInventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cutInventory\", function() { return cutInventory; });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n/* harmony import */ var _content_playerStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/playerStatus */ \"./src/content/playerStatus.js\");\n\n\n\nconst cutInventory = () => {\n  while (_content_playerStatus__WEBPACK_IMPORTED_MODULE_1__[\"playerStatus\"].inventory.length > 15) {\n    _content_playerStatus__WEBPACK_IMPORTED_MODULE_1__[\"playerStatus\"].inventory.pop();\n    _domElements__WEBPACK_IMPORTED_MODULE_0__[\"inventoryHolder\"].removeChild(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"inventoryHolder\"].lastChild);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/cutInventory.js?");

/***/ }),

/***/ "./src/utility/domElements.js":
/*!************************************!*\
  !*** ./src/utility/domElements.js ***!
  \************************************/
/*! exports provided: description, options, picture, newGame, menu, gameplayUI, aboutProject, menuButtons, projectInformation, backButton, health, fatigue, hunger, thirst, inventoryButton, skillsButton, descriptionHolder, inventoryHolder, skillsHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"description\", function() { return description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"picture\", function() { return picture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newGame\", function() { return newGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameplayUI\", function() { return gameplayUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutProject\", function() { return aboutProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuButtons\", function() { return menuButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectInformation\", function() { return projectInformation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backButton\", function() { return backButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"health\", function() { return health; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fatigue\", function() { return fatigue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hunger\", function() { return hunger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thirst\", function() { return thirst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inventoryButton\", function() { return inventoryButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skillsButton\", function() { return skillsButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"descriptionHolder\", function() { return descriptionHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inventoryHolder\", function() { return inventoryHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skillsHolder\", function() { return skillsHolder; });\nconst description = document.querySelector('.description');\nconst options = document.querySelector('.options');\nconst picture = document.querySelector('.illustration-holder');\nconst newGame = document.querySelector('.new-game');\nconst menu = document.querySelector('.menu');\nconst gameplayUI = document.querySelector('.game-holder');\nconst aboutProject = document.querySelector('.about-project');\nconst menuButtons = document.querySelector('.menu-buttons');\nconst projectInformation = document.querySelector('.project-information');\nconst backButton = document.querySelector('.backToMenu');\nconst health = document.querySelector('.health');\nconst fatigue = document.querySelector('.fatigue');\nconst hunger = document.querySelector('.hunger');\nconst thirst = document.querySelector('.thirst');\nconst inventoryButton = document.querySelector('.inventory-button');\nconst skillsButton = document.querySelector('.skills-button');\nconst descriptionHolder = document.querySelector('.description-holder');\nconst inventoryHolder = document.querySelector('.inventory-holder');\nconst skillsHolder = document.querySelector('.skills-holder');\n\n\n\n\n//# sourceURL=webpack:///./src/utility/domElements.js?");

/***/ }),

/***/ "./src/utility/getDomElement.js":
/*!**************************************!*\
  !*** ./src/utility/getDomElement.js ***!
  \**************************************/
/*! exports provided: getDomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDomElement\", function() { return getDomElement; });\nconst getDomElement = (tag = 'div', text, id, src, classlist) => {\n  const element = document.createElement(tag);\n  if (text) { element.textContent = text; }\n  if (id) { element.id = id; }\n  if (src) { element.src = src; }\n  if (classlist) { element.classList.add(classlist); }\n  return element;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/getDomElement.js?");

/***/ }),

/***/ "./src/utility/getRandomDirection.js":
/*!*******************************************!*\
  !*** ./src/utility/getRandomDirection.js ***!
  \*******************************************/
/*! exports provided: getRandomDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomDirection\", function() { return getRandomDirection; });\nconst getRandomDirection = () => {\n  const scenesArray = ['woodScene', 'riverScene', 'gardenScene'];\n  return scenesArray[Math.floor(Math.random() * Math.floor(scenesArray.length))];\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/getRandomDirection.js?");

/***/ }),

/***/ "./src/utility/getRandomKey.js":
/*!*************************************!*\
  !*** ./src/utility/getRandomKey.js ***!
  \*************************************/
/*! exports provided: getRandomKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomKey\", function() { return getRandomKey; });\nconst getRandomKey = (targetObject) => targetObject[Object.keys(targetObject)[\n  Math.floor(Math.random() * Math.floor(Object.keys(targetObject).length))]\n];\n\n\n\n\n//# sourceURL=webpack:///./src/utility/getRandomKey.js?");

/***/ }),

/***/ "./src/utility/getSkillInDom.js":
/*!**************************************!*\
  !*** ./src/utility/getSkillInDom.js ***!
  \**************************************/
/*! exports provided: getSkillInDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSkillInDom\", function() { return getSkillInDom; });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n/* harmony import */ var _getDomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDomElement */ \"./src/utility/getDomElement.js\");\n/* harmony import */ var _content_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/effects */ \"./src/content/effects.js\");\n\n\n\n\nconst getSkillInDom = (target) => {\n  const skillHolder = Object(_getDomElement__WEBPACK_IMPORTED_MODULE_1__[\"getDomElement\"])('div', '', '', '', 'inventory-item');\n  skillHolder.appendChild(Object(_getDomElement__WEBPACK_IMPORTED_MODULE_1__[\"getDomElement\"])('img', '', '', target.src, 'inventory-item-picture'));\n  skillHolder.appendChild(Object(_getDomElement__WEBPACK_IMPORTED_MODULE_1__[\"getDomElement\"])('div', target.name, '', '', 'inventory-item-name'));\n  skillHolder.addEventListener('click', () => {\n    Object.keys(target.effects).forEach((effect) => {\n      _content_effects__WEBPACK_IMPORTED_MODULE_2__[\"effects\"][effect](target.effects[effect]);\n    });\n  });\n  _domElements__WEBPACK_IMPORTED_MODULE_0__[\"skillsHolder\"].appendChild(skillHolder);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/getSkillInDom.js?");

/***/ }),

/***/ "./src/utility/isOpen.js":
/*!*******************************!*\
  !*** ./src/utility/isOpen.js ***!
  \*******************************/
/*! exports provided: isOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isOpen\", function() { return isOpen; });\nconst isOpen = (element) => {\n  const classlist = element.classList;\n  let trigger = true;\n  classlist.forEach((elemClass) => {\n    if (elemClass === 'hide') {\n      trigger = !trigger;\n    }\n  });\n  return trigger;\n};\n\n\n\n//# sourceURL=webpack:///./src/utility/isOpen.js?");

/***/ }),

/***/ "./src/utility/killChildren.js":
/*!*************************************!*\
  !*** ./src/utility/killChildren.js ***!
  \*************************************/
/*! exports provided: killChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"killChildren\", function() { return killChildren; });\nconst killChildren = (parent) => {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/killChildren.js?");

/***/ }),

/***/ "./src/utility/killPlayerIfExhausted.js":
/*!**********************************************!*\
  !*** ./src/utility/killPlayerIfExhausted.js ***!
  \**********************************************/
/*! exports provided: killPlayerIfExhausted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"killPlayerIfExhausted\", function() { return killPlayerIfExhausted; });\n/* harmony import */ var _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/playerStatus */ \"./src/content/playerStatus.js\");\n/* harmony import */ var _renderScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderScene */ \"./src/utility/renderScene.js\");\n\n\n\nconst killPlayerIfExhausted = () => {\n  if (_content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].health <= _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"statusLethalValues\"].health\n        || _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].fatigue >= _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"statusLethalValues\"].fatigue\n        || _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].hunger >= _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"statusLethalValues\"].hunger\n        || _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"].thirst >= _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"statusLethalValues\"].thirst) {\n    Object(_renderScene__WEBPACK_IMPORTED_MODULE_1__[\"renderScene\"])('youDiedScene');\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/killPlayerIfExhausted.js?");

/***/ }),

/***/ "./src/utility/renderOption.js":
/*!*************************************!*\
  !*** ./src/utility/renderOption.js ***!
  \*************************************/
/*! exports provided: renderOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderOption\", function() { return renderOption; });\n/* harmony import */ var _getDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDomElement */ \"./src/utility/getDomElement.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n/* harmony import */ var _content_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/effects */ \"./src/content/effects.js\");\n\n\n\n\nconst renderOption = (action) => {\n  const option = Object(_getDomElement__WEBPACK_IMPORTED_MODULE_0__[\"getDomElement\"])('li', action.actionDescription);\n  option.classList.add('option');\n  option.addEventListener('click', () => {\n    action.effects.forEach((effect) => {\n      _content_effects__WEBPACK_IMPORTED_MODULE_2__[\"effects\"][effect.type](effect.payload);\n    });\n  });\n  _domElements__WEBPACK_IMPORTED_MODULE_1__[\"options\"].appendChild(option);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/renderOption.js?");

/***/ }),

/***/ "./src/utility/renderPicture.js":
/*!**************************************!*\
  !*** ./src/utility/renderPicture.js ***!
  \**************************************/
/*! exports provided: renderPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPicture\", function() { return renderPicture; });\n/* harmony import */ var _killChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./killChildren */ \"./src/utility/killChildren.js\");\n/* harmony import */ var _getDomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDomElement */ \"./src/utility/getDomElement.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n\n\n\n\nconst renderPicture = (scene) => {\n  Object(_killChildren__WEBPACK_IMPORTED_MODULE_0__[\"killChildren\"])(_domElements__WEBPACK_IMPORTED_MODULE_2__[\"picture\"]);\n  const image = Object(_getDomElement__WEBPACK_IMPORTED_MODULE_1__[\"getDomElement\"])('img', '', '', scene.image);\n  image.classList.add('image');\n  _domElements__WEBPACK_IMPORTED_MODULE_2__[\"picture\"].appendChild(image);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/renderPicture.js?");

/***/ }),

/***/ "./src/utility/renderScene.js":
/*!************************************!*\
  !*** ./src/utility/renderScene.js ***!
  \************************************/
/*! exports provided: renderScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScene\", function() { return renderScene; });\n/* harmony import */ var _content_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/scenes */ \"./src/content/scenes.js\");\n/* harmony import */ var _renderOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderOption */ \"./src/utility/renderOption.js\");\n/* harmony import */ var _renderPicture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPicture */ \"./src/utility/renderPicture.js\");\n/* harmony import */ var _killChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./killChildren */ \"./src/utility/killChildren.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n\n\n\n\n\n\n\nconst renderScene = (id) => {\n  const scene = _content_scenes__WEBPACK_IMPORTED_MODULE_0__[\"scenes\"][id];\n  _domElements__WEBPACK_IMPORTED_MODULE_4__[\"description\"].textContent = scene.description;\n  Object(_renderPicture__WEBPACK_IMPORTED_MODULE_2__[\"renderPicture\"])(scene);\n  Object(_killChildren__WEBPACK_IMPORTED_MODULE_3__[\"killChildren\"])(_domElements__WEBPACK_IMPORTED_MODULE_4__[\"options\"]);\n  Object.keys(scene.actions).forEach((action) => {\n    Object(_renderOption__WEBPACK_IMPORTED_MODULE_1__[\"renderOption\"])(scene.actions[action]);\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/renderScene.js?");

/***/ }),

/***/ "./src/utility/resetStatus.js":
/*!************************************!*\
  !*** ./src/utility/resetStatus.js ***!
  \************************************/
/*! exports provided: resetStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetStatus\", function() { return resetStatus; });\n/* harmony import */ var _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/playerStatus */ \"./src/content/playerStatus.js\");\n/* harmony import */ var _content_initialStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/initialStatus */ \"./src/content/initialStatus.js\");\n\n\n\nconst resetStatus = () => {\n  Object.keys(_content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"]).forEach((key) => {\n    _content_playerStatus__WEBPACK_IMPORTED_MODULE_0__[\"playerStatus\"][key] = _content_initialStatus__WEBPACK_IMPORTED_MODULE_1__[\"initialStatus\"][key];\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/utility/resetStatus.js?");

/***/ }),

/***/ "./src/utility/setItem.js":
/*!********************************!*\
  !*** ./src/utility/setItem.js ***!
  \********************************/
/*! exports provided: setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItem\", function() { return setItem; });\n/* harmony import */ var _getDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDomElement */ \"./src/utility/getDomElement.js\");\n/* harmony import */ var _content_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/effects */ \"./src/content/effects.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ \"./src/utility/domElements.js\");\n\n\n\n\nconst setItem = (item) => {\n  const itemHolder = Object(_getDomElement__WEBPACK_IMPORTED_MODULE_0__[\"getDomElement\"])('div', '', item.id, '', 'inventory-item');\n  itemHolder.appendChild(Object(_getDomElement__WEBPACK_IMPORTED_MODULE_0__[\"getDomElement\"])('img', '', '', item.src, 'inventory-item-picture'));\n  itemHolder.appendChild(Object(_getDomElement__WEBPACK_IMPORTED_MODULE_0__[\"getDomElement\"])('div', item.name, '', '', 'inventory-item-name'));\n  _domElements__WEBPACK_IMPORTED_MODULE_2__[\"inventoryHolder\"].appendChild(itemHolder);\n  itemHolder.addEventListener('click', () => {\n    Object.keys(item.effects).forEach((effect) => {\n      _content_effects__WEBPACK_IMPORTED_MODULE_1__[\"effects\"][effect](item.effects[effect]);\n    });\n    if (item.consumable) {\n      _content_effects__WEBPACK_IMPORTED_MODULE_1__[\"effects\"].takeAwayItems([item]);\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/utility/setItem.js?");

/***/ })

/******/ });