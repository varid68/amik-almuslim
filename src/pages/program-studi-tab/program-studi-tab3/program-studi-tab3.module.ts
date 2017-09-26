import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiTab3Page } from './program-studi-tab3';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    ProgramStudiTab3Page,
  ],
  imports: [
    IonicPageModule.forChild(ProgramStudiTab3Page),
    DirectivesModule,
  ],
})
export class ProgramStudiTab3PageModule {}
