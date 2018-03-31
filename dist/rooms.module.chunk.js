webpackJsonp(["rooms.module"],{

/***/ "./src/app/pipes/main-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_pipe__ = __webpack_require__("./src/app/pipes/time.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPipe = (function () {
    function MainPipe() {
    }
    return MainPipe;
}());
MainPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__time_pipe__["a" /* TimePipe */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__time_pipe__["a" /* TimePipe */]]
    })
], MainPipe);

//# sourceMappingURL=main-pipe.module.js.map

/***/ }),

/***/ "./src/app/pipes/time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (time) {
        var hours = time.slice(0, 2);
        var minutes = time.slice(2);
        hours = parseInt(hours);
        //it is pm if hours from 12 onwards
        var suffix = (hours >= 12) ? 'PM' : 'AM';
        //only -12 from hours if it is greater than 12 (if not back at mid night)
        hours = (hours > 12) ? hours - 12 : hours;
        //if 00 then it is 12 am
        hours = (hours == '00') ? 12 : hours;
        return hours + minutes + ' ' + suffix;
    };
    return TimePipe;
}());
TimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'readableTime'
    })
], TimePipe);

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ "./src/app/rooms/room-form/room-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__ = __webpack_require__("./src/app/services/rooms-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomFormComponent = (function () {
    function RoomFormComponent(route, roomsService, router) {
        this.route = route;
        this.roomsService = roomsService;
        this.router = router;
        this.form = {};
        this.reasons = [
            "Hiring",
            "Firing",
            "Scrum Meeting",
            "Scrum Beating"
        ];
    }
    RoomFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params
            .map(function (params) { return params["id"]; })
            .subscribe(function (id) {
            _this.id = id;
            _this.roomsService.getRoomById(id)
                .subscribe({
                next: function (room) { return _this.room = room; },
                error: function (error) { return console.log(error); }
            });
        });
    };
    RoomFormComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.form);
        //debounce
    };
    RoomFormComponent.prototype.getErrors = function () {
        var errorList = [];
        var controls = this.myForm.controls;
        for (var controlKey in controls) {
            var currentControlErrors = controls[controlKey].errors;
            for (var errorKey in currentControlErrors) {
                errorList.push(controlKey + " error: " + errorKey);
            }
        }
        return errorList;
    };
    RoomFormComponent.prototype.ngOnChanges = function () {
    };
    RoomFormComponent.prototype.canDeactivate = function () {
        return this.myForm.dirty ? confirm("You appear to have unsaved work.  Continue?") : true;
    };
    RoomFormComponent.prototype.onRoomSubmission = function (form) {
        this.roomsService.writeRoomReservation(this.id, form.value);
        form.reset();
        this.router.navigateByUrl("/rooms/" + this.id + "/list");
    };
    return RoomFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])("myForm"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RoomFormComponent.prototype, "myForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], RoomFormComponent.prototype, "id", void 0);
RoomFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-room-form",
        template: __webpack_require__("./src/app/rooms/room-form/room-form.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RoomFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=room-form.component.js.map

/***/ }),

/***/ "./src/app/rooms/room-form/room-form.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"ui inverted header\">{{ room?.name }}</h1>\r\n\r\n<form class=\"ui roomForm form\" (ngSubmit)=\"onRoomSubmission(myForm)\" [ngClass]=\"{ 'error' : !myForm.valid && myForm.submitted }\" #myForm=\"ngForm\" novalidate>\r\n\t<div class=\"ui large inverted form\">\r\n\t\t<div class=\"two fields\">\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<label>Reserve For:</label>\r\n\t\t\t\t<select name=\"reserveReason\" [ngModel]=\"form.reserveReason\" required>\r\n\t\t\t\t\t<option *ngFor=\"let reason of reasons\" [value]=\"reason\">{{ reason }}</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"two fields\">\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<label>Start Time:</label>\r\n\t\t\t\t<input name=\"startTime\" type=\"time\" [ngModel]=\"form.startTime\" required>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<label>End Time:</label>\r\n\t\t\t\t<input name=\"endTime\" type=\"time\" [ngModel]=\"form.endTime\" required>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"two fields\">\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<label>Person to Contact:</label>\r\n\t\t\t\t<input name=\"email1\" type=\"email\" [ngModel]=\"form.email1\" required email>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<label>Person to Contact (confirm):</label>\r\n\t\t\t\t<input name=\"email2\" type=\"email\" [ngModel]=\"form.email2\" [pattern]=\"myForm.controls?.email1?.value\" #email2=\"ngModel\" required email>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"inline field\">\r\n\t\t\t<label>I agree to be clean and good to the room:</label>\r\n\t\t\t<input name=\"isAgreed\" type=\"checkbox\" [ngModel]=\"form.isAgreed\" required>\r\n\t\t</div>\r\n\t\t<div class=\"ui error message\">\r\n\t\t\t<div *ngFor=\"let error of getErrors()\">\r\n\t\t\t\t{{ error | json }}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"fields\">\r\n\t\t\t<div class=\"field\">\r\n\t\t\t\t<button type=\"submit\" class=\"ui big positive submit button\" [disabled]=\"!myForm.valid\">Submit</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>"

