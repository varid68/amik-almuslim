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
import { IonicPage, Platform, NavController } from 'ionic-angular';
/**
 * Generated class for the TerimaSiswaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TerimaSiswaPage = (function () {
    function TerimaSiswaPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    TerimaSiswaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    return TerimaSiswaPage;
}());
TerimaSiswaPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-terima-siswa',
        templateUrl: 'terima-siswa.html',
    }),
    __metadata("design:paramtypes", [NavController, Platform])
], TerimaSiswaPage);
export { TerimaSiswaPage };
//# sourceMappingURL=terima-siswa.js.map