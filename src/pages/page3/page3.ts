import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page3',
  templateUrl: 'page3.html',
})
export class Page3 {

  contentData: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.contentData = navParams.data;
  }

}
