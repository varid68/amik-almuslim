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
import { DomController, ViewController } from 'ionic-angular';
/**
 * Generated class for the DragDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var SwipeVerticalDirective = (function () {
    function SwipeVerticalDirective(element, renderer, domCtrl, viewCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.viewCtrl = viewCtrl;
        this.panPrev = 470;
        this.height = 270;
        this.isFinal = false;
    }
    SwipeVerticalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var modal = document.getElementsByTagName('ion-modal')[0];
        this.renderer.setElementStyle(modal, 'transform', 'translateY(' + 270 + 'px)');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    SwipeVerticalDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var position;
        var a = ev.center.y - this.panPrev;
        position = this.height + a;
        if (position < 25)
            position = 25;
        if (position > 550)
            this.viewCtrl.dismiss();
        if (this.isFinal)
            position = this.height + 2;
        this.isFinal = ev.isFinal ? true : false;
        this.domCtrl.write(function () {
            var modal = document.getElementsByTagName('ion-modal')[0];
            _this.renderer.setElementStyle(modal, 'transform', 'translateY(' + position + 'px)');
        });
        this.height = position;
        this.panPrev = ev.center.y;
    };
    return SwipeVerticalDirective;
}());
SwipeVerticalDirective = __decorate([
    Directive({
        selector: '[swipe-vertical]' // Attribute selector
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer, DomController, ViewController])
], SwipeVerticalDirective);
export { SwipeVerticalDirective };
//# sourceMappingURL=swipe-vertical.js.map