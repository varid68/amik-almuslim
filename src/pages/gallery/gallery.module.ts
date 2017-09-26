import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    DirectivesModule,
    ComponentsModule,
  ],
})
export class GalleryPageModule {}
