import { Directive, Renderer } from '@angular/core';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[sticky-header]', // Attribute selector
  host: {
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class StickyHeaderDirective {
  headerTop: any;
  translateAmt: any = 0;
  scrollPrev: number = 0;

  constructor(public renderer: Renderer) {}
 
  onContentScroll(ev){
    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });
  }
 
  updateParallaxHeader(ev){
    let navbar = document.getElementsByTagName('ion-navbar')[0];

    if (ev.scrollTop > this.scrollPrev){
      let position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
      if (position < -56) position = -56;
      this.renderer.setElementStyle(navbar, 'transform', 'translateY('+ position +'px)');
      this.translateAmt = position; 
    } else {
      let position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
      if (position > 0) position = 0;
      this.renderer.setElementStyle(navbar, 'transform', 'translateY('+position+'px)');
      this.translateAmt = position; 
    }
    this.scrollPrev = ev.scrollTop;
  }

}
