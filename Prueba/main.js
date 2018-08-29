(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor{\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor\">\n<app-nav></app-nav>\n<app-heroe></app-heroe>\n<app-component-one></app-component-one>\n<app-component-two></app-component-two>\n<app-component-three></app-component-three>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroe/heroe.component */ "./src/app/heroe/heroe.component.ts");
/* harmony import */ var _component_one_component_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-one/component-one.component */ "./src/app/component-one/component-one.component.ts");
/* harmony import */ var _component_two_component_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-two/component-two.component */ "./src/app/component-two/component-two.component.ts");
/* harmony import */ var _component_three_component_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-three/component-three.component */ "./src/app/component-three/component-three.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                _heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__["HeroeComponent"],
                _component_one_component_one_component__WEBPACK_IMPORTED_MODULE_5__["ComponentOneComponent"],
                _component_two_component_two_component__WEBPACK_IMPORTED_MODULE_6__["ComponentTwoComponent"],
                _component_three_component_three_component__WEBPACK_IMPORTED_MODULE_7__["ComponentThreeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component-one/component-one.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component-one/component-one.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primer-componente{\n    background-color: white;\n    display: flex;\n    padding: 20px;\n}\n.primer-componente-elemento{\n    padding: 3.4%;\n    margin-left: 20px;\n}\nh3{\n    font-weight: 700;\n    color: rgb(255, 111, 0);    \n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/component-one/component-one.component.html":
/*!************************************************************!*\
  !*** ./src/app/component-one/component-one.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"primer-componente\">\n  <div class=\"primer-componente-elemento\">\n    <h3>AUSTRALIA'S FIRST CHOICE IN SKIP HIRE</h3>\n  </div>\n  <div class=\"primer-componente-elemento\">\n      <p>\n        For all your rubbish cleanup, home renovation or construction needs we provide convenient, reliable and competitively priced skups bin hire services to homeowners, trades people, builders, landscapers, warehouses and all sectors of industry.\n      </p>\n  </div>\n  <div class=\"primer-componente-elemento\">\n    <p>\n      We are a full service skip company and we realise that one size does not fit all, so we are happy to work with you to provide you with a solution for your wate collection needs. Skip bins available in size ranging from 2 to 25 cubic meters.\n    </p>\n  </div>\n</div>z"

/***/ }),

/***/ "./src/app/component-one/component-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component-one/component-one.component.ts ***!
  \**********************************************************/
/*! exports provided: ComponentOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentOneComponent", function() { return ComponentOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentOneComponent = /** @class */ (function () {
    function ComponentOneComponent() {
    }
    ComponentOneComponent.prototype.ngOnInit = function () {
    };
    ComponentOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-one',
            template: __webpack_require__(/*! ./component-one.component.html */ "./src/app/component-one/component-one.component.html"),
            styles: [__webpack_require__(/*! ./component-one.component.css */ "./src/app/component-one/component-one.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentOneComponent);
    return ComponentOneComponent;
}());



/***/ }),

/***/ "./src/app/component-three/component-three.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component-three/component-three.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-three/component-three.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component-three/component-three.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  component-three works!\n</p>\n"

/***/ }),

/***/ "./src/app/component-three/component-three.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component-three/component-three.component.ts ***!
  \**************************************************************/
/*! exports provided: ComponentThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentThreeComponent", function() { return ComponentThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentThreeComponent = /** @class */ (function () {
    function ComponentThreeComponent() {
    }
    ComponentThreeComponent.prototype.ngOnInit = function () {
    };
    ComponentThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-three',
            template: __webpack_require__(/*! ./component-three.component.html */ "./src/app/component-three/component-three.component.html"),
            styles: [__webpack_require__(/*! ./component-three.component.css */ "./src/app/component-three/component-three.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentThreeComponent);
    return ComponentThreeComponent;
}());



/***/ }),

/***/ "./src/app/component-two/component-two.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component-two/component-two.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-two/component-two.component.html":
/*!************************************************************!*\
  !*** ./src/app/component-two/component-two.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  component-two works!\n</p>\n"

/***/ }),

/***/ "./src/app/component-two/component-two.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component-two/component-two.component.ts ***!
  \**********************************************************/
