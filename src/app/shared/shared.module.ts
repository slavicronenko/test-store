import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CarouselComponent } from './components/carousel/carousel.component';
import { SidebarProductComponent } from './components/sidebar-product/sidebar-product.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CarouselComponent,
    SidebarProductComponent,
    SpecialOffersComponent
  ],
  exports: [
    CarouselComponent,
    SidebarProductComponent,
    SpecialOffersComponent
  ]
})
export class SharedModule {}
