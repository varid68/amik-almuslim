import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab4Page } from './home-tab4';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    HomeTab4Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab4Page),
    DirectivesModule,
  ],
})
export class HomeTab4PageModule {}
