import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AngularFirebase {
item;
  constructor(
    public http: Http,
    private afDB: AngularFireDatabase   
  ) {  }

  // getPurchaseData() {
  //   return this.afDB.list("GROUPS/group1/PURCHASES").valueChanges()
  //   .map(res => res);
  // }

  getPurchaseData() {
    return this.http.get('https://settle-up-b921a.firebaseio.com/GROUPS/group2/PURCHASES/purchase1.json')
    .map(res => res.json());
  }



}
