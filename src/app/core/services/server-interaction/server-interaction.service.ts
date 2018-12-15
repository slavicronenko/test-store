import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAppConfig } from '../../../app.reducer';
import { switchMap } from 'rxjs/operators';
import { IStoreState } from '../../../app.store';

@Injectable()
export class ServerInteractionService {
  constructor(
    private store: Store<IStoreState>,
    protected httpClient: HttpClient
  ) {}

  protected get(url: string, options?) {
    return this.store.pipe(
      select(getAppConfig),
      switchMap(({ serviceUrl }) => this.httpClient.get(`${serviceUrl}/${url}`, options))
    );
  }
}
