import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInteractionService } from '../server-interaction/server-interaction.service';
import { urls } from '../constants';

@Injectable()
export class CategoriesService extends ServerInteractionService {
  public fetchCategories(): Observable<ICategory[] | any> {
    return this.get(urls.categories);
  }
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  url: string;
  img: string;
  parentId: number;
}
