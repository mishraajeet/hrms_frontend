import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import *  as empAction from './employee.action';
import { EployeeService } from '../../../services/employee/eployee.service';
import Swal from 'sweetalert2'
import { Store } from '@ngrx/store';


@Injectable()
export class employeeEffect {
    constructor(private actions$: Actions,
        private empSrv: EployeeService,
        private store: Store,){}

      //   createPosition$ = createEffect(() =>
      //   this.actions$.pipe(
      //     ofType(empAction.addPosition),
      //     exhaustMap(action =>
      //       this.empSrv.addPosition(action).pipe(
      //         map(response =>{
      //           // this.store.dispatch(setLoadingSpinner({status: false}))
      //          return empAction.addPositionSuccess(response)
      //         }),
      //         catchError((error: any) => of(empAction.addPositionFail(error))))
      //     )
      //   )
      // );
    
      // regUSerSuccess$ = createEffect(() => {
      //   return this.actions$.pipe(
      //     ofType(empAction.addPositionSuccess),
      //     tap((action) => {
      //       Swal.fire( action.message)
      //     })
      //   )
      // }, { dispatch: false })
}
