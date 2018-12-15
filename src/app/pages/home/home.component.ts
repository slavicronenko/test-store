import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCatalogueItems, getSpecialOffers } from '../../app.reducer';
import { IProduct } from '../../core/services/products/products.service';
import { ICatalogueItem } from '../../app.effects';

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

  public catalogueItems: Observable<ICatalogueItem[]>;
  public specialOffers$: Observable<IProduct[]>;

  public ngOnInit() {
    this.catalogueItems = this.store.pipe(select(getCatalogueItems));
    this.specialOffers$ = this.store.pipe(select(getSpecialOffers));
  }
}
