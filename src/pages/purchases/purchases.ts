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
  purchases: Observable<any[]>;
    
  constructor(
    public navCtrl: NavController,
    private firebase: AngularFirebase
  ) {
    this.purchases = this.firebase.getPurchasesData();
  }

}
