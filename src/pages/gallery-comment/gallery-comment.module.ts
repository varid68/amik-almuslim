import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryCommentPage } from './gallery-comment';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GalleryCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryCommentPage),
    PipesModule,
  ],
})
export class GalleryCommentPageModule {}
