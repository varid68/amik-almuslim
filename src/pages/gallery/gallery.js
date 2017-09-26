var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer2 } from '@angular/core';
import { IonicPage, ToastController, ModalController, NavController, Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { PhotoViewer } from '@ionic-native/photo-viewer';
/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GalleryPage = (function () {
    function GalleryPage(toastCtrl, modalCtrl, navCtrl, renderer, platform, database, photoViewer) {
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.platform = platform;
        this.database = database;
        this.photoViewer = photoViewer;
        this.objectKeys = Object.keys;
        this.items = [];
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.initializeChat(3);
        this.presentToast();
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    GalleryPage.prototype.initializeChat = function (limit) {
        var _this = this;
        var self = this;
        this.refRealtimeItems = this.database.object('/gallery', { preserveSnapshot: true });
        this.refRealtimeItems.$ref.limitToFirst(limit).on('value', function (snapshot) {
            self.items = snapshot.val();
            self.toast.dismiss();
        });
        this.refRealtimeKutipan = this.database.object('/kutipan', { preserveSnapshot: true });
        this.refRealtimeKutipan.subscribe(function (snapshot) {
            _this.kutipan = snapshot.val();
        });
    };
    GalleryPage.prototype.presentToast = function () {
        this.toast = this.toastCtrl.create({
            message: 'Please wait, still loading ...',
            position: 'bottom'
        });
        this.toast.present();
    };
    GalleryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var self = this;
        var limit = this.items.length + 3;
        setTimeout(function () {
            _this.refRealtimeItems.$ref.limitToFirst(limit).on('value', function (snapshot) {
                snapshot.val() == null ? infiniteScroll.enable(false) : infiniteScroll.enable(true);
                self.items = snapshot.val();
            });
            infiniteScroll.complete();
        }, 300);
    };
    GalleryPage.prototype.show = function (image) {
        this.photoViewer.show(image);
    };
    GalleryPage.prototype.like = function (key, totalLike) {
        var ref = this.database.object("/gallery/" + key + "/liked", { preserveSnapshot: true });
        var id = document.getElementById(key);
        var isLiked = id.getAttribute('isLiked');
        var btn = document.getElementById("btn-" + key);
        if (isLiked == 'false') {
            ref.set(totalLike + 1);
            this.renderer.setAttribute(id, 'isLiked', 'true');
            this.renderer.setStyle(btn, 'color', '#f53d3d');
        }
        else {
            ref.set(totalLike - 1);
            this.renderer.setAttribute(id, 'isLiked', 'false');
            this.renderer.setStyle(btn, 'color', '#000000');
        }
    };
    GalleryPage.prototype.komentar = function (key) {
        var modal = this.modalCtrl.create('GalleryCommentPage', { key: key });
        modal.present();
    };
    GalleryPage.prototype.likeKutipan = function (totalLike) {
        var ref = this.database.object('/kutipan/liked', { preserveSnapshot: true });
        var id = document.getElementById('kutipan');
        var isLiked = id.getAttribute('isLiked');
        var btn = document.getElementById('btn-kutipan');
        if (isLiked == 'false') {
            ref.set(totalLike + 1);
            this.renderer.setAttribute(id, 'isLiked', 'true');
            this.renderer.setStyle(btn, 'color', '#f53d3d');
        }
        else {
            ref.set(totalLike - 1);
            this.renderer.setAttribute(id, 'isLiked', 'false');
            this.renderer.setStyle(btn, 'color', '#000000');
        }
    };
    GalleryPage.prototype.komentarKutipan = function () {
        var modal = this.modalCtrl.create('GalleryCommentPage', { key: 'kutipan' });
        modal.present();
    };
    return GalleryPage;
}());
GalleryPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-gallery',
        templateUrl: 'gallery.html',
    }),
    __metadata("design:paramtypes", [ToastController,
        ModalController,
        NavController,
        Renderer2,
        Platform,
        AngularFireDatabase,
        PhotoViewer])
], GalleryPage);
export { GalleryPage };
//# sourceMappingURL=gallery.js.map