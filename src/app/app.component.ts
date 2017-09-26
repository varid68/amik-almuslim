import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, img: any, component: any}>;

  constructor(public platform: Platform, public oneSignal: OneSignal, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', img:'./assets/img/home-2.png', component: 'HomePage' },
      { title: 'Program studi', img:'./assets/img/folder-14.png', component: 'ProgramStudiPage' },
      { title: 'Fasilitas', img:'./assets/img/video-camera.png', component: 'FasilitasPage' },
      { title: 'News', img:'./assets/img/megaphone-1.png', component: 'NewsPage' },
      { title: 'Penerimaan mahasiswa', img:'./assets/img/add-1.png', component: 'TerimaSiswaPage' },
      { title: 'Gallery', img:'./assets/img/picture-1.png', component: 'GalleryPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        this.statusBar.backgroundColorByHexString('#3300000');
      
        this.oneSignal.startInit('2c7ad97d-4e18-4c4c-b2fe-12016a3b1565', '826487777854');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
          console.log('sukses');
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          console.log('sukses2');
        });

        this.oneSignal.endInit();
      }
      this.splashScreen.hide();
    });

  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
