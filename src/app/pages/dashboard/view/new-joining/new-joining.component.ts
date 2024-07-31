import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { EployeeService } from '../../../../services/employee/eployee.service';


@Component({
  selector: 'app-new-joining',
  templateUrl: './new-joining.component.html',
  styleUrls: ['./new-joining.component.scss']
})
export class NewJoiningComponent implements OnInit{

  enwJoiningEmp: any;
  constructor(
    private empSer: EployeeService,
    private cdr: ChangeDetectorRef
    ){
    }


   ngOnInit(): void {
     this.getNewJoiningEmp();
   }

   getNewJoiningEmp(){
    this.empSer.getNewJoiningEmp().subscribe((res: any) =>{
      this.enwJoiningEmp = res.data
      this.cdr.detectChanges();
    },(err) =>{
      console.log("====>",err)
    })
   }
}
