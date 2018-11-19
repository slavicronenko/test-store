import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private config: IAppConfig;

  constructor(private httpClient: HttpClient) {}

  public fetchConfig(): Observable<object> {
    return this.httpClient.get('/settings.json').pipe( tap((config) => this.config = config));
  }

  public getConfig(): IAppConfig {
    return Object.assign({}, this.config);
  }
}

export interface IAppConfig {
  [key: string]: any;
}
