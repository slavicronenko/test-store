import { Injectable } from '@angular/core';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  FetchCategories,
  FetchSpecialOffers,
  UpdateCatalogueItems,
  StoreCategories,
  StoreSpecialOffers
} from './app.actions';
import { CategoriesService, ICategory } from './shared/services/categories/categories.service';
import { ProductsService } from './shared/services/products/products.service';
import { Router } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private router: Router
  ) {}

  @Effect()
  public fetchCategories$ = this.actions$.pipe(
    ofType<FetchCategories>(FetchCategories.TYPE),
    switchMap(() => this.categoriesService.fetchCategories()),
    mergeMap((categories) => {
      const { catalogueItems, categoryUrls } = AppEffects.getCatalogueItems(categories);

      // TODO: move this to the separate effect
      categoryUrls.forEach((path) => {
        console.log({
          path,
          component: CategoryComponent
        });
        this.router.config.push({
          path,
          component: CategoryComponent
        });
      });

      return [
        new StoreCategories(categories),
        new UpdateCatalogueItems(catalogueItems)
      ];
    })
  );

  @Effect({ dispatch: false })
  public updateCatalogueItems$ = this.actions$.pipe(
    ofType<UpdateCatalogueItems>(UpdateCatalogueItems.TYPE),
    map(({ payload: catalogItems }) => catalogItems),
  );

  @Effect()
  public fetchSpecialOffers$ = this.actions$.pipe(
    ofType<FetchSpecialOffers>(FetchSpecialOffers.TYPE),
    switchMap(() => this.productsService.fetchSpecialOffers()),
    map((products) => new StoreSpecialOffers(products))
  );

  private static getCatalogueItems(
    categories: ICategory[],
    parent: ICategory = null,
    parentUrl: string = null
  ): any {
    return categories
      .filter((category) => parent
        ? category.parentId === parent.id
        : category.parentId === null
      )
      .reduce(({ catalogueItems, categoryUrls }, category) => {
        const url = parentUrl ? `${parentUrl}/${category.url}` : category.url;
        const {
          catalogueItems: children,
          categoryUrls: childrenUrls
        } = AppEffects.getCatalogueItems(categories, category, url);

        categoryUrls.push(url, ...childrenUrls);
        catalogueItems.push({
          title: category.name,
          url,
          children
        });

        return { catalogueItems, categoryUrls };
      }, { catalogueItems: [], categoryUrls: [] });
  }
}

export interface ICatalogueItem {
  title: string;
  url: string;
  children: ICatalogueItem[] | null;
}
