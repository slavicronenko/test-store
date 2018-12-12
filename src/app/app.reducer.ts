import { createSelector } from '@ngrx/store';
import { StoreAppConfig, StoreCatalogueItems, StoreSpecialOffers } from './app.actions';
import { IStoreState } from './app.store';
import { ICategory } from './shared/services/categories/categories.service';
import { IAppConfig } from './app.service';
import { IProduct } from './shared/services/products/products.service';
import { ICatalogueItem } from './app.effects';

export interface IAppState {
  config: IAppConfig;
  catalogueItems: ICatalogueItem[];
  specialOffers: IProduct[];
}

const appState: IAppState = {
  config: null,
  catalogueItems: [],
  specialOffers: []
};

export function AppReducer(state: IAppState = appState, action): IAppState {
  const { type, payload } = action;

  switch (type) {
    case StoreAppConfig.TYPE: {
      return Object.assign({}, state, { config: payload });
    }

    case StoreCatalogueItems.TYPE: {
      return Object.assign({}, state, { catalogueItems: payload });
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

export const getCatalogueItems = createSelector(
  ({ app }: IStoreState) => app,
  ({ catalogueItems }: IAppState): ICatalogueItem[] => catalogueItems
);

export const getSpecialOffers = createSelector(
  ({ app }: IStoreState) => app,
  ({ specialOffers }: IAppState): IProduct[] => specialOffers
);
