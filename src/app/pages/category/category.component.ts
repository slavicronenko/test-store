import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCatalogueItems, getSpecialOffers } from '../../app.reducer';
import { IProduct } from '../../core/services/products/products.service';
import { ICatalogueItem } from '../../app.effects';

export const ROOT_SELECTOR = 'ts-category';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./category.component.scss'],
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
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
