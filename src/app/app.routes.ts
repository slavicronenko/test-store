import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: './pages/home#HomeModule'},
];
