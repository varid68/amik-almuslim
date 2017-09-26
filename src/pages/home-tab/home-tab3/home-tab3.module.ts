import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTab3Page } from './home-tab3';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    HomeTab3Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab3Page),
    DirectivesModule,
  ],
})
export class HomeTab3PageModule {}
