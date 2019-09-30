import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sobrePage = SobrePage;

  constructor(public navCtrl: NavController) {

  }

  abrirPaginaSobre(){
    this.navCtrl.push("SobrePage");
  }

}
