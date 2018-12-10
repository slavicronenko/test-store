import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products/products.service';

export const ROOT_SELECTOR = 'ts-sidebar-product';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./sidebar-product.component.scss'],
  templateUrl: './sidebar-product.component.html'
})
export class SidebarProductComponent {
  @Input() public product: IProduct;
}
