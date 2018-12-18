import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IStoreState } from './app.store';
import { FetchCategories, FetchSpecialOffers } from './app.actions';
import { Observable } from 'rxjs';
import { getCatalogueItems, getSpecialOffers } from './app.reducer';
import { ICatalogueItem } from './app.effects';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { IProduct } from './core/services/products/products.service';

export const ROOT_SELECTOR = 'ts-app';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  entryComponents: [
    HomeComponent,
    CategoryComponent
  ]
})
export class AppComponent implements OnInit {
  public catalogueItems$: Observable<ICatalogueItem[]>;
  public specialOffers$: Observable<IProduct[]>;

  constructor(
    public store: Store<IStoreState>
  ) {}

  public ngOnInit() {
    this.store.dispatch(new FetchCategories());
    this.store.dispatch(new FetchSpecialOffers());

    this.catalogueItems$ = this.store.pipe(select(getCatalogueItems));
    this.specialOffers$ = this.store.pipe(select(getSpecialOffers));
  }
}
