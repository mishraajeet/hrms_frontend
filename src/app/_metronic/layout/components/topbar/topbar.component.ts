import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {

  constructor(private global: GlobalService){

  }

  setting(){
    sessionStorage.setItem('isSetting','yes')
    window.location.reload();
    this.global.tabSetting.next('yes');
  }
}
