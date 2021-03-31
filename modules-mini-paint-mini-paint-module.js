(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mini-paint-mini-paint-module"],{

/***/ "0KI4":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/mini-paint/drawing-properties/drawing-properties.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DrawingPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingPropertiesComponent", function() { return DrawingPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class DrawingPropertiesComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.figureFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.figurePropertiesForm = this.formBuilder.group({
            lineWidth: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10)]],
            lineColor: ['#000000'],
            fillColor: ['#000000'],
            filling: [false],
        });
        this.textPropertiesForm = this.formBuilder.group({
            font: ['Times New Roman'],
            fontSize: [10],
            fontColor: ['#000000'],
            fontWeight: [false],
            fontCursive: [false],
            text: [''],
        });
        this.figurePropertiesForm.valueChanges.subscribe((figureProperties) => {
            this.figureFormChange.emit(figureProperties);
        });
        this.textPropertiesForm.valueChanges.subscribe((textProperties) => {
            this.textFormChange.emit(textProperties);
        });
    }
}
DrawingPropertiesComponent.ɵfac = function DrawingPropertiesComponent_Factory(t) { return new (t || DrawingPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DrawingPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingPropertiesComponent, selectors: [["app-drawing-properties"]], inputs: { textForm: "textForm", figureForm: "figureForm" }, outputs: { figureFormChange: "figureFormChange", textFormChange: "textFormChange" }, decls: 48, vars: 3, consts: [[3, "formGroup"], [1, "coloredText"], ["type", "range", "formControlName", "lineWidth", "min", "1", "max", "10"], ["type", "color", "formControlName", "lineColor"], ["type", "color", "formControlName", "fillColor"], ["type", "checkbox", "formControlName", "filling"], ["formControlName", "font"], ["type", "number", "min", "1", "max", "50", "formControlName", "fontSize"], ["type", "color", "formControlName", "fontColor"], [1, "font-style"], ["type", "checkbox", "id", "weight-checkbox", "formControlName", "fontWeight"], ["for", "weight-checkbox", 1, "weight-font"], ["type", "checkbox", "id", "cursive-checkbox", "formControlName", "fontCursive"], ["for", "cursive-checkbox", 1, "cursive-font"], ["type", "text", "formControlName", "text"]], template: function DrawingPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Figure properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Line color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fill color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Text properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Times New Roman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Impact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Arial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Verdana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Courier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Comic Sans MS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Font size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Font color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Font style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Your text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.figurePropertiesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("line width: ", ctx.figurePropertiesForm.controls.lineWidth.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.textPropertiesForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["form[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  color: black;\n}\nform[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  border: 2px solid white;\n  font-size: 14pt;\n}\nform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  width: 50px;\n  font-size: 12pt;\n  width: -webkit-max-content;\n  width: max-content;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  outline: none;\n  font-size: 30pt;\n}\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n}\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 13pt;\n  background-color: rgba(0, 0, 0, 0);\n  border: 2px solid white;\n}\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 12pt;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.font-style[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.font-style[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.font-style[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 4px 4px;\n  width: -webkit-max-content;\n  width: max-content;\n  box-sizing: content-box;\n  cursor: pointer;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.font-style[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.weight-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.cursive-font[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n@media only screen and (max-width: 768px) {\n  form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 7pt;\n  }\n  form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 8pt;\n    margin-top: 0px;\n    padding: 0px;\n  }\n  form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 8pt;\n  }\n  form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    height: auto;\n  }\n  form[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n    font-size: 8pt;\n  }\n\n  .font-style[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding: 2px 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHJhd2luZy1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFBRTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBSUEsa0NBQUE7RUFDQSx1QkFBQTtBQUxKO0FBQ0k7RUFDRSxvQ0FBQTtBQUNOO0FBS0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBT0E7RUFDRSxXQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU9FO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQUxKO0FBUUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFOSjtBQVVBO0VBQ0UsaUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7QUFQRjtBQVVBO0VBRUk7SUFDRSxjQUFBO0VBUko7RUFVRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQVJKO0VBVUU7SUFDRSxjQUFBO0VBUko7RUFVRTtJQUNFLFlBQUE7RUFSSjtFQVVFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFSSjtFQVVFO0lBQ0UsY0FBQTtFQVJKOztFQVlFO0lBQ0UsZ0JBQUE7RUFUSjtBQUNGIiwiZmlsZSI6ImRyYXdpbmctcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9J2NvbG9yJ10ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzMHB0O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgb3B0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb250LXN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogNHB4IDRweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ud2VpZ2h0LWZvbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3Vyc2l2ZS1mb250IHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBmb3JtIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiA3cHQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT0nY29sb3InXSB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9udC1zdHlsZSB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "0RGt":
/*!*********************************************************!*\
  !*** ./src/app/modules/mini-paint/mini-paint.module.ts ***!
  \*********************************************************/
/*! exports provided: MiniPaintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPaintModule", function() { return MiniPaintModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mini_paint_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-paint-routing.module */ "OLZh");
/* harmony import */ var _mini_paint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini-paint.component */ "8g3N");
/* harmony import */ var _drawing_properties_drawing_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing-properties/drawing-properties.component */ "0KI4");
/* harmony import */ var _drawing_tools_drawing_tools_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawing-tools/drawing-tools.component */ "f2O/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MiniPaintModule {
}
MiniPaintModule.ɵfac = function MiniPaintModule_Factory(t) { return new (t || MiniPaintModule)(); };
MiniPaintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MiniPaintModule });
MiniPaintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _mini_paint_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiniPaintRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MiniPaintModule, { declarations: [_mini_paint_component__WEBPACK_IMPORTED_MODULE_3__["MiniPaintComponent"],
        _drawing_properties_drawing_properties_component__WEBPACK_IMPORTED_MODULE_4__["DrawingPropertiesComponent"],
        _drawing_tools_drawing_tools_component__WEBPACK_IMPORTED_MODULE_5__["DrawingToolsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _mini_paint_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiniPaintRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "5s1M":
/*!************************************************************!*\
  !*** ./src/app/shared/services/drawing/drawing.service.ts ***!
  \************************************************************/
/*! exports provided: DrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingService", function() { return DrawingService; });
/* harmony import */ var _classes_drawing_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/drawing-method */ "z1xW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DrawingService {
    constructor() { }
    startDrawing(drawingMethod, canvas, context, figureProperties, textProperties, event) {
        const drawing = new _classes_drawing_method__WEBPACK_IMPORTED_MODULE_0__["DrawingMethod"](canvas, context, figureProperties, textProperties, event);
        drawing.create(drawingMethod).startDrawing();
    }
}
DrawingService.ɵfac = function DrawingService_Factory(t) { return new (t || DrawingService)(); };
DrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrawingService, factory: DrawingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8g3N":
/*!************************************************************!*\
  !*** ./src/app/modules/mini-paint/mini-paint.component.ts ***!
  \************************************************************/
/*! exports provided: MiniPaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPaintComponent", function() { return MiniPaintComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/picture-list/actions */ "ycBb");
/* harmony import */ var src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/user/selectors */ "ilQm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/drawing/drawing.service */ "5s1M");
/* harmony import */ var _drawing_tools_drawing_tools_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawing-tools/drawing-tools.component */ "f2O/");
/* harmony import */ var _drawing_properties_drawing_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawing-properties/drawing-properties.component */ "0KI4");








