var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab5Page } from './home-tab5';
import { DirectivesModule } from '../../../directives/directives.module';
var HomeTab5PageModule = (function () {
    function HomeTab5PageModule() {
    }
    return HomeTab5PageModule;
}());
HomeTab5PageModule = __decorate([
    NgModule({
        declarations: [
            HomeTab5Page,
        ],
        imports: [
            IonicPageModule.forChild(HomeTab5Page),
            DirectivesModule,
        ],
    })
], HomeTab5PageModule);
export { HomeTab5PageModule };
//# sourceMappingURL=home-tab5.module.js.map