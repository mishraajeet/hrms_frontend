import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { EployeeService } from '../../../../services/employee/eployee.service';

@Component({
  selector: 'app-birthday-view',
  templateUrl: './birthday-view.component.html',
  styleUrls: ['./birthday-view.component.scss']
})
export class BirthdayViewComponent implements OnInit{
  // empBirthday: any = [{"empBirthday": "ajeet","DOB": "23/03/1994"}]
  empBirthday: any 
   constructor(
   private empSer: EployeeService,
   private cdr: ChangeDetectorRef
   ){
   }

   ngOnInit(): void {
    this.getEmpBirthDate()
   }

   getEmpBirthDate(){
    this.empSer.getEmpBirthday().subscribe((res: any) =>{
      this.empBirthday = res.data
      this.cdr.detectChanges();
    },(err) =>{
      console.log("====>",err)
    })
   }
}
