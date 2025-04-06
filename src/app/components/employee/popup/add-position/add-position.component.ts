import { Component,Output,EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { ModalConfig } from '../../modal.config';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EployeeService } from '../../../../services/employee/eployee.service';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent {
  @Input() public modalConfig: ModalConfig;
  @Output() addParentPosition = new EventEmitter<any>
  name: any

  @ViewChild('modal') private modalContent: TemplateRef<AddPositionComponent>;
  private modalRef: NgbModalRef;

  position: any;

  constructor(private modalService: NgbModal,
    private empService: EployeeService,
    private global: GlobalService) {
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


  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent);
      this.modalRef.result.then(resolve, resolve);
    });
  }
  
  

  clearFilter(){
    this.position = ""
  }

  savePosition(){
    const obj = {
      position: this.position,
     }
    this.empService.addPosition(obj).subscribe((res:any)=>{
     this.clearFilter();
     this.close();
     if(res.result){
      this.addParentPosition.emit(res.data)
      this.global.showSuccessMsg(`Successfully added ${this.modalConfig.type}`)
     }
     else
       this.global.showErrorMsg(`Something went wrong!`)
    })
   }
}
