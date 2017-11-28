import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as firebase from 'firebase'
import { User } from 'firebase';
import { AngularFirebase } from '../../providers/angularFirebase/angularFirebase'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  userInfo: User;
  
  
  constructor(
    public navCtrl: NavController,
  ) {
    firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.navCtrl.setRoot('login');
      } else { 
        this.userInfo = user;
        console.log(this.userInfo)
      }
  });
  }
}

  //NOT LIKELY TO USE:
    //Declare booleans to toggle lists
  // showYourFriendsOweYouBool: boolean = false;
  // showYouOweYourFriendsBool: boolean = false;

  // showYourFriendsOweYou() {
  //   if (!this.showYourFriendsOweYouBool) {
  //     this.showYourFriendsOweYouBool = true;}
  //   else if (this.showYourFriendsOweYouBool) {
  //     this.showYourFriendsOweYouBool = false;}
  // }

  // showYouOweYourFriends() {
  //   if (!this.showYouOweYourFriendsBool) {
  //     this.showYouOweYourFriendsBool = true;}
  //   else if (this.showYouOweYourFriendsBool) {
  //     this.showYouOweYourFriendsBool = false;}
  // }