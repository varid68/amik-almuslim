import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab2Page } from './home-tab2';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    HomeTab2Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab2Page),
    DirectivesModule,
  ],
})
export class HomeTab2PageModule {}
