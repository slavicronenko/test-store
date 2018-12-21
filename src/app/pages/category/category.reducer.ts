import { createSelector } from '@ngrx/store';
import { IProduct } from '../../core/services/products/products.service';
import { IStoreState } from '../../app.store';
import { FetchingStatusEnum } from '../../shared/interfaces';
import { StoreCategoryProducts } from './category.actions';

export interface ICategoryState {
  products: IProduct[];
  fetchingStatus: {
    products: FetchingStatusEnum;
  };
}

const appState: ICategoryState = {
  products: [],
  fetchingStatus: {
    products: FetchingStatusEnum.PENDING
  }
};

export function CategoryReducer(state: ICategoryState = appState, action): ICategoryState {
  const { type, payload } = action;

  switch (type) {
    case StoreCategoryProducts.TYPE: {
      return Object.assign({}, state, { products: payload });
    }

    default: {
      return state;
    }
  }
}

export const getCategoryProducts = createSelector(
  ({ category }: IStoreState) => category,
  ({ products }: ICategoryState): IProduct[] => products
);
