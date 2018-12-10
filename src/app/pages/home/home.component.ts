import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../shared/services/categories/categories.service';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCategories, getSpecialOffers } from '../../app.reducer';
import { IProduct } from '../../shared/services/products/products.service';

export const ROOT_SELECTOR = 'ts-home';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<IStoreState>
  ) {}

  public categories$: Observable<ICategory[]>;
  public specialOffers$: Observable<IProduct[]>;

  public ngOnInit() {
    this.categories$ = this.store.pipe(select(getCategories));
    this.specialOffers$ = this.store.pipe(select(getSpecialOffers));
  }
}
