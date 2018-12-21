import { Action } from '@ngrx/store';
import { IAppConfig } from './app.service';
import { IProduct } from './core/services/products/products.service';
import { ICatalogueItem } from './app.effects';
import { ICategory } from './core/services/categories/categories.service';

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

export class StoreCategories implements Action {
  public static readonly TYPE = '[app] store categories';
  public type = StoreCategories.TYPE;

  constructor(public payload: ICategory[]) {}
}

export class UpdateCatalogueItems implements Action {
  public static readonly TYPE = '[app] update catalogueItems items';
  public type = UpdateCatalogueItems.TYPE;

  constructor(public payload: ICatalogueItem[]) {}
}

export class UpdateCategoryRoutes implements Action {
  public static readonly TYPE = '[app] update category routes';
  public type = UpdateCategoryRoutes.TYPE;

  constructor(public payload: string[]) {}
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
