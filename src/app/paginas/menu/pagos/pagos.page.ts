import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
      message: 'Pago realizado',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}

