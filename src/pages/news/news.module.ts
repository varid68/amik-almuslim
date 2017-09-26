import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class NewsPageModule {}
