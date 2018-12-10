import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  FetchCategories,
  FetchSpecialOffers,
  StoreCategories,
  StoreSpecialOffers
} from './app.actions';
import { map, switchMap } from 'rxjs/operators';
import { CategoriesService } from './shared/services/categories/categories.service';
import { ProductsService } from './shared/services/products/products.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}

  @Effect()
  public fetchCategories$ = this.actions$.pipe(
    ofType(FetchCategories.TYPE),
    switchMap(() => this.categoriesService.fetchCategories()),
    map((categories) => new StoreCategories(categories))
  );

  @Effect()
  public fetchSpecialOffers$ = this.actions$.pipe(
    ofType(FetchSpecialOffers.TYPE),
    switchMap(() => this.productsService.fetchSpecialOffers()),
    map((products) => new StoreSpecialOffers(products))
  );
}
