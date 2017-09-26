import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AboutComponent],
	imports: [IonicModule],
	exports: [AboutComponent]
})
export class ComponentsModule {}
