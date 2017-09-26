var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ParallaxHeaderDirective } from './parallax-header/parallax-header';
import { StickyHeaderDirective } from './sticky-header/sticky-header';
import { StickyHeaderTabsDirective } from './sticky-header-tabs/sticky-header-tabs';
import { SwipeVerticalDirective } from './swipe-vertical/swipe-vertical';
var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    NgModule({
        declarations: [
            ParallaxHeaderDirective,
            StickyHeaderDirective,
            StickyHeaderTabsDirective,
            SwipeVerticalDirective
        ],
        imports: [],
        exports: [
            ParallaxHeaderDirective,
            StickyHeaderDirective,
            StickyHeaderTabsDirective,
            SwipeVerticalDirective
        ]
    })
], DirectivesModule);
export { DirectivesModule };
//# sourceMappingURL=directives.module.js.map