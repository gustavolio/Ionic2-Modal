import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  pushPage(){
    //lazy load -- navParams.
    this.navCtrl.push("SobrePage",{
      id: "123",
      name: 'Gustavo Lima'
    });
  }

  logIn(){
    let profileModal = this.navCtrl.push("LoginPage");

    profileModal.onDidDismiss(data => {
      console.log(data);
    });
  }

}
