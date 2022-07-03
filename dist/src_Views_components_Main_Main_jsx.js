"use strict";
(self["webpackChunkCards"] = self["webpackChunkCards"] || []).push([["src_Views_components_Main_Main_jsx"],{

/***/ "./src/Views/components/Main/Main.jsx":
/*!********************************************!*\
  !*** ./src/Views/components/Main/Main.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.module.scss */ "./src/Views/components/Main/Main.module.scss");



function Main(_ref) {
  var cards = _ref.cards,
      addToCart = _ref.addToCart,
      isMoreInfo = _ref.isMoreInfo,
      moreInfo = _ref.moreInfo;
  var cardsItems = cards.map(function (_ref2) {
    var name = _ref2.name,
        id = _ref2.id,
        price = _ref2.price,
        img = _ref2.img,
        desc = _ref2.desc;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: id,
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__img
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      width: "270",
      src: img,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__mainInfo
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$", price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: isMoreInfo === id ? "".concat(_Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__activeDesc) : "".concat(_Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__deactiveDesc)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__actions
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__action,
      onClick: function onClick() {
        return addToCart({
          name: name,
          id: id,
          price: price,
          img: img
        });
      }
    }, "Add to cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        if (isMoreInfo === id) id = null;
        return moreInfo(id);
      },
      className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item__action
    }, "+ More info")));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, cardsItems);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/Views/components/Main/Main.module.scss":
/*!****************************************************!*\
  !*** ./src/Views/components/Main/Main.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"nWi9c3GCXPVETGWvk48J","item":"y9ko67mJtyLTjj4EEtZR","item__mainInfo":"UiSQFh4prv4i8BoLImIc","item__activeDesc":"poEhqbnLvkTgcwBIe0mN","item__deactiveDesc":"NRZLKyz8QKAIjjA8Qb2s","item__actions":"xVueZerpjZeFiuLruTrQ","item__action":"x9DvTN7gPgMCWzdTO92T"});

/***/ })

}]);
//# sourceMappingURL=src_Views_components_Main_Main_jsx.js.map