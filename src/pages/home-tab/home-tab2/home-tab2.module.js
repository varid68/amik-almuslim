var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab2Page } from './home-tab2';
import { DirectivesModule } from '../../../directives/directives.module';
var HomeTab2PageModule = (function () {
    function HomeTab2PageModule() {
    }
    return HomeTab2PageModule;
}());
HomeTab2PageModule = __decorate([
    NgModule({
        declarations: [
            HomeTab2Page,
        ],
        imports: [
            IonicPageModule.forChild(HomeTab2Page),
            DirectivesModule,
        ],
    })
], HomeTab2PageModule);
export { HomeTab2PageModule };
//# sourceMappingURL=home-tab2.module.js.map