const _c0 = ["canvas"];
class MiniPaintComponent {
    constructor(drawingService, store$) {
        this.drawingService = drawingService;
        this.store$ = store$;
        this.uid$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserUid"]));
        this.saving = false;
    }
    ngAfterViewInit() {
        const context = this.canvas.nativeElement.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
        const scale = window.devicePixelRatio;
        this.canvas.nativeElement.width = canvasRect.width * scale;
        this.canvas.nativeElement.height = canvasRect.height * scale;
        this.context.scale(scale, scale);
        this.canvas.nativeElement.addEventListener('mousedown', (event) => this.startDrawing(event));
        this.canvas.nativeElement.addEventListener('touchstart', (event) => this.startDrawing(event));
    }
    startDrawing(event) {
        this.drawingService.startDrawing(this.toolName, this.canvas, this.context, this.figureProperties, this.textProperties, event);
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
    save() {
        const pictureSrc = this.canvas.nativeElement.toDataURL('image/png');
        this.store$.dispatch(Object(src_app_store_picture_list_actions__WEBPACK_IMPORTED_MODULE_1__["addPicture"])({ pictureSrc }));
    }
}
MiniPaintComponent.ɵfac = function MiniPaintComponent_Factory(t) { return new (t || MiniPaintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
MiniPaintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MiniPaintComponent, selectors: [["app-mini-paint"]], viewQuery: function MiniPaintComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 4, vars: 3, consts: [[1, "window-div", 3, "toolName", "toolNameChange", "drawingClear", "drawingSave"], ["canvas", ""], [1, "window-div", 3, "figureForm", "textForm", "figureFormChange", "textFormChange"]], template: function MiniPaintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-drawing-tools", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toolNameChange", function MiniPaintComponent_Template_app_drawing_tools_toolNameChange_0_listener($event) { return ctx.toolName = $event; })("drawingClear", function MiniPaintComponent_Template_app_drawing_tools_drawingClear_0_listener() { return ctx.clear(); })("drawingSave", function MiniPaintComponent_Template_app_drawing_tools_drawingSave_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-drawing-properties", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("figureFormChange", function MiniPaintComponent_Template_app_drawing_properties_figureFormChange_3_listener($event) { return ctx.figureProperties = $event; })("textFormChange", function MiniPaintComponent_Template_app_drawing_properties_textFormChange_3_listener($event) { return ctx.textProperties = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("toolName", ctx.toolName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("figureForm", ctx.figureProperties)("textForm", ctx.textProperties);
    } }, directives: [_drawing_tools_drawing_tools_component__WEBPACK_IMPORTED_MODULE_5__["DrawingToolsComponent"], _drawing_properties_drawing_properties_component__WEBPACK_IMPORTED_MODULE_6__["DrawingPropertiesComponent"]], styles: ["canvas[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 550px;\n  box-sizing: border-box;\n  background-color: white;\n}\n\napp-drawing-tools[_ngcontent-%COMP%], app-drawing-properties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  justify-content: space-around;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 550px;\n}\n\n@media only screen and (max-width: 1050px) {\n  app-drawing-tools[_ngcontent-%COMP%], app-drawing-properties[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 700px;\n    height: auto;\n    font-size: 20pt;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  canvas[_ngcontent-%COMP%] {\n    width: 320px;\n    height: 320px;\n  }\n\n  app-drawing-tools[_ngcontent-%COMP%], app-drawing-properties[_ngcontent-%COMP%] {\n    padding: 10px;\n    flex-direction: row;\n    align-items: flex-start;\n    width: 320px;\n    height: auto;\n    font-size: 10pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaW5pLXBhaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFKWTtFQUtaLGFBTmE7RUFPYixzQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFiUTtFQWNSLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBbkJhO0FBZ0JmOztBQU1BO0VBQ0U7O0lBRUUsbUJBQUE7SUFDQSxZQXpCVTtJQTBCVixZQUFBO0lBQ0EsZUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBSkY7O0VBT0E7O0lBRUUsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6Im1pbmktcGFpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2FudmFzSGVpZ2h0OiA1NTBweDtcclxuJGNhbnZhc1dpZHRoOiA3MDBweDtcclxuJHBhZGRpbmc6IDE1cHg7XHJcblxyXG5jYW52YXMge1xyXG4gIHdpZHRoOiAkY2FudmFzV2lkdGg7XHJcbiAgaGVpZ2h0OiAkY2FudmFzSGVpZ2h0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmFwcC1kcmF3aW5nLXRvb2xzLFxyXG5hcHAtZHJhd2luZy1wcm9wZXJ0aWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6ICRjYW52YXNIZWlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGNhbnZhc1dpZHRoICogMS41KSB7XHJcbiAgYXBwLWRyYXdpbmctdG9vbHMsXHJcbiAgYXBwLWRyYXdpbmctcHJvcGVydGllcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6ICRjYW52YXNXaWR0aDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBjYW52YXMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICB9XHJcblxyXG4gIGFwcC1kcmF3aW5nLXRvb2xzLFxyXG4gIGFwcC1kcmF3aW5nLXByb3BlcnRpZXMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "DS96":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/text-drawing.ts ***!
  \*****************************************************************/
/*! exports provided: TextDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDrawing", function() { return TextDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class TextDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        const oldContext = this.copyDrawing();
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([_, to]) => {
            this.redraw(oldContext);
            if (this.paintingKit.textProperties) {
                const fontWeight = this.paintingKit.textProperties.fontWeight
                    ? 'bold'
                    : 'normal';
                const fontStyle = this.paintingKit.textProperties.fontCursive
                    ? 'italic'
                    : 'normal';
                this.paintingKit.context.fillStyle = this.paintingKit.textProperties.fontColor;
                this.paintingKit.context.font = `${fontStyle} ${fontWeight} ${this.paintingKit.textProperties.fontSize}px ${this.paintingKit.textProperties.font}`;
            }
            this.paintingKit.context.fillText(this.paintingKit.textProperties.text, to.x, to.y);
        });
    }
}


/***/ }),

