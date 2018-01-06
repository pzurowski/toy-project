import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, mergeMap, take} from 'rxjs/operators';

import {XkcdRngService} from './xkcd-rng.service';
import {interval} from 'rxjs/observable/interval';

export enum CounterActionTypes {
  START = '[COUNTER] start',
  TICK = '[COUNTER] tick',
  RANDOM = '[COUNTER] random',
}


export interface CounterState {
  main: number;
}

export const initialState: CounterState = {
  main: null
};

export type CounterStartAction = { type: CounterActionTypes.START };
export type CounterTickAction = { type: CounterActionTypes.TICK, value: number };
export type CounterGenerateRandomAction = { type: CounterActionTypes.TICK, value: number };

export type CounterAction = null
  | CounterStartAction
  | CounterTickAction
  ;


export function counterReducer(state: CounterState = initialState, action?: CounterAction): CounterState {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case CounterActionTypes.START : {
      return {...state, main: 0};
    }
    case CounterActionTypes.TICK : {
      return {...state, main: action.value};
    }
    default: {
      return state;
    }
  }
}

@Injectable()
export class CounterService {

  constructor(private store: Store<{ counter: CounterState }>) {
  }

  start() {
    this.store.dispatch({type: CounterActionTypes.START});
  }

  selectMainCounterValue() {
    return this.store.select(s => s.counter.main);
  }
}

@Injectable()
export class CounterEffects {

  @Effect()
  create$ = this.actions$.ofType<CounterStartAction>(CounterActionTypes.START).pipe(
    map(() => this.random.next().value),
    map(value => ({type: CounterActionTypes.RANDOM, value})),
  );

  @Effect()
  count$ = this.actions$.ofType<CounterGenerateRandomAction>(CounterActionTypes.RANDOM).pipe(
    mergeMap(({value}) => interval(90).pipe(
      take(value)
    )),
    map(n => n + 1),
    map((value) => ({type: CounterActionTypes.TICK, value})),
  );

  constructor(private actions$: Actions,
              private random: XkcdRngService) {
  }
}
