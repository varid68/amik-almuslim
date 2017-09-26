import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramStudiPage } from './program-studi';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProgramStudiPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramStudiPage),
    SuperTabsModule,
    ComponentsModule,
  ],
})
export class ProgramStudiPageModule {}
