var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Renderer } from '@angular/core';
/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var StickyHeaderDirective = (function () {
    function StickyHeaderDirective(renderer) {
        this.renderer = renderer;
        this.translateAmt = 0;
        this.scrollPrev = 0;
    }
    StickyHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    StickyHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        var navbar = document.getElementsByTagName('ion-navbar')[0];
        if (ev.scrollTop > this.scrollPrev) {
            var position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
            if (position < -56)
                position = -56;
            this.renderer.setElementStyle(navbar, 'transform', 'translateY(' + position + 'px)');
            this.translateAmt = position;
        }
        else {
            var position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
            if (position > 0)
                position = 0;
            this.renderer.setElementStyle(navbar, 'transform', 'translateY(' + position + 'px)');
            this.translateAmt = position;
        }
        this.scrollPrev = ev.scrollTop;
    };
    return StickyHeaderDirective;
}());
StickyHeaderDirective = __decorate([
    Directive({
        selector: '[sticky-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [Renderer])
], StickyHeaderDirective);
export { StickyHeaderDirective };
//# sourceMappingURL=sticky-header.js.map