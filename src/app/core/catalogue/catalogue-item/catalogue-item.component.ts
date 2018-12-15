import { Component, Input } from '@angular/core';
import { ICatalogueItem } from '../../../app.effects';

export const ROOT_SELECTOR = 'ts-catalogue-item';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./catalogue-item.component.scss'],
  templateUrl: './catalogue-item.component.html'
})
export class CatalogueItemComponent {
  @Input() public item: ICatalogueItem;
}
