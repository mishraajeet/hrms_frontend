import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class EployeeService {
  api: String = 'api/employee/';
  userApi: String = 'api/user/'
  constructor(private rest: RestService) { }
  
  addPosition(param = {}){ return this.rest.post( `${this.api}addPosition`, param); }
  updatePosition(param = {}){ return this.rest.post( `${this.api}updatePosition`, param); }
  getAllPositions(param = {}){ return this.rest.post( `${this.api}getAllPositions`, param); }
  getEmpBirthday(){ return this.rest.get( `${this.userApi}getEmpBirthday`); }
  getNewJoiningEmp(){ return this.rest.get( `${this.userApi}getNewJoiningEmp`); }


  // ============Users API=========================//
  registerUser(param = {}){ return this.rest.post( `${this.userApi}registerUser`, param); }
  getAllUser(param = {}){ return this.rest.post( `${this.userApi}getAllUsers`, param); }
  saveSequenceNumber(){ return this.rest.get(`${this.userApi}saveSequenceNumber`);}
  updateEmpProfile(param = {}){ return this.rest.put(`${this.userApi}updateProfile`,param);}

}
