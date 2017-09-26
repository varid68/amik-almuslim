import { Directive, Renderer } from '@angular/core';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[sticky-header-tabs]', // Attribute selector
  host: {
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class StickyHeaderTabsDirective {
  translateAmt: any = 0;
  scrollPrev: number = 0;

  constructor(public renderer: Renderer) {}


  ngAfterViewInit(){
    let header = document.getElementsByTagName('ion-header')[0];

    this.renderer.setElementStyle(header, 'height', 25+'px');
  }

 
  onContentScroll(ev){
    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });
  }
 

  updateParallaxHeader(ev){
    let navbar = document.getElementsByTagName('ion-navbar')[0];
    let tabs = document.getElementsByTagName('super-tabs')[0];
    let a = document.getElementsByTagName('ion-content')[2];

    if (ev.directionY == 'down'){
    }

    if (ev.scrollTop > this.scrollPrev){
      let position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
      if (position < -56) position = -56;
      this.renderer.setElementStyle(a, 'height', 108+'%');
      this.renderer.setElementStyle(navbar, 'transform', 'translateY('+ position +'px)');
      this.renderer.setElementStyle(tabs, 'transform', 'translateY('+ position +'px)');
      this.translateAmt = position; 
    } else {
      let position = this.translateAmt - (ev.scrollTop - this.scrollPrev);
      if (position > 0) position = 0;
      this.renderer.setElementStyle(navbar, 'transform', 'translateY('+position+'px)');
      this.renderer.setElementStyle(tabs, 'transform', 'translateY('+ position +'px)');
      this.translateAmt = position; 
    }
    this.scrollPrev = ev.scrollTop;
  }

}
