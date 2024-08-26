import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ICreateAccount, inits } from '../create-account.helper';
import { GlobalService } from '../../../services/global.service';
import { EployeeService } from '../../../services/employee/eployee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit, OnDestroy{

  allPosition: any = []
  userData: any;
  rm: any = []

  formsCount = 6;
  account$: BehaviorSubject<ICreateAccount> =
    new BehaviorSubject<ICreateAccount>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];

  constructor( private empService: EployeeService,
    private global: GlobalService) {}

  ngOnInit(): void {
    this.getAllPosition()
    this.getReportingManager()
  }

  updateAccount = (part: Partial<ICreateAccount>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.userData = updatedAccount;
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    if(!this.isCurrentFormValid$.value)
       return;
    const nextStep = this.currentStep$.value + 1;
    if (nextStep == this.formsCount) {
      this.registerUser()
      return;
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  getReportingManager(){
    this.empService.getReportingManager().subscribe((res:any) =>{
        this.rm = res.data
    })
  }

  getAllPosition() {
    let param = {}
    this.empService.getAllPositions(param).subscribe((res: any) => {
      this.allPosition = res.data
    })
  }
  newPosition(event:any){
    this.allPosition.push(event)
  }

  registerUser(){
    this.empService.registerUser(this.userData).subscribe((res: any)=>{
      if(res.result){
      this.global.redirect('analytics-hub')
      }
    },(err)=>{
      this.global.showErrorMsg(err);
    })
  }
}
