import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IStoreState } from './app.store';
import { FetchCategories, FetchSpecialOffers } from './app.actions';
import { Observable } from 'rxjs';
import { getCatalogueItems } from './app.reducer';
import { ICatalogueItem } from './app.effects';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

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
  public categories$: Observable<ICatalogueItem[]>;

  constructor(
    public store: Store<IStoreState>
  ) {}

  public ngOnInit() {
    this.categories$ = this.store.pipe(select(getCatalogueItems));
    this.store.dispatch(new FetchCategories());
    this.store.dispatch(new FetchSpecialOffers());
  }

}
