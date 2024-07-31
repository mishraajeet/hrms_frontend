import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AnalyticsHubComponent } from './analytics-hub/analytics-hub.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,
   children: [
    {path:'analytics-hub', component: AnalyticsHubComponent},
    {path:'add-employee', component: AddEmpComponent},
    {path:'edit-employee', component: EditProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
