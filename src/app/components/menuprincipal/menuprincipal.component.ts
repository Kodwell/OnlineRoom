import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.scss'],
})
export class MenuprincipalComponent implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}

}
