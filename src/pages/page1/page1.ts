import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page1',
  templateUrl: 'page1.html',
})
export class Page1 {

  contentData: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.contentData = navParams.data;
  }

  ionViewDidEnter() {
  }

}

