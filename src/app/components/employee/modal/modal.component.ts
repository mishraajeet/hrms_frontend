import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../modal.config';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../../services/global.service';
import { EployeeService } from '../../../services/employee/eployee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() public modalConfig: ModalConfig;
  @Output() addedPosition = new EventEmitter<any>

  @ViewChild('subposition') private modalContent: TemplateRef<ModalComponent>;
  private modalRef: NgbModalRef;

  description: any;
  code: String;
  isActivePosition: Boolean = false

  constructor(private modalService: NgbModal,
    private empService: EployeeService,
    private global: GlobalService) {
  }

  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent);
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.disableDismissButton !== undefined) {
      return;
    }

    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }


  clearFilter(){
    this.description = "",
    this.code = "",
    this.isActivePosition = false
  }

  savePosition(){
    const obj = {
     description: this.description,
     code : this.code,
     isActive: this.isActivePosition
     }
    this.empService.updatePosition({id: this.modalConfig.id},obj).subscribe((res:any)=>{
     this.clearFilter();
     this.close();
     if(res.result){
      this.addedPosition.emit(res.data)
      this.global.showSuccessMsg(`Successfully added ${this.modalConfig.type}`)
     }
     else
       this.global.showErrorMsg(`Something went wrong!`)
    })
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
        this.empService.deleteSubPosition({id: this.modalConfig.id},param).subscribe((res: any) => {
          if (res.result) {
            this.clearFilter();
            this.close();
            this.addedPosition.emit(res.data)
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
