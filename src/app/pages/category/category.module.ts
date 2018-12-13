import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { SharedModule } from '../../shared/shared.module';
import { PartsModule } from '../../parts/parts.module';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PartsModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule {}