/*! exports provided: ComponentTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTwoComponent", function() { return ComponentTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentTwoComponent = /** @class */ (function () {
    function ComponentTwoComponent() {
    }
    ComponentTwoComponent.prototype.ngOnInit = function () {
    };
    ComponentTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-two',
            template: __webpack_require__(/*! ./component-two.component.html */ "./src/app/component-two/component-two.component.html"),
            styles: [__webpack_require__(/*! ./component-two.component.css */ "./src/app/component-two/component-two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentTwoComponent);
    return ComponentTwoComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/heroe/heroe.component.css":
/*!*******************************************!*\
  !*** ./src/app/heroe/heroe.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heroe{\n    background-image: url(\"https://i.imgur.com/IePfut7.png\");\n    height: 70vh;\n    position: absolute;\n    width: 100%;\n    min-height: 480px;\n    z-index: -1;\n    background-repeat: no-repeat;\n    background-position: center; \n}\n.buscador{\n    text-align: center;\n    margin-left: 20vh;\n    margin-right: auto;\n    background-color: orange;\n    width: 40%;\n    padding: 30px;\n    padding-left: 0;\n    padding-right: 0;\n}\nh1{\n    background-color: rgb(255, 111, 0);\n    color: white;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-weight: 300;\n}\ninput{\n    width: 90%;\n    margin: 5%;\n}\n.sub-buscador{\n    padding-bottom: 3vh;\n}\n.sub-buscador1{\n    display: flex;\n    padding-left: auto;\n    padding-right: auto;\n}\n.sub1{\n    padding-left: 8vh;}\n.sub2{\n    padding-left: 8vh;\n}\n.boton{\n    padding: 20px;\n    margin-top: 4vh;\n    margin-left: 66%;\n    border-radius: 7px;\n    box-shadow: 2px 2px 0 1px #733800;\n    border: none;\n    background-color: rgb(255, 111, 0);\n    color: white\n}\n@media only screen and (max-width : 600px) {\n    *{\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/heroe/heroe.component.html":
/*!********************************************!*\
  !*** ./src/app/heroe/heroe.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heroe\"></div>\n  <div class=\"buscador\">\n    <h1>ONLINE QUOTES & BOOKINGS</h1>\n    <div class=\"sub-buscador\">\n      <label for=\"post\">ENTER POST CODE OR SUBURB</label>\n      <input name=\"post\" type=\"text\">\n    </div>\n    <div class=\"sub-buscador1\">\n      <div class=\"sub1\" >\n        <label for=\"pickup-date\">PICKUP DATE</label>\n        <input name=\"pickup-date\" type=\"date\">\n      </div>\n      <div class=\"sub2\" >\n        <label for=\"return-date\">RETURN DATE</label>\n        <input name=\"return-date\" type=\"date\">\n      </div>\n    </div>\n    <div class=\"div-boton\">\n    <button class=\"boton\">GO TO STEP 2</button>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/heroe/heroe.component.ts":
/*!******************************************!*\
  !*** ./src/app/heroe/heroe.component.ts ***!
  \******************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroeComponent = /** @class */ (function () {
    function HeroeComponent() {
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroe',
            template: __webpack_require__(/*! ./heroe.component.html */ "./src/app/heroe/heroe.component.html"),
            styles: [__webpack_require__(/*! ./heroe.component.css */ "./src/app/heroe/heroe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imagen-rentaskip{\n    height: 90px;\n}\na{\n    color: orange;\n}\n.nav-custom{\n    background: linear-gradient(to bottom, #ffffff 0%,#f6f6f6 47%,#ededed 100%); \n}\np{\n    font-size: 10px;\n}\n.nav-custom-2{\n    padding-right: 20px;\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg nav-custom align-center\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"./assets/rentaskip.png\" id=\"imagen-rentaskip\" alt=\"\">\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item nav-custom-2 \">\n        <a class=\"nav-link\" href=\"#\">WHO WE ARE</a>\n        <p>what can we do</p>\n      </li>\n      <li class=\"nav-item nav-custom-2\">\n        <a class=\"nav-link\" href=\"#\">AREAS SERVICED</a>\n        <p>FIND A SHOP IN YOUR AREA</p>\n      </li>\n      <li class=\"nav-item nav-custom-2\">\n        <a class=\"nav-link\" href=\"#\">SKIP SIZES</a>\n        <P>A COMPLETE GUIDE</P>\n      </li>\n      <li class=\"nav-item nav-custom-2\">\n        <a class=\"nav-link \" href=\"#\">WASTE TYPES</a>\n          <p>SELECT THE RIGHT ONE</p>\n      </li>\n      <li class=\"nav-item nav-custom-2\">\n        <a class=\"nav-link \" href=\"#\">FAQS</a>\n          <p>FIND ANSWERS</p>\n      </li>\n      <li class=\"nav-item nav-custom-2\">\n        <a class=\"nav-link \" href=\"#\">CONTACT US</a>\n          <p>HAVE AY CUESTIONS?</p>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arias/Escritorio/Prueba/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map