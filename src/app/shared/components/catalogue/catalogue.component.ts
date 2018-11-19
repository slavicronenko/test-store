import { Component } from '@angular/core';
import { of } from 'rxjs';

export const ROOT_SELECTOR = 'ts-catalogue';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./catalogue.component.scss'],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent {
  public isTitleVisible: boolean = true;
  public title: string = 'Catalogue';
  public categories$ = of([
    { id: 0, name: 'Computers' },
    { id: 1, name: 'Appliances' },
    { id: 2, name: 'Tools' },
    { id: 3, name: 'Clothes & Shoes' },
    { id: 4, name: 'Stationery & Office Supplies' },
  ]);
}
