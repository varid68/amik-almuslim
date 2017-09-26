import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiTab2Page } from './program-studi-tab2';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    ProgramStudiTab2Page,
  ],
  imports: [
    IonicPageModule.forChild(ProgramStudiTab2Page),
    DirectivesModule,
  ],
})
export class ProgramStudiTab2PageModule {}
