import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { LeaveTakenComponent } from './leave-taken/leave-taken.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [
    LeaveComponent,
    CreateAbsenceComponent,
    LeaveTakenComponent,
    HolidaysComponent,
    LeaveRequestComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule
  ]
})
export class LeaveModule { }
