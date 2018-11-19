import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import components from './components';
import services from './services';

@NgModule({
  imports: [
    CommonModule
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
