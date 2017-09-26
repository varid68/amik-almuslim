var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab1Page } from './home-tab1';
import { DirectivesModule } from '../../../directives/directives.module';
var HomeTab1PageModule = (function () {
    function HomeTab1PageModule() {
    }
    return HomeTab1PageModule;
}());
HomeTab1PageModule = __decorate([
    NgModule({
        declarations: [
            HomeTab1Page,
        ],
        imports: [
            IonicPageModule.forChild(HomeTab1Page),
            DirectivesModule,
        ],
    })
], HomeTab1PageModule);
export { HomeTab1PageModule };
//# sourceMappingURL=home-tab1.module.js.map