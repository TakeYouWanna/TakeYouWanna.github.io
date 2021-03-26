(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-gallery-gallery-module"],{

/***/ "JjFn":
/*!***********************************************************!*\
  !*** ./src/app/modules/gallery/gallery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ "wkr9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"],
    },
];
class GalleryRoutingModule {
}
GalleryRoutingModule.ɵfac = function GalleryRoutingModule_Factory(t) { return new (t || GalleryRoutingModule)(); };
GalleryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GalleryRoutingModule });
GalleryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "peK5":
/*!***************************************************!*\
  !*** ./src/app/modules/gallery/gallery.module.ts ***!
  \***************************************************/
/*! exports provided: PictureListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureListModule", function() { return PictureListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-routing.module */ "JjFn");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.component */ "wkr9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PictureListModule {
}
PictureListModule.ɵfac = function PictureListModule_Factory(t) { return new (t || PictureListModule)(); };
PictureListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PictureListModule });
PictureListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["GalleryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PictureListModule, { declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["GalleryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "wkr9":
/*!******************************************************!*\
  !*** ./src/app/modules/gallery/gallery.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/picture-list/actions */ "ycBb");
/* harmony import */ var src_app_store_picture_list_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/picture-list/selectors */ "RQy3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GalleryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](picture_r1.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", picture_r1.value.pictureSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class GalleryComponent {
    constructor(store$) {
        this.store$ = store$;
        this.pictureList$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_picture_list_selectors__WEBPACK_IMPORTED_MODULE_2__["selectPictureList"]));
        this.limit = 10;
    }
    onWindowScroll() {
        if (document.scrollingElement.scrollHeight -
            document.scrollingElement.scrollTop ===
            document.scrollingElement.clientHeight) {
            this.limit += 10;
            this.loadPictures();
        }
    }
    ngOnInit() {
        this.loadPictures();
    }
    loadPictures() {
        let type = '';
        let value = '';
        if (this.author) {
            type = 'author';
            value = this.author;
        }
        const criterion = {
            limit: this.limit,
            type,
            value,
        };
        this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_1__["loadPictures"])({ criterion }));
    }
    trackByObject(index, item) {
        return index;
    }
    ngOnDestroy() {
        this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_1__["clearAllPicture"])());
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], hostBindings: function GalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function GalleryComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 7, consts: [[1, "search-line"], ["type", "text", "placeholder", "Author name ...", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "window-div picture", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "window-div", "picture"], [3, "src"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GalleryComponent_Template_input_ngModelChange_2_listener($event) { return ctx.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_3_listener() { return ctx.loadPictures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GalleryComponent_div_5_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, ctx.pictureList$)))("ngForTrackBy", ctx.trackByObject);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".picture[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 20px;\n  font-size: 14pt;\n  max-width: 25vw;\n}\n.picture[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px 0px 20px 0px;\n  overflow: hidden;\n}\n.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 25vw;\n  background-color: white;\n}\n.search-line[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  padding: 0px;\n}\n.search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 15pt;\n}\n.search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 40px;\n  padding-left: 10px;\n}\n.search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  .picture[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin: 10px;\n    font-size: 15pt;\n  }\n  .picture[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0px 0px 10px 0px;\n  }\n\n  .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 15pt;\n  }\n  .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 30px;\n  }\n  .search-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFOVTtBQUdaO0FBSUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJRTtFQUNFLFdBWlE7RUFhUixZQWJRO0VBY1IsdUJBQUE7QUFGSjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBSUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFGSjtBQUdJOztFQUVFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFETjtBQUdJO0VBQ0UsWUFwQ1E7RUFxQ1IsWUFwQ1M7RUFxQ1Qsa0JBQUE7QUFETjtBQUdJOztFQUVFLGFBQUE7QUFETjtBQUdJO0VBQ0UsWUE1Q1M7RUE2Q1Qsa0JBQUE7RUFDQSxlQUFBO0FBRE47QUFNQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBSEY7RUFJRTtJQUNFLHdCQUFBO0VBRko7O0VBUUk7O0lBRUUsZUFBQTtFQUxOO0VBT0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUxOO0VBT0k7SUFDRSxZQUFBO0VBTE47QUFDRiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNlYXJjaFdpZHRoOiAzNTBweDtcclxuJHNlYXJjaEhlaWdodDogNDBweDtcclxuJGltYWdlU2l6ZTogMjV2dztcclxuXHJcbi5waWN0dXJlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgbWF4LXdpZHRoOiAkaW1hZ2VTaXplO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAkaW1hZ2VTaXplO1xyXG4gICAgaGVpZ2h0OiAkaW1hZ2VTaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXYge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBpbnB1dCxcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogJHNlYXJjaFdpZHRoO1xyXG4gICAgICBoZWlnaHQ6ICRzZWFyY2hIZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlucHV0OmZvY3VzLFxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogJHNlYXJjaEhlaWdodDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBpY3R1cmUge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2gtbGluZSB7XHJcbiAgICBkaXYge1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-gallery-gallery-module.js.map