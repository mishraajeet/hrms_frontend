import { Component, Input, OnDestroy, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as empAction from '../../state/employee.action';
import { EployeeService } from '../../../../services/employee/eployee.service';
import { GlobalService } from '../../../../services/global.service';
import { ModalComponent } from '../../modal/modal.component';
import { AddPositionComponent } from '../../popup/add-position/add-position.component';
import { ModalConfig } from '../../modal.config';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit, OnDestroy {
  @Input() public allPosition: any
  @Output() newPosition = new EventEmitter<any>()
  @Output() newParentPosition = new EventEmitter<any>()
  @Output() deletedPosition = new EventEmitter<any>()

  @ViewChild('subposition') private modalComponent: ModalComponent;
  @ViewChild('modal') private AddPositionComponent: AddPositionComponent

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
    type: "",
    id: ''
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
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  initForm() {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });

    const formChangesSubscr = this.items.valueChanges.subscribe((val) => {
      let obj: any = { emp_position: val }
      this.updateParentModel(obj, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);

    this.allPosition.forEach((p: any) => {
      const group = this.fb.group({
        position: [p.position],
        selectedSubPosition: ['']
      })
      this.items.push(group);
    })
  }

  checkForm() {
    return true;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  addParentPosition(event:any){
    const group = this.fb.group({
      position: [event.position],
      selectedSubPosition: ['']
    })
    this.items.push(group);
    this.allPosition.push(event)
    this.newParentPosition.emit(this.allPosition)
  }
  addedPosition(event: any) {
    this.newPosition.emit(event)
    this.allPosition.forEach((e: any) => {
      if (e.position == event.position) {
        e.sub_position = event.sub_position;
      }
    });
  }
  
  async openModal(value: any) {
    this.modalConfig['id'] = value._id
    this.modalConfig["type"] = value.position
    this.modalConfig["data"] = value.sub_position
    return await this.modalComponent.open();
  }

  async addPosition() {
    return await this.AddPositionComponent.open();
  }

  async deletePosition(value: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let param = {
          id: value._id
        }
        this.empService.deleteEmpPosition(param).subscribe((res: any) => {
          if (res.result) {
            this.allPosition.forEach((e: any, i: number) => {
              if (e.position == res.data.position) {
                this.items.controls.splice(i,1);
                this.allPosition.splice(i, 1)
              }
            });
            this.deletedPosition.emit(this.allPosition)
            Swal.fire({
              title: "Deleted!",
              text: `Successfully deleted position`,
              icon: "success"
            });
          }
        })
      }
    });
  }
}
