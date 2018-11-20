import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInteractionService } from '../server-interaction/server-interaction.service';
import { urls } from '../constants';

@Injectable()
export class CategoriesService extends ServerInteractionService {
  public getCategories(): Observable<ICategory[] | any> {
    return this.get(urls.categories);
  }
}

export interface ICategory {
  id: number;
  name: string;
  url: string;
  picture: string;
  parentId: number;
}
