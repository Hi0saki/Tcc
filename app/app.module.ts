import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';

@NgModule({
  declarations: [MyApp, LoginPage, RegisterPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, RegisterPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
