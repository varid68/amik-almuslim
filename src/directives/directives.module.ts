import { NgModule } from '@angular/core';

import { ParallaxHeaderDirective } from './parallax-header/parallax-header';
import { StickyHeaderDirective } from './sticky-header/sticky-header';
import { StickyHeaderTabsDirective } from './sticky-header-tabs/sticky-header-tabs';
import { SwipeVerticalDirective } from './swipe-vertical/swipe-vertical';

@NgModule({
	declarations:[
    ParallaxHeaderDirective,
    StickyHeaderDirective,
    StickyHeaderTabsDirective,
    SwipeVerticalDirective],
	imports:[],
	exports:[
    ParallaxHeaderDirective,
    StickyHeaderDirective,
    StickyHeaderTabsDirective,
    SwipeVerticalDirective]
})

export class DirectivesModule {}