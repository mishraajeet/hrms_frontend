import { createFeatureSelector, createSelector } from '@ngrx/store';
export const POSITION_STATE_NAME = 'employee';

const getEmpState = createFeatureSelector<any>(POSITION_STATE_NAME);

export const isRegistered = createSelector(getEmpState, (state) => {
  return state.user ? true : false;
});