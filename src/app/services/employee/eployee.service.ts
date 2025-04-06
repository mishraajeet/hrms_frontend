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
  updatePosition(param = {},obj:any){ return this.rest.put( `${this.api}updatePosition`, param,obj); }
  getAllPositions(param = {}){ return this.rest.post( `${this.api}getAllPositions`, param); }
  deleteEmpPosition(param = {}){ return this.rest.delete(`${this.api}deleteempPosition`,param)}
  deleteSubPosition(param = {},obj:any){ return this.rest.put(`${this.api}deleteSubPosition`,param,obj)}
  getEmpBirthday(){ return this.rest.get( `${this.userApi}getEmpBirthday`); }
  getNewJoiningEmp(){ return this.rest.get( `${this.userApi}getNewJoiningEmp`); }


  // ============Users API=========================//
  registerUser(param = {}){ return this.rest.post( `${this.userApi}registerUser`, param); }
  getAllUser(param = {}){ return this.rest.post( `${this.userApi}getAllUsers`, param); }
  getReportingManager(param = {}){ return this.rest.get( `${this.userApi}getReportingManager`, param); }
  saveSequenceNumber(){ return this.rest.get(`${this.userApi}saveSequenceNumber`);}
  updateEmpProfile(param = {}){ return this.rest.put(`${this.userApi}updateProfile`,param);}
  uploadEmpImage(param = {}){ return this.rest.post(`emp_profile`,param)}

}
