import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SuperTabs, SuperTabsController, SuperTab } from '../../../node_modules/ionic2-super-tabs/dist';

import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = Page1;
  page2: any = Page2;
  page3: any = Page3;
  pageParams1: any;
  pageParams2: any;
  pageParams3: any;

  arrPages = [
    {
      'title': 'This is page 1',
      'content': 'Page 1 content'
    },
    {
      'title': 'This is page 2',
      'content': 'Page 2 content'
    },
    {
      'title': 'This is page 3',
      'content': 'Page 3 content'
    },
    {
      'title': 'This is page 4',
      'content': 'Page 4 content'
    },
    {
      'title': 'This is page 5',
      'content': 'Page 5 content'
    },
    {
      'title': 'This is page 6',
      'content': 'Page 6 content'
    }
  ];

  currentIndex = 0;
  lastTabIndex = 0;

  constructor(public navCtrl: NavController, private superTabsCtrl: SuperTabsController) {
    this.pageParams1 = this.arrPages[this.currentIndex];
    this.pageParams2 = this.arrPages[this.currentIndex + 1];
    this.pageParams3 = this.arrPages[this.currentIndex + 2];
  }

  ionViewDidEnter() {
    this.superTabsCtrl.enableTabsSwipe(false, "tabsId");
  }

  onTabSelect(ev: any) {
    // Update CurPageIdx
    var index = this.currentIndex + ev.index - this.lastTabIndex;
    if (index < 0) {
      this.currentIndex = this.arrPages.length - 1;
    } else if (index > this.arrPages.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }
    
    // Set tab (ROOTPARAMS)
    this.superTabs._tabs[this.superTabs.selectedTabIndex].rootParams = this.arrPages[this.currentIndex];

    this.superTabs._tabs[this.superTabs.selectedTabIndex].goToRoot(
      this.superTabs._tabs[this.superTabs.selectedTabIndex].rootNavCtrl.getActive().component
    );

    this.lastTabIndex = this.superTabs.selectedTabIndex;
  }

  onSwipeLeft() {
    // Update CurPageIdx
    this.currentIndex ++;
    if (this.currentIndex > this.arrPages.length - 1) {
      this.currentIndex = 0;
    }

    // Super tab
    var targetTabIdx = this.superTabs.selectedTabIndex + 1;
    if (targetTabIdx > this.superTabs._tabs.length - 1) {
      targetTabIdx = 0;
    }

    this.superTabs.slideTo(targetTabIdx);
    this.superTabs.selectedTabIndex = targetTabIdx;

    this.lastTabIndex = this.superTabs.selectedTabIndex;
  }

  onSwipeRight() {
    // Update CurPageIdx
    this.currentIndex --;
    if (this.currentIndex < 0) {
      this.currentIndex = this.arrPages.length - 1;
    }

    // Super tab
    var targetTabIdx = this.superTabs.selectedTabIndex - 1;
    if (targetTabIdx < 0) {
      targetTabIdx = this.superTabs._tabs.length - 1;
    }

    this.superTabs.slideTo(targetTabIdx);
    
    this.superTabs.selectedTabIndex = targetTabIdx;

    this.lastTabIndex = this.superTabs.selectedTabIndex;
  }

}
