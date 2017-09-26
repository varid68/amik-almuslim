import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab1Page } from './home-tab1';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    HomeTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab1Page),
    DirectivesModule,
  ],
})
export class HomeTab1PageModule {}
