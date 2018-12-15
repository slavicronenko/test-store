import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CatalogueModule } from './components/catalogue';
import { HeaderComponent } from './components/header/header.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CatalogueModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    CatalogueComponent
  ],
  providers: [
    CategoriesService,
    ProductsService
  ]
})
export class CoreModule {}
