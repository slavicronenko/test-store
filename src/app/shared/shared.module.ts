import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import components from './components';
import services from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    ...services
  ]
})
export class SharedModule {}
