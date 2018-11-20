import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public fetchAppConfig(): Observable<IAppConfig> {
    return this.httpClient.get('/settings.json');
  }
}

export interface IAppConfig {
  [key: string]: any;
}
