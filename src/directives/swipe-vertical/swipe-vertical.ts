import { Directive, ElementRef, Renderer } from '@angular/core';
import { DomController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DragDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[swipe-vertical]' // Attribute selector
})

export class SwipeVerticalDirective {
  panPrev: number = 500;
  height: any = 270;
  isFinal: boolean = false;

  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController, public viewCtrl: ViewController) {}

  ngAfterViewInit(){
    let modal = document.getElementsByTagName('ion-modal')[0];
    this.renderer.setElementStyle(modal, 'transform', 'translateY('+270+'px)');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({direction: window['Hammer'].DIRECTION_ALL});

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    })
  }

  handlePan(ev){
    var position;

    let a = ev.center.y - this.panPrev;
    position = this.height + a;
    if (position < 25) position = 25;
    if (position > 430) this.viewCtrl.dismiss();
    if (this.isFinal) position = this.height + 2;
    this.isFinal = ev.isFinal ? true : false;

    this.domCtrl.write(() => {
      let modal = document.getElementsByTagName('ion-modal')[0];
      this.renderer.setElementStyle(modal, 'transform', 'translateY('+ position +'px)');
    });
    this.height = position;
    this.panPrev = ev.center.y;
  }

}
