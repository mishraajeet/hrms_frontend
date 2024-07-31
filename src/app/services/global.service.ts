import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  dataSubject = new BehaviorSubject<any>(null);
  empData$ = this.dataSubject.asObservable();

  tabSetting = new BehaviorSubject<any>(null);
  newTab = this.tabSetting.asObservable();

  constructor(private router: Router) { }

  showSuccessMsg(msg: any){
     Swal.fire(msg);
  }
  showErrorMsg(msg:any){
    Swal.fire('Oops...', msg, 'error')
  }

  redirect(path: String){
    this.router.navigate([`/${path}`])
  }
}
