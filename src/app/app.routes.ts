import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundAuthGuard } from './pages/not-found/not-found.authguard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', canActivate: [NotFoundAuthGuard], component: NotFoundComponent }
];
