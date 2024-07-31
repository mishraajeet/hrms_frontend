import { Component, Input, OnDestroy, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as empAction from '../../state/employee.action';
import { EployeeService } from '../../../../services/employee/eployee.service';
import { GlobalService } from '../../../../services/global.service';
import { ModalComponent } from '../../modal/modal.component';
import { ModalConfig } from '../../modal.config';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit, OnDestroy {
  @Input() public allPosition: any
  @Output() newPosition = new EventEmitter<any>()

  @ViewChild('modal') private modalComponent: ModalComponent;

  isActive: Boolean;
  isActivePosition: Boolean = false

  Division: any;
  Cost_Center: any;
  Department: any;
  Grade: any;
  Designation: any;
  Location: any;
  Company: any;
  Job_Title: any;

  modalConfig: ModalConfig = {
    modalTitle: 'Add New',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel',
    data: [],
    type: ""
  };

  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder,
    private empService: EployeeService,
    private global: GlobalService
  ) { }

  ngOnInit() {
    this.Division = this.allPosition.filter((e: any) => e.type === 'Division')
    this.Cost_Center = this.allPosition.filter((e: any) => e.type === 'Cost Center')
    this.Department = this.allPosition.filter((e: any) => e.type === 'Department')
    this.Grade = this.allPosition.filter((e: any) => e.type === 'Grade')
    this.Designation = this.allPosition.filter((e: any) => e.type === 'Designation')
    this.Location = this.allPosition.filter((e: any) => e.type === 'Location')
    this.Company = this.allPosition.filter((e: any) => e.type === 'Company')
    this.Job_Title = this.allPosition.filter((e: any) => e.type === 'Job Title')
    
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      Division: ['', [Validators.required]],
      Cost_Center: ['',[Validators.required]],
      Department: ['', [Validators.required]],
      Grade: ['', [Validators.required]],
      Designation: ['',[Validators.required]],
      Location: ['',[Validators.required]],
      Company: ['',[Validators.required]],
      Job_Title: ['',[Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('businessName')?.hasError('required') ||
      this.form.get('businessDescriptor')?.hasError('required') ||
      this.form.get('businessType')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('email')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  addedPosition(event: any) {
    this.newPosition.emit(event)
    switch (event.type) {
      case 'Division':
        this.Division.push(event);
        break;
      case 'Cost Center':
        this.Cost_Center.push(event);
        break;
      case 'Department':
        this.Department.push(event);
        break;
      case 'Grade':
        this.Grade.push(event);
        break;
      case 'Designation':
        this.Designation.push(event);
        break;
      case 'Location':
        this.Location.push(event);
        break;
      case 'Company':
        this.Company.push(event);
        break;
      case 'Job Title':
        this.Job_Title.push(event);
        break;
    }
  }
  async openModal(type: String) {
    this.modalConfig["type"] = type
    this.modalConfig["data"] = this.allPosition.filter((e: any) => e.type === type)
    return await this.modalComponent.open();
  }
}
