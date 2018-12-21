import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../core/services/products/products.service';
import { FetchCategoryProducts, StoreCategoryProducts } from './category.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  @Effect()
  public fetchCategoryProducts$ = this.actions$.pipe(
    ofType<FetchCategoryProducts>(FetchCategoryProducts.TYPE),
    switchMap(({ payload: categoryId }) => this.productsService.fetchCategoryProducts(categoryId)),
    map((products) => new StoreCategoryProducts(products))
  );
}
