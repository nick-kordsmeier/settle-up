import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase'

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild('content') nav: NavController
  rootPage: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authProvider: AuthProvider
  ) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit()	{
  firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        console.log("No user found");
        this.rootPage = 'login';
        //this.nav.setRoot(LoginPage);
        // unsubscribe();
      } else { 
        console.log(user.email);      
        this.rootPage = TabsPage;
        //this.nav.setRoot(TabsPage);
        // unsubscribe();
      }
    });
  }
  
  logoutUser() {
    this.authProvider.logoutUser();
    this.rootPage = 'login';    
    //this.nav.setRoot(LoginPage);
  }

}
