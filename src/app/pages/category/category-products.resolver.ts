import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ICategory } from '../../core/services/categories/categories.service';
import { select, Store } from '@ngrx/store';
import { IStoreState } from '../../app.store';
import { getCategoryByUrl } from '../../app.reducer';
import { take } from 'rxjs/operators';

@Injectable()
export class CategoryProductsResolver implements Resolve<ICategory> {
  constructor(private store: Store<IStoreState>) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<ICategory> {
    const categoryUrl = route.url[route.url.length - 1].path;

    return this.store.pipe(
      select(getCategoryByUrl(categoryUrl)),
      take(1)
    );
  }
}
