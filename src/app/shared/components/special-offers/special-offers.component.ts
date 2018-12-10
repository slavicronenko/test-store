import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products/products.service';

export const ROOT_SELECTOR = 'ts-special-offers';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./special-offers.component.scss'],
  templateUrl: './special-offers.component.html'
})
export class SpecialOffersComponent {
  public isTitleVisible: boolean = true;
  public title: string = 'Special Offers';
  @Input() public products: IProduct[] = [];
}
