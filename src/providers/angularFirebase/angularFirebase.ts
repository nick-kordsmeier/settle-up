import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AngularFirebase {
groupsRef: AngularFireList<any>;
groups: Observable<any[]>;

purchasesRef: AngularFireList<any>;
purchases: Observable<any[]>;
  

  constructor(
    private afDB: AngularFireDatabase   
  ) {
    this.groupsRef = afDB.list("GROUPS");
    this.purchasesRef = afDB.list("GROUPS/group2/PURCHASES")
    }

  getGroupData() {
    return this.groupsRef.valueChanges();
  }

  getPurchasesData() {
    return this.purchasesRef.valueChanges();
  }

}
