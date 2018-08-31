import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { ParamGetPage } from '../param-get/param-get';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firstPage = FirstPage;
  paramGetPage = ParamGetPage;
  params = {nama: "Octa", umur: 20};
  constructor(public navCtrl: NavController) {

  }

  showText(){
    console.log("Button is clicked.");
  }

  goToFirstPage(){
    this.navCtrl.push(this.firstPage);
  }

  onButtonClicked(){
    this.navCtrl.push(this.paramGetPage, {paramSatu: 'mahasiswa', paramDua: '1234'});
  }
}
