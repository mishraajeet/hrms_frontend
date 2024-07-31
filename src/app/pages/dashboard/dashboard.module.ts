import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { BirthdayViewComponent } from './view/birthday-view/birthday-view.component';
import { NewJoiningComponent } from './view/new-joining/new-joining.component';

@NgModule({
  declarations: [DashboardComponent,DashboardViewComponent, BirthdayViewComponent, NewJoiningComponent],
  imports: [
    NgApexchartsModule,
    CommonModule,
    InlineSVGModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class DashboardModule {}
