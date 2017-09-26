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
import { IonicPage, ModalController, AlertController, ViewController, ToastController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Market } from '@ionic-native/market';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(modalCtrl, viewCtrl, toastCtrl, alertCtrl, storage, platform, market, google, auth) {
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        this.market = market;
        this.google = google;
        this.auth = auth;
        this.loginOrLogout = 'login';
    }
    PopoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            var user = JSON.parse(val).name;
            if (user.includes('anonim')) {
                _this.loginOrLogout = 'Login';
                _this.anonimId = JSON.parse(val).name;
            }
            else {
                _this.anonimId = JSON.parse(val).anonimId;
                _this.loginOrLogout = 'Logout';
            }
        });
    };
    //
    PopoverPage.prototype.loginOrLogoutCheck = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.storage.get('user').then(function (val) {
                JSON.parse(val).photo == undefined ? _this.loginGoogle() : _this.logout();
            });
        });
    };
    //
    PopoverPage.prototype.loginGoogle = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(function (res) { _this.ambilNamaWeb(res); });
        }
        else {
            return this.google.login({
                'webClientId': '198277777552-qrj9i53gj1gge8j7sme69reljrukusot.apps.googleusercontent.com',
                'offline': true
            }).then(function (res) { _this.ambilNamaGoogle(res); })
                .catch(function (err) { return console.log(err); });
        }
    };
    // ambil nama di web jika login fb berhasil
    PopoverPage.prototype.ambilNamaWeb = function (res) {
        var user = {
            uid: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL,
            anonimId: this.anonimId
        };
        this.storage.set('user', JSON.stringify(user));
        this.showAlert(res.user.displayName);
    };
    // ambil data google di device jika login google berhasil
    PopoverPage.prototype.ambilNamaGoogle = function (res) {
        var self = this;
        return this.auth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            .then(function (val) {
            var user = {
                uid: val.uid,
                name: val.displayName,
                email: val.email,
                photo: val.photoURL,
                anonimId: self.anonimId
            };
            self.storage.set('user', JSON.stringify(user));
            self.showAlert(val.displayName);
        }).catch(function (gagal) {
            console.log('gagal');
        });
    };
    //
    PopoverPage.prototype.showAlert = function (name) {
        var alert = this.alertCtrl.create({
            title: 'Login berhasil',
            subTitle: "Selamat datang " + name,
            buttons: ['OK']
        });
        alert.present();
    };
    //
    PopoverPage.prototype.logout = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.auth.auth.signOut().then(function () {
                _this.storage.set('user', JSON.stringify({ name: _this.anonimId }));
                _this.presentToast();
            });
        }
        else {
            this.google.logout().then(function () {
                _this.storage.set('user', JSON.stringify({ name: _this.anonimId }));
                _this.presentToast();
            });
        }
    };
    //
    PopoverPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Logout berhasil...',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    //
    PopoverPage.prototype.openModal = function () {
        var aboutModal = this.modalCtrl.create('AboutPage');
        this.viewCtrl.dismiss().then(function () {
            aboutModal.present();
        });
    };
    //
    PopoverPage.prototype.rateApps = function () {
        this.market.open('com.whatsapp');
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-popover',
        templateUrl: 'popover.html',
    }),
    __metadata("design:paramtypes", [ModalController,
        ViewController,
        ToastController,
        AlertController,
        Storage,
        Platform,
        Market,
        GooglePlus,
        AngularFireAuth])
], PopoverPage);
export { PopoverPage };
//# sourceMappingURL=popover.js.map