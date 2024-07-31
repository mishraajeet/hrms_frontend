import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
})
export class Step4Component implements OnInit, OnDestroy {
  isIncludePf :Boolean = false
  isIncludeESI: Boolean = false
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      panNumber: ['', [Validators.required]],
      IncludePF: ['', [Validators.required]],
      IncludeESI: ['',[Validators.required]],
      IncludeLWF: ['',[Validators.required]],
      PFNumber: ['', [Validators.required]],
      UANNumber: [''],
      contribution: [''],
      ESINumber: ['']
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('panNumber')?.hasError('required') ||
      this.form.get('cardNumber')?.hasError('required') ||
      this.form.get('cardExpiryMonth')?.hasError('required') ||
      this.form.get('cardExpiryYear')?.hasError('required') ||
      this.form.get('cardCvv')?.hasError('required')
    );
  }
  checkIncludePf(values: any){
    this.isIncludePf = values.currentTarget.checked;
  }
  checkIncludeESI(values: any){
    this.isIncludeESI = values.currentTarget.checked;
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
