import { Component } from '@angular/core';
import { of } from 'rxjs';

export const ROOT_SELECTOR = 'ts-special-offers';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./special-offers.component.scss'],
  templateUrl: './special-offers.component.html'
})
export class SpecialOffersComponent {
  public isTitleVisible: boolean = true;
  public title: string = 'Special Offers';
  public specialOffers$ = of([
    { id: 0, name: 'Product1' },
    { id: 1, name: 'Product2' },
    { id: 2, name: 'Product3' },
    { id: 3, name: 'Product4' }
  ]);
}
