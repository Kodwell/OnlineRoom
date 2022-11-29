import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private toastController: ToastController) { }

  //validador de entrada guard
  isAuthenticated(){
    alert('Ingreso sin credenciales')
    return true;    
  }
}
