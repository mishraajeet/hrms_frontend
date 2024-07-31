import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GlobalService } from '../../../../services/global.service';
import { EployeeService } from '../../../../services/employee/eployee.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {

  showProfile: Boolean = false
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  form: FormGroup;
  private unsubscribe: Subscription[] = [];
  empDetails: any;


  constructor(private fb: FormBuilder,
    private global: GlobalService,
    private empSrv: EployeeService,
    private cdr: ChangeDetectorRef) {

    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {
    this.initForm()
    // debugger
    this.global.empData$.subscribe((data: any) => {
      if(data){
        this.empDetails = data
        this.form.patchValue(data)
        this.showProfile = true
        this.cdr.detectChanges();
      }
    })
  }

  initForm() {
    this.form = this.fb.group({
      EmployeeNumberSeries: [
        '',
        [Validators.required],
      ],
      EmployeeNo: ['', [Validators.required]],
      FatherName: ['', [Validators.required]],
      SpouseName: ['', [Validators.required]],
      AdhaarNumber: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Gender: ['', [Validators.required]],
      ReportingManager: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      DateOfJoining: ['', Validators.required],
      ProbationPeriod: ['', Validators.required],
      ConfirmationDate: ['', Validators.required],
      EmergencyContactName: ['', Validators.required],
      EmergencyContactNumber: ['', Validators.required],
      isEditableByEmp: ['', Validators.required],
      seriel_id: [''],
      paymentType: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      bankBranch: ['',[Validators.required]],
      accountNumber: ['',[Validators.required]],
      dDPayableAt: ['', [Validators.required]]
    });
  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  updateProfile(){
    let param = this.form.value
    this.empSrv.updateEmpProfile(param).subscribe((res: any)=>{
      console.log("=====>>",res)
      if(res.Status === 200){

      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
