import { Component } from '@angular/core';
import { of } from 'rxjs';

export const ROOT_SELECTOR = 'ts-carousel';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  public products$ = of([
    { id: 0, name: 'Product 1' },
    { id: 1, name: 'Product 2' },
    { id: 2, name: 'Product 3' },
    { id: 3, name: 'Product 4' },
    { id: 4, name: 'Product 5' },
  ]);
}
