import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

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
    let profileModal = this.modalCtrl.create("LoginPage", {}, {enableBackdropDismiss: false });
    profileModal.present();

    profileModal.onDidDismiss(data => {
      console.log('Tentou abrir o login');
      console.log(data);
    });
  }

}