/***/ "Mp9M":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/coordinates.ts ***!
  \****************************************************************/
/*! exports provided: Coordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class Coordinates {
    getDiffCurrentPosition($event, canvas) {
        if ($event instanceof MouseEvent) {
            return this.getDiffCurrentMouseCoordinates(canvas);
        }
        return this.getDiffCurrentTouchCoordinates(canvas);
    }
    getDiffCurrentTouchCoordinates(canvas) {
        const touchMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'touchmove');
        const touchEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'touchend');
        const touchCancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'touchcancel');
        return touchMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(($event) => {
            if ($event instanceof TouchEvent) {
                $event.preventDefault();
                return {
                    x: $event.changedTouches[0].clientX -
                        canvas.nativeElement.offsetLeft,
                    y: $event.changedTouches[0].clientY - canvas.nativeElement.offsetTop,
                };
            }
            return {
                x: 0,
                y: 0,
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(touchEnd$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(touchCancel$));
    }
    getDiffCurrentMouseCoordinates(canvas) {
        const mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'mousemove');
        const mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'mouseup');
        const mouseOut$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvas.nativeElement, 'mouseout');
        return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(($event) => {
            if ($event instanceof MouseEvent) {
                $event.preventDefault();
                return {
                    x: $event.offsetX,
                    y: $event.offsetY,
                };
            }
            return {
                x: 0,
                y: 0,
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(mouseOut$));
    }
    getCoords($event, canvas) {
        if ($event instanceof MouseEvent) {
            return {
                x: $event.offsetX,
                y: $event.offsetY,
            };
        }
        return {
            x: $event.changedTouches[0].clientX - canvas.nativeElement.offsetLeft,
            y: $event.changedTouches[0].clientY - canvas.nativeElement.offsetTop,
        };
    }
}


/***/ }),

