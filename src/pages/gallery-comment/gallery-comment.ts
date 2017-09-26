import { Component ,Renderer2, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController, Content, Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import 'moment/locale/id';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the GalleryCommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery-comment',
  templateUrl: 'gallery-comment.html',
})
export class GalleryCommentPage {
  @ViewChild(Content) content: Content;
  list: any[] = [];
  commentText: string = '';
  id: any;
  image: string;
  user: string;

  constructor(
    public navParams: NavParams,
    public storage: Storage,
    public database: AngularFireDatabase,
    public viewCtrl: ViewController,
    public renderer: Renderer2,
    public platform: Platform, 
    public keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('key');
    this.initializeComment();
    this.initializeKeyboard();

    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    })
  }


  initializeKeyboard(){
    let self = this;
    window.addEventListener('native.keyboardshow', callBackFunction);

    function callBackFunction(e){
      let y = document.getElementsByTagName('page-gallery-comment')[0];
      self.renderer.setStyle(y, 'height', 'calc('+100+'% - '+ e.keyboardHeight +'px)');
    }

    this.keyboard.onKeyboardHide().subscribe(() => {
      let y = document.getElementsByTagName('page-gallery-comment')[0];
      self.renderer.setStyle(y, 'height', 100+'%'); 
    })
  }


  initializeComment(){
    let ref = this.id == 'kutipan' ? `/kutipan/comment` : `/gallery/${this.id}/comment`;
    let a = this.database.object(`${ref}`, {preserveSnapshot: true});
    a.subscribe(snapshot => {
      this.list = snapshot.val();
    })

    this.storage.get('user').then(val => {
      let name = JSON.parse(val).name;
      this.image = name.includes('anonim') ? './assets/img/avatar-comment.jpg' : JSON.parse(val).photo;
      this.user = name;
    });
  }


  beforeSend(){
    this.storage.get('user').then(val => {
      let name = JSON.parse(val).name;
      let image  = JSON.parse(val).photo == undefined ? 'none' : JSON.parse(val).photo;
      this.send(name, image);
    });
  }


  send(name, image){
    let comment = {
      comment: this.commentText,
      time: moment().format('X'),
      image: image,
      name: name,
    }

    let ref = this.database.object(`/gallery/${this.id}/comment`, {preserveSnapshot: true});
    this.list.push(comment);
    ref.set(this.list).then(() => {
      this.content.scrollToBottom(600);
    });

    this.commentText = '';
  }

}
