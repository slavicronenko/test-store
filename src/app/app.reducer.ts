import { createSelector } from '@ngrx/store';
import {
  StoreAppConfig,
  UpdateCatalogueItems,
  StoreSpecialOffers,
  StoreCategories,
  UpdateCategoryRoutes
} from './app.actions';
import { IStoreState } from './app.store';
import { ICategory } from './core/services/categories/categories.service';
import { IAppConfig } from './app.service';
import { IProduct } from './core/services/products/products.service';
import { ICatalogueItem } from './app.effects';

export interface IAppState {
  config: IAppConfig;
  categories: ICategory[];
  catalogueItems: ICatalogueItem[];
  catalogueUrls: string[];
  specialOffers: IProduct[];
}

const appState: IAppState = {
  config: null,
  categories: [],
  catalogueItems: [],
  catalogueUrls: [],
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

    case UpdateCatalogueItems.TYPE: {
      return Object.assign({}, state, { catalogueItems: payload });
    }

    case UpdateCategoryRoutes.TYPE: {
      return Object.assign({}, state, { catalogueUrls: payload });
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

export const getCatalogueUrls = createSelector(
  ({ app }: IStoreState) => app,
  ({ catalogueUrls }: IAppState): string[] => catalogueUrls
);

export const getSpecialOffers = createSelector(
  ({ app }: IStoreState) => app,
  ({ specialOffers }: IAppState): IProduct[] => specialOffers
);
