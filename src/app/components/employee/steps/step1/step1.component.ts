import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit, OnDestroy {

  isLoading: boolean;
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;
  private unsubscribe: Subscription[] = [];
  constructor(private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      fullName: [this.defaultValues.fullName, [Validators.required]],
      DOB: ['',Validators.required],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('fullName')?.hasError('required') ||
      this.form.get('DOB')?.hasError('required')
      );
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
