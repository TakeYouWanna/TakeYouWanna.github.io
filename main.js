(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Innowise-lab-internship-level2\src\main.ts */"zUnb");


/***/ }),

/***/ "0kbg":
/*!***********************************************!*\
  !*** ./src/app/store/picture-list/reducer.ts ***!
  \***********************************************/
/*! exports provided: pictureListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictureListReducer", function() { return pictureListReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "ycBb");


const pictureListInitialState = {
    pictureList: {},
};
const pictureListReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(pictureListInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loadPicturesSuccess"], (state, { newPictureList }) => (Object.assign(Object.assign({}, state), { pictureList: newPictureList }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["clearAllPicture"], (state) => (Object.assign(Object.assign({}, state), { pictureList: {} }))));


/***/ }),

/***/ "4ohX":
/*!***************************************!*\
  !*** ./src/app/store/user/actions.ts ***!
  \***************************************/
/*! exports provided: loadUser, createUser, loadUserSuccess, loadUserFailure, initializeUser, logOutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserSuccess", function() { return loadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserFailure", function() { return loadUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeUser", function() { return initializeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutUser", function() { return logOutUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user loading" /* loadUser */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user created" /* createUser */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user loaded successfully" /* loadUserSuccess */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user loading failed" /* loadUserFailure */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initializeUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user initialized" /* initializeUser */);
const logOutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth/ API] user logout" /* logoutUser */);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBQuVIrVSUH9y7mjQH2yq4OhtMMHXAh2zQ',
        authDomain: 'innowise-lab-internship-level2.firebaseapp.com',
        projectId: 'innowise-lab-internship-level2',
        storageBucket: 'innowise-lab-internship-level2.appspot.com',
        messagingSenderId: '1082115697714',
        appId: '1:1082115697714:web:78909c9fab854216b9a02b',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E7fU":
/*!*************************************************!*\
  !*** ./src/app/store/toast-notice/selectors.ts ***!
  \*************************************************/
/*! exports provided: selectToastNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectToastNotice", function() { return selectToastNotice; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectToastNoticeFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('toastNotice');
const selectToastNotice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectToastNoticeFeature, (state) => state);


/***/ }),

/***/ "JOK8":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/firebase/firebase-auth.service.ts ***!
  \*******************************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class FirebaseAuthService {
    constructor(firebaseAuth, store$) {
        this.firebaseAuth = firebaseAuth;
        this.store$ = store$;
    }
    signIn(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            const { user } = response;
            return {
                uid: (user === null || user === void 0 ? void 0 : user.uid) == null ? '' : user.uid,
                email: (user === null || user === void 0 ? void 0 : user.email) == null ? '' : user.email,
            };
        }));
    }
    signUp(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.firebaseAuth.createUserWithEmailAndPassword(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            const { user } = response;
            return {
                uid: (user === null || user === void 0 ? void 0 : user.uid) == null ? '' : user.uid,
                email: (user === null || user === void 0 ? void 0 : user.email) == null ? '' : user.email,
            };
        }));
    }
    logOut() {
        this.firebaseAuth.signOut();
    }
    initializeUser() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.firebaseAuth.onAuthStateChanged((currentUser) => {
                if (currentUser) {
                    observer.next({
                        uid: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) == null ? '' : currentUser.uid,
                        email: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) == null ? '' : currentUser.email,
                    });
                }
                observer.complete();
            });
        });
    }
}
FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) { return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FirebaseAuthService, factory: FirebaseAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Kmsk":
/*!***************************************!*\
  !*** ./src/app/store/user/reducer.ts ***!
  \***************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "4ohX");


const userInitialState = {
    uid: '',
    email: '',
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(userInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loadUserSuccess"], (state, { user }) => (Object.assign(Object.assign({}, state), { uid: user.uid, email: user.email }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["logOutUser"], (state) => (Object.assign(Object.assign({}, state), { uid: '', email: '' }))));


/***/ }),

/***/ "MP16":
/*!**************************************!*\
  !*** ./src/app/store/user/effect.ts ***!
  \**************************************/
/*! exports provided: UserEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffect", function() { return UserEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _toast_notice_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast-notice/actions */ "Tu5D");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "4ohX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/firebase/firebase-auth.service */ "JOK8");








