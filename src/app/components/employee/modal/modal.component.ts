import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../modal.config';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../../services/global.service';
import { EployeeService } from '../../../services/employee/eployee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() public modalConfig: ModalConfig;
  @Output() addedPosition = new EventEmitter<any>

  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>;
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
     Description: this.description,
     Code : this.code,
     type: this.modalConfig.type,
     isActive: this.isActivePosition
     }
    this.empService.addPosition(obj).subscribe((res:any)=>{
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
}
