import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../shared/services/categories/categories.service';
import { IStoreState } from '../../app.store';
import { select, Store } from '@ngrx/store';
import { getCategories } from '../../app.reducer';

export const ROOT_SELECTOR = 'ts-home';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<IStoreState>
  ) {}

  public categories$: Observable<ICategory[]>;

  public ngOnInit() {
    this.categories$ = this.store.pipe(select(getCategories));
  }
}
