import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AnalyticsHubComponent } from './analytics-hub/analytics-hub.component';
import { OverviewComponent } from './overview/overview.component';

import { InlineSVGModule } from 'ng-inline-svg-2';
import { EffectsModule } from '@ngrx/effects';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {SharedModule} from '../../_metronic/shared/shared.module'
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { Step5Component } from './steps/step5/step5.component';
import { employeeEffect } from './state/employee.effects';
import { ModalComponent } from './modal/modal.component';
import { Steps6Component } from './steps/steps6/steps6.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { AccountComponent } from './profile/account/account.component';
import { SearchEmpComponent } from './profile/search-emp/search-emp.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AnalyticsHubComponent,
    OverviewComponent,
    AddEmpComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    ModalComponent,
    Steps6Component,
    EditProfileComponent,
    ProfileDetailsComponent,
    AccountComponent,
    SearchEmpComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    NgbTooltipModule,
    InlineSVGModule,
    SharedModule,
    NgbDropdownModule,
    EffectsModule.forFeature(employeeEffect)
  ]
})
export class EmployeeModule { }
