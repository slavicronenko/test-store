import { Component, Input } from '@angular/core';
import { ICatalogueItem } from '../../../../app.effects';
import { IProduct } from '../../../core/services/products/products.service';

export const ROOT_SELECTOR = 'ts-product';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() public product: IProduct;
  @Input() public type: ProductTypesEnum = ProductTypesEnum.DEFAULT;
}

export enum ProductTypesEnum {
  DEFAULT,
  HORIZONTAL
}
