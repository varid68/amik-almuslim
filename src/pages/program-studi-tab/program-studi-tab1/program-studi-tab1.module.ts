import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiTab1Page } from './program-studi-tab1';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    ProgramStudiTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(ProgramStudiTab1Page),
    DirectivesModule,
  ],
})
export class ProgramStudiTab1PageModule {}
