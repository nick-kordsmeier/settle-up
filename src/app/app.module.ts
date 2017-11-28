import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GroupsPage } from '../pages/groups/groups';
import { PurchasesPage } from '../pages/purchases/purchases';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase'

//Import AngularFirebase Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFirebase } from '../providers/angularFirebase/angularFirebase'
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyB5E19ipP5QgggHWrzfJi46wSqu4x2DXDY",
  authDomain: "settle-up-b921a.firebaseapp.com",
  databaseURL: "https://settle-up-b921a.firebaseio.com",
  projectId: "settle-up-b921a",
  storageBucket: "settle-up-b921a.appspot.com",
  messagingSenderId: "518509991002"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    GroupsPage,
    PurchasesPage,
    DashboardPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    GroupsPage,
    PurchasesPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirebase,
    AuthProvider
  ]
})
export class AppModule {}
