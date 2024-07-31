import { createAction, props } from '@ngrx/store';
export const ADD_POSITION = '[position page] possition adding start';
export const ADD_POSITION_SUCCESS = '[position page] position add start success';
export const ADD_POSITION_FAIL = '[position page] position adding start fail';

export const addPosition = createAction(
    ADD_POSITION,
    props<any>()
  );

  export const addPositionSuccess = createAction(
    ADD_POSITION_SUCCESS,
    props<any>()
  );

  export const addPositionFail = createAction(
    ADD_POSITION_FAIL,
    props<any>()
  );
  
