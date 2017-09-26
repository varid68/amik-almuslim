var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer2, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import 'moment/locale/id';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the GalleryCommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GalleryCommentPage = (function () {
    function GalleryCommentPage(navParams, storage, database, renderer, keyboard) {
        this.navParams = navParams;
        this.storage = storage;
        this.database = database;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.list = [];
        this.commentText = '';
    }
    GalleryCommentPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('key');
        this.initializeComment();
        this.initializeKeyboard();
        var modal = document.getElementsByTagName('ion-modal')[0];
        this.renderer.setStyle(modal, 'padding-top', 25 + 'px');
    };
    GalleryCommentPage.prototype.initializeKeyboard = function () {
        var self = this;
        window.addEventListener('native.keyboardshow', callBackFunction);
        function callBackFunction(e) {
            var o = document.getElementsByTagName('ion-modal')[0];
            self.renderer.setStyle(o, 'height', 'calc(' + 100 + '% - ' + e.keyboardHeight + 'px)');
        }
        this.keyboard.onKeyboardHide().subscribe(function () {
            var o = document.getElementsByTagName('ion-modal')[0];
            self.renderer.setStyle(o, 'height', 100 + '%');
        });
    };
    GalleryCommentPage.prototype.initializeComment = function () {
        var _this = this;
        var ref = this.id == 'kutipan' ? "/kutipan/comment" : "/gallery/" + this.id + "/comment";
        var a = this.database.object("" + ref, { preserveSnapshot: true });
        a.subscribe(function (snapshot) {
            _this.list = snapshot.val();
        });
        this.storage.get('user').then(function (val) {
            var name = JSON.parse(val).name;
            _this.image = name.includes('anonim') ? './assets/img/avatar-comment.jpg' : JSON.parse(val).photo;
            _this.user = name;
        });
    };
    GalleryCommentPage.prototype.beforeSend = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            var name = JSON.parse(val).name;
            var image = JSON.parse(val).photo == undefined ? 'none' : JSON.parse(val).photo;
            _this.send(name, image);
        });
    };
    GalleryCommentPage.prototype.send = function (name, image) {
        var _this = this;
        var comment = {
            comment: this.commentText,
            time: moment().format('X'),
            image: image,
            name: name,
        };
        var ref = this.database.object("/gallery/" + this.id + "/comment", { preserveSnapshot: true });
        this.list.push(comment);
        ref.set(this.list).then(function () {
            _this.content.scrollToBottom(600);
        });
        this.commentText = '';
    };
    return GalleryCommentPage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], GalleryCommentPage.prototype, "content", void 0);
GalleryCommentPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-gallery-comment',
        templateUrl: 'gallery-comment.html',
    }),
    __metadata("design:paramtypes", [NavParams,
        Storage,
        AngularFireDatabase,
        Renderer2,
        Keyboard])
], GalleryCommentPage);
export { GalleryCommentPage };
//# sourceMappingURL=gallery-comment.js.map