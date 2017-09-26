import { Component, Renderer } from '@angular/core';
import { IonicPage, Platform, NavController } from 'ionic-angular';

/**
 * Generated class for the ProgramStudiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-studi',
  templateUrl: 'program-studi.html',
})
export class ProgramStudiPage {
  mi: any = 'ProgramStudiTab1Page';
  ka: any = 'ProgramStudiTab2Page';
  tk: any = 'ProgramStudiTab3Page';

  title: string = 'Manajemen informatika';

  constructor(public navCtrl: NavController, public platform: Platform, public renderer: Renderer) {}


  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

  //
  onTabSelect(ev){
    this.resetStyle();

    switch (ev.index) {
      case 0:
        this.title = 'Manajemen informatika';
        break;

       case 1:
        this.title = 'Komputerisasi akuntansi';
        break;

      default:
        this.title = 'Teknik komputer';
        break;
    }
  }


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
