import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public viewCtrl: ViewController) {}

  //
  close(){
    this.viewCtrl.dismiss();
  }

}
