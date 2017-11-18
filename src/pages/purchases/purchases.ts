import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirebase } from '../../providers/angularFirebase/angularFirebase'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-purchases',
  templateUrl: 'purchases.html'
})
export class PurchasesPage {
  //Declare member variables
  items: any;
    
  constructor(
    public navCtrl: NavController,
    private firebase: AngularFirebase
  ) {
    this.firebase.getPurchaseData().subscribe(response => {
      console.log(response);
      this.items = response;
      console.log(this.items.type)
      // console.log(this.items.purchase1.addedBy);
      // console.log(this.items);
    })

    //this.members = this.items["MEMBERS"];
  }

  // displayPurchases() {
  //   this.purchases = this.items
  // }
  

}