/***/ }),

/***/ "./src/app/rooms/room-list/room-list.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\r\n    margin-top: -10px;\r\n}"

/***/ }),

/***/ "./src/app/rooms/room-list/room-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__ = __webpack_require__("./src/app/services/rooms-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomListComponent = (function () {
    function RoomListComponent(route, roomService) {
        this.route = route;
        this.roomService = roomService;
        this.reservations = [];
    }
    RoomListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params
            .map(function (params) { return params["id"]; })
            .subscribe(function (id) {
            _this.id = id;
            _this.roomService.getRoomById(id).subscribe(function (room) {
                _this.room = room;
                _this.reservations = _this.getReservationsByDay();
                _this.setMessage();
            });
        });
    };
    RoomListComponent.prototype.getReservationsByDay = function (date) {
        if (date === void 0) { date = null; }
        if (!this.room.reservations)
            return [];
        // const reservations = this.room.reservations[this.roomService.getRoomDateKey(date)] || [];
        var reservations = this.room.reservations;
        var reservationArr = [];
        var iterable = 0;
        for (var reservationKey in reservations) {
            reservationArr[iterable] = reservations[reservationKey];
            iterable++;
        }
        return reservationArr;
    };
    ;
    RoomListComponent.prototype.setMessage = function () {
        if (this.reservations.length === 1) {
            this.message = "There is 1 reservation.";
        }
        else {
            this.message = "There are " + this.reservations.length + " reservations.";
        }
    };
    return RoomListComponent;
}());
RoomListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-room-list",
        template: __webpack_require__("./src/app/rooms/room-list/room-list.html"),
        styles: [__webpack_require__("./src/app/rooms/room-list/room-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomsService */]) === "function" && _b || Object])
], RoomListComponent);

var _a, _b;
//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ "./src/app/rooms/room-list/room-list.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h1 class=\"ui inverted header\">{{ room?.name }}</h1>\r\n\t<div class=\"ui segment\">\r\n\t\t<button routerLink=\"../form\" class=\"ui large right floated green button\">Make Reservation</button>\r\n\t\t<p>{{ message }}</p>\r\n\t\t<div *ngFor=\"let reservation of reservations\">\r\n\t\t\t<hr/>\r\n\t\t\t<div>{{reservation.date | date: 'MM/dd/yyyy'}}</div>\r\n\t\t\t<div>Start: {{ reservation.startTime | readableTime }}</div>\r\n\t\t\t<div>End: {{ reservation.endTime | readableTime }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_application_settings_service__ = __webpack_require__("./src/app/services/application-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__ = __webpack_require__("./src/app/services/rooms-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomsComponent = (function () {
    // ActivatedRoute is provided by RouterModule
    function RoomsComponent(route, roomsService, applicationSettings) {
        this.route = route;
        this.roomsService = roomsService;
        this.applicationSettings = applicationSettings;
        this.state = "init";
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defaultRoom();
        this.route.params
            .map(function (params) {
            return params["id"];
        })
            .do(function () {
            return _this.state = "init";
        })
            .subscribe(function (id) {
            _this.id = id;
            _this.roomsService.getRoomById(id)
                .subscribe(function (room) {
                _this.room = room;
                _this.pngPath = "../../assets/images/" + room.id + ".png";
                _this.state = "loaded";
                // we need to set room picture (which comes from DB as a file name) to our relative path
                _this.room.picture = _this.applicationSettings.getImagePath(_this.room.picture);
            });
        });
    };
    RoomsComponent.prototype.canDeactivate = function () {
        return window.confirm("Are you ready to leave this room?");
    };
    RoomsComponent.prototype.resetDB = function ($event) {
        if (!$event.ctrlKey)
            return alert("Hold CTRL to activate this");
        if (!confirm("Think a moment:  This will reset the class form data.  Are you SURE?"))
            return;
        this.isLoading = true;
        this.roomsService.resetRoomsToDB();
        this.isLoading = false;
        // this.roomsService.resetRoomsToDB().subscribe(() => {
        // 	this.isLoading = false;
        // });
    };
    RoomsComponent.prototype.defaultRoom = function () {
        this.room = {
            id: null,
            name: null,
            picture: ""
        };
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "gw-rooms",
        template: __webpack_require__("./src/app/rooms/rooms.html"),
        // styleUrls: ["./rooms.component.css"]
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* trigger */])("onLoad", [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* state */])("init", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* style */])({ opacity: 0, transform: "translate(0,-20px)" })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* state */])("loaded", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* style */])({ opacity: 1, transform: "none" })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* transition */])("init => loaded", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* animate */])("1s cubic-bezier(0, 1, 0.5, 1)"))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* trigger */])("rightAfterOnLoad", [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* state */])("init", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* style */])({ opacity: 0, transform: "translate(-30px,0)" })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* state */])("loaded", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* style */])({ opacity: 1, transform: "none" })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* transition */])("init => loaded", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* animate */])("500ms 300ms cubic-bezier(0, 1, 0.5, 1)"))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_application_settings_service__["a" /* ApplicationSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_application_settings_service__["a" /* ApplicationSettings */]) === "function" && _c || Object])
], RoomsComponent);