class UserEffect {
    constructor(actions$, firebaseAuthService) {
        this.actions$ = actions$;
        this.firebaseAuthService = firebaseAuthService;
        this.loadUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.firebaseAuthService.signIn(action.email, action.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserSuccess"])({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserFailure"])({ error }); }))))));
        this.createUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["createUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.firebaseAuthService.signUp(action.email, action.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserSuccess"])({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserFailure"])({ error }); }))))));
        this.initializeUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["initializeUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.firebaseAuthService
            .initializeUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserSuccess"])({ user }))))));
        this.logOutUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["logOutUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.firebaseAuthService.logOut())), { dispatch: false });
        this.loadUserFailure$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["loadUserFailure"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => {
            const { message } = action.error;
            const messageType = 'error';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_3__["setMessage"])({ message, messageType });
        })));
    }
}
UserEffect.ɵfac = function UserEffect_Factory(t) { return new (t || UserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_firebase_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"])); };
UserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserEffect, factory: UserEffect.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_components_toast_notice_toast_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/toast-notice/toast-notice.component */ "jNrr");
/* harmony import */ var _store_toast_notice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/toast-notice/selectors */ "E7fU");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/user/actions */ "4ohX");
/* harmony import */ var _shared_components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/top-bar/top-bar.component */ "ZhRX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = ["toastContainer"];
class AppComponent {
    constructor(store$, componentFactoryResolver, changeDetectorRef) {
        this.store$ = store$;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.title = 'Innowise-lab-internship-level2';
    }
    ngOnInit() {
        this.store$.dispatch(Object(_store_user_actions__WEBPACK_IMPORTED_MODULE_4__["initializeUser"])());
    }
    ngAfterViewInit() {
        this.store$
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_toast_notice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectToastNotice"]))
            .subscribe((toastNotice) => this.createToast(toastNotice.message, toastNotice.messageType));
    }
    createToast(message, messageType) {
        if (message === '') {
            this.toastContainer.clear();
        }
        else {
            const factory = this.componentFactoryResolver.resolveComponentFactory(_shared_components_toast_notice_toast_notice_component__WEBPACK_IMPORTED_MODULE_2__["ToastNoticeComponent"]);
            const component = this.toastContainer.createComponent(factory);
            component.instance.messageType = messageType;
            component.instance.message = message;
        }
        this.changeDetectorRef.markForCheck();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toastContainer = _t.first);
    } }, decls: 4, vars: 0, consts: [["toastContainer", ""], [1, "window-div"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "template", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_shared_components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["app-top-bar[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRvcC1iYXIge1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "Tu5D":
/*!***********************************************!*\
  !*** ./src/app/store/toast-notice/actions.ts ***!
  \***********************************************/
/*! exports provided: setMessage, removeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMessage", function() { return removeMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[TOAST NOTICE] message set" /* setMessage */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[TOAST NOTICE] message removed" /* removeMessage */);


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _picture_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture-list/reducer */ "0kbg");
/* harmony import */ var _toast_notice_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast-notice/reducer */ "yhoy");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/reducer */ "Kmsk");



const reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
    toastNotice: _toast_notice_reducer__WEBPACK_IMPORTED_MODULE_1__["toastNoticeReducer"],
    pictureList: _picture_list_reducer__WEBPACK_IMPORTED_MODULE_0__["pictureListReducer"],
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/top-bar/top-bar.component */ "ZhRX");
/* harmony import */ var _store_user_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/user/effect */ "MP16");
/* harmony import */ var _store_toast_notice_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/toast-notice/effect */ "rlsd");
/* harmony import */ var _store_picture_list_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/picture-list/effect */ "dxhf");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_14__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_store_user_effect__WEBPACK_IMPORTED_MODULE_11__["UserEffect"], _store_toast_notice_effect__WEBPACK_IMPORTED_MODULE_12__["ToastNoticeEffect"], _store_picture_list_effect__WEBPACK_IMPORTED_MODULE_13__["PictureListEffect"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _shared_components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"]] }); })();


/***/ }),

