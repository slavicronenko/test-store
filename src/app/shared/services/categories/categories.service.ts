import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInteractionService } from '../server-interaction/server-interaction.service';

@Injectable()
export class CategoriesService extends ServerInteractionService {
  private url = {
    categories: `${this.base}/categories`
  };

  public getCategories(): Observable<ICategory[] | any> {
    return this.httpClient.get(this.url.categories);
  }
}

export interface ICategory {
  id: number;
  name: string;
  url: string;
  picture: string;
  parentId: number;
}
