import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerimaSiswaPage } from './terima-siswa';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    TerimaSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(TerimaSiswaPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class TerimaSiswaPageModule {}
