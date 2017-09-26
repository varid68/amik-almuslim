import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab5Page } from './home-tab5';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    HomeTab5Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab5Page),
    DirectivesModule,
  ],
})
export class HomeTab5PageModule {}
