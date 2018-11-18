import { Component, OnInit } from '@angular/core';
import { AppState } from './app.service';
import { select, Store } from '@ngrx/store';
import { IStoreState } from './app.store';
import { Observable } from 'rxjs';
import { getTest } from './app.reducer';
import { TestAction } from './app.actions';

export const ROOT_SELECTOR = 'app';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public test$: Observable<number>;

  constructor(
    public store: Store<IStoreState>
  ) {}

  public ngOnInit() {
    this.test$ = this.store.pipe(select(getTest));
    this.store.dispatch(new TestAction('test1'));
  }

}