var _a, _b, _c;
//# sourceMappingURL=rooms.component.js.map

/***/ }),

/***/ "./src/app/rooms/rooms.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui room container\" [@onLoad]=\"state\">\r\n\t<div class=\"ui inverted active dimmer\" *ngIf=\"isLoading\">\r\n\t\t<div class=\"ui big loader\"></div>\r\n\t</div>\r\n\t<div class=\"ui padded grid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"six wide computer only column\">\r\n\t\t\t\t<img class=\"ui medium centered image\" [src]=\"pngPath\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"sixteen wide tablet ten wide computer column toggleButtons\">\r\n\t\t\t\t<div class=\"ui buttons\">\r\n\t\t\t\t\t<button class=\"ui big button\"\r\n\t\t\t\t\t        routerLink=\"./list\"\r\n\t\t\t\t\t        routerLinkActive=\"green\">List</button>\r\n\t\t\t\t\t<button class=\"ui big button\"\r\n\t\t\t\t\t        (click)=\"resetDB($event)\">Reset Rooms</button>\r\n\t\t\t\t\t<button class=\"ui big button\"\r\n\t\t\t\t\t        routerLink=\"./form\"\r\n\t\t\t\t\t        routerLinkActive=\"green\">Form</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr />\r\n\t\t\t\t<div>\t\r\n\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rooms/rooms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_routing_module__ = __webpack_require__("./src/app/rooms/rooms.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_main_pipe_module__ = __webpack_require__("./src/app/pipes/main-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomsModule = (function () {
    function RoomsModule() {
    }
    return RoomsModule;
}());
RoomsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__rooms_routing_module__["a" /* RoomsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_main_pipe_module__["a" /* MainPipe */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__rooms_routing_module__["b" /* routedComponents */]
    }),
    __metadata("design:paramtypes", [])
], RoomsModule);
/* harmony default export */ __webpack_exports__["default"] = (RoomsModule);
//# sourceMappingURL=rooms.module.js.map

/***/ }),

/***/ "./src/app/rooms/rooms.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_component__ = __webpack_require__("./src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_form_room_form_component__ = __webpack_require__("./src/app/rooms/room-form/room-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__ = __webpack_require__("./src/app/rooms/room-list/room-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_guard_service__ = __webpack_require__("./src/app/services/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dirty_form_guard_service__ = __webpack_require__("./src/app/services/dirty-form-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__rooms_component__["a" /* RoomsComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__services_login_guard_service__["a" /* LoginGuard */]],
        children: [
            {
                path: "form",
                component: __WEBPACK_IMPORTED_MODULE_3__room_form_room_form_component__["a" /* RoomFormComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__services_dirty_form_guard_service__["a" /* DirtyFormGuard */]]
            },
            {
                path: "list",
                component: __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__["a" /* RoomListComponent */]
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "list"
            }
        ]
    }
];
var RoomsRoutingModule = (function () {
    function RoomsRoutingModule() {
    }
    return RoomsRoutingModule;
}());
RoomsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
    })
], RoomsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__rooms_component__["a" /* RoomsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__room_form_room_form_component__["a" /* RoomFormComponent */],
    __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__["a" /* RoomListComponent */]
];
//# sourceMappingURL=rooms.routing.module.js.map

/***/ })

});
//# sourceMappingURL=rooms.module.chunk.js.map