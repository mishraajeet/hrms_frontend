import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { KTHelpers } from 'src/app/_metronic/kt';
import { LayoutService } from '../../core/layout.service';
import { Tab, tabs } from './tabs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit, OnDestroy {
  sessionTab: any = sessionStorage.getItem('tab')
  activeTab: Tab = this.sessionTab? JSON.parse(this.sessionTab) : tabs[0];
  asideMenuSecondary: boolean = true;
  private unsubscribe: Subscription[] = [];

  constructor(
    private layout: LayoutService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.asideMenuSecondary = this.layout.getProp(
      'aside.secondaryDisplay'
    ) as boolean;
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        KTHelpers.menuReinitialization();
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  setActiveTab = (
    activeTabLink:
    | 'Dashboard'
    | 'employee'
    | 'payroll'
    | 'Leave'
    | 'User Administration'
    | 'System Setting'
    | 'Sys Admin Backroom'
  ) => {
    const tab = tabs.find((t) => t.link === activeTabLink);
    if (tab) {
      debugger
      this.activeTab = tab;
      sessionStorage.setItem("tab", JSON.stringify(this.activeTab))
      this.cd.detectChanges();
      KTHelpers.menuReinitialization();
    }
  };

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