/***/ "OLZh":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mini-paint/mini-paint-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MiniPaintRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPaintRoutingModule", function() { return MiniPaintRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mini_paint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-paint.component */ "8g3N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _mini_paint_component__WEBPACK_IMPORTED_MODULE_1__["MiniPaintComponent"],
    },
];
class MiniPaintRoutingModule {
}
MiniPaintRoutingModule.ɵfac = function MiniPaintRoutingModule_Factory(t) { return new (t || MiniPaintRoutingModule)(); };
MiniPaintRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MiniPaintRoutingModule });
MiniPaintRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MiniPaintRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f2O/":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/mini-paint/drawing-tools/drawing-tools.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DrawingToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingToolsComponent", function() { return DrawingToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/user/selectors */ "ilQm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function DrawingToolsComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingToolsComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const tool_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toolNameChange.emit(tool_r2.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.toolName == tool_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tool_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingToolsComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingToolsComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.saving));
} }
class DrawingToolsComponent {
    constructor(store$, actions$) {
        this.store$ = store$;
        this.actions$ = actions$;
        this.toolsList = {};
        this.uid$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserUid"]));
        this.saving = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.toolNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drawingSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drawingClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.toolsList.brush = '../../../../assets/icons/brush.png';
        this.toolsList.rectangle = '../../../../assets/icons/rect.png';
        this.toolsList.line = '../../../../assets/icons/line.png';
        this.toolsList.circle = '../../../../assets/icons/circle.png';
        this.toolsList.star = '../../../../assets/icons/star.png';
        this.toolsList.text = '../../../../assets/icons/text.png';
    }
    save() {
        this.drawingSave.emit();
        this.saving.next(true);
        this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])("[Firestore / API] picture added successfully" /* addPictureSuccess */))
            .subscribe(() => {
            this.saving.next(false);
        });
    }
    trackByObject(index, item) {
        return index;
    }
    ngOnDestroy() {
        this.saving.complete();
    }
}
DrawingToolsComponent.ɵfac = function DrawingToolsComponent_Factory(t) { return new (t || DrawingToolsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
DrawingToolsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingToolsComponent, selectors: [["app-drawing-tools"]], inputs: { toolName: "toolName" }, outputs: { toolNameChange: "toolNameChange", drawingSave: "drawingSave", drawingClear: "drawingClear" }, decls: 6, vars: 7, consts: [["class", "coloredBackground", 3, "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "coloredBackground", 3, "click"], ["src", "../../../../assets/icons/clear.png"], ["class", "coloredBackground", 3, "disabled", "click", 4, "ngIf"], [1, "coloredBackground", 3, "disabled", "click"], [3, "src"], ["src", "../../../../assets/icons/save.png"]], template: function DrawingToolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DrawingToolsComponent_button_0_Template, 2, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingToolsComponent_Template_button_click_2_listener() { return ctx.drawingClear.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DrawingToolsComponent_button_4_Template, 3, 3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.toolsList))("ngForTrackBy", ctx.trackByObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.uid$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n  padding: 10px;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 15px;\n  text-shadow: 1px 1px 4px #427388;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n@media only screen and (max-width: 768px) {\n  button[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHJhd2luZy10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUo7QUFDQTtFQUNFLHNGQUFBO0VBRUEscUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjtFQUFFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImRyYXdpbmctdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZDtcclxuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDBweDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMTI1MG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAxNXB4O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjNDI3Mzg4O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "gZ4X":
/*!************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/drawing.ts ***!
  \************************************************************/
/*! exports provided: Drawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawing", function() { return Drawing; });
/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates */ "Mp9M");

class Drawing {
    constructor(paintingKit) {
        this.paintingKit = null;
        this.coordinates = new _coordinates__WEBPACK_IMPORTED_MODULE_0__["Coordinates"]();
        this.paintingKit = paintingKit;
    }
    redraw(oldContext) {
        this.clearDrawing();
        this.paintingKit.context.putImageData(oldContext, 0, 0);
    }
    clearDrawing() {
        this.paintingKit.context.clearRect(0, 0, this.paintingKit.canvas.nativeElement.width, this.paintingKit.canvas.nativeElement.height);
    }
    copyDrawing() {
        return this.paintingKit.context.getImageData(0, 0, this.paintingKit.canvas.nativeElement.width, this.paintingKit.canvas.nativeElement.height);
    }
    startDrawing() { }
}


/***/ }),

/***/ "qef3":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/star-drawing.ts ***!
  \*****************************************************************/
/*! exports provided: StarDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDrawing", function() { return StarDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class StarDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        const oldContext = this.copyDrawing();
        const startCoords = this.coordinates.getCoords(this.paintingKit.event, this.paintingKit.canvas);
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([_, to]) => {
            this.redraw(oldContext);
            const middleX = startCoords.x + (to.x - startCoords.x) / 2;
            const middleY = startCoords.y + (to.y - startCoords.y) / 2;
            const outerRadius = Math.sqrt(Math.pow((to.x - startCoords.x), 2) + Math.pow((to.y - startCoords.y), 2)) /
                2;
            const innerRadius = outerRadius / 2;
            let rot = (Math.PI / 2) * 3;
            let x = middleX;
            let y = middleY;
            const step = Math.PI / 5;
            this.paintingKit.context.beginPath();
            this.paintingKit.context.moveTo(middleX, middleY - outerRadius);
            for (let i = 0; i < 5; i++) {
                x = middleX + Math.cos(rot) * outerRadius;
                y = middleY + Math.sin(rot) * outerRadius;
                this.paintingKit.context.lineTo(x, y);
                rot += step;
                x = middleX + Math.cos(rot) * innerRadius;
                y = middleY + Math.sin(rot) * innerRadius;
                this.paintingKit.context.lineTo(x, y);
                rot += step;
            }
            this.paintingKit.context.lineTo(middleX, middleY - outerRadius);
            if (this.paintingKit.figureProperties) {
                this.paintingKit.context.lineWidth = this.paintingKit.figureProperties.lineWidth;
                this.paintingKit.context.fillStyle = this.paintingKit.figureProperties.fillColor;
                this.paintingKit.context.strokeStyle = this.paintingKit.figureProperties.lineColor;
                if (this.paintingKit.figureProperties.filling) {
                    this.paintingKit.context.fill();
                }
            }
            this.paintingKit.context.stroke();
        });
    }
}


/***/ }),

