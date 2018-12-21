import { Component, Input } from '@angular/core';
import { ICategory } from '../../../core/services/categories/categories.service';

export const ROOT_SELECTOR = 'ts-subcategory';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./subcategory.component.scss'],
  templateUrl: './subcategory.component.html'
})
export class SubcategoryComponent {
  @Input() public subcategory: ICategory;
}
