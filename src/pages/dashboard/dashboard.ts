import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirebase } from '../../providers/angularFirebase/angularFirebase'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  //Declare booleans to toggle lists
  showYourFriendsOweYouBool: boolean = false;
  showYouOweYourFriendsBool: boolean = false;

  // //Declare 
  // items: any;

  constructor(
    public navCtrl: NavController,
    private firebase: AngularFirebase
  ) {  }

  // getData() {
  //   this.firebase.getData().subscribe(response => {
  //     console.log(response);
  //     this.items = response;
  //   })
  // }


  showYourFriendsOweYou() {
    if (!this.showYourFriendsOweYouBool) {
      this.showYourFriendsOweYouBool = true;}
    else if (this.showYourFriendsOweYouBool) {
      this.showYourFriendsOweYouBool = false;}
  }

  showYouOweYourFriends() {
    if (!this.showYouOweYourFriendsBool) {
      this.showYouOweYourFriendsBool = true;}
    else if (this.showYouOweYourFriendsBool) {
      this.showYouOweYourFriendsBool = false;}
  }

  }