import { Component,OnInit,ViewChild, ChangeDetectorRef } from '@angular/core';
import { EployeeService } from '../../../services/employee/eployee.service';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-analytics-hub',
  templateUrl: './analytics-hub.component.html',
})
export class AnalyticsHubComponent implements OnInit{
  allUsers: any;
  constructor( 
              private empService: EployeeService,
              private global: GlobalService,
              private cdr: ChangeDetectorRef
            ) {}
  
  
ngOnInit(): void {
  this.getAllUsers()
}
  
  getAllUsers(){
    let param ={
      initial:1
    }
    this.empService.getAllUser(param).subscribe((res: any)=>{
      this.allUsers = res.data;
      this.cdr.detectChanges();
    },(err:any)=>{
      console.log("====>", err)
    })
  }
}
