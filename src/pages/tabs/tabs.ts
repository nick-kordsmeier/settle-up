import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { GroupsPage } from '../groups/groups';
import { PurchasesPage } from '../purchases/purchases';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = GroupsPage;
  tab3Root = PurchasesPage;

  constructor() {

  }
}
