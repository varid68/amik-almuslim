var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer } from '@angular/core';
import { NavController, AlertController, IonicPage, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, platform, renderer, storage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.storage = storage;
        this.sejarah = 'HomeTab1Page';
        this.visi = 'HomeTab2Page';
        this.dosen = 'HomeTab3Page';
        this.struktur = 'HomeTab4Page';
        this.sambutan = 'HomeTab5Page';
        this.title = 'Sambutan direktur';
    }
    // generate user jika belum login google
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var generateNumber = Math.round(Math.random() * (900 - 10) + 10);
        var user = {
            name: 'anonim' + generateNumber
        };
        this.storage.get('user').then(function (val) {
            if (val == null)
                _this.storage.set('user', JSON.stringify(user));
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.showConfirm();
        });
    };
    HomePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Ingin keluar?',
            message: 'Apakah anda yakin ingin keluar dari aplikasi..?',
            buttons: [
                {
                    text: 'tidak',
                },
                {
                    text: 'ya',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    // ubah title jika tab di geser
    HomePage.prototype.onTabSelect = function (ev) {
        this.resetStyle();
        switch (ev.index) {
            case 0:
                this.title = 'Sambutan direktur';
                break;
            case 1:
                this.title = 'Sejarah singkat';
                break;
            case 2:
                this.title = 'Visi dan misi';
                break;
            case 3:
                this.title = 'Staff pengajar';
                break;
            default:
                this.title = 'Struktur organisasi';
                break;
        }
    };
    // mengembalikan posisi header jika saat menggeser header masih ter-hidden
    HomePage.prototype.resetStyle = function () {
        var navbar = document.getElementsByTagName('ion-navbar')[0];
        var tabs = document.getElementsByTagName('super-tabs')[0];
        var b = window.getComputedStyle(navbar);
        var style = b.getPropertyValue('transform');
        var translateYinString = style.split(/[\s,]+/);
        var translateY = parseInt(translateYinString[5].slice(0, -1));
        if (translateY < 0) {
            this.renderer.setElementStyle(navbar, 'transform', 'translateY(' + 0 + 'px)');
            this.renderer.setElementStyle(navbar, 'transition', 0.3 + 's');
            this.renderer.setElementStyle(tabs, 'transform', 'translateY(' + 0 + 'px)');
            this.renderer.setElementStyle(tabs, 'transition', 0.3 + 's');
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, AlertController, Platform, Renderer, Storage])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map