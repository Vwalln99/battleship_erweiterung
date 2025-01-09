/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#app {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0;\n  font-size: 16pt; }\n\nh1 {\n  margin: 3rem;\n  text-align: center; }\n\n#playerBoard,\n#cpuBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  gap: 2px;\n  margin: 50px; }\n\n#playerBoard div,\n#cpuBoard div {\n  border: 1px solid #000;\n  background-color: wheat;\n  text-align: center; }\n\nbutton {\n  height: 70px;\n  width: 100px;\n  font-size: 10pt;\n  font-weight: bold;\n  background-color: black;\n  color: wheat;\n  margin-left: 30px;\n  border-radius: 10%; }\n\n.hit {\n  background-color: red; }\n\n.miss {\n  background-color: blue; }\n\n.cell {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black; }\n\n.cpuContainer {\n  margin: 3rem;\n  border: #000 solid 1px;\n  display: flex;\n  width: 50rem; }\n\n.playerContainer {\n  margin: 3rem;\n  border: #000 solid 1px;\n  display: flex;\n  width: 50rem; }\n\n.cpuContainer {\n  margin-left: 50em;\n  margin-top: -32em; }\n\n#startGameButton {\n  position: absolute;\n  margin-top: 40em;\n  margin-left: -2em; }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_captain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/captain */ \"./src/modules/captain.js\");\n\n\n\n\n\n\nlet gameboardPlayer = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\nlet player = new _modules_player__WEBPACK_IMPORTED_MODULE_2__.Player(\"Viktoria\");\nlet gameboardKI = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n//added captains and new logic for ing ships manually for player\nlet selectedCaptain = null;\nlet selectedShip = null;\nlet gameStarted = false;\n\ndocument.getElementById(\"playerTitle\").textContent = `${player.name}'s Spielfeld`;\n\n\ngameboardPlayer.createGameboard();\ngameboardKI.createGameboard();\ngameboardKI.createShipsCPU();\ngameboardKI.placeShipsCPU();\n\n//create gameboard\ngenerateBoard(\"playerBoard\", gameboardPlayer, handlePlayerBoardClick);\ngenerateBoard(\"cpuBoard\", gameboardKI, handleCPUBoardClick);\n\n//captain selection\ndocument.getElementById(\"williamButton\").addEventListener(\"click\", () => selectCaptain(\"William\"));\ndocument.getElementById(\"giuseppeButton\").addEventListener(\"click\", () => selectCaptain(\"Giuseppe\"));\ndocument.getElementById(\"astridButton\").addEventListener(\"click\", () => selectCaptain(\"Astrid\"));\ndocument.getElementById(\"katrinButton\").addEventListener(\"click\", () => selectCaptain(\"Katrin\"));\n\n//ship selection \ndocument.getElementById(\"carrierButton\").addEventListener(\"click\", () => selectShip(\"carrier\", 5));\ndocument.getElementById(\"battleshipButton\").addEventListener(\"click\", () => selectShip(\"battleship\", 4));\ndocument.getElementById(\"cruiserButton\").addEventListener(\"click\", () => selectShip(\"cruiser\", 3));\ndocument.getElementById(\"submarineButton\").addEventListener(\"click\", () => selectShip(\"submarine\", 3));\ndocument.getElementById(\"destroyerButton\").addEventListener(\"click\", () => selectShip(\"destroyer\", 2));\ndocument.getElementById(\"dotButton\").addEventListener(\"click\", () => selectShip(\"dot\", 1, \"dot\"));\ndocument.getElementById(\"LButton\").addEventListener(\"click\", () => selectShip(\"L-Form\", 3, \"L\"));\ndocument.getElementById(\"TButton\").addEventListener(\"click\", () => selectShip(\"T-Form\", 3, \"T\"));\ndocument.getElementById(\"SButton\").addEventListener(\"click\", () => selectShip(\"Square-Form\", 4, \"square\"));\n\n//new function select captain\nfunction selectCaptain(captainName) {\n    selectedCaptain = new _modules_captain__WEBPACK_IMPORTED_MODULE_4__.Captain(captainName);\n    console.log(`Kapitan ausgewählt: ${captainName}`);\n    return selectedCaptain;\n  }\n  //new function add ships\n  function selectShip(name, length, shape) {\n    selectedShip = new _modules_ship__WEBPACK_IMPORTED_MODULE_3__.Ship(name, length, Math.random().toString(36).substring(2), shape);\n    console.log(`Schiff ausgewählt: ${name} mit Länge ${length} und Form ${shape}`);\n    return selectedShip;\n  }  \n\n  \n/*const carrier = new Ship(\"carrier\", 5, 5);\nconst battleship = new Ship(\"battleship\", 4, 4);\nconst cruiser = new Ship(\"cruiser\", 3, 3);\nconst submarine = new Ship(\"submarine\", 3, 2);\nconst destroyer = new Ship(\"Destroyer\", 2, 1);\nconst line = new Ship(\"line\", 5, \"line\");\nconst square = new Ship(\"square\", 4, \"square\");\nconst lform = new Ship(\"lform\", 3, \"L\");\nconst tform = new Ship(\"tform\", 3, \"T\");\nconst dot = new Ship(\"dot\", 2, \"dot\");*/\n\nfunction generateBoard(boardId, gameboard) {\n    const boardDiv = document.getElementById(boardId);\n    boardDiv.innerHTML = \"\";\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const cell = document.createElement(\"div\");\n        cell.classList.add(\"cell\");\n        if (boardId === \"playerBoard\") {\n            cell.addEventListener(\"click\", () => handlePlayerBoardClick(i, j, gameboard, boardDiv));\n          } else if (boardId === \"cpuBoard\") {\n            cell.addEventListener(\"click\", () => handleCPUBoardClick(i, j, gameboard, boardDiv));\n          }\n          \n        boardDiv.appendChild(cell);\n      }\n    }\n  }\n  \n  //player board click handler\n  function handlePlayerBoardClick(x, y, gameboard, boardDiv){\n    \n    //console.log(selectShip());\n    if(selectedShip && !gameStarted){\n        if(gameboard.placeShip(selectedShip, x, y)){\n\n            console.log(`Schiff platziert: ${selectShip.name} auf ${x}, ${y}`);\n            updateBoard(boardDiv, gameboard);\n        }\n    }else{\n        alert(\"Fehler bei der Platzierung des Schiffes!\")\n    }\n    console.log(gameboard);\n  }\n\n\n  // KI click handler\nfunction handleCPUBoardClick(x, y, gameboard, boardDiv) {\n  if (gameStarted && !gameboard.isCellAttacked(x, y)) {\n    const hit = gameboard.receiveAttack(x, y);\n    boardDiv.children[x * 10 + y].style.backgroundColor = hit ? \"red\" : \"blue\";\n    console.log(hit ? `Treffer auf (${x}, ${y})!` : `Verfehlt auf (${x}, ${y}).`);\n    //updateBoard(boardDiv, gameboard);\n\n    if (gameboard.allShipsSunk()) {\n      alert(\"Du hast gewonnen!\");\n      return;\n    }\n\n    \n    performCPUAttack();\n  }\n}\n\n\n// UI aktualisieren\n\nfunction updateBoard(boardDiv, gameboard) {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const cell = boardDiv.children[i * 10 + j];\n        if (gameboard.isCellOccupied(i, j)) {\n\n          if (gameboard.gameboard[i][j] !== 0 && gameboard.gameboard[i][j] !== \"Treffer\" && gameboard.gameboard[i][j] !== \"X\") {\n            cell.style.backgroundColor = \"green\";\n          }\n        } else {\n          cell.style.backgroundColor = \"black\";\n        }\n      }\n    }\n  }\n  \n\n// KI angriff\nfunction performCPUAttack() {\n  let x, y;\n  do {\n    x = Math.floor(Math.random() * 10);\n    y = Math.floor(Math.random() * 10);\n  } while (gameboardPlayer.isCellAttacked(x, y));\n\n  const hit = gameboardPlayer.receiveAttack(x, y);\n  const boardDiv = document.getElementById(\"playerBoard\");\n  boardDiv.children[x * 10 + y].style.backgroundColor = hit ? \"red\" : \"blue\";\n\n  console.log(hit ? `KI trifft auf (${x}, ${y})!` : `KI verfehlt auf (${x}, ${y}).`);\n\n  if (gameboardPlayer.allShipsSunk()) {\n    alert(\"Die KI hat gewonnen!\");\n  }\n}\n\n// Spiel starten\nfunction startGame() {\n  if (gameboardPlayer.ships.length >= 10) {\n    gameStarted = true;\n alert(\"Spiel startet!\");\n  } else {\n    alert(\"Platziere zuerst alle Schiffe.\");\n  }\n}\n\ndocument.getElementById(\"startGameButton\").addEventListener(\"click\", startGame);\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/captain.js":
/*!********************************!*\
  !*** ./src/modules/captain.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Captain: () => (/* binding */ Captain)\n/* harmony export */ });\nclass Captain {\n    constructor(name, ability) {\n      this.name = name;\n      this.ability = ability;\n    }\n  \n    useAbility(gameboard, x, y) {\n      if (this.name === \"William\") {\n        this.destroyLine(gameboard, x);\n      } else if (this.name === \"Giuseppe\") {\n        this.destroyRandom(gameboard);\n      } else if (this.name === \"Astrid\") {\n        this.destroyArea(gameboard, x, y);\n      } else if (this.name === \"Katrin\") {\n        this.destroyNearby(gameboard, x, y);\n      }\n    }\n  \n    destroyLine(gameboard, x) {\n      for (let i = 0; i < 10; i++) {\n        if (gameboard[x][i] !== 0 && gameboard[x][i] !== \"X\") {\n          gameboard[x][i] = \"X\";\n        }\n      }\n    }\n    \n  \n    destroyRandom(gameboard) {\n      let targets = [];\n      for (let i = 0; i < 9; i++) {\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n        if (gameboard[x][y] !== \"X\") {\n          targets.push([x, y]);\n        }\n      }\n      targets.forEach(([x, y]) => {\n        gameboard[x][y] = \"X\";\n      });\n    }\n  \n    destroyArea(gameboard, x, y) {\n      for (let i = x - 1; i <= x + 1; i++) {\n        for (let j = y - 1; j <= y + 1; j++) {\n          if (i >= 0 && i < 10 && j >= 0 && j < 10 && gameboard[i][j] !== \"X\") {\n            gameboard[i][j] = \"X\";\n          }\n        }\n      }\n    }\n  \n    destroyNearby(gameboard, x, y) {\n      const offsets = [\n        [-1, 0], [1, 0], [0, -1], [0, 1],\n        [-1, -1], [1, 1]\n      ];\n      offsets.forEach(([dx, dy]) => {\n        const nx = x + dx;\n        const ny = y + dy;\n        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && gameboard[nx][ny] !== \"X\") {\n          gameboard[nx][ny] = \"X\";\n        }\n      });\n    }\n  }\n  \n  \n  \n\n//# sourceURL=webpack://battleship/./src/modules/captain.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\nclass Gameboard {\n  constructor() {\n    this.gameboard = [];\n    this.ships = [];\n    this.counter = 0;\n    //added more functionality\n    this.attackedCells = [];\n  }\n\n//validation if cell is already occupied\nisCellOccupied(x, y) {\n  return this.gameboard[x][y] !== null && this.gameboard[x][y] !== undefined;\n}\n\n\n  //validation attack\n  isCellAttacked(x, y) {\n    return this.attackedCells.some(cell => cell.x === x && cell.y === y);\n  }\n\n  receiveAttack(x, y) {\n   \n    if (this.isCellAttacked(x, y)) {\n      console.log(\"Bereits angegriffen.\");\n      return false;\n    }\n\n    this.attackedCells.push({ x, y });\n\n    if (this.gameboard[x][y] !== 0) {\n      console.log(\"Treffer!\");\n      return true;\n    } else {\n      console.log(\"Verfehlt!\");\n      return false;\n    }\n  }\n\n  allShipsSunk() {\n    return this.ships.every(ship => ship.isSunk);\n  }\n\n\n  createGameboard() {\n    for (let i = 0; i < 10; i++) {\n      let innerArray = [];\n      this.gameboard.push(innerArray);\n      for (let z = 0; z < 10; z++) {\n        innerArray.push(0);\n      }\n    }\n  }\n\n  //modified placeShip for better logic and less code repetition\n  placeShip(ship, x, y) {\n    if (!this.isPlacementValid(x, y, ship)) {\n      console.log(\"Platziere dein Schiff bitte woanders\");\n      return false;\n    }\n  \n    console.log(`Placing ship: ${ship.name} at position (${x}, ${y})`);\n  \n    if (ship.shape !== \"line\") {\n      this.placeShipShape(ship, x, y); // Spezialformen platzieren\n    } else {\n      for (let i = 0; i < ship.length; i++) {\n        if (x + i > 9) {\n          console.log(\"Ship goes out of bounds horizontally.\");\n          return false;\n        }\n        this.gameboard[x + i][y] = ship.shipNumber;\n      }\n    }\n  \n    this.ships.push(ship);\n    console.log(`Ship ${ship.name} placed successfully at (${x}, ${y})`);\n    return true;\n  }\n  \n \n\n\n  createShipsCPU() {\n    const carrier = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"carrier\", 5, 5, \"line\");\n    const battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"battleship\", 4, 4, \"line\");\n    const cruiser = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"cruiser\", 3, 3, \"line\");\n    const submarine = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"submarine\", 3, 2, \"line\");\n    const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Destroyer\", 2, 1, \"line\");\n    const line = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"line\", 5, \"line\");\n    const square = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"square\", 4, \"square\");\n    const lform = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"lform\", 3, \"L\");\n    const tform = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"tform\", 3, \"T\");\n    const dot = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"dot\", 2, \"dot\");\n    this.ships.push(carrier, battleship, cruiser, submarine, destroyer, line, square, lform, tform, dot);\n  }\n\n//modified code for less code repetition and functionality\nplaceShipsCPU() {\n  const shipShapes = [\"line\", \"square\", \"L\", \"T\", \"dot\"];\n  const shipLengths = { line: 5, square: 4, L: 3, T: 3, dot: 1 };\n  let shipCount = 0;\n\n  while (shipCount < 10) {\n    let shipShape = shipShapes[Math.floor(Math.random() * shipShapes.length)];\n    let shipLength = shipLengths[shipShape];\n    let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\n      `Ship${shipCount + 1}`,\n      shipLength,\n      Math.random().toString(36).substring(2),\n      shipShape\n    );\n\n    let x, y, attempts = 0, maxAttempts = 1000;\n\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      attempts++;\n      if (attempts >= maxAttempts) {\n        console.error(`Keine gültige Position für ${ship.name} gefunden.`);\n        return;\n      }\n    } while (\n      !this.isPlacementValid(x, y, ship) && \n      !this.isCellOccupied(x, y)\n    );\n\n    this.placeShipShape(ship, x, y); \n    console.log(`CPU-Schiff ${ship.name} platziert: ${ship.shipNumber} bei (${x}, ${y})`);\n    this.ships.push(ship);\n    shipCount++;\n    console.log(this.gameboard);\n  }\n}\n\n\n\n\n\n  //place the new shipforms\n  placeShipShape(ship, x, y) {\n    const shape = ship.shape;\n\n    switch (shape) {\n      case \"line\":\n        for (let i = 0; i < ship.length; i++) {\n          if (x + i < 10) this.gameboard[x + i][y] = ship.shipNumber;\n        }\n        break;\n\n      case \"square\":\n        for (let i = 0; i < 2; i++) {\n          for (let j = 0; j < 2; j++) {\n            if (x + i < 10 && y + j < 10) this.gameboard[x + i][y + j] = ship.shipNumber;\n          }\n        }\n        break;\n\n      case \"L\":\n        for (let i = 0; i < ship.length; i++) {\n          if (i < ship.length - 1) {\n            if (x + i < 10) this.gameboard[x + i][y] = ship.shipNumber;\n          } else {\n            if (x + i - 1 < 10 && y + 1 < 10) this.gameboard[x + i - 1][y + 1] = ship.shipNumber;\n          }\n        }\n        break;\n\n      case \"T\":\n        for (let i = 0; i < 3; i++) {\n          if (x < 10 && y - 1 + i < 10) this.gameboard[x][y - 1 + i] = ship.shipNumber;\n        }\n        if (x + 1 < 10) this.gameboard[x + 1][y] = ship.shipNumber;\n        break;\n\n      case \"dot\":\n        if (x < 10 && y < 10) this.gameboard[x][y] = ship.shipNumber;\n        break;\n    }\n  }\n\n  isPlacementValid(x, y, ship) {\n    const shape = ship.shape;\n\n    switch (shape) {\n      case \"line\":\n        for (let i = 0; i < ship.length; i++) {\n          if (x + i >= 10 || this.gameboard[x + i][y] !== 0) return false;\n        }\n        break;\n\n      case \"square\":\n        for (let i = 0; i < 2; i++) {\n          for (let j = 0; j < 2; j++) {\n            if (x + i >= 10 || y + j >= 10 || this.gameboard[x + i][y + j] !== 0) return false;\n          }\n        }\n        break;\n\n      case \"L\":\n        for (let i = 0; i < ship.length; i++) {\n          if (i < ship.length - 1) {\n            if (x + i >= 10 || this.gameboard[x + i][y] !== 0) return false;\n          } else {\n            if (x + i - 1 >= 10 || y + 1 >= 10 || this.gameboard[x + i - 1][y + 1] !== 0) return false;\n          }\n        }\n        break;\n\n      case \"T\":\n        for (let i = 0; i < 3; i++) {\n          if (x >= 10 || y - 1 + i >= 10 || this.gameboard[x][y - 1 + i] !== 0) return false;\n        }\n        if (x + 1 >= 10 || this.gameboard[x + 1][y] !== 0) return false;\n        break;\n\n      case \"dot\":\n        if (x >= 10 || y >= 10 || this.gameboard[x][y] !== 0) return false;\n        break;\n    }\n\n    return true;\n  }\n\n\n  attackShip(x, y) {\n    const currentItem = this.gameboard[x][y];\n    const ship = this.ships.find((ship) => ship.shipNumber === currentItem);\n    if (ship) {\n      ship.timesHit++;\n      this.gameboard[x][y] = \"Treffer\";\n      if (ship.timesHit === ship.shipLength) {\n        ship.isSunk = true;\n        console.log(`Du hast ${ship.name} versenkt!`);\n        return \"Versenkt\";\n      } else {\n        console.log(\"Treffer!\");\n        return \"Treffer\";\n      }\n    } else {\n      console.log(\"Verfehlt!\");\n      this.gameboard[x][y] = \"X\";\n      return \"Verfehlt\";\n    }\n  }\n\n  placeCustomShip(ship, shape, x, y) {\n    const shapes = {\n      \"line\": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],\n      \"square\": [[0, 0], [0, 1], [1, 0], [1, 1]],\n      \"L\": [[0, 0], [1, 0], [2, 0], [2, 1]],\n      \"T\": [[0, 1], [1, 0], [1, 1], [1, 2]],\n      \"dot\": [[0, 0]]\n    };\n    const coords = shapes[shape];\n    if (!coords) {\n      console.log(\"Ungültige Form\");\n      return;\n    }\n\n    coords.forEach(([dx, dy]) => {\n      const nx = x + dx;\n      const ny = y + dy;\n      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {\n        this.gameboard[nx][ny] = ship.shipNumber;\n      }\n    });\n    this.ships.push(ship);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.enemyGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  }\n\n  attackEnemy(x, y) {\n    const result = this.enemyGameboard.attackShip(x, y);\n    if (result === \"Treffer\") {\n      console.log(\"Treffer!\");\n    } else if (result === \"X\") {\n      console.log(\"Bereits an dieser Stelle geschossen!\");\n    } else if (result === \"Versenkt\") {\n      console.log(\"Versenkt!\");\n    } else {\n      console.log(\"Verfehlt!\");\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\n\nclass Ship {\n  constructor(name, length, number, shape, ships) {\n    this.name = name;\n    this.length = length;\n    this.shipNumber = number;\n    this.isSunk = false;\n    this.timesHit = 0;\n    this.shape = shape; //added shape property\n    this.ships = ships;\n  }\n\n  shipLength() {\n    return this.length;\n  }\n\n  hit() {\n    return this.timesHit;\n  }\n\n  checkShipSunk() {\n    this.ships.forEach((ship) => {\n      if (ship.timesHit === ship.shipLength()) {\n        ship.isSunk = true;\n      }\n      if (ship.isSunk) {\n        console.log(\"Du hast \" + ship.name + \" zum sinken gebracht\");\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;