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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blogname {\n    font-family: 'IndyPimp-Bold';\n    text-align: center;\n    margin: 50px;\n    margin-bottom: 30px;\n    text-transform: capitalize;\n    font-size: 3rem;\n    /*padding-bottom: 20px;*/\n    /*border-bottom: 5px solid gray;*/\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0NBQWtDO0dBQ25DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmxvZ25hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5keVBpbXAtQm9sZCc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gICAgLypib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JheTsqL1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 id=\"blogname\">{{title}}</h1>\n<app-list></app-list>\n<router-outlet></router-outlet>"

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
        this.title = 'i know nothing, Jon Snow';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { EditComponent } from './edit/edit.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: Post, BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
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

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

var BlogService = /** @class */ (function () {
    function BlogService() {
        this.username = 'cs144';
        this.postsKey = "posts";
        this.nextPostIDKey = "nextPostID";
        this.urlBase = "http://localhost:3000/api/";
        this.getUsernameFromCookie();
        this.fetchPosts();
    }
    BlogService.prototype.fetchPosts = function () {
        this.posts = [];
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var nextPostID = 1;
                var response = JSON.parse(xhr.responseText);
                for (var i = 0; i < response.length; i++) {
                    var currPost = {
                        postid: response[i].postid,
                        created: new Date(response[i].created),
                        modified: new Date(response[i].modified),
                        title: response[i].title,
                        body: response[i].body
                    };
                    if (response[i].postid >= nextPostID) {
                        nextPostID = response[i].postid + 1;
                    }
                    self.posts.push(currPost);
                }
                self.nextPostID = nextPostID;
            }
        };
        var url = this.urlBase + this.username;
        xhr.open('GET', url, true);
        xhr.send();
    };
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    BlogService.prototype.getPost = function (id) {
        var postIndex = this.getPostIndex(id);
        return (postIndex != -1) ? this.posts[postIndex] : null;
    };
    BlogService.prototype.newPost = function () {
        var newPost = {
            postid: this.nextPostID,
            created: new Date(),
            modified: new Date(),
            title: "",
            body: ""
        };
        this.posts.push(newPost);
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 201) {
                console.log("new post created successfully");
                self.updateNextPostID();
            }
            else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status != 201) {
                self.deleteFromPosts(newPost.postid);
                window.alert("ERROR: could not create post at the server");
                window.location.href = "http://localhost:3000/edit/";
            }
        };
        var url = this.urlBase + this.username + "/" + (this.nextPostID).toString();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        console.log("new post JSON", JSON.stringify(newPost));
        xhr.send(JSON.stringify(newPost));
        return newPost;
    };
    BlogService.prototype.updatePost = function (post) {
        var postIndex = this.getPostIndex(post.postid);
        if (postIndex != -1) {
            this.posts[postIndex].title = post.title;
            this.posts[postIndex].body = post.body;
            this.posts[postIndex].modified = new Date();
            var self_1 = this;
            var xhr_1 = new XMLHttpRequest();
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState == XMLHttpRequest.DONE && xhr_1.status == 200) {
                    console.log("post updated successfully");
                }
                else if (xhr_1.readyState == XMLHttpRequest.DONE && xhr_1.status != 200) {
                    window.alert("ERROR: could not update post at the server");
                    window.location.href = "http://localhost:3000/edit/#/edit/" + (self_1.posts[postIndex].postid).toString();
                }
            };
            var url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();
            xhr_1.open("PUT", url, true);
            xhr_1.setRequestHeader("Content-type", "application/json");
            xhr_1.send(JSON.stringify(this.posts[postIndex]));
        }
    };
    BlogService.prototype.deletePost = function (postid) {
        var postIndex = this.getPostIndex(postid);
        if (postIndex != -1) {
            var self_2 = this;
            var xhr_2 = new XMLHttpRequest();
            xhr_2.onreadystatechange = function () {
                if (xhr_2.readyState == XMLHttpRequest.DONE && xhr_2.status == 204) {
                    console.log("post deleted successfully");
                }
                else if (xhr_2.readyState == XMLHttpRequest.DONE && xhr_2.status != 204) {
                    window.alert("ERROR: server can't handle this delete");
                    window.location.href = "http://localhost:3000/edit/";
                }
            };
            var url = this.urlBase + this.username + "/" + (this.posts[postIndex].postid).toString();
            this.posts.splice(postIndex, 1);
            xhr_2.open("DELETE", url, true);
            xhr_2.send();
        }
    };
    BlogService.prototype.getPostIndex = function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == id) {
                return i;
            }
        }
        return -1;
    };
    BlogService.prototype.setNextPostID = function (nextId) {
        this.nextPostID = nextId;
    };
    BlogService.prototype.getNextPostID = function () {
        return this.nextPostID;
    };
    BlogService.prototype.updateNextPostID = function () {
        this.nextPostID = this.nextPostID + 1;
    };
    BlogService.prototype.deleteFromPosts = function (postid) {
        var postIndex = this.getPostIndex(postid);
        if (postIndex != -1) {
            this.posts.splice(postIndex, 1);
        }
    };
    BlogService.prototype.getUsernameFromCookie = function () {
        var token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (token === null || token === '') {
            window.location.href = 'http://localhost:3000/login?redirect=/editor';
            return;
        }
        console.log(token);
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        this.username = JSON.parse(atob(base64)).usr;
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit-container {\n    border: 1px solid black;\n    border-radius: 10px;\n    font-family: 'OpenSans-Regular';\n    width: 45%;\n    height: 100%;\n    float: left;\n    text-align: center;\n    padding-top: 40px;\n    /*border-left: 5px solid gray;*/\n  }\n  \n  #edit-header {\n    font-family: 'IndyPimp-Bold';\n    font-size: 2rem;\n    margin-bottom: 10px;\n    width: 60%;\n    margin: 0 auto;\n  }\n  \n  #edit-post-form {\n    width: 60%;\n    margin: 0 auto;\n  }\n  \n  .input-header {\n    text-align: left;\n    margin-bottom: 5px;\n  }\n  \n  input, textarea {\n    width: 100%;\n    padding: 10px 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  textarea {\n    height: 100px;\n  }\n  \n  .button-style {\n    width: 100px;\n    height: 30px;\n    margin: 10px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #466670;\n    color: #ffffff;\n  }\n  \n  .button-style:hover {\n    background-color: #0a4621;\n  }\n  \n  #saveButton:disabled {\n    background-color: #c1dbe3;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztHQUNqQzs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsV0FBVztJQUNYLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsY0FBYztHQUNmOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VkaXQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIC8qYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmF5OyovXG4gIH1cbiAgXG4gICNlZGl0LWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR5UGltcC1Cb2xkJztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAjZWRpdC1wb3N0LWZvcm0ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5pbnB1dC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY2NjcwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAuYnV0dG9uLXN0eWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE0NjIxO1xuICB9XG4gIFxuICAjc2F2ZUJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxZGJlMztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n    <div id=\"edit-container\">\n      <h3 id=\"edit-header\">Edit Post</h3>\n      <hr>\n      <form [formGroup]=\"myEditPostForm\">\n        <div id=\"edit-post-form\">\n          <h4 class=\"input-header\"> Title: </h4>\n          <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\" [(ngModel)]=\"post.title\">\n          <h4 class=\"input-header\"> Body: </h4>\n          <textarea id=\"body\" class=\"form-control\" formControlName=\"body\" [(ngModel)]=\"post.body\"></textarea>\n          <p> Last modified: {{post.modified | date: 'medium'}}</p> \n        </div>\n        <div class=\"edit-button-row\">\n          <button type=\"button\" class=\"btn button-style\" id=\"deleteButton\" (click)=\"delete()\">\n              <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete\n          </button>\n          <button type=\"button\" class=\"btn button-style\" id=\"saveButton\" (click)=\"save()\" [disabled]=\"myEditPostForm.pristine\">\n              <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save\n          </button>\n          <button type=\"button\" class=\"btn button-style\" id=\"previewButton\" (click)=\"preview()\">\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Preview\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(router, activatedRoute, blogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.myEditPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
    };
    Object.defineProperty(EditComponent.prototype, "title", {
        get: function () {
            return String(this.myEditPostForm.get('title'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "body", {
        get: function () {
            return String(this.myEditPostForm.get('body'));
        },
        enumerable: true,
        configurable: true
    });
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.post.postid);
        this.router.navigate(['/']);
    };
    EditComponent.prototype.save = function () {
        this.blogService.updatePost(this.post);
        this.myEditPostForm.markAsPristine();
    };
    EditComponent.prototype.preview = function () {
        if (this.myEditPostForm.dirty) {
            this.save();
        }
        this.router.navigateByUrl('/preview/' + this.post.postid);
    };
    EditComponent.prototype.getPost = function () {
        var postid = this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(Number(postid));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "save", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#list-container {\n    font-family: 'OpenSans-Regular';\n    width: 50%;\n    height: 100%;\n    float: left;\n  }\n  \n  #posts-container {\n      border: 1px solid black;\n\n      text-align: center;\n      width: 70%;\n      margin: 0 auto;\n      border-radius: 10px 10px 0 0;\n  }\n  \n  #list-header {\n    font-family: 'IndyPimp-Bold';\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n  \n  #new-post-button {\n    width: 100px;\n    height: 30px;\n    margin: 10px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #466670;\n    color: #ffffff;\n  }\n  \n  #new-post-button:hover {\n    background-color: #0d2b35;\n  }\n  \n  #post-container {\n      border: 1px solid black;\n      border-radius: 0 0 10px 10px;\n    width: 70%;\n    max-height: 500px;\n    overflow: scroll;\n    text-align: center;\n    margin: 0 auto;\n  }\n  \n  #postList {\n    cursor: pointer;\n    list-style-type: none;\n    margin: 10px;\n    padding: 5px 5px;\n    border-radius: 5px;\n  }\n  \n  #postList a {\n    color: grey;\n    text-decoration: none;\n    background-color: #ffffff;\n    display: block;\n    text-align: left;\n  \n    border-radius: 5px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  \n  #postList a:hover {\n    background-color: #87e06c;\n  }\n  \n  #postList .badge {\n    display: inline-block;\n    font-size: 14px;\n    vertical-align: middle;\n    color: rgb(22, 19, 19);\n    padding: 10px 10px;\n    background-color: #58ee85;\n    width: 35%;\n    text-align: center;\n    border-radius: 5px;\n    overflow: visible;\n    white-space: normal;\n  }\n  \n  #postList .tit {\n    padding: 15px 5px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0VBRUQ7TUFDSSx3QkFBd0I7O01BRXhCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZUFBZTtNQUNmLDZCQUE2QjtHQUNoQzs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtNQUNJLHdCQUF3QjtNQUN4Qiw2QkFBNkI7SUFDL0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFHRDtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxrQkFBa0I7R0FDbkIiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0LWNvbnRhaW5lciB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgI3Bvc3RzLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgfVxuICBcbiAgI2xpc3QtaGVhZGVyIHtcbiAgICBmb250LWZhbWlseTogJ0luZHlQaW1wLUJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAjbmV3LXBvc3QtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NjY3MDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBcbiAgI25ldy1wb3N0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmIzNTtcbiAgfVxuICBcbiAgI3Bvc3QtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAjcG9zdExpc3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAjcG9zdExpc3QgYSB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAjcG9zdExpc3QgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3ZTA2YztcbiAgfVxuICBcbiAgXG4gICNwb3N0TGlzdCAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogcmdiKDIyLCAxOSwgMTkpO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThlZTg1O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG4gIFxuICAjcG9zdExpc3QgLnRpdCB7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"list-container\">\n  <div id=\"posts-container\">\n    <h3 id=\"list-header\">My Posts</h3>\n\n    <button type=\"button\" class=\"btn button-style\" id=\"new-post-button\" (click)=\"newPost()\">\n        <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> New Post\n    </button>\n  </div>\n\n  <div id=\"post-container\">\n    <ul id=\"postList\">\n      <li *ngFor=\"let post of posts\">\n        <a routerLink=\"/edit/{{post.postid}}\">\n           <span class=\"badge\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.created | date:'M/d/yy, h:mm:ss a'}}</span> <span class=\"tit\">{{post.title}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(router, activatedRoute, blogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.newPost = function () {
        var newPost = this.blogService.newPost();
        var newPostID = newPost.postid;
        this.router.navigate(['/edit/' + newPostID.toString()]);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#preview-container {\n    font-family: 'OpenSans-Regular';\n    width: 45%;\n    height: 100%;\n    float: left;\n    text-align: center;\n    border: 1px solid black;\n    border-radius: 10px;\n    padding-top: 40px;\n\n    /*border-left: 5px solid gray;*/\n  }\n  \n  #preview-header {\n    font-family: 'IndyPimp-Bold';\n    font-size: 2rem;\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n  \n  .button-style {\n    width: 100px;\n    height: 30px;\n    margin: 10px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #466670;\n    color: #ffffff;\n  }\n  \n  .button-style:hover {\n    background-color: #91c1d0;\n  }\n  \n  #markdown-container {\n    width: 50%;\n    text-align: center;\n    margin: 0 auto;\n    background-color: #ffffff;\n    padding: 5px 30px;\n    margin-top: 10px;\n    border-radius: 5px;\n  }\n  \n  #markdown-container {\n    text-align: left;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsa0JBQWtCOztJQUVsQixnQ0FBZ0M7R0FDakM7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJldmlldy1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAvKmJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTsqL1xuICB9XG4gIFxuICAjcHJldmlldy1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5keVBpbXAtQm9sZCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgLmJ1dHRvbi1zdHlsZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjY2NzA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5idXR0b24tc3R5bGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWMxZDA7XG4gIH1cbiAgXG4gICNtYXJrZG93bi1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gICNtYXJrZG93bi1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n    <div id=\"preview-container\">\n      <h3 id=\"preview-header\">Preview Post</h3>\n      <hr>\n      <button type=\"submit\" class=\"btn button-style\" (click)=\"returnToEdit()\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\n      </button>\n  \n      <div id=\"markdown-wrapper\">\n        <div id=\"markdown-container\">\n          <div id=\"title\" [innerHTML]=markdownTitle></div>\n          <div id=\"body\" [innerHTML]=markdownBody></div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(router, activatedRoute, blogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.markdownTitle = "";
        this.markdownBody = "";
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.renderPreview(); });
    };
    PreviewComponent.prototype.renderPreview = function () {
        var postid = this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(Number(postid));
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_3__["Parser"]();
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_3__["HtmlRenderer"]();
        if (this.post != null) {
            var parsedTitle = reader.parse(this.post.title);
            this.markdownTitle = writer.render(parsedTitle);
            var parsedBody = reader.parse(this.post.body);
            this.markdownBody = writer.render(parsedBody);
        }
    };
    PreviewComponent.prototype.returnToEdit = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], PreviewComponent);
    return PreviewComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/project4/Angular_Markdown_Editor/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map