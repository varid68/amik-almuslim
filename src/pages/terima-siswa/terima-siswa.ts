import { Component } from '@angular/core';
import { IonicPage, Platform, NavController } from 'ionic-angular';

/**
 * Generated class for the TerimaSiswaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terima-siswa',
  templateUrl: 'terima-siswa.html',
})
export class TerimaSiswaPage {

  constructor(public navCtrl: NavController, public platform: Platform) {}


  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
