import { POSITION_STATE_NAME } from '../components/employee/state/employee.selector'; 
import { EmpState} from '../components/employee/state/employee.state';
import { employeeReducer } from '../components/employee/state/employee.reducer';


export interface AppState {
    [POSITION_STATE_NAME]: EmpState;
  }
  
  export const appReducer = {
    [POSITION_STATE_NAME]: employeeReducer,
  };