import { Component, Renderer2 } from '@angular/core';
import { IonicPage, ToastController, NavController, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  objectKeys = Object.keys;
  refRealtimeItems: FirebaseObjectObservable<any>;
  refRealtimeKutipan: FirebaseObjectObservable<any>;
  items: any[] = [];
  kutipan: any;
  toast: any;

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public renderer: Renderer2,
    public platform: Platform,
    public database: AngularFireDatabase,
    public photoViewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    this.initializeChat(3);
  }


  ionViewDidEnter(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }


  initializeChat(limit){
    let self = this;
    this.presentToast();
    this.refRealtimeItems = this.database.object('/gallery', {preserveSnapshot: true});
    this.refRealtimeItems.$ref.limitToFirst(limit).on('value', function(snapshot){
      self.items = snapshot.val();
      self.toast.dismiss();
    });

    this.refRealtimeKutipan = this.database.object('/kutipan', {preserveSnapshot: true});
    this.refRealtimeKutipan.subscribe(snapshot => {
      this.kutipan = snapshot.val();
    })
  }


  presentToast() {
    this.toast = this.toastCtrl.create({
      message: 'Please wait, still loading ...',
      position: 'bottom'
    });

    this.toast.present();
  }


  doInfinite(infiniteScroll) {
    let self = this;
    let limit = this.items.length + 3;

    setTimeout(() => {
      this.refRealtimeItems.$ref.limitToFirst(limit).on('value', function(snapshot){
        snapshot.val() == null ? infiniteScroll.enable(false) : infiniteScroll.enable(true);
        self.items = snapshot.val();
      });
      infiniteScroll.complete();
    },300);
  }


  show(image){
    this.photoViewer.show(image);
  }

  
  like(key, totalLike){
    let ref = this.database.object(`/gallery/${key}/liked`, {preserveSnapshot: true});
    let id = document.getElementById(key);
    let isLiked = id.getAttribute('isLiked');
    let btn = document.getElementById(`btn-${key}`);

    if (isLiked == 'false'){
      ref.set(totalLike + 1);
      this.renderer.setAttribute(id, 'isLiked', 'true');
      this.renderer.setStyle(btn, 'color', '#f53d3d');
    } else {
      ref.set(totalLike - 1);
      this.renderer.setAttribute(id, 'isLiked', 'false');
      this.renderer.setStyle(btn, 'color', '#000000');
    }
  }


  komentar(key){
    this.navCtrl.push('GalleryCommentPage', {key: key});
  }


  likeKutipan(totalLike){
    let ref = this.database.object('/kutipan/liked', {preserveSnapshot: true});
    let id = document.getElementById('kutipan');
    let isLiked = id.getAttribute('isLiked');
    let btn = document.getElementById('btn-kutipan');

    if (isLiked == 'false'){
      ref.set(totalLike + 1);
      this.renderer.setAttribute(id, 'isLiked', 'true');
      this.renderer.setStyle(btn, 'color', '#f53d3d');
    } else {
      ref.set(totalLike - 1);
      this.renderer.setAttribute(id, 'isLiked', 'false');
      this.renderer.setStyle(btn, 'color', '#000000');
    }
  }


  komentarKutipan(){
    this.navCtrl.push('GalleryCommentPage', {key: 'kutipan'});
  }
}
