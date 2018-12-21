import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from '../core/core.module';
import { NotFoundAuthGuard } from './not-found/not-found.authguard';
import { CategoryModule } from './category/category.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    CategoryModule
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    NotFoundAuthGuard
  ]
})
export class PagesModule {}
