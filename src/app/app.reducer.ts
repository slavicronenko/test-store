import { createSelector } from '@ngrx/store';
import { StoreAppConfig, StoreCategories, StoreSpecialOffers } from './app.actions';
import { IStoreState } from './app.store';
import { ICategory } from './shared/services/categories/categories.service';
import { IAppConfig } from './app.service';
import { IProduct } from './shared/services/products/products.service';

export interface IAppState {
  config: IAppConfig;
  categories: ICategory[];
  specialOffers: IProduct[];
}

const appState: IAppState = {
  config: null,
  categories: [],
  specialOffers: []
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

    case StoreSpecialOffers.TYPE: {
      return Object.assign({}, state, { specialOffers: payload });
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

export const getSpecialOffers = createSelector(
  ({ app }: IStoreState) => app,
  ({ specialOffers }: IAppState): IProduct[] => specialOffers
);
