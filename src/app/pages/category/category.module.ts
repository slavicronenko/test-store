import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryProductsResolver } from './category-products.resolver';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './category.effects';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EffectsModule.forFeature([CategoryEffects]),
  ],
  declarations: [
    CategoryComponent,
    SubcategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  providers: [
    CategoryProductsResolver
  ]
})
export class CategoryModule {}
