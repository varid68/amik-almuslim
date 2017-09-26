import { Directive, ElementRef, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[parallax-header]', // Attribute selector
  host: {
    '(ionScroll)':'onContentScroll($event)',
    '(window:resize)':'onWindowResize($event)'
  }
})
export class ParallaxHeaderDirective {
  haederTop: any;
  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;

  constructor(public element: ElementRef, public renderer: Renderer, public platform: Platform, public statusBar: StatusBar) {}

  ngOnInit(){
    let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('cover')[0];
 
    this.headerHeight = this.header.clientHeight;
 
    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.header, 'background-size', 'cover');

    this.haederTop = document.getElementsByTagName('ion-header')[0];
  }
 
  onWindowResize(ev){
    this.headerHeight = this.header.clientHeight;
  }
 
  onContentScroll(ev){
    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });
  }
 
  updateParallaxHeader(ev){
    let head = document.getElementsByTagName('ion-header')[0];

    if(ev.scrollTop >= 0){
      this.translateAmt = - ev.scrollTop / 1.4;
      this.scaleAmt = 1;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = ev.scrollTop / this.headerHeight + 1;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')');
  
    if (ev.scrollTop > 107){
      this.renderer.setElementClass(head, 'opaque', true);
      if (this.platform.is('android')){
        this.statusBar.backgroundColorByHexString('#8E24AA');
      }
    } else if (ev.scrollTop < 107){
      this.renderer.setElementClass(head, 'opaque', false);
      if (this.platform.is('android')){
        this.statusBar.backgroundColorByHexString('#33000000');
      }
    }
  }

}
