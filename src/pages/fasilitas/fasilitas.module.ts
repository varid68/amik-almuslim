import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FasilitasPage } from './fasilitas';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    FasilitasPage,
  ],
  imports: [
    IonicPageModule.forChild(FasilitasPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class FasilitasPageModule {}
