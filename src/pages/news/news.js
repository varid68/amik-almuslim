var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(navCtrl, toastCtrl, platform, restApi, storage) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.restApi = restApi;
        this.storage = storage;
    }
    NewsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.presentToast();
        this.restApi.getNews().subscribe(function (res) {
            _this.list = res;
            _this.toast.dismiss();
        });
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    NewsPage.prototype.presentToast = function () {
        this.toast = this.toastCtrl.create({
            message: 'Sedang load data ...',
            duration: 3000,
            position: 'bottom'
        });
        this.toast.present();
    };
    NewsPage.prototype.baca = function (id) {
        this.navCtrl.push('NewsDetailPage', { idNews: id });
    };
    return NewsPage;
}());
NewsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-news',
        templateUrl: 'news.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ToastController,
        Platform,
        RestApiProvider,
        FirebaseApp])
], NewsPage);
export { NewsPage };
//# sourceMappingURL=news.js.map