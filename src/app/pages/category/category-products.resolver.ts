import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IStoreState } from '../../app.store';
import { getCategoryByUrl } from '../../app.reducer';
import { map, skipWhile, switchMap, take } from 'rxjs/operators';
import { FetchCategoryProducts } from './category.actions';
import { getProductsFetchingStatus } from './category.reducer';
import { FetchingStatusEnum } from '../../shared/interfaces';

@Injectable()
export class CategoryProductsResolver implements Resolve<boolean> {
  constructor(private store: Store<IStoreState>) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const categoryUrl = route.url[route.url.length - 1].path;

    return this.store.pipe(
      select(getCategoryByUrl(categoryUrl)),
      switchMap(({ id }) => {
        this.store.dispatch(new FetchCategoryProducts(id));

        return this.store.pipe(select(getProductsFetchingStatus));
      }),
      map((status) => status === FetchingStatusEnum.FETCHED),
      skipWhile((isFetched) => !isFetched),
      take(1)
    );
  }
}