/***/ "ZhRX":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/top-bar/top-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/user/actions */ "4ohX");
/* harmony import */ var src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/user/selectors */ "ilQm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TopBarComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sign In\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TopBarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "My pictures");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_ng_template_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class TopBarComponent {
    constructor(store$, router) {
        this.store$ = store$;
        this.router = router;
        this.uid$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserUid"]));
    }
    logOut() {
        this.store$.dispatch(Object(src_app_store_user_actions__WEBPACK_IMPORTED_MODULE_1__["logOutUser"])());
        this.uid$.subscribe((uid) => {
            if (!uid) {
                this.router.navigate(['']);
            }
        });
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 8, vars: 4, consts: [["routerLink", "/constructor", "routerLinkActive", "activeLink"], ["routerLink", "/gallery", "routerLinkActive", "activeLink"], ["routerLink", "/auth", "routerLinkActive", "activeLink", 4, "ngIf", "ngIfElse"], ["authUserTemplate", ""], ["routerLink", "/auth", "routerLinkActive", "activeLink"], ["routerLink", "/my-gallery", "routerLinkActive", "activeLink"], ["routerLinkActive", "activeLink", 3, "click"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Constructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TopBarComponent_a_4_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TopBarComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx.uid$) === "")("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: Impact, \"Arial Narrow Bold\", sans-serif;\n  color: #9eadb0;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 20pt;\n  cursor: pointer;\n  padding: 5px;\n  margin: 5px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n\n.activeLink[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxvREFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJ0b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigxNTgsIDE3MywgMTc2KTtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmFjdGl2ZUxpbmsge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "dK64":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/firebase/firestore.service.ts ***!
  \***************************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class FirestoreService {
    constructor(angularFirestore) {
        this.angularFirestore = angularFirestore;
        this.collectionRef = this.angularFirestore.collection('Images').ref;
    }
    addNewPicture(imageSrc, author) {
        const data = {
            imageSrc,
            author,
            date: new Date(),
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.collectionRef.add(data));
    }
    removePicture(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.collectionRef.doc(id).delete());
    }
    getPictures(criterion) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.returnRequestByCriterion(criterion)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.docs.reduce((acc, val) => {
            const { imageSrc, author } = val.data();
            acc[val.id] = { imageSrc, author };
            return acc;
        }, {})));
    }
    returnRequestByCriterion(criterion) {
        switch (criterion.type) {
            case 'author':
                return this.collectionRef
                    .where('author', '==', criterion.value)
                    .limit(criterion.limit)
                    .get();
            default:
                return this.collectionRef
                    .orderBy('date', 'desc')
                    .limit(criterion.limit)
                    .get();
        }
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dxhf":
/*!**********************************************!*\
  !*** ./src/app/store/picture-list/effect.ts ***!
  \**********************************************/
/*! exports provided: PictureListEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureListEffect", function() { return PictureListEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast-notice/actions */ "Tu5D");
/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/selectors */ "ilQm");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "ycBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/firebase/firestore.service */ "dK64");











class PictureListEffect {
    constructor(action$, firestore, store$) {
        this.action$ = action$;
        this.firestore = firestore;
        this.store$ = store$;
        this.addPicture$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["addPicture"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserEmail"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, email]) => this.firestore.addNewPicture(action.imageSrc, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const message = 'Picture added successfully';
            return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["addPictureSuccess"])({ message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["addPictureFailure"])({ error }); }))))));
        this.loadPictures$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["loadPictures"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.firestore.getPictures(action.criterion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((newPictureList) => Object(_actions__WEBPACK_IMPORTED_MODULE_6__["loadPicturesSuccess"])({ newPictureList })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["loadPicturesFailure"])({ error }); }))))));
        this.removePicture$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["removePicture"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.firestore.removePicture(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const message = 'Picture removed successfully';
            return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["removePictureSuccess"])({ message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["removePictureFailure"])({ error }); }))))));
        this.addPictureSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["addPictureSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const { message } = action;
            const messageType = 'successfully';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__["setMessage"])({ message, messageType });
        })));
        this.addPictureFailure$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["addPictureFailure"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const { message } = action.error;
            const messageType = 'error';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__["setMessage"])({ message, messageType });
        })));
        this.removePictureSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["removePictureSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const { message } = action;
            const messageType = 'successfully';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__["setMessage"])({ message, messageType });
        })));
        this.removePictureFailure$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["removePictureFailure"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const { message } = action.error;
            const messageType = 'error';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__["setMessage"])({ message, messageType });
        })));
        this.loadPicturesFailure$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["loadPicturesFailure"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const { message } = action.error;
            const messageType = 'error';
            return Object(_toast_notice_actions__WEBPACK_IMPORTED_MODULE_4__["setMessage"])({ message, messageType });
        })));
    }
}
PictureListEffect.ɵfac = function PictureListEffect_Factory(t) { return new (t || PictureListEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_shared_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
PictureListEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PictureListEffect, factory: PictureListEffect.ɵfac });


/***/ }),

/***/ "ilQm":
/*!*****************************************!*\
  !*** ./src/app/store/user/selectors.ts ***!
  \*****************************************/
/*! exports provided: selectUserEmail, selectUserUid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserEmail", function() { return selectUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserUid", function() { return selectUserUid; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectUserFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
const selectUserEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserFeature, (state) => state.email);
const selectUserUid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserFeature, (state) => state.uid);


/***/ }),

