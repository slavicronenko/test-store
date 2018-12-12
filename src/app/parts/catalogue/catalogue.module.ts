import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemComponent } from './catalogue-item/catalogue-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CatalogueComponent,
    CatalogueItemComponent
  ],
  exports: [
    CatalogueComponent
  ]
})
export class CatalogueModule {}
