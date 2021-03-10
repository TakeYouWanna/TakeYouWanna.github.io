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
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ "cMCp");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ "oxXO");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page/register-page.component */ "38U8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [], imports: [[_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__["AuthRouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPageComponent"]], imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__["AuthRouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/data/user-data.service */ "RTCH");
/* harmony import */ var src_app_shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/firebase/firebase-auth.service */ "JOK8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function RegisterPageComponent_form_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function RegisterPageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterPageComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterPageComponent_form_0_p_4_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Your password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password confirmation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.registerForm.invalid);
} }
class RegisterPageComponent {
    constructor(userDataService, firebaseAuthService, formBuilder, router) {
        this.userDataService = userDataService;
        this.firebaseAuthService = firebaseAuthService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user$ = this.userDataService.user$;
        this.error = '';
        this.registerForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            passConfirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]]
        });
    }
    onSubmit() {
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        if (password === this.registerForm.value.passConfirm) {
            this.firebaseAuthService.signUp(email, password).subscribe((data) => {
                this.userDataService.setUser(data);
                this.router.navigate(['']);
            }, (err) => {
                this.error = err.message;
                this.registerForm.reset();
            });
        }
        else {
            this.error = 'Passwords do not match';
        }
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 2, vars: 3, consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], [1, "glass-window", "flex-cont"], ["class", "error", 4, "ngIf"], ["for", "Login"], ["type", "email", "id", "Login", "formControlName", "email"], ["for", "Password"], ["type", "password", "required", "", "id", "Password", "formControlName", "password"], ["for", "PasswordConfirm"], ["type", "password", "required", "", "id", "PasswordConfirm", "formControlName", "passConfirm"], ["type", "submit", 3, "disabled"], [1, "error"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterPageComponent_form_0_Template, 16, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.user$)) == null ? null : tmp_0_0.email));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "cMCp":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouterModule", function() { return AuthRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ "oxXO");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page/register-page.component */ "38U8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");





const routes = [
    {
        path: '',
        children: [
            { path: '', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"] },
            { path: 'registration', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPageComponent"] }
        ]
    }
];
class AuthRouterModule {
}
AuthRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthRouterModule });
AuthRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AuthRouterModule_Factory(t) { return new (t || AuthRouterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/firebase/firebase-auth.service */ "JOK8");
/* harmony import */ var src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data/user-data.service */ "RTCH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function LoginPageComponent_form_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function LoginPageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginPageComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginPageComponent_form_0_p_4_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Your password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "If you are not registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loginForm.invalid);
} }
class LoginPageComponent {
    constructor(firebaseAuthService, formBuilder, userDataService, router) {
        this.firebaseAuthService = firebaseAuthService;
        this.formBuilder = formBuilder;
        this.userDataService = userDataService;
        this.router = router;
        this.user$ = this.userDataService.user$;
        this.error = '';
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]]
        });
    }
    onSubmit() {
        this.firebaseAuthService
            .signIn(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((data) => {
            this.userDataService.setUser(data);
            this.router.navigate(['']);
        }, (err) => {
            this.error = err.message;
            this.loginForm.reset();
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 2, vars: 3, consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], [1, "glass-window", "flex-cont"], ["class", "error", 4, "ngIf"], ["for", "Login"], ["type", "email", "id", "Login", "formControlName", "email"], ["type", "password", "required", "", "id", "Password", "formControlName", "password"], ["type", "submit", 3, "disabled"], ["for", "regist-button"], ["routerLink", "registration"], [1, "error"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginPageComponent_form_0_Template, 18, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.user$)) == null ? null : tmp_0_0.email));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map