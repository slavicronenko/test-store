import { createSelector } from '@ngrx/store';
import { StoreAppConfig, StoreCategories } from './app.actions';
import { IStoreState } from './app.store';
import { ICategory } from './shared/services/categories/categories.service';
import { IAppConfig } from './app.service';

export interface IAppState {
  config: IAppConfig;
  categories: ICategory[];
}

const appState: IAppState = {
  config: null,
  categories: []
};

export function AppReducer(state: IAppState = appState, action): IAppState {
  const { type, payload } = action;

  switch (type) {
    case StoreAppConfig.TYPE: {
      return Object.assign({}, state, { config: payload });
    }

    case StoreCategories.TYPE: {
      return Object.assign({}, state, { categories: payload });
    }

    default: {
      return state;
    }
  }
}

export const getAppConfig = createSelector(
  ({ app }: IStoreState) => app,
  ({ config }: IAppState): IAppConfig => config
);


export const getCategories = createSelector(
  ({ app }: IStoreState) => app,
  ({ categories }: IAppState): ICategory[] => categories
);
