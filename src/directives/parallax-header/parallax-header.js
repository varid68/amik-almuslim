var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var ParallaxHeaderDirective = (function () {
    function ParallaxHeaderDirective(element, renderer, platform, statusBar) {
        this.element = element;
        this.renderer = renderer;
        this.platform = platform;
        this.statusBar = statusBar;
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('cover')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.haederTop = document.getElementsByTagName('ion-header')[0];
    };
    ParallaxHeaderDirective.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        var head = document.getElementsByTagName('ion-header')[0];
        if (ev.scrollTop >= 0) {
            this.translateAmt = -ev.scrollTop / 1.4;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        if (ev.scrollTop > 107) {
            this.renderer.setElementClass(head, 'opaque', true);
            if (this.platform.is('android')) {
                this.statusBar.backgroundColorByHexString('#8E24AA');
            }
        }
        else if (ev.scrollTop < 107) {
            this.renderer.setElementClass(head, 'opaque', false);
            if (this.platform.is('android')) {
                this.statusBar.backgroundColorByHexString('#33000000');
            }
        }
    };
    return ParallaxHeaderDirective;
}());
ParallaxHeaderDirective = __decorate([
    Directive({
        selector: '[parallax-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        }
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer, Platform, StatusBar])
], ParallaxHeaderDirective);
export { ParallaxHeaderDirective };
//# sourceMappingURL=parallax-header.js.map