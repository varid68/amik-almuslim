import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  news: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    this.news = this.navParams.get('idNews');

    this.platform.registerBackButtonAction(() => {
      this.back();
    })
  }


  back(){
    this.viewCtrl.dismiss();
  }

}
