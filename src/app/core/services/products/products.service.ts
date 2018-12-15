import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInteractionService } from '../server-interaction/server-interaction.service';
import { urls } from '../constants';

@Injectable()
export class ProductsService extends ServerInteractionService {
  public fetchSpecialOffers(): Observable<IProduct[] | any> {
    return this.get(urls.products, { params: { specialOffer: true }});
  }
}

export interface IProduct {
  id: number;
  name: string;
  url: string;
  description: string;
  price: number;
  onSale: boolean;
  salePrice: number;
  preview: string;
  picture: string;
  category: number;
  giftId: number | null;
  available: boolean;
}
