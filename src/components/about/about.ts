import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class AboutComponent {

  constructor(public popoverCtrl: PopoverController) {}


  //
  about(myEvent){
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: myEvent
    });
  }

}
