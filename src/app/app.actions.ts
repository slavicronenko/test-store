import { Action } from '@ngrx/store';
import { ICategory } from './shared/services/categories/categories.service';
import { IAppConfig } from './app.service';

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
