import { Component, Input, OnInit } from '@angular/core';

import { Tab, tabs } from '../tabs';

@Component({
  selector: 'app-tabs-aside',
  templateUrl: './tabs-aside.component.html',
})
export class TabsAsideComponent implements OnInit {
  @Input() activeTab: Tab = tabs[0];
  @Input() setActiveTab: (
    activeTabLink:
      | 'Dashboard'
      | 'employee'
      | 'payroll'
      | 'Leave'
      | 'User Administration'
      | 'System Setting'
      | 'Sys Admin Backroom'
  ) => void;
  allTabs: ReadonlyArray<Tab> = [];
  constructor() {}

  ngOnInit(): void {
    this.allTabs = tabs;
  }
}
