import { Action } from '@ngrx/store';
import { IProduct } from '../../core/services/products/products.service';

export class FetchCategoryProducts implements Action {
    public static readonly TYPE = '[category] fetch category products';
    public type = FetchCategoryProducts.TYPE;

    constructor(public payload: number) {}
}

export class StoreCategoryProducts implements Action {
    public static readonly TYPE = '[category] store category products';
    public type = StoreCategoryProducts.TYPE;

    constructor(public payload: IProduct[]) {}
}
