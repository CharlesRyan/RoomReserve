webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./rooms/rooms.module": [
		"./src/app/rooms/rooms.module.ts",
		"rooms.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-root",
        template: __webpack_require__("./src/app/app.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <gw-navigation></gw-navigation>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_application_settings_service__ = __webpack_require__("./src/app/services/application-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_navigation_service__ = __webpack_require__("./src/app/services/navigation-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_rooms_service__ = __webpack_require__("./src/app/services/rooms-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            // vendor modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            // our modules
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["b" /* routedComponents */],
            __WEBPACK_IMPORTED_MODULE_19__welcome_welcome_component__["a" /* WelcomeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_application_settings_service__["a" /* ApplicationSettings */],
            __WEBPACK_IMPORTED_MODULE_13__services_login_service_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_14__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_15__services_rooms_service__["a" /* RoomsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_guard_service__ = __webpack_require__("./src/app/services/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dirty_form_guard_service__ = __webpack_require__("./src/app/services/dirty-form-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
    },
    // add specific routes
    {
        path: "welcome",
        component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: "rooms/:id",
        loadChildren: "./rooms/rooms.module",
        data: { preload: true }
    },
    // finally, add "catch-all" route, taking the place of "otherwise" from legacy Angular
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "exercises"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_login_guard_service__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_5__services_dirty_form_guard_service__["a" /* DirtyFormGuard */]]
    })
], AppRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
];
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login {\n\tmargin-top: 1em;\n}\n\n.nameAndButtonDiv {\n\ttext-align: center;\n\tfloat: right;\n}\n\n.login .ui.header {\n\tcolor: gainsboro;\n\ttext-shadow: 0 4px 4px #1d2832;\n}"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getLoggedInUser()
            .subscribe({
            next: function (loggedInUser) {
                _this.loggedInUser = loggedInUser;
                // this._refreshRoute();
            }
        });
    };
    LoginComponent.prototype._refreshRoute = function () {
        var navigateToUrlCommand = [this.router.url.startsWith("/room/") ? "" : this.router.url];
        this.router.navigate(navigateToUrlCommand);
    };
    LoginComponent.prototype.login = function () {
        this.loginService.login();
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
        this._refreshRoute();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-login",
        template: __webpack_require__("./src/app/login/login.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n\t<div class=\"ui middle aligned center aligned grid buttonGrid\">\r\n\t\t<div class=\"two column row\">\r\n\t\t\t<div class=\"five wide column\">\r\n\t\t\t\t<img class=\"ui tiny right floated image\" *ngIf=\"loggedInUser\" [src]=\"loggedInUser?.photoURL\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"eleven wide center aligned\">\r\n\t\t\t\t<h1 class=\"ui header\">{{ loggedInUser?.displayName }}</h1>\r\n\t\t\t\t<button class=\"ui large left attached button\" (click)=\"login()\" [disabled]=\"loggedInUser\">Login</button>\r\n\t\t\t\t<button class=\"ui large right attached button\" (click)=\"logout()\" [disabled]=\"loggedInUser === null\">Logout</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.inverted.secondary.pointing.menu.navigation {\n\tborder: none;\n}\n\n.ui.inverted.segment.navigationContainer {\n\tbackground-color: rgba(17, 27, 28, .8);\n\t/* height: 8.4em;*/\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("./src/app/services/navigation-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__ = __webpack_require__("./src/app/services/rooms-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(navigationService, roomService, loginService) {
        this.navigationService = navigationService;
        this.roomService = roomService;
        this.loginService = loginService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // construct welcome link
        var welcomeItem = {
            title: "Welcome",
            url: "welcome",
            color: "blue",
            orderBy: 1
        };
        // add welcome link
        this.navigationService.addNavigationItem(welcomeItem);
        // fetch rooms
        this.roomService.fetchRoomsFromDB().subscribe(function (rooms) {
            for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
                var room = rooms_1[_i];
                var roomItem = {
                    title: room.name,
                    url: "/rooms/" + room.id,
                    color: "green",
                    orderBy: 2,
                    reservationCount: room.reservations ? room.reservations.length : 0
                };
                // add rooms
                _this.navigationService.addNavigationItem(roomItem);
            }
        });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gw-navigation',
        template: __webpack_require__("./src/app/navigation/navigation.html"),
        styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service_service__["a" /* LoginService */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "./src/app/navigation/navigation.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n\t<div class=\"ui inverted segment navigationContainer\">\r\n\t\t<div class=\"ui inverted secondary pointing huge stackable menu navigation\">\r\n\r\n\t\t\t<a *ngFor=\"let navItem of navigationService.getNavigation()\"\r\n\t\t\t\trouterLink=\"{{ navItem.url }}\"\r\n\t\t\t\trouterLinkActive=\"active\"\r\n\t\t\t\tngClass=\"{{ navItem.color }}\"\r\n\t\t\t\tclass=\"item\">\r\n\t\t\t\t{{ navItem.title }}\r\n\t\t\t</a>\r\n\r\n\t\t\t<div class=\"right menu\">\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<gw-login></gw-login>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/services/application-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationSettings = (function () {
    function ApplicationSettings() {
        this.applicationTitle = "Conference Room Reserve App";
    }
    ApplicationSettings.prototype.getFirebaseRestUrl = function (suffix) {
        var prefix = "https://gwreserve-10442.firebaseio.com/";
        var ext = ".json";
        return prefix + suffix + ext;
    };
    ApplicationSettings.prototype.getImagePath = function (file) {
        return "./assets/images/" + file;
    };
    return ApplicationSettings;
}());
ApplicationSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ApplicationSettings);

