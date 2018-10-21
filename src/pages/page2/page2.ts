import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page2',
  templateUrl: 'page2.html',
})
export class Page2 {

  contentData: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.contentData = navParams.data;
  }

  ionViewDidEnter() {
  }

}

