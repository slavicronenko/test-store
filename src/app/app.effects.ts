import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  FetchCategories, StoreCategories
} from './app.actions';
import { map, switchMap } from 'rxjs/operators';
import { CategoriesService } from './shared/services/categories/categories.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}

  @Effect()
  public test$ = this.actions$.pipe(
    ofType(FetchCategories.TYPE),
    switchMap(() => this.categoriesService.getCategories()),
    map((categories) => new StoreCategories(categories))
  );
}
