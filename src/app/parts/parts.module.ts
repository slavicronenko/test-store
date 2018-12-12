import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { CatalogueModule } from './catalogue/catalogue.module';

// Components
import { HeaderComponent } from './header/header.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CatalogueModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    CatalogueComponent
  ]
})
export class PartsModule {}
