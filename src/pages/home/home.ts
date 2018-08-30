import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firstPage = FirstPage;
  constructor(public navCtrl: NavController) {

  }

  showText(){
    console.log("Button is clicked.");
  }

  goToFirstPage(){
    this.navCtrl.push(this.firstPage);
  }
}
