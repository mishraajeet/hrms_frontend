import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateAccount } from '../../create-account.helper';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy{

  showProfile: Boolean = false

  form: FormGroup;
  private unsubscribe: Subscription[] = [];
  @Input() defaultValues: Partial<ICreateAccount>;
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;

  constructor(private fb: FormBuilder,
    private global: GlobalService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit() {
    this.initForm();

    this.global.empData$.subscribe((data: any) => {
      if(data){
        this.form.patchValue(data)
        this.showProfile = true
        this.cdr.detectChanges();
      }
    })
  }

  initForm() {
    this.form = this.fb.group({
      paymentType: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      bankBranch: ['',[Validators.required]],
      accountNumber: ['',[Validators.required]],
      dDPayableAt: ['', [Validators.required]]
    });
  }

  checkForm() {
    return !(
      this.form.get('paymentType')?.hasError('required') ||
      this.form.get('bankName')?.hasError('required') ||
      this.form.get('bankBranch')?.hasError('required') ||
      this.form.get('accountNumber')?.hasError('required') ||
      this.form.get('dDPayableAt')?.hasError('required')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
