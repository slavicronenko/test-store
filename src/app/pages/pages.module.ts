import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from '../core/core.module';
import { NotFoundAuthGuard } from './not-found/not-found.authguard';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    CategoryComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    CategoryComponent,
    NotFoundComponent
  ],
  providers: [
    NotFoundAuthGuard
  ]
})
export class PagesModule {}
