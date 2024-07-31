import { Action, createReducer, on } from '@ngrx/store';
import *  as empAction from './employee.action';
import {initialState} from './employee.state';

const _empReducer = createReducer(
  initialState,
    on(empAction.addPositionSuccess, (state:any, action) => {
      return {
        ...state,
        user: action,
      };
    })
  );
  
  export function employeeReducer(state: any, action:any) {
    return _empReducer(state, action);
  }