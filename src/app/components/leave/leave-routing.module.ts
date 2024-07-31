import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveTakenComponent } from './leave-taken/leave-taken.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes: Routes = [
  { path: '', component: LeaveComponent, 
    children : 
    [
      {path: 'create-absence', component: CreateAbsenceComponent},
      {path: 'holidays', component: HolidaysComponent},
      {path: 'all-leave-taken', component: LeaveTakenComponent},
      {path: 'check-leave-request', component: LeaveRequestComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
