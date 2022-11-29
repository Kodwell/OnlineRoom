import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast(position:'top') {
    const toast = await this.toastController.create({
      message: '¡Usuario registrado!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
