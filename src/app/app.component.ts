import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IStoreState } from './app.store';
import { FetchCategories } from './app.actions';
import { Observable } from 'rxjs';
import { ICategory } from './shared/services/categories/categories.service';
import { getCategories } from './app.reducer';

export const ROOT_SELECTOR = 'ts-app';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public categories$: Observable<ICategory[]>;

  constructor(
    public store: Store<IStoreState>
  ) {}

  public ngOnInit() {
    this.categories$ = this.store.pipe(select(getCategories));
    this.store.dispatch(new FetchCategories());
  }

}
