import { Action } from '@ngrx/store';
import { IAppConfig } from './app.service';
import { IProduct } from './shared/services/products/products.service';
import { ICatalogueItem } from './app.effects';

export class StoreAppConfig implements Action {
    public static readonly TYPE = '[app] store app config';
    public type = StoreAppConfig.TYPE;

    constructor(public payload: IAppConfig) {}
}

export class FetchCategories implements Action {
    public static readonly TYPE = '[app] fetch categories';
    public type = FetchCategories.TYPE;

    constructor(public payload?: any) {}
}

export class StoreCatalogueItems implements Action {
  public static readonly TYPE = '[app] store catalogueItems items';
  public type = StoreCatalogueItems.TYPE;

  constructor(public payload: ICatalogueItem[]) {}
}

export class FetchSpecialOffers implements Action {
    public static readonly TYPE = '[app] fetch special offers';
    public type = FetchSpecialOffers.TYPE;

    constructor(public payload?: any) {}
}

export class StoreSpecialOffers implements Action {
  public static readonly TYPE = '[app] store special offers';
  public type = StoreSpecialOffers.TYPE;

  constructor(public payload: IProduct[]) {}
}
