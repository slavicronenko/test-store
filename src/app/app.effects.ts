import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  FetchCategories,
  FetchSpecialOffers,
  StoreCatalogueItems,
  StoreSpecialOffers
} from './app.actions';
import { map, switchMap } from 'rxjs/operators';
import { CategoriesService, ICategory } from './shared/services/categories/categories.service';
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
    map((categories) => new StoreCatalogueItems(AppEffects.getCatalogueItems(categories)))
  );

  @Effect()
  public fetchSpecialOffers$ = this.actions$.pipe(
    ofType(FetchSpecialOffers.TYPE),
    switchMap(() => this.productsService.fetchSpecialOffers()),
    map((products) => new StoreSpecialOffers(products))
  );

  private static getCatalogueItems(categories: ICategory[], parent: ICategory = null): ICatalogueItem[] {
    return categories
      .filter((category) => parent
        ? category.parentId === parent.id
        : category.parentId === null
      )
      .map((category) => ({
        title: category.name,
        url: parent ? `${parent.url}/${category.url}` : category.url,
        children: AppEffects.getCatalogueItems(categories, category)
      }));
  }
}

export interface ICatalogueItem {
  title: string;
  url: string;
  children: ICatalogueItem[] | null;
}
