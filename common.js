(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "RQy3":
/*!*************************************************!*\
  !*** ./src/app/store/picture-list/selectors.ts ***!
  \*************************************************/
/*! exports provided: selectPictureList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPictureList", function() { return selectPictureList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectPictureListFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('pictureList');
const selectPictureList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPictureListFeature, (state) => state.pictureList);


/***/ })

}]);
//# sourceMappingURL=common.js.map