/***/ "jNrr":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/toast-notice/toast-notice.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToastNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoticeComponent", function() { return ToastNoticeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastNoticeComponent {
    ngOnInit() {
        switch (this.messageType) {
            case 'error':
                this.background = 'red';
                break;
            case 'successfully':
                this.background = 'green';
                break;
            default:
                this.background = 'red';
        }
    }
}
ToastNoticeComponent.ɵfac = function ToastNoticeComponent_Factory(t) { return new (t || ToastNoticeComponent)(); };
ToastNoticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastNoticeComponent, selectors: [["app-toast-notice"]], inputs: { message: "message", messageType: "messageType" }, decls: 3, vars: 4, consts: [[1, "toast"]], template: function ToastNoticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@toastOpenClose", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".toast[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  border-radius: 10px;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 250px;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9hc3Qtbm90aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoidG9hc3Qtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('toastOpenClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))]),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ "rlsd":
/*!**********************************************!*\
  !*** ./src/app/store/toast-notice/effect.ts ***!
  \**********************************************/
/*! exports provided: ToastNoticeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoticeEffect", function() { return ToastNoticeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "Tu5D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ToastNoticeEffect {
    constructor(action$) {
        this.action$ = action$;
        this.setMessage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["setMessage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(4000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => Object(_actions__WEBPACK_IMPORTED_MODULE_2__["removeMessage"])())));
    }
}
ToastNoticeEffect.ɵfac = function ToastNoticeEffect_Factory(t) { return new (t || ToastNoticeEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"])); };
ToastNoticeEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ToastNoticeEffect, factory: ToastNoticeEffect.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-gallery-gallery-module~modules-mini-paint-mini-paint-module"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: 'constructor',
        loadChildren: () => Promise.all(/*! import() | modules-mini-paint-mini-paint-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-gallery-gallery-module~modules-mini-paint-mini-paint-module"), __webpack_require__.e("modules-mini-paint-mini-paint-module")]).then(__webpack_require__.bind(null, /*! ./modules/mini-paint/mini-paint.module */ "0RGt")).then((m) => m.MiniPaintModule),
    },
    {
        path: 'gallery',
        loadChildren: () => Promise.all(/*! import() | modules-gallery-gallery-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-gallery-gallery-module~modules-mini-paint-mini-paint-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-gallery-gallery-module")]).then(__webpack_require__.bind(null, /*! ./modules/gallery/gallery.module */ "peK5")).then((m) => m.PictureListModule),
    },
    {
        path: 'my-gallery',
        loadChildren: () => Promise.all(/*! import() | modules-my-gallery-my-gallery-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-my-gallery-my-gallery-module")]).then(__webpack_require__.bind(null, /*! ./modules/my-gallery/my-gallery.module */ "8u9w")).then((m) => m.MyGalleryModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ycBb":
/*!***********************************************!*\
  !*** ./src/app/store/picture-list/actions.ts ***!
  \***********************************************/
/*! exports provided: loadPictures, loadPicturesSuccess, loadPicturesFailure, addPicture, addPictureSuccess, addPictureFailure, removePicture, removePictureSuccess, removePictureFailure, clearAllPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPictures", function() { return loadPictures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPicturesSuccess", function() { return loadPicturesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPicturesFailure", function() { return loadPicturesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPicture", function() { return addPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPictureSuccess", function() { return addPictureSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPictureFailure", function() { return addPictureFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePicture", function() { return removePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePictureSuccess", function() { return removePictureSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePictureFailure", function() { return removePictureFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllPicture", function() { return clearAllPicture; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadPictures = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] pictures loading..." /* loadPictures */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPicturesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore /API] pictures loaded successfully" /* loadPicturesSuccess */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPicturesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture loading error" /* loadPicturesFailure */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPicture = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture adding..." /* addPicture */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPictureSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture added successfully" /* addPictureSuccess */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPictureFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] error adding image" /* addPictureFailure */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePicture = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture removing..." /* removePicture */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePictureSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture removed successfully" /* removePictureSuccess */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePictureFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Firestore / API] picture removing error" /* removePictureFailure */, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearAllPicture = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Picture List] Pictures cleared" /* clearAllPicture */);


/***/ }),

/***/ "yhoy":
/*!***********************************************!*\
  !*** ./src/app/store/toast-notice/reducer.ts ***!
  \***********************************************/
/*! exports provided: toastNoticeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastNoticeReducer", function() { return toastNoticeReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "Tu5D");


const toastNoticeInitializeState = {
    message: '',
    messageType: '',
};
const toastNoticeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(toastNoticeInitializeState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setMessage"], (state, { message, messageType }) => (Object.assign(Object.assign({}, state), { message,
    messageType }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["removeMessage"], (state) => (Object.assign(Object.assign({}, state), { message: '', messageType: '' }))));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map