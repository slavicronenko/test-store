import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IStoreState } from '../../app.store';
import { getCatalogueUrls } from '../../app.reducer';
import { map, skipWhile, take } from 'rxjs/operators';

@Injectable()
export class NotFoundAuthGuard implements CanActivate {
  constructor(
    private store: Store<IStoreState>,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const currentUrl = route.url.join('/');

    return this.store.pipe(
      select(getCatalogueUrls),
      skipWhile((catalogue) => !catalogue || !catalogue.length),
      take(1),
      map((urls) => {
        if (urls.indexOf(currentUrl) !== -1) {
          this.router.navigate([currentUrl]);
        }

        return true;
      })
    );
  }
}
