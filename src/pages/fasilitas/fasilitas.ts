import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

/**
 * Generated class for the FasilitasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fasilitas',
  templateUrl: 'fasilitas.html',
})
export class FasilitasPage {

  constructor(public navCtrl: NavController, public platform: Platform) {}


  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }
}
