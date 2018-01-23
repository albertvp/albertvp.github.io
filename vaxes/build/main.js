webpackJsonp([0],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_popover_about_popover__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(popoverCtrl, auth) {
        this.popoverCtrl = popoverCtrl;
        this.auth = auth;
        this.conferenceDate = '2018-03-22';
        this.people = ['Xavier', 'Sergio'];
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Proyecto</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n  </div>\n  <div padding class="about-info" *ngIf="auth.project">\n    <h2><b>{{ auth.project.title }}</b></h2>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>\n          {{ auth.project.ended ? \'Terminó \' : \'Empezó \' }}\n          {{ auth.project.ended || auth.project.created | relativeTime }}\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="auth.project.city">\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>{{ auth.project.city }}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <h4>{{ auth.project.description }}<br>\n      Restructura tu empresa.<br>\n      Llega a un buen acuerdo.<br><br>\n      La negociación como punto clave de llegar a un\n      buen acuerdo.\n    </h4>\n    <br><br><br>\n    <ion-badge>M & A</ion-badge>\n    <ion-badge secondary>Startups</ion-badge>\n    <br><br><br>\n    <h3>Colaboradores</h3>\n    <ion-row no-padding>\n      <ion-col col-6 col-lg-auto text-center>\n        <ion-item>\n          <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n          <b>Sergio</b>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-lg-auto text-center text-lg-right>\n        <ion-item>\n          <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n          <b>Xavier</b>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__app_core_auth_service__["a" /* AuthService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Tareas');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Tarea ya finalizada');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Tarea finalizada',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Esta tarea pasará a estar pendiente.',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Tareas actualizadas.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        Pendiente\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Finalizadas\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide || (segment === \'all\' && session.saved)">\n\n        <button ion-item (click)="goToSessionDetail(session)">\n          <h3>{{session.name}}</h3>\n          <p>\n            {{session.timeStart}} &mdash;\n            {{session.timeEnd}}:\n            {{session.location}}\n          </p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            Finalizar\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Vuelve a estar pendiente\')" *ngIf="segment === \'favorites\'">\n            Inacabada\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list-header [hidden]="shownSessions > 0">\n      No hay tareas\n  </ion-list-header>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>\n      {{session.timeStart}} - {{session.timeEnd}}\n    </p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Documentos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list [virtualScroll]="speakers">\n    <ion-grid fixed>\n      <ion-row align-items-stretch>\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center *virtualItem="let speaker" approxItemHeight="157px">\n\n          <ion-card class="speaker-card">\n            <ion-card-header>\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n                <ion-avatar item-start>\n                  <img [src]="speaker.profilePic" alt="" width="100%" height="auto">\n                </ion-avatar>\n                {{speaker.name}}\n              </button>\n            </ion-card-header>\n\n            <ion-card-content class="outer-content">\n              <ion-list>\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n                  <h3>{{session.name}}</h3>\n                </button>\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n                  <h5>Subido por Vaxes hace 3 días</h5>\n                </button>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <!--ion-col col-12 col-lg-auto text-center text-lg-left>\n                <button ion-button clear small color="primary" icon-start (click)="goToSpeakerTwitter(speaker)">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                  Tweet\n                </button>\n              </ion-col-->\n              <ion-col col-6 col-lg-auto text-center>\n                <button ion-button clear small color="primary" icon-start (click)="openSpeakerShare(speaker)">\n                  <ion-icon name=\'share-alt\'></ion-icon>\n                  Abrir\n                </button>\n              </ion-col>\n              <ion-col col-6 col-lg-auto text-center text-lg-right>\n                <button ion-button clear small color="primary" icon-start (click)="openContact(speaker)">\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n                  Mencionar\n                </button>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_page_tabs_page__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, userData, auth, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.signup = { username: '', email: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.auth.register(this.signup).then(function (user) {
                console.log(user);
                _this.userData.signup(_this.signup.email);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_page_tabs_page__["a" /* TabsPage */]);
            }).catch(function (error) {
                console.error(error);
                _this.toastCtrl.create({
                    message: error.message || error,
                    duration: 3000
                }).present();
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Registro</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/logo.png" alt="Vaxes Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Usuario</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Usuario es requerido\n			</p>\n			<ion-item>\n				<ion-label stacked color="primary">E-Mail</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="text" #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				El E-Mail es requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Contraseña</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				La contraseña es requerido\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Registrar</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('https://vaxeslaw.com/gestion-legal-innovadora/')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('https://vaxeslaw.com/equipo/')\">Documentation</button>\n      <button ion-item (click)=\"close('https://vaxeslaw.com/servicios/')\">Showcase</button>\n      <button ion-item (click)=\"close('https://vaxeslaw.com/trabaja-con-nosotros/')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Cambiar Avatar</button>\n      <!--button ion-item (click)="changeUsername()">Cambiar Username</button-->\n      <button ion-item (click)="changePassword()">Cambiar Contraseña</button>\n      <!--button ion-item (click)="support()">Support</button-->\n      <button ion-item (click)="logout()">Salir</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_page_tabs_page__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, auth, userData, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.userData = userData;
        this.toastCtrl = toastCtrl;
        this.login = { email: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.auth.login(this.login).then(function (user) {
                console.log(user);
                _this.userData.login(_this.login.email);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_page_tabs_page__["a" /* TabsPage */]);
            }).catch(function (error) {
                console.error(error);
                _this.toastCtrl.create({
                    message: error.message || error,
                    duration: 3000
                }).present();
            });
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Acceder</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/logo.png" alt="Vaxes logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">E-Mail</ion-label>\n				<ion-input [(ngModel)]="login.email" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				El E-Mail es requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Contraseña</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				La contraseña es requerida\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Acceder</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Registro</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chat = (function () {
    function Chat(navParams, auth, chatService, events) {
        var _this = this;
        this.auth = auth;
        this.chatService = chatService;
        this.events = events;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        // Get the navParams toUserId parameter
        this.toUser = {
            id: navParams.get('toUserId'),
            name: navParams.get('toUserName')
        };
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.user = res;
        });
    }
    Chat.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    Chat.prototype.ionViewDidEnter = function () {
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            // this.pushNewMsg(msg);
        });
    };
    Chat.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    Chat.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            _this.scrollToBottom();
        });
    };
    /**
     * @name sendMsg
     */
    Chat.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        var newMsg = {
            user: this.auth.member.name,
            msg: this.editorMsg,
            time: Date.now()
        };
        if (this.auth.member.avatar)
            newMsg.userAvatar = this.auth.member.avatar;
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.auth.projectDoc.set({ activity: (this.auth.project.activity || []).concat(newMsg) }, { merge: true })
            .then(function () {
            _this.scrollToBottom();
        });
        //this.chatService.sendMsg(newMsg)
        // .then(() => {
        //     let index = this.getMsgIndexById(id);
        //     if (index !== -1) {
        //         this.msgList[index].status = 'success';
        //     }
        // })
    };
    Chat.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    Chat.prototype.scrollToBottom = function () {
        if (this.content && this.content.scrollToBottom) {
            this.content.scrollToBottom();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]) === "function" && _a || Object)
    ], Chat.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* TextInput */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* TextInput */]) === "function" && _b || Object)
    ], Chat.prototype, "messageInput", void 0);
    Chat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/chat/chat.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Actividad</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="message-wrap" *ngIf="auth.project">\n\n        <div *ngFor="let msg of auth.project.activity"\n             class="message"\n             [class.left]=" msg.user !== auth.member.name"\n             [class.right]=" msg.user === auth.member.name ">\n            <span class="letter">{{ msg.user.charAt(0) }}</span>\n            <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p>\n                        {{msg.user}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">{{msg.msg}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <span *ngIf="!auth.project$">No hay actividad reciente...</span>\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n    <ion-grid class="input-wrap">\n        <ion-row>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right>\n                    <ion-icon name="md-briefcase"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-8>\n                <ion-textarea #chat_input\n                              placeholder="Añadir un comentario"\n                              [(ngModel)]="editorMsg"\n                              (keyup.enter)="sendMsg()"\n                              (ionFocus)="onFocus()">\n                </ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n                    <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]) === "function" && _f || Object])
    ], Chat);
    return Chat;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = (function () {
    function ChatService(http, afs, events) {
        this.http = http;
        this.afs = afs;
        this.events = events;
        this.chat = [
            {
                "messageId": "1",
                "userId": "210000198410281948",
                "userName": "Vaxes",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1515087170242,
                "message": "Proyecto aceptado, @Sergio ha sido asignado a colaborar en el proyecto.",
                "status": "success"
            },
            {
                "messageId": "2",
                "userId": "210000198410281948",
                "userName": "Sergio",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491034800000,
                "message": "Buenas, deberíamos entrar en el detalle del Marco Legal vigente.",
                "status": "success"
            },
            {
                "messageId": "3",
                "userId": "140000198202211138",
                "userName": "Empresa",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1515087420242,
                "message": "Claro! Hay algunos antecedentes que nos pueden orientar.",
                "status": "success"
            },
            {
                "messageId": "4",
                "userId": "210000198410281948",
                "userName": "Vaxes",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1515087470142,
                "message": "@Empresa ha subido un nuevo fichero #file1 llamado 'Contexto 2018'",
                "status": "success"
            },
            {
                "messageId": "5",
                "userId": "210000198410281948",
                "userName": "Sergio",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1515087470242,
                "message": "Perfecto, ahora nos ponemos manos a la obra!",
                "status": "success"
            }
        ];
        this.projectRef = this.afs.doc('projects/sSzSqYcEpI8UYDeuJm1R');
        this.project$ = this.projectRef.valueChanges();
        this.project$.subscribe(function (project) {
            console.log(project);
        });
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Usuario',
            userAvatar: './assets/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success',
            toUserName: '',
            userImgUrl: '',
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        if (this.chat) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.chat);
        }
        else {
            return this.http.get('assets/data/chat.json')
                .map(function (data) { return data; });
        }
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Usuario',
            avatar: './assets/user.jpg'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filtrar tareas\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/logo.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Abogados por proyectos\n      </h2>\n      <p>\n        Incorporamos <b>abogados</b> en tu empresa temporalmente\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="http://vaxeslaw.com/wp-content/uploads/ma-vaxes-2.png" class="slide-image"/>\n      <h2 class="slide-title" >Insourcing legal</h2>\n      <p>Con nuestra <b>plataforma de abogados</b>, gestiona proyectos legales de manera innovadora.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="http://vaxeslaw.com/wp-content/uploads/COMPLIANCE-VAXES.png" class="slide-image"/>\n      <h2 class="slide-title">Especialidades Insourcing legal</h2>\n      <p><b>Compliance & Regulatorio – Finanzas corporativas – Fusiones & Adquisiciones – Societario – Startups</b></p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/logo.png" class="slide-image"/>\n      <h2 class="slide-title">¡Regístrate ya!</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continuar\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'Cuéntanos tu caso y te asignaremos a los profesionales que más se ajusten.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: '¡Gracias! Tu proyecto ha sido enviado. Pronto te sugeriremos una propuesta.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Abandonar?',
                message: 'Estás seguro de querer salir? Tu proyecto no se ha enviado.'
            });
            alert.addButton({ text: 'Cancelar', handler: reject });
            alert.addButton({ text: 'Salir', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Nuevo Proyecto</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/logo.png" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Describe tu nuevo proyecto</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Descripción necesaria\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Solicitar Presupuesto</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_module__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_account__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_schedule_schedule__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_schedule_filter_schedule_filter__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_session_detail_session_detail__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_speaker_detail_speaker_detail__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_speaker_list_speaker_list__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_support_support__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_conference_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_chat_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_relative_time__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_relative_time__["a" /* RelativeTime */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'proyecto/:projectId' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'planificadas' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'tarea/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'subidos' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'fichero/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* Chat */], name: 'Actividad', segment: 'actividad' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'info' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'crear' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'acceder' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'perfil' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'registro' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_28__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_29__providers_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(afAuth, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().useDeviceLanguage();
        //// Get auth data, then get firestore user document || null
        this.user$ = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
            }
        });
        this.user$.subscribe(function (user) {
            if (user && user.username) {
                _this.memberDoc = _this.afs.doc("members/" + user.username);
                _this.member$ = _this.memberDoc.valueChanges();
                _this.member$.subscribe(function (member) {
                    if (!member)
                        return console.error('No member found by username', user);
                    _this.member = member;
                    var project = member.project || member.projects[0].id;
                    _this.projectDoc = _this.afs.doc("projects/" + project);
                    _this.project$ = _this.projectDoc.valueChanges();
                    _this.project$.subscribe(function (project) {
                        console.log('Project', project);
                        _this.project = project;
                    });
                });
            }
            else
                console.error('No user found');
        });
    }
    AuthService.prototype.openProject = function (id) {
        this.memberDoc.set({ project: id }, { merge: true });
    };
    ///// Login/Signup //////
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function (user) {
                console.log('user logged', user);
                _this.updateUserData(user);
                return resolve(user);
            }).catch(function (error) {
                console.error(error);
                return reject(error);
            });
        });
    };
    AuthService.prototype.register = function (_a) {
        var _this = this;
        var username = _a.username, email = _a.email, password = _a.password;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(function (user) {
                console.log('created user', user);
                user.username = username;
                _this.updateUserData(user);
                _this.createMemberAccount(user);
                _this.createWelcomeProject(user);
                return resolve(user);
            }).catch(function (error) {
                console.error(error);
                return reject(error);
            });
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            email: user.email,
            username: user.username,
            platform: navigator.platform,
            since: new Date()
        };
        console.warn(userRef);
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.createMemberAccount = function (user) {
        var memberRef = this.afs.doc("members/" + user.username);
        var data = {
            uid: user.uid,
            name: user.username,
            projects: [{
                    id: 'vaxes-' + user.username,
                    title: 'Vaxes Law'
                }]
        };
        console.warn(memberRef);
        return memberRef.set(data, { merge: true });
    };
    AuthService.prototype.createWelcomeProject = function (user) {
        var projectRef = this.afs.doc("projects/vaxes-" + user.username);
        var data = {
            id: "vaxes-" + user.username,
            title: 'Vaxes Law',
            description: "Bienvenido a bordo @" + user.username + "!",
            admins: [],
            editors: (_a = {}, _a[user.uid] = true, _a),
            activities: [{
                    "messageId": "1",
                    "userId": "210000198410281948",
                    "userName": "Vaxes",
                    "userImgUrl": "./assets/user.jpg",
                    "toUserId": "210000198410281948",
                    "toUserName": "Hancock",
                    "userAvatar": "./assets/to-user.jpg",
                    "time": 1515087170242,
                    "message": "Proyecto aceptado, @Sergio ha sido asignado a colaborar en el proyecto.",
                    "status": "success"
                }]
        };
        console.warn('project', projectRef);
        projectRef.set(data, { merge: true });
        projectRef.set({ created: new Date() }, { merge: true });
        this.project$ = projectRef.valueChanges();
        var _a;
    };
    ///// Role-based Authorization //////
    AuthService.prototype.canRead = function (user) {
        var allowed = ['admin', 'editor', 'subscriber'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canEdit = function (user) {
        var allowed = ['admin', 'editor'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canDelete = function (user) {
        var allowed = ['admin'];
        return this.checkAuthorization(user, allowed);
    };
    // determines if user has matching role
    AuthService.prototype.checkAuthorization = function (user, allowedRoles) {
        if (!user)
            return false;
        for (var _i = 0, allowedRoles_1 = allowedRoles; _i < allowedRoles_1.length; _i++) {
            var role = allowedRoles_1[_i];
            if (user.roles[role]) {
                return true;
            }
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_support_support__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, auth, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.auth = auth;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.projects = [
            { title: 'Asesoría legal', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 0, icon: 'briefcase' },
            { title: 'Apuestas online', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 0, icon: 'briefcase' }
        ];
        this.contacts = [
            { title: 'Sergio', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'contact' },
            { title: 'Xavi', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contact' }
        ];
        this.loggedInPages = [
            { title: 'Nuevo Proyecto', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'bookmarks' },
            { title: 'Mi Perfil', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Salir', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Acceder', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Registro', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' },
            { title: 'Abogados', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'person', url: 'https://vaxeslaw.com/trabaja-con-nosotros/' },
            { title: 'Empresas', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'briefcase' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.userData.hasLoggedIn().then(function (hasLoggedIn) {
                    _this.enableMenu(hasLoggedIn === true);
                    _this.rootPage = hasLoggedIn === true ? __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */] : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                });
                _this.enableMenu(true);
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openProject = function (_a) {
        var id = _a.id, title = _a.title;
        this.auth.openProject(id);
        return this.openPage({ title: title, name: 'TabsPage', projectId: id, component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 0, icon: 'briefcase' });
    };
    ConferenceApp.prototype.openPage = function (page) {
        if (page.url) {
            return window.open(page.url, '_blank');
        }
        var params = {};
        if (page.index)
            params.tabIndex = page.index;
        if (page.projectId)
            params.projectId = page.projectId;
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isSelected = function (page) {
        return !page;
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]) === "function" && _a || Object)
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Vaxes Law</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Oficina Virtual\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Acerca de Vaxes\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Ver Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Vaxes Law</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Proyectos\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of auth.member?.projects" (click)="openProject(p)">\n          <ion-icon item-start [name]="p.icon || \'briefcase\'" [color]="p.id === auth.project?.id ? \'primary\' : \'\'"></ion-icon>\n          {{ p.title }}\n        </button>\n      </ion-list>\n\n      <!--ion-list>\n        <ion-list-header>\n          Contactos\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of contacts" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list-->\n\n      <ion-list>\n        <ion-list-header>\n          Cuenta\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Acerca de Vaxes\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Ver Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_14__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__providers_user_data__["a" /* UserData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__["a" /* ConferenceData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__["a" /* ConferenceData */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_15__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__core_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _j || Object])
    ], ConferenceApp);
    return ConferenceApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA_V9toFft5PW1pH0_0IRvwgCODHnuceUU",
        authDomain: "projects-creua.firebaseapp.com",
        databaseURL: "https://projects-creua.firebaseio.com",
        projectId: "projects-creua",
        storageBucket: "projects-creua.appspot.com",
        messagingSenderId: "301502791629"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
        this.data = {
            "schedule": [{
                    "date": "2047-05-17",
                    "groups": [{
                            "time": "Conceptualización",
                            "sessions": [{
                                    "name": "Detalle del proyecto: antecedentes, especializaciones, marco legal y presupuesto.",
                                    "timeStart": "8:00 am",
                                    "timeEnd": "9:00 am",
                                    "location": "Cliente",
                                    "tracks": ["Análisis"],
                                    "id": "1"
                                }]
                        }, {
                            "time": "Aceptación",
                            "sessions": [{
                                    "name": "Valoración del proyecto",
                                    "location": "Cliente",
                                    "description": "Nacimos con la idea del cambio diferente e innovador. Centrada en la consultoría insourcing para ayudar a Pymes a alcanzar objetivos ambiciosos, rodeados de los mejores profesionales.",
                                    "speakerNames": ["Ellie Elephant"],
                                    "timeStart": "9:15 am",
                                    "timeEnd": "9:30 am",
                                    "tracks": ["Análisis"],
                                    "id": "2"
                                }, {
                                    "name": "Propuesta de presupuesto",
                                    "location": "Vaxes",
                                    "description": "Cambia la facturación por horas, por la facturación flexible a tus necesidades. Forma parte de un equipo moderno y dinámico que aporte cambio de valores en la industria legal.",
                                    "speakerNames": ["Ted Turtle"],
                                    "timeStart": "9:30 am",
                                    "timeEnd": "9:45 am",
                                    "tracks": ["Aprobación"],
                                    "id": "3"
                                }, {
                                    "name": "Pago factura",
                                    "location": "Cliente",
                                    "description": "Primero nos cuestionamos, luego ejecutamos. Ayudamos a los líderes de las empresas a conseguir desarrollo disruptivo.",
                                    "speakerNames": ["Rachel Rabbit"],
                                    "timeStart": "9:45 am",
                                    "timeEnd": "10:00 am",
                                    "tracks": ["Pago"],
                                    "id": "4"
                                }]
                        }, {
                            "time": "Inicio de proyecto",
                            "sessions": [{
                                    "name": "Asignación de colaboradores",
                                    "location": "Vaxes",
                                    "description": "Entorno basado en el trabajo a distancia y la tecnología. La tecnología mejora el mundo, hace los procesos más fáciles, sencillos y con mayor probabilidad de éxito.",
                                    "speakerNames": ["Eva Eagle", "Lionel Lion"],
                                    "timeStart": "10:00 am",
                                    "timeEnd": "10:15 am",
                                    "tracks": ["Análisis"],
                                    "id": "5"
                                }, {
                                    "name": "Marco Legal",
                                    "location": "Abogados",
                                    "description": "Cambia la facturación por horas, por la facturación flexible a tus necesidades. Forma parte de un equipo moderno y dinámico que aporte cambio de valores en la industria legal.",
                                    "speakerNames": ["Rachel Rabbit"],
                                    "timeStart": "10:15 am",
                                    "timeEnd": "10:30 am",
                                    "tracks": ["Análisis"],
                                    "id": "6"
                                }, {
                                    "name": "Definición de abasto",
                                    "location": "Cliente",
                                    "description": "Entorno basado en el trabajo a distancia y la tecnología. La tecnología mejora el mundo, hace los procesos más fáciles, sencillos y con mayor probabilidad de éxito.",
                                    "speakerNames": ["Isabella Iguana", "Eva Eagle"],
                                    "timeStart": "10:15 am",
                                    "timeEnd": "10:30 am",
                                    "tracks": ["Análisis"],
                                    "id": "7"
                                }, {
                                    "name": "Criterio a seguir",
                                    "location": "Abogados",
                                    "description": "Cambia la facturación por horas, por la facturación flexible a tus necesidades. Forma parte de un equipo moderno y dinámico que aporte cambio de valores en la industria legal.",
                                    "speakerNames": ["Charlie Cheetah"],
                                    "timeStart": "10:45 am",
                                    "timeEnd": "11:00 am",
                                    "tracks": ["Análisis"],
                                    "id": "8"
                                }]
                        }, {
                            "time": "Entregas",
                            "sessions": [{
                                    "name": "Documentación específica",
                                    "location": "Vaxes",
                                    "description": "Entorno basado en el trabajo a distancia y la tecnología. La tecnología mejora el mundo, hace los procesos más fáciles, sencillos y con mayor probabilidad de éxito.",
                                    "speakerNames": ["Karl Kitten", "Lionel Lion"],
                                    "timeStart": "11:00 am",
                                    "timeEnd": "11:45 am",
                                    "tracks": ["Entrega"],
                                    "id": "9"
                                }, {
                                    "name": "Jurisdicción y sugerencias",
                                    "location": "Cliente",
                                    "description": "Nacimos con la idea del cambio diferente e innovador. Centrada en la consultoría insourcing para ayudar a Pymes a alcanzar objetivos ambiciosos, rodeados de los mejores profesionales.",
                                    "speakerNames": ["Lionel Lion", "Gino Giraffe"],
                                    "timeStart": "11:30 am",
                                    "timeEnd": "11:50 am",
                                    "tracks": ["Análisis"],
                                    "id": "10"
                                }, {
                                    "name": "Soluciones",
                                    "location": "Abogados",
                                    "description": "Cambia la facturación por horas, por la facturación flexible a tus necesidades. Forma parte de un equipo moderno y dinámico que aporte cambio de valores en la industria legal.",
                                    "speakerNames": ["Rachel Rabbit", "Eva Eagle"],
                                    "timeStart": "11:30 am",
                                    "timeEnd": "12:00 pm",
                                    "tracks": ["Entrega"],
                                    "id": "11"
                                }]
                        }, {
                            "time": "Finalización",
                            "sessions": [{
                                    "name": "Valoraciones y encuestas",
                                    "location": "Abogados",
                                    "description": "Feedback y entrega de reseñas",
                                    "timeStart": "12:00 pm",
                                    "timeEnd": "1:00 pm",
                                    "tracks": ["Valoraciones"],
                                    "id": "12"
                                }]
                        }]
                }],
            "speakers": [{
                    "name": "Contexto 2018",
                    "profilePic": "https://cdn0.iconfinder.com/data/icons/ie_Bright/512/suitcase.png",
                    "twitter": "ionicframework",
                    "about": "Fichero PDF",
                    "location": "Everywhere",
                    "email": "burt@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "1"
                }],
            "speakers2": [{
                    "name": "Burt Bear",
                    "profilePic": "assets/img/speakers/bear.jpg",
                    "twitter": "ionicframework",
                    "about": "Burt is a Bear.",
                    "location": "Everywhere",
                    "email": "burt@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "1"
                }, {
                    "name": "Charlie Cheetah",
                    "profilePic": "assets/img/speakers/cheetah.jpg",
                    "twitter": "ionicframework",
                    "about": "Charlie is a Cheetah.",
                    "location": "Everywhere",
                    "email": "charlie@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "2"
                }, {
                    "name": "Donald Duck",
                    "profilePic": "assets/img/speakers/duck.jpg",
                    "twitter": "ionicframework",
                    "about": "Donald is a Duck.",
                    "location": "Everywhere",
                    "email": "donald@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "3"
                }, {
                    "name": "Eva Eagle",
                    "profilePic": "assets/img/speakers/eagle.jpg",
                    "twitter": "ionicframework",
                    "about": "Eva is an Eagle.",
                    "location": "Everywhere",
                    "email": "eva@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "4"
                }, {
                    "name": "Ellie Elephant",
                    "profilePic": "assets/img/speakers/elephant.jpg",
                    "twitter": "ionicframework",
                    "about": "Ellie is an Elephant.",
                    "location": "Everywhere",
                    "email": "ellie@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "5"
                }, {
                    "name": "Gino Giraffe",
                    "profilePic": "assets/img/speakers/giraffe.jpg",
                    "twitter": "ionicframework",
                    "about": "Gino is a Giraffe.",
                    "location": "Everywhere",
                    "email": "gino@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "6"
                }, {
                    "name": "Isabella Iguana",
                    "profilePic": "assets/img/speakers/iguana.jpg",
                    "twitter": "ionicframework",
                    "about": "Isabella is an Iguana.",
                    "location": "Everywhere",
                    "email": "isabella@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "7"
                }, {
                    "name": "Karl Kitten",
                    "profilePic": "assets/img/speakers/kitten.jpg",
                    "twitter": "ionicframework",
                    "about": "Karl is a Kitten.",
                    "location": "Everywhere",
                    "email": "karl@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "8"
                }, {
                    "name": "Lionel Lion",
                    "profilePic": "assets/img/speakers/lion.jpg",
                    "twitter": "ionicframework",
                    "about": "Lionel is a Lion.",
                    "location": "Everywhere",
                    "email": "lionel@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "9"
                }, {
                    "name": "Molly Mouse",
                    "profilePic": "assets/img/speakers/mouse.jpg",
                    "twitter": "ionicframework",
                    "about": "Molly is a Mouse.",
                    "location": "Everywhere",
                    "email": "molly@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "10"
                }, {
                    "name": "Paul Puppy",
                    "profilePic": "assets/img/speakers/puppy.jpg",
                    "twitter": "ionicframework",
                    "about": "Paul is a Puppy.",
                    "location": "Everywhere",
                    "email": "paul@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "11"
                }, {
                    "name": "Rachel Rabbit",
                    "profilePic": "assets/img/speakers/rabbit.jpg",
                    "twitter": "ionicframework",
                    "about": "Rachel is a Rabbit.",
                    "location": "Everywhere",
                    "email": "rachel@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "12"
                }, {
                    "name": "Ted Turtle",
                    "profilePic": "assets/img/speakers/turtle.jpg",
                    "twitter": "ionicframework",
                    "about": "Ted is a Turtle.",
                    "location": "Everywhere",
                    "email": "ted@example.com",
                    "phone": "+1-541-754-3010",
                    "id": "13"
                }],
            "map": [{
                    "name": "Monona Terrace Convention Center",
                    "lat": 43.071584,
                    "lng": -89.380120,
                    "center": true
                }, {
                    "name": "Ionic HQ",
                    "lat": 43.074395,
                    "lng": -89.381056
                }, {
                    "name": "Afterparty - Brocach Irish Pub",
                    "lat": 43.07336,
                    "lng": -89.38335
                }]
        };
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            if (!this.data.tracks)
                this.processData();
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        if (data === void 0) { data = this.data; }
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        if (typeof data.json === 'function')
            data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_guard__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__can_read_guard__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_4__can_read_guard__["a" /* CanReadGuard */]]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(auth) {
        this.auth = auth;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.auth.user$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (user) { return user && user.roles.admin ? true : false; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (isAdmin) {
            if (!isAdmin) {
                console.error('Access denied - Admins only');
            }
        }));
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AdminGuard);
    return AdminGuard;
}());

//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanReadGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanReadGuard = (function () {
    function CanReadGuard(auth) {
        this.auth = auth;
    }
    CanReadGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.user$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (user) { return user && _this.auth.canRead(user) ? true : false; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (canView) {
            if (!canView) {
                console.error('Access denied. Must have permission to view content');
            }
        }));
    };
    CanReadGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], CanReadGuard);
    return CanReadGuard;
}());

