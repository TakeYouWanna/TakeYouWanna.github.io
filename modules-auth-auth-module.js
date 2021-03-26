(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "cMCp");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "NRzN");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "oxXO");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-page/register-page.component */ "38U8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]] }); })();


/***/ }),

/***/ "38U8":
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/register-page/register-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/user/actions */ "4ohX");
/* harmony import */ var _validators_match_values_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators/match-values.validator */ "NOzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class RegisterPageComponent {
    constructor(formBuilder, store$) {
        this.formBuilder = formBuilder;
        this.store$ = store$;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            passwordConfirm: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), Object(_validators_match_values_validator__WEBPACK_IMPORTED_MODULE_2__["matchValues"])('password')],
            ],
        });
    }
    onSubmit() {
        const { email, password, name } = this.registerForm.value;
        this.store$.dispatch(Object(src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__["createUser"])({ email, password, name }));
        this.registerForm.reset();
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 9, vars: 2, consts: [[3, "formGroup", "submit"], ["type", "email", "placeholder", "email *", "formControlName", "email"], ["type", "text", "placeholder", "name *", "formControlName", "name"], ["type", "password", "placeholder", "password *", "formControlName", "password"], ["type", "password", "placeholder", "Confirm password *", "formControlName", "passwordConfirm"], ["type", "submit", 1, "coloredBackground", 3, "disabled"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function RegisterPageComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " GET STARTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  font-size: 20pt;\n  cursor: pointer;\n  padding: 10px;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 15px;\n  text-shadow: 1px 1px 2px #427388;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  padding: 2px 2px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 2px solid #9eadb0;\n  font-size: 14pt;\n  margin-bottom: 20px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 0, 0, 0.418);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n@media only screen and (max-width: 768px) {\n  input[_ngcontent-%COMP%] {\n    width: 180px;\n    font-size: 9pt;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 15pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0FBREY7O0FBSUE7RUFDRSxzRkFBQTtFQUVBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBL0JhO0VBZ0NiLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UscUZBQUE7QUFGRjs7QUFNQTtFQUNFLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBSEY7O0VBS0E7SUFDRSxlQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbnRlbnRXaWR0aDogMjUwcHg7XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBvdXRsaW5lOiAxcHggc29saWQ7XHJcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEyNTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDE1cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM0MjczODg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAkY29udGVudFdpZHRoO1xyXG4gIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU4LCAxNzMsIDE3Nik7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC40MTgpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "NOzA":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/register-page/validators/match-values.validator.ts ***!
  \*********************************************************************************/
/*! exports provided: matchValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchValues", function() { return matchValues; });
const matchValues = (controlName) => {
    return (control) => {
        var _a, _b;
        return !!control.value && ((_a = control.parent) === null || _a === void 0 ? void 0 : _a.value) &&
            control.value === ((_b = control.parent.get(controlName)) === null || _b === void 0 ? void 0 : _b.value)
            ? null
            : { mismatch: true };
    };
};


/***/ }),

/***/ "NRzN":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/user/selectors */ "ilQm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AuthComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(store$, router) {
        this.store$ = store$;
        this.router = router;
        this.uid$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUserUid"]));
    }
    ngOnInit() {
        this.uid$.subscribe((uid) => {
            if (uid) {
                this.router.navigate(['']);
            }
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 3, consts: [["class", "window-div", 4, "ngIf"], [1, "window-div"], [1, "navigation-div"], ["routerLink", "login", "routerLinkActive", "activeLink"], ["routerLink", "register", "routerLinkActive", "activeLink"], [1, "content-div"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.uid$) === "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".activeLink[_ngcontent-%COMP%] {\n  background-color: #5bc79e;\n  color: white;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 30px;\n  box-sizing: border-box;\n}\n\n.navigation-div[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.content-div[_ngcontent-%COMP%] {\n  max-width: 250px;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n  background-color: #455c63;\n  color: #9eadb0;\n  font-size: 15pt;\n}\n\n@media only screen and (max-width: 768px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 8pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQXRCYTtFQXVCYixrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGNBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29udGVudFdpZHRoOiAyNTBweDtcclxuXHJcbi5hY3RpdmVMaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5OSwgMTU4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250ZW50LWRpdiB7XHJcbiAgbWF4LXdpZHRoOiAkY29udGVudFdpZHRoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgOTIsIDk5KTtcclxuICBjb2xvcjogcmdiKDE1OCwgMTczLCAxNzYpO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiA4cHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "cMCp":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "NRzN");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "oxXO");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-page/register-page.component */ "38U8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const childRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
    },
    {
        path: 'register',
        component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPageComponent"],
    },
];
const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
        children: childRoutes,
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "oxXO":
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/login-page/login-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/user/actions */ "4ohX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/firebase/firestore.service */ "dK64");






class LoginPageComponent {
    constructor(formBuilder, store$, firestore) {
        this.formBuilder = formBuilder;
        this.store$ = store$;
        this.firestore = firestore;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
        });
    }
    onSubmit() {
        const { email, password } = this.loginForm.value;
        this.store$.dispatch(Object(src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUser"])({ email, password }));
        this.loginForm.reset();
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 7, vars: 2, consts: [[3, "formGroup", "submit"], ["type", "email", "placeholder", "email *", "formControlName", "email"], ["type", "password", "placeholder", "password *", "formControlName", "password"], ["type", "submit", 1, "coloredBackground", 3, "disabled"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginPageComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " COME IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  font-size: 20pt;\n  cursor: pointer;\n  padding: 10px;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 15px;\n  text-shadow: 1px 1px 2px #427388;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  padding: 2px 2px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 2px solid #9eadb0;\n  font-size: 14pt;\n  margin-bottom: 20px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 0, 0, 0.418);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n@media only screen and (max-width: 768px) {\n  input[_ngcontent-%COMP%] {\n    width: 180px;\n    font-size: 9pt;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 15pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0FBREY7O0FBSUE7RUFDRSxzRkFBQTtFQUVBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBL0JhO0VBZ0NiLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UscUZBQUE7QUFGRjs7QUFNQTtFQUNFLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBSEY7O0VBS0E7SUFDRSxlQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbnRlbnRXaWR0aDogMjUwcHg7XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBvdXRsaW5lOiAxcHggc29saWQ7XHJcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEyNTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDE1cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM0MjczODg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAkY29udGVudFdpZHRoO1xyXG4gIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU4LCAxNzMsIDE3Nik7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC40MTgpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map