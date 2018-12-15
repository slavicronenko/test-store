import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