//# sourceMappingURL=can-read.guard.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


__WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('es');
var RelativeTime = (function () {
    function RelativeTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTime.prototype.transform = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    RelativeTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'relativeTime',
        })
    ], RelativeTime);
    return RelativeTime;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 335,
	"./af.js": 335,
	"./ar": 336,
	"./ar-dz": 337,
	"./ar-dz.js": 337,
	"./ar-kw": 338,
	"./ar-kw.js": 338,
	"./ar-ly": 339,
	"./ar-ly.js": 339,
	"./ar-ma": 340,
	"./ar-ma.js": 340,
	"./ar-sa": 341,
	"./ar-sa.js": 341,
	"./ar-tn": 342,
	"./ar-tn.js": 342,
	"./ar.js": 336,
	"./az": 343,
	"./az.js": 343,
	"./be": 344,
	"./be.js": 344,
	"./bg": 345,
	"./bg.js": 345,
	"./bm": 346,
	"./bm.js": 346,
	"./bn": 347,
	"./bn.js": 347,
	"./bo": 348,
	"./bo.js": 348,
	"./br": 349,
	"./br.js": 349,
	"./bs": 350,
	"./bs.js": 350,
	"./ca": 351,
	"./ca.js": 351,
	"./cs": 352,
	"./cs.js": 352,
	"./cv": 353,
	"./cv.js": 353,
	"./cy": 354,
	"./cy.js": 354,
	"./da": 355,
	"./da.js": 355,
	"./de": 356,
	"./de-at": 357,
	"./de-at.js": 357,
	"./de-ch": 358,
	"./de-ch.js": 358,
	"./de.js": 356,
	"./dv": 359,
	"./dv.js": 359,
	"./el": 360,
	"./el.js": 360,
	"./en-au": 361,
	"./en-au.js": 361,
	"./en-ca": 362,
	"./en-ca.js": 362,
	"./en-gb": 363,
	"./en-gb.js": 363,
	"./en-ie": 364,
	"./en-ie.js": 364,
	"./en-nz": 365,
	"./en-nz.js": 365,
	"./eo": 366,
	"./eo.js": 366,
	"./es": 367,
	"./es-do": 368,
	"./es-do.js": 368,
	"./es-us": 369,
	"./es-us.js": 369,
	"./es.js": 367,
	"./et": 370,
	"./et.js": 370,
	"./eu": 371,
	"./eu.js": 371,
	"./fa": 372,
	"./fa.js": 372,
	"./fi": 373,
	"./fi.js": 373,
	"./fo": 374,
	"./fo.js": 374,
	"./fr": 375,
	"./fr-ca": 376,
	"./fr-ca.js": 376,
	"./fr-ch": 377,
	"./fr-ch.js": 377,
	"./fr.js": 375,
	"./fy": 378,
	"./fy.js": 378,
	"./gd": 379,
	"./gd.js": 379,
	"./gl": 380,
	"./gl.js": 380,
	"./gom-latn": 381,
	"./gom-latn.js": 381,
	"./gu": 382,
	"./gu.js": 382,
	"./he": 383,
	"./he.js": 383,
	"./hi": 384,
	"./hi.js": 384,
	"./hr": 385,
	"./hr.js": 385,
	"./hu": 386,
	"./hu.js": 386,
	"./hy-am": 387,
	"./hy-am.js": 387,
	"./id": 388,
	"./id.js": 388,
	"./is": 389,
	"./is.js": 389,
	"./it": 390,
	"./it.js": 390,
	"./ja": 391,
	"./ja.js": 391,
	"./jv": 392,
	"./jv.js": 392,
	"./ka": 393,
	"./ka.js": 393,
	"./kk": 394,
	"./kk.js": 394,
	"./km": 395,
	"./km.js": 395,
	"./kn": 396,
	"./kn.js": 396,
	"./ko": 397,
	"./ko.js": 397,
	"./ky": 398,
	"./ky.js": 398,
	"./lb": 399,
	"./lb.js": 399,
	"./lo": 400,
	"./lo.js": 400,
	"./lt": 401,
	"./lt.js": 401,
	"./lv": 402,
	"./lv.js": 402,
	"./me": 403,
	"./me.js": 403,
	"./mi": 404,
	"./mi.js": 404,
	"./mk": 405,
	"./mk.js": 405,
	"./ml": 406,
	"./ml.js": 406,
	"./mr": 407,
	"./mr.js": 407,
	"./ms": 408,
	"./ms-my": 409,
	"./ms-my.js": 409,
	"./ms.js": 408,
	"./mt": 410,
	"./mt.js": 410,
	"./my": 411,
	"./my.js": 411,
	"./nb": 412,
	"./nb.js": 412,
	"./ne": 413,
	"./ne.js": 413,
	"./nl": 414,
	"./nl-be": 415,
	"./nl-be.js": 415,
	"./nl.js": 414,
	"./nn": 416,
	"./nn.js": 416,
	"./pa-in": 417,
	"./pa-in.js": 417,
	"./pl": 418,
	"./pl.js": 418,
	"./pt": 419,
	"./pt-br": 420,
	"./pt-br.js": 420,
	"./pt.js": 419,
	"./ro": 421,
	"./ro.js": 421,
	"./ru": 422,
	"./ru.js": 422,
	"./sd": 423,
	"./sd.js": 423,
	"./se": 424,
	"./se.js": 424,
	"./si": 425,
	"./si.js": 425,
	"./sk": 426,
	"./sk.js": 426,
	"./sl": 427,
	"./sl.js": 427,
	"./sq": 428,
	"./sq.js": 428,
	"./sr": 429,
	"./sr-cyrl": 430,
	"./sr-cyrl.js": 430,
	"./sr.js": 429,
	"./ss": 431,
	"./ss.js": 431,
	"./sv": 432,
	"./sv.js": 432,
	"./sw": 433,
	"./sw.js": 433,
	"./ta": 434,
	"./ta.js": 434,
	"./te": 435,
	"./te.js": 435,
	"./tet": 436,
	"./tet.js": 436,
	"./th": 437,
	"./th.js": 437,
	"./tl-ph": 438,
	"./tl-ph.js": 438,
	"./tlh": 439,
	"./tlh.js": 439,
	"./tr": 440,
	"./tr.js": 440,
	"./tzl": 441,
	"./tzl.js": 441,
	"./tzm": 442,
	"./tzm-latn": 443,
	"./tzm-latn.js": 443,
	"./tzm.js": 442,
	"./uk": 444,
	"./uk.js": 444,
	"./ur": 445,
	"./ur.js": 445,
	"./uz": 446,
	"./uz-latn": 447,
	"./uz-latn.js": 447,
	"./uz.js": 446,
	"./vi": 448,
	"./vi.js": 448,
	"./x-pseudo": 449,
	"./x-pseudo.js": 449,
	"./yo": 450,
	"./yo.js": 450,
	"./zh-cn": 451,
	"./zh-cn.js": 451,
	"./zh-hk": 452,
	"./zh-hk.js": 452,
	"./zh-tw": 453,
	"./zh-tw.js": 453
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 684;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* Chat */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="Proyecto">\n  <ion-tab [root]="tab1Root" tabTitle="Proyecto" tabIcon="briefcase"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tareas" tabIcon="clipboard" tabUrlPath="tareas"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Documentos" tabIcon="cloud-done"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Actividad" tabIcon="pulse"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/albertvilapicas/Develop/libs/creua/law-projects/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ })

},[454]);
//# sourceMappingURL=main.js.map