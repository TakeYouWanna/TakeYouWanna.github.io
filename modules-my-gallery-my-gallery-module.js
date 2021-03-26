(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-my-gallery-my-gallery-module"],{

/***/ "/RYA":
/*!*****************************************************************!*\
  !*** ./src/app/modules/my-gallery/my-gallery-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyGalleryRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGalleryRouterModule", function() { return MyGalleryRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-gallery.component */ "CvuY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _my_gallery_component__WEBPACK_IMPORTED_MODULE_1__["MyGalleryComponent"],
    },
];
class MyGalleryRouterModule {
}
MyGalleryRouterModule.ɵfac = function MyGalleryRouterModule_Factory(t) { return new (t || MyGalleryRouterModule)(); };
MyGalleryRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MyGalleryRouterModule });
MyGalleryRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyGalleryRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "8u9w":
/*!*********************************************************!*\
  !*** ./src/app/modules/my-gallery/my-gallery.module.ts ***!
  \*********************************************************/
/*! exports provided: MyGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGalleryModule", function() { return MyGalleryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-gallery-routing.module */ "/RYA");
/* harmony import */ var _my_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-gallery.component */ "CvuY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MyGalleryModule {
}
MyGalleryModule.ɵfac = function MyGalleryModule_Factory(t) { return new (t || MyGalleryModule)(); };
MyGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MyGalleryModule });
MyGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_my_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyGalleryRouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyGalleryModule, { declarations: [_my_gallery_component__WEBPACK_IMPORTED_MODULE_2__["MyGalleryComponent"]], imports: [_my_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyGalleryRouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "CvuY":
/*!************************************************************!*\
  !*** ./src/app/modules/my-gallery/my-gallery.component.ts ***!
  \************************************************************/
/*! exports provided: MyGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGalleryComponent", function() { return MyGalleryComponent; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/picture-list/actions */ "ycBb");
/* harmony import */ var src_app_store_picture_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/picture-list/selectors */ "RQy3");
/* harmony import */ var src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/user/selectors */ "ilQm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function MyGalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyGalleryComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const picture_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.removePicture(picture_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", picture_r1.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", picture_r1.value.pictureSrc, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
class MyGalleryComponent {
    constructor(store$, actions$) {
        this.store$ = store$;
        this.actions$ = actions$;
        this.pictureList = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_picture_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPictureList"]));
        this.uid$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserUid"]));
        this.criterion = {
            limit: 10,
            type: 'uid',
            value: '',
        };
    }
    onWindowScroll() {
        if (document.scrollingElement.scrollHeight -
            document.scrollingElement.scrollTop ===
            document.scrollingElement.clientHeight) {
            this.criterion.limit += 10;
            this.loadPictures();
        }
    }
    ngOnInit() {
        this.uidSubscription$ = this.uid$.subscribe((uid) => {
            if (uid) {
                this.criterion.value = uid;
                this.loadPictures();
            }
        });
        const action = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])("[Firestore / API] picture removed successfully" /* removePictureSuccess */))
            .subscribe(() => {
            this.loadPictures();
            action.unsubscribe();
        });
    }
    loadPictures() {
        const { criterion } = this;
        if (criterion.value) {
            this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_2__["loadPictures"])({ criterion }));
        }
    }
    removePicture(pictureId) {
        this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_2__["removePicture"])({ pictureId }));
    }
    trackByObject(index, item) {
        return index;
    }
    ngOnDestroy() {
        this.uidSubscription$.unsubscribe();
        this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_2__["clearAllPicture"])());
    }
}
MyGalleryComponent.ɵfac = function MyGalleryComponent_Factory(t) { return new (t || MyGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"])); };
MyGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MyGalleryComponent, selectors: [["app-my-gallery"]], hostBindings: function MyGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function MyGalleryComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 6, consts: [["class", "window-div picture", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "window-div", "picture"], [3, "click"], [3, "src"]], template: function MyGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MyGalleryComponent_div_0_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx.pictureList)))("ngForTrackBy", ctx.trackByObject);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".picture[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 20px;\n  font-size: 14pt;\n  max-width: 25vw;\n}\n.picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  font-size: 20pt;\n  padding: 0px;\n  color: red;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin-left: 15px;\n}\n.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 25vw;\n  background-color: white;\n}\n@media only screen and (max-width: 768px) {\n  .picture[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin: 10px;\n    font-size: 15pt;\n  }\n  .picture[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0px 0px 10px 0px;\n  }\n  .picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 10pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFOVTtBQUtaO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVFO0VBQ0UsV0EzQlE7RUE0QlIsWUE1QlE7RUE2QlIsdUJBQUE7QUFBSjtBQUlBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFERjtFQUVFO0lBQ0UsV0FBQTtFQUFKO0VBR0U7SUFDRSx3QkFBQTtFQURKO0VBRUk7SUFDRSxlQUFBO0VBQU47QUFDRiIsImZpbGUiOiJteS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGltYWdlU2l6ZTogMjV2dztcclxuXHJcbi5waWN0dXJlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgbWF4LXdpZHRoOiAkaW1hZ2VTaXplO1xyXG4gIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogJGltYWdlU2l6ZTtcclxuICAgIGhlaWdodDogJGltYWdlU2l6ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5waWN0dXJlIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-my-gallery-my-gallery-module.js.map