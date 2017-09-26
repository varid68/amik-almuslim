import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, ViewController, ToastController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Market } from '@ionic-native/market';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  loginOrLogout: string = 'login';
  anonimId: string;
  toastLogin: any;

  constructor( 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public platform: Platform,
    public market: Market,
    public google: GooglePlus,
    public auth: AngularFireAuth) {
  }


  ionViewWillEnter() {
    this.storage.get('user').then(val => {
      let photo = JSON.parse(val).photo
      if (photo == undefined){
        this.loginOrLogout = 'Login';
        this.anonimId = JSON.parse(val).name;
      } else {
        this.anonimId = JSON.parse(val).anonimId;
        this.loginOrLogout = 'Logout';
      }
    });
  }


  //
  loginOrLogoutCheck(){
    this.viewCtrl.dismiss().then(() => {
      this.storage.get('user').then(val => { 
        JSON.parse(val).photo == undefined ? this.loginGoogle() : this.logout(); 
      })
    });
  }


  //
  loginGoogle(){
    if (!this.platform.is('cordova')){
      return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => { this.ambilNamaWeb(res) })
    } else {
      this.presentToastLogin();
      return this.google.login({
        'webClientId':'198277777552-qrj9i53gj1gge8j7sme69reljrukusot.apps.googleusercontent.com',
        'offline':true
      }).then(res => { this.ambilNamaGoogle(res) })
      .catch(err => console.log(err));
    }
  }


  // ambil nama di web jika login fb berhasil
  private ambilNamaWeb(res:any){
    let user = {
      uid:res.user.uid,
      name:res.user.displayName,
      email:res.user.email,
      photo:res.user.photoURL,
      anonimId: this.anonimId
    }
    this.storage.set('user', JSON.stringify(user));
    this.showAlert(res.user.displayName);
  }


  // ambil data google di device jika login google berhasil
  private ambilNamaGoogle(res:any){
    let self = this;
    return this.auth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(val => {
        let user = {
          uid:val.uid,
          name:val.displayName,
          email:val.email,
          photo:val.photoURL,
          anonimId:self.anonimId
        }
        self.storage.set('user', JSON.stringify(user));
        self.toastLogin.dismiss();
        self.showAlert(val.displayName);
      }).catch( gagal => {
          console.log('gagal');
    })
  }


  //
  presentToastLogin(){
    this.toastLogin = this.toastCtrl.create({
      message: 'Please wait.. login with google',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    this.toastLogin.present();
  }


  //
  showAlert(name) {
    let alert = this.alertCtrl.create({
      title: 'Login berhasil',
      subTitle: `Selamat datang ${name}`,
      buttons: ['OK']
    });

    alert.present();
  }


  //
  logout(){
    if (!this.platform.is('cordova')){
      this.auth.auth.signOut().then(() => {
        this.storage.set('user', JSON.stringify({name:this.anonimId}));
        this.presentToast();
      });
    } else {
      this.google.logout().then(() => {
        this.storage.set('user', JSON.stringify({name:this.anonimId}));
        this.presentToast();
      });
    }
  }


  //
  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Logout berhasil...',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }


  //
  openModal() {
    let aboutModal = this.modalCtrl.create('AboutPage');
    this.viewCtrl.dismiss().then(() => {
      aboutModal.present(); 
    });
  }


  //
  rateApps(){
    this.market.open('com.whatsapp');
  }

}
