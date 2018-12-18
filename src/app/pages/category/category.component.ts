import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCategoryByUrl, getCategoryChildren } from '../../app.reducer';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../core/services/categories/categories.service';
import { switchMap, take } from 'rxjs/operators';

export const ROOT_SELECTOR = 'ts-category';

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

  public ngOnInit() {

    this.category$ = this.route.url.pipe(
      switchMap((url) => this.store.pipe(select(getCategoryByUrl(url[url.length - 1].path)))),
      take(1)
    );

    this.subcategories$ = this.category$.pipe(
      switchMap(({ id }) => this.store.pipe(select(getCategoryChildren(id))))
    );
  }
}
