import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { SharedModule } from '../../shared/shared.module';
import { PartsModule } from '../../parts/parts.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PartsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
