import { createSelector } from '@ngrx/store';
import { StoreCategories } from './app.actions';
import { IStoreState } from './app.store';
import { ICategory } from './shared/services/categories/categories.service';

export interface IAppState {
  categories: ICategory[];
}

const appState: IAppState = {
  categories: []
};

export function AppReducer(state: IAppState = appState, action): IAppState {
  const { type, payload } = action;

  switch (type) {
    case StoreCategories.TYPE: {
      return Object.assign({}, state, { categories: payload });
    }

    default: {
      return state;
    }
  }
}

export const getCategories = createSelector(
  ({ app }: IStoreState) => app,
  ({ categories }: IAppState): ICategory[] => categories
);
