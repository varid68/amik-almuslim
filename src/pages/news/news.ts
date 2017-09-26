import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { FirebaseApp } from 'angularfire2';

import 'firebase/storage';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  list: any;
  toast: any;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public platform: Platform,
    public restApi: RestApiProvider,
    public storage: FirebaseApp) {
  }

  ionViewWillLoad() {
    this.presentToast();

    this.restApi.getNews().subscribe(res => {
      this.list = res;
      this.toast.dismiss();
    });
  }


  ionViewDidEnter(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }


  presentToast() {
    this.toast = this.toastCtrl.create({
      message: 'Sedang load data ...',
      duration: 3000,
      position: 'bottom'
    });

    this.toast.present();
  }


  baca(id){
    this.navCtrl.push('NewsDetailPage',{idNews:id});
  }

}
