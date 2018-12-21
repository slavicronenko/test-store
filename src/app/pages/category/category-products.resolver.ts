import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IStoreState } from '../../app.store';
import { getCategoryByUrl } from '../../app.reducer';
import { skipWhile, switchMap, take } from 'rxjs/operators';
import { IProduct } from '../../core/services/products/products.service';
import { FetchCategoryProducts } from './category.actions';
import { getCategoryProducts } from './category.reducer';

@Injectable()
export class CategoryProductsResolver implements Resolve<IProduct[]> {
  constructor(private store: Store<IStoreState>) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IProduct[]> {
    const categoryUrl = route.url[route.url.length - 1].path;

    return this.store.pipe(
      select(getCategoryByUrl(categoryUrl)),
      switchMap(({ id }) => {
        this.store.dispatch(new FetchCategoryProducts(id));

        return this.store.pipe(select(getCategoryProducts));
      }),
      skipWhile((products) => !products), // TODO: this check shouldn't depend on this array, use fetchStatus instead
      take(1)
    );
  }
}
