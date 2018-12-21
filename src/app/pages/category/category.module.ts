import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryProductsResolver } from './category-products.resolver';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './category.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([CategoryEffects]),
  ],
  declarations: [
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  providers: [
    CategoryProductsResolver
  ]
})
export class CategoryModule {}
