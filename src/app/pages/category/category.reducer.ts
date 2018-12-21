import { createSelector } from '@ngrx/store';
import { IProduct } from '../../core/services/products/products.service';
import { IStoreState } from '../../app.store';
import { FetchingStatusEnum } from '../../shared/interfaces';
import { FetchCategoryProducts, StoreCategoryProducts } from './category.actions';

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
    case FetchCategoryProducts.TYPE: {
      const fetchingStatus = Object.assign({}, state.fetchingStatus, { products: FetchingStatusEnum.PENDING });

      return Object.assign({}, state, { fetchingStatus } );
    }

    case StoreCategoryProducts.TYPE: {
      const fetchingStatus = Object.assign({}, state.fetchingStatus, { products: FetchingStatusEnum.FETCHED });

      return Object.assign({}, state, { products: payload, fetchingStatus });
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

export const getProductsFetchingStatus = createSelector(
  ({ category }: IStoreState) => category,
  ({ fetchingStatus }: ICategoryState): FetchingStatusEnum => fetchingStatus.products
);
