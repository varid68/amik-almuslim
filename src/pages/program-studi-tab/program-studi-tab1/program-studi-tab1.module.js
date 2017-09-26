var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiTab1Page } from './program-studi-tab1';
import { DirectivesModule } from '../../../directives/directives.module';
var ProgramStudiTab1PageModule = (function () {
    function ProgramStudiTab1PageModule() {
    }
    return ProgramStudiTab1PageModule;
}());
ProgramStudiTab1PageModule = __decorate([
    NgModule({
        declarations: [
            ProgramStudiTab1Page,
        ],
        imports: [
            IonicPageModule.forChild(ProgramStudiTab1Page),
            DirectivesModule,
        ],
    })
], ProgramStudiTab1PageModule);
export { ProgramStudiTab1PageModule };
//# sourceMappingURL=program-studi-tab1.module.js.map