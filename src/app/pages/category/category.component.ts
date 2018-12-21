import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCategoryByUrl, getCategoryChildren } from '../../app.reducer';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../core/services/categories/categories.service';
import { switchMap, take } from 'rxjs/operators';
import { IProduct } from '../../core/services/products/products.service';
import { getCategoryProducts } from './category.reducer';

export const ROOT_SELECTOR = 'ts-category-page';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./category.component.scss'],
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  constructor(
    private store: Store<IStoreState>,
    private route: ActivatedRoute
  ) {}

  public category$: Observable<ICategory>;
  public subcategories$: Observable<ICategory[]>;
  public products$: Observable<IProduct[]>;

  public ngOnInit() {
    // TODO: add breadcrumbs

    this.category$ = this.route.url.pipe(
      switchMap((url) => this.store.pipe(select(getCategoryByUrl(url[url.length - 1].path)))),
      take(1)
    );

    this.subcategories$ = this.category$.pipe(
      switchMap(({ id }) => this.store.pipe(select(getCategoryChildren(id))))
    );

    this.products$ = this.store.pipe(select(getCategoryProducts));
  }
}
