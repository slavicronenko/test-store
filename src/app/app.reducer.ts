import { createSelector } from '@ngrx/store';
import { TestAction } from './app.actions';
import { IStoreState } from './app.store';

export interface IAppState {
  test: number;
}

const appState: IAppState = {
  test: 228
};

export function AppReducer(state: IAppState = appState, action): IAppState {
  const { type, payload } = action;

  switch (type) {
    case TestAction.TYPE: {
      return Object.assign({}, state, { test: payload });
    }

    default: {
      return state;
    }
  }
}

export const getTest = createSelector(
  ({ app }: IStoreState) => app,
  ({ test }: IAppState): number => test
);
