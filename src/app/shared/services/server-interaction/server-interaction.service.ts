import { HttpClient } from '@angular/common/http';
import { AppService } from '../../../app.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerInteractionService {
  constructor(
    private appService: AppService,
    protected httpClient: HttpClient
  ) {
    const { serviceUrl } = this.appService.getConfig();

    console.log(this.appService.getConfig());

    this.base = serviceUrl;
  }

  protected readonly base: string;
}
