import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';
import { EployeeService } from '../../../../services/employee/eployee.service';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit, OnDestroy {
  isLoading: boolean;
  @Input() public rm:any
  selectedFile: any | null = null;
  previewUrl: string | ArrayBuffer | null = null;


  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private empService: EployeeService,
    private global: GlobalService
    ) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      EmployeeNumberSeries: [
        this.defaultValues.EmployeeNumberSeries,
        [Validators.required],
      ],
      EmployeeNo: [this.defaultValues.EmployeeNo, [Validators.required]],
      FatherName: [this.defaultValues.FatherName, [Validators.required]],
      SpouseName: [this.defaultValues.SpouseName, [Validators.required]],
      AdhaarNumber: [this.defaultValues.AdhaarNumber, [Validators.required]],
      Email: [this.defaultValues.Email, [Validators.required,Validators.email]],
      Gender: [this.defaultValues.Gender, [Validators.required]],
      ReportingManager: [this.defaultValues.ReportingManager, [Validators.required]],
      MobileNumber: [this.defaultValues.MobileNumber, [Validators.required]],
      Status: [this.defaultValues.Status, [Validators.required]],
      DateOfJoining: ['',Validators.required],
      ProbationPeriod: ['',Validators.required],
      ConfirmationDate: ['',Validators.required],
      EmergencyContactName: ['',Validators.required],
      EmergencyContactNumber: ['',Validators.required],
      isEditableByEmp: [this.defaultValues.isEditableByEmp,Validators.required],
      img: [''],
      seriel_id: ['']
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('EmployeeNumberSeries')?.hasError('required') ||
      this.form.get('EmployeeNo')?.hasError('required') ||
      this.form.get('FatherName')?.hasError('required') ||
      this.form.get('SpouseName')?.hasError('required') ||
      this.form.get('AdhaarNumber')?.hasError('required') ||
      this.form.get('Email')?.hasError('required') ||
      this.form.get('Gender')?.hasError('required') ||
      this.form.get('ReportingManager')?.hasError('required') ||
      this.form.get('MobileNumber')?.hasError('required') ||
      this.form.get('Status')?.hasError('required') ||
      this.form.get('DateOfJoining')?.hasError('required') ||
      this.form.get('ProbationPeriod')?.hasError('required') ||
      this.form.get('ConfirmationDate')?.hasError('required') ||
      this.form.get('EmergencyContactName')?.hasError('required') ||
      this.form.get('EmergencyContactNumber')?.hasError('required') ||
      this.form.get('isEditableByEmp')?.hasError('required')
      );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  
  getSequenceNumber(event: any){
  this.form.patchValue({EmployeeNo: ''})
  if(!(event === 'Permanent Employees'))
     return
    this.empService.saveSequenceNumber().subscribe((res: any)=>{
      this.form.patchValue({EmployeeNo: res.data.sequence})
      this.form.patchValue({seriel_id: res.data._id})
    })
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];    
    const reader = new FileReader();
    reader.onload = (e) => this.previewUrl = reader.result;
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.empService.uploadEmpImage(formData).subscribe((res:any)=>{
      this.form.patchValue({img: res.imageUrl})
      console.log('Upload successful:', res);
    })
  }
}
