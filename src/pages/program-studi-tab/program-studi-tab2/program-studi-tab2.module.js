var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiTab2Page } from './program-studi-tab2';
import { DirectivesModule } from '../../../directives/directives.module';
var ProgramStudiTab2PageModule = (function () {
    function ProgramStudiTab2PageModule() {
    }
    return ProgramStudiTab2PageModule;
}());
ProgramStudiTab2PageModule = __decorate([
    NgModule({
        declarations: [
            ProgramStudiTab2Page,
        ],
        imports: [
            IonicPageModule.forChild(ProgramStudiTab2Page),
            DirectivesModule,
        ],
    })
], ProgramStudiTab2PageModule);
export { ProgramStudiTab2PageModule };
//# sourceMappingURL=program-studi-tab2.module.js.map