/***/ "tDXO":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/rect-drawing.ts ***!
  \*****************************************************************/
/*! exports provided: RectDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectDrawing", function() { return RectDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class RectDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        const oldContext = this.copyDrawing();
        const startCoords = this.coordinates.getCoords(this.paintingKit.event, this.paintingKit.canvas);
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([_, to]) => {
            this.redraw(oldContext);
            this.paintingKit.context.beginPath();
            this.paintingKit.context.rect(startCoords.x, startCoords.y, to.x - startCoords.x, to.y - startCoords.y);
            if (this.paintingKit.figureProperties) {
                this.paintingKit.context.lineWidth = this.paintingKit.figureProperties.lineWidth;
                this.paintingKit.context.fillStyle = this.paintingKit.figureProperties.fillColor;
                this.paintingKit.context.strokeStyle = this.paintingKit.figureProperties.lineColor;
                if (this.paintingKit.figureProperties.filling) {
                    this.paintingKit.context.fill();
                }
            }
            this.paintingKit.context.stroke();
        });
    }
}


/***/ }),

/***/ "uKqD":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/brush-drawing.ts ***!
  \******************************************************************/
/*! exports provided: BrushDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushDrawing", function() { return BrushDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class BrushDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([from, to]) => {
            if (this.paintingKit.figureProperties) {
                this.paintingKit.context.lineWidth = this.paintingKit.figureProperties.lineWidth;
                this.paintingKit.context.strokeStyle = this.paintingKit.figureProperties.lineColor;
            }
            this.paintingKit.context.fillStyle = 'white';
            this.paintingKit.context.lineJoin = 'round';
            this.paintingKit.context.lineCap = 'round';
            this.paintingKit.context.beginPath();
            this.paintingKit.context.moveTo(from.x, from.y);
            this.paintingKit.context.lineTo(to.x, to.y);
            this.paintingKit.context.stroke();
        });
    }
}


/***/ }),