//# sourceMappingURL=application-settings.service.js.map

/***/ }),

/***/ "./src/app/services/dirty-form-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirtyFormGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DirtyFormGuard = (function () {
    function DirtyFormGuard() {
    }
    DirtyFormGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate();
    };
    return DirtyFormGuard;
}());
DirtyFormGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], DirtyFormGuard);

//# sourceMappingURL=dirty-form-guard.service.js.map

/***/ }),

/***/ "./src/app/services/login-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginGuard.prototype.canActivateChild = function () {
        var _this = this;
        return this.loginService.getLoggedInUser().map(function (loggedInUser) {
            // console.log("Login Guard checking loggedInUser: ", loggedInUser);
            // return true; 
            if (loggedInUser)
                return true;
            _this.router.navigate([""], {
                fragment: "login-needed"
            });
            return false;
        });
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login-guard.service.js.map

/***/ }),

/***/ "./src/app/services/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(_authentication, fb) {
        this._authentication = _authentication;
        this.fb = fb;
        this.loged = false;
        this.user = { name: 'Hello' };
        this._loggedInUser = _authentication.authState;
        var initParams = {
            appId: '147606615797799',
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    LoginService.prototype.getLoggedInUser = function () {
        return this._loggedInUser;
    };
    LoginService.prototype.logout = function () {
        this._authentication.auth.signOut();
    };
    LoginService.prototype.statusChangeCallback = function (response) {
        console.log(response);
        if (response.status === 'connected') {
            console.log('connected');
        }
        else {
            this.login();
        }
    };
    LoginService.prototype.login = function () {
        this._authentication.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (result) {
            // This gives you a Facebook Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login-service.service.js.map

/***/ }),

/***/ "./src/app/services/navigation-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationService = (function () {
    function NavigationService() {
        this.navigationItems = [];
    }
    NavigationService.prototype.getNavigation = function () {
        return this.navigationItems.sort(function (a, b) { return a.orderBy - b.orderBy; });
    };
    NavigationService.prototype.addNavigationItem = function (item) {
        this.navigationItems.push(item);
    };
    return NavigationService;
}());
NavigationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NavigationService);

//# sourceMappingURL=navigation-service.js.map

/***/ }),

