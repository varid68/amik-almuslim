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
import { IonicPage, Platform, NavController } from 'ionic-angular';
/**
 * Generated class for the ProgramStudiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProgramStudiPage = (function () {
    function ProgramStudiPage(navCtrl, platform, renderer) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.mi = 'ProgramStudiTab1Page';
        this.ka = 'ProgramStudiTab2Page';
        this.tk = 'ProgramStudiTab3Page';
        this.title = 'Manajemen informatika';
    }
    ProgramStudiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    //
    ProgramStudiPage.prototype.onTabSelect = function (ev) {
        this.resetStyle();
        switch (ev.index) {
            case 0:
                this.title = 'Manajemen informatika';
                break;
            case 1:
                this.title = 'Komputerisasi akuntansi';
                break;
            default:
                this.title = 'Teknik komputer';
                break;
        }
    };
    ProgramStudiPage.prototype.resetStyle = function () {
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
    return ProgramStudiPage;
}());
ProgramStudiPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-program-studi',
        templateUrl: 'program-studi.html',
    }),
    __metadata("design:paramtypes", [NavController, Platform, Renderer])
], ProgramStudiPage);
export { ProgramStudiPage };
//# sourceMappingURL=program-studi.js.map