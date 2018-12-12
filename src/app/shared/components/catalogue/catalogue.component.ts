import { Component, Input } from '@angular/core';
import { ICatalogueItem } from '../../../app.effects';

export const ROOT_SELECTOR = 'ts-catalogue';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./catalogue.component.scss'],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent {
  @Input() public isTitleVisible: boolean = true;
  @Input() public title: string = 'Catalogue';
  @Input() public catalogueItems: ICatalogueItem[] = [];
}
