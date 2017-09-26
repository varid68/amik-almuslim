import { Component, Renderer } from '@angular/core';
import { NavController, AlertController, IonicPage, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sejarah: any = 'HomeTab1Page';
  visi: any = 'HomeTab2Page';
  dosen: any = 'HomeTab3Page';
  struktur: any = 'HomeTab4Page';
  sambutan: any = 'HomeTab5Page';

  title: string = 'Sambutan direktur';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform, public renderer: Renderer, public storage: Storage) {

  }


  // generate user jika belum login google
  ionViewWillLoad(){
    var generateNumber = Math.round(Math.random() * (900 - 10) + 10);
    let user = {
      name: 'anonim'+generateNumber
    }
    this.storage.get('user').then(val => {
      if (val == null) this.storage.set('user', JSON.stringify(user));
    })
  }


  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.showConfirm();
    });
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Ingin keluar?',
      message: 'Apakah anda yakin ingin keluar dari aplikasi..?',
      buttons: [
        {
          text: 'tidak',
        },
        {
          text: 'ya',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    confirm.present();
  }


  // ubah title jika tab di geser
  onTabSelect(ev){
    this.resetStyle();

    switch (ev.index) {
      case 0:
        this.title = 'Sambutan direktur';
        break;

      case 1:
        this.title = 'Sejarah singkat';
        break;

      case 2:
        this.title = 'Visi dan misi';
        break;

      case 3:
        this.title = 'Staff pengajar';
        break;
      
      default:
        this.title = 'Struktur organisasi';
        break;
    }
  }


  // mengembalikan posisi header jika saat menggeser header masih ter-hidden
  resetStyle(){
    let navbar = document.getElementsByTagName('ion-navbar')[0];
    let tabs = document.getElementsByTagName('super-tabs')[0];

    let b = window.getComputedStyle(navbar);
    let style = b.getPropertyValue('transform');
    let translateYinString = style.split(/[\s,]+/);
    let translateY = parseInt(translateYinString[5].slice(0,-1));

    if (translateY < 0){
      this.renderer.setElementStyle(navbar, 'transform', 'translateY('+0+'px)');
      this.renderer.setElementStyle(navbar, 'transition', 0.3+'s');
      this.renderer.setElementStyle(tabs, 'transform', 'translateY('+0+'px)');
      this.renderer.setElementStyle(tabs, 'transition', 0.3+'s');
    }
  }


}