/***/ "uV6M":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/line-drawing.ts ***!
  \*****************************************************************/
/*! exports provided: LineDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineDrawing", function() { return LineDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class LineDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        const oldContext = this.copyDrawing();
        const startCoords = this.coordinates.getCoords(this.paintingKit.event, this.paintingKit.canvas);
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([_, to]) => {
            this.redraw(oldContext);
            this.paintingKit.context.beginPath();
            this.paintingKit.context.moveTo(startCoords.x, startCoords.y);
            this.paintingKit.context.lineTo(to.x, to.y);
            if (this.paintingKit.figureProperties) {
                this.paintingKit.context.lineWidth = this.paintingKit.figureProperties.lineWidth;
                this.paintingKit.context.strokeStyle = this.paintingKit.figureProperties.lineColor;
            }
            this.paintingKit.context.stroke();
        });
    }
}


/***/ }),

/***/ "xvEd":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/circle-drawing.ts ***!
  \*******************************************************************/
/*! exports provided: CircleDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleDrawing", function() { return CircleDrawing; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "gZ4X");

class CircleDrawing extends _drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"] {
    startDrawing() {
        const oldContext = this.copyDrawing();
        const startCoords = this.coordinates.getCoords(this.paintingKit.event, this.paintingKit.canvas);
        this.coordinates
            .getDiffCurrentPosition(this.paintingKit.event, this.paintingKit.canvas)
            .subscribe(([_, to]) => {
            this.redraw(oldContext);
            this.paintingKit.context.beginPath();
            const radius = Math.sqrt(Math.pow((to.x - startCoords.x), 2) + Math.pow((to.y - startCoords.y), 2)) /
                2;
            this.paintingKit.context.arc(startCoords.x + (to.x - startCoords.x) / 2, startCoords.y + (to.y - startCoords.y) / 2, radius, 0, 2 * Math.PI);
            if (this.paintingKit.figureProperties) {
                this.paintingKit.context.lineWidth = this.paintingKit.figureProperties.lineWidth;
                this.paintingKit.context.fillStyle = this.paintingKit.figureProperties.fillColor;
                this.paintingKit.context.strokeStyle = this.paintingKit.figureProperties.lineColor;
                if (this.paintingKit.figureProperties.filling) {
                    this.paintingKit.context.fill();
                }
            }
            this.paintingKit.context.stroke();
        });
    }
}


/***/ }),

