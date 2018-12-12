import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueItemComponent } from './catalogue/catalogue-item/catalogue-item.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarProductComponent } from './sidebar-product/sidebar-product.component';

export default [
  CatalogueComponent,
  CatalogueItemComponent, // TODO: CatalogueComponent should be a separate module
  SpecialOffersComponent,
  CarouselComponent,
  SidebarProductComponent
];
