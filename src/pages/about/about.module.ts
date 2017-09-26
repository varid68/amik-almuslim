import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    DirectivesModule,
  ],
})
export class AboutPageModule {}
