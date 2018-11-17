import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  TestAction
} from './app.actions';
import { map, pluck } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  public test$ = this.actions$.pipe(
    ofType(TestAction.TYPE),
    pluck('payload'),
    map((payload) => console.log(payload))
  );
}