/***/ "./src/app/services/rooms-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_settings_service__ = __webpack_require__("./src/app/services/application-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoomsService = (function () {
    function RoomsService(http, applicationSettings, loginService, db) {
        this.http = http;
        this.applicationSettings = applicationSettings;
        this.loginService = loginService;
        this.db = db;
    }
    RoomsService.prototype.getRoomById = function (id) {
        return this.http.get(this.applicationSettings.getFirebaseRestUrl("rooms/" + id))
            .map(function (response) { return response.json(); })
            .map(function (room) {
            room.id = id;
            return room;
        });
    };
    RoomsService.prototype.fetchRoomsFromDB = function () {
        return this.http.get(this.applicationSettings.getFirebaseRestUrl("rooms"))
            .map(function (response) { return response.json(); })
            .map(function (response) {
            var rooms = [];
            for (var roomKey in response) {
                // affix the Firebase key to ID property
                response[roomKey].id = roomKey;
                // add to our array
                rooms.push(response[roomKey]);
            }
            return rooms;
        });
    };
    RoomsService.prototype.resetRoomsToDB = function () {
        var roomRef = this.db.object('rooms');
        roomRef.set({ north: {
                id: "north",
                name: "North Room",
                picture: "",
                reservations: ""
            },
            west: {
                id: "west",
                name: "West Room",
                picture: '',
                reservations: ""
            },
            east: {
                id: "east",
                name: "East Room",
                picture: '',
                reservations: ""
            },
            south: {
                id: "south",
                name: "South Room",
                picture: '',
                reservations: ""
            },
            center: {
                id: "center",
                name: "Center Room",
                picture: '',
                reservations: ""
            }
        });
        this.fetchRoomsFromDB();
    };
    RoomsService.prototype.writeRoomReservation = function (id, reservation) {
        reservation.date = new Date().toDateString();
        var resRef = this.db.list("/rooms/" + id + "/reservations");
        resRef.push(reservation);
    };
    RoomsService.prototype.deleteRoomReservation = function (id, reservation) {
        var url = this.getRoomReservationsUrl(id, reservation.date, reservation.id);
        return this.http.delete(url);
    };
    RoomsService.prototype.getRoomReservationsUrl = function (id, date, reservation_id) {
        if (date === void 0) { date = null; }
        if (reservation_id === void 0) { reservation_id = ""; }
        console.log(this.applicationSettings.getFirebaseRestUrl("rooms/" + id + "/reservations/" + this.getRoomDateKey(date) + "/" + reservation_id));
        return this.applicationSettings.getFirebaseRestUrl("rooms/" + id + "/reservations/" + this.getRoomDateKey(date) + "/" + reservation_id);
    };
    RoomsService.prototype.getRoomDateKey = function (date) {
        if (date === void 0) { date = null; }
        // let dateKey = date
        // 	? new Date(date).toDateString()
        // 	: new Date().toDateString();
        var dateKey = new Date().toDateString();
        dateKey = dateKey.replace(/ /g, "");
        return dateKey;
        // return "6222017";
    };
    RoomsService.prototype.extractData = function (res) {
        console.log(res);
        console.log(res.status, res.statusText);
    };
    return RoomsService;
}());
RoomsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__application_settings_service__["a" /* ApplicationSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__application_settings_service__["a" /* ApplicationSettings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], RoomsService);

var _a, _b, _c, _d;
//# sourceMappingURL=rooms-service.js.map

/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.justified.container {\n\tmargin-top: 3em;\n}\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui justified container\">\n\t<div class=\"ui segment\">\n\t\t<div class=\"ui attached segment\">\n\t\t\t<h1 class=\"ui dividing header\">WELCOME</h1> \n\t\t\t<p>Welcome to the room reservation system; please login and schedule a room</p>\n\t\t</div>\n\t\t<div *ngIf=\"isLoginNeeded\" class=\"ui bottom attached error message\">\n\t\t\t<i class=\"sign in big icon\"></i> You attempted to use this application without signing in\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.fragment.subscribe(function (fragmentPiece) { return _this.isLoginNeeded = fragmentPiece === "login-needed"; });
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-welcome",
        template: __webpack_require__("./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAA2In9eu-OUgQdSWWGOLZYWsKQB5Z_Vtw",
        authDomain: "gwreserve-10442.firebaseapp.com",
        databaseURL: "https://gwreserve-10442.firebaseio.com",
        projectId: "gwreserve-10442",
        storageBucket: "gwreserve-10442.appspot.com",
        messagingSenderId: "173497388240"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map