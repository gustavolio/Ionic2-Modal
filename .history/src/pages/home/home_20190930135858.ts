import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    //lazy load -- navParams.
    this.navCtrl.push("SobrePage",{Teste:"Título Sobre Page (parâmetro)"});
  }

}