/***/ "z1xW":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/drawing/classes/drawing-method.ts ***!
  \*******************************************************************/
/*! exports provided: DrawingMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingMethod", function() { return DrawingMethod; });
/* harmony import */ var _brush_drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brush-drawing */ "uKqD");
/* harmony import */ var _line_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-drawing */ "uV6M");
/* harmony import */ var _rect_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rect-drawing */ "tDXO");
/* harmony import */ var _circle_drawing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-drawing */ "xvEd");
/* harmony import */ var _star_drawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star-drawing */ "qef3");
/* harmony import */ var _text_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-drawing */ "DS96");






class DrawingMethod {
    constructor(canvas, context, figureProperties, textProperties, event) {
        this.paintingKit = {
            canvas: null,
            context: null,
            figureProperties: null,
            textProperties: null,
            event: null,
        };
        this.paintingKit.canvas = canvas;
        this.paintingKit.context = context;
        this.paintingKit.event = event;
        this.paintingKit.figureProperties = figureProperties;
        this.paintingKit.textProperties = textProperties;
    }
    create(tool) {
        let method;
        switch (tool) {
            case 'pencil':
                method = new _brush_drawing__WEBPACK_IMPORTED_MODULE_0__["BrushDrawing"](this.paintingKit);
                break;
            case 'rectangle':
                method = new _rect_drawing__WEBPACK_IMPORTED_MODULE_2__["RectDrawing"](this.paintingKit);
                break;
            case 'line':
                method = new _line_drawing__WEBPACK_IMPORTED_MODULE_1__["LineDrawing"](this.paintingKit);
                break;
            case 'circle':
                method = new _circle_drawing__WEBPACK_IMPORTED_MODULE_3__["CircleDrawing"](this.paintingKit);
                break;
            case 'star':
                method = new _star_drawing__WEBPACK_IMPORTED_MODULE_4__["StarDrawing"](this.paintingKit);
                break;
            case 'text':
                method = new _text_drawing__WEBPACK_IMPORTED_MODULE_5__["TextDrawing"](this.paintingKit);
                break;
            default:
                method = new _brush_drawing__WEBPACK_IMPORTED_MODULE_0__["BrushDrawing"](this.paintingKit);
                break;
        }
        return method;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-mini-paint-mini-paint-module.js.map