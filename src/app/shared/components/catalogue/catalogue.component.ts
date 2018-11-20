import { Component, Input } from '@angular/core';
import { ICategory } from '../../services/categories/categories.service';

export const ROOT_SELECTOR = 'ts-catalogue';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./catalogue.component.scss'],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent {
  @Input() public isTitleVisible: boolean = true;
  @Input() public title: string = 'Catalogue';
  @Input() public categories: ICategory[] = [];
}
