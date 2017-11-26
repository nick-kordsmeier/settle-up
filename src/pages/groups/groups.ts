import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirebase } from '../../providers/angularFirebase/angularFirebase';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups: Observable<any[]>;
  
  constructor(
    public navCtrl: NavController,
    private firebase: AngularFirebase    
  ) {
    this.groups = this.firebase.getGroupData()
    }
  }
