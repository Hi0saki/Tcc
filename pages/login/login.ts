import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
})
export class LoginPage {
  constructor(public navCtrl: NavController) {}
}
