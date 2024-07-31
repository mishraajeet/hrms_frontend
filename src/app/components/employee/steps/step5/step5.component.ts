import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateAccount } from '../../create-account.helper';


@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
})
export class Step5Component implements OnInit, OnDestroy  {
  form: FormGroup;
  private unsubscribe: Subscription[] = [];
  @Input() defaultValues: Partial<ICreateAccount>;
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      paymentType: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      bankBranch: ['',[Validators.required]],
      accountNumber: ['',[Validators.required]],
      dDPayableAt: ['', [Validators.required]]
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
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
