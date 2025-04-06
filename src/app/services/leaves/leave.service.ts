import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  api: String = 'api/leave/';

  constructor(private rest: RestService) { }

  // getNewJoiningEmp(){ return this.rest.get( `${this.userApi}getNewJoiningEmp`); }
  createAbsence(param = {}){ return this.rest.post( `${this.api}create-absence`, param); }
  getLeave(param = {}){ return this.rest.post( `${this.api}getLeave`, param); }
  ActionTakenLeave(param = {}){ return this.rest.put(`${this.api}ActionTakenLeave`,param);}



}
