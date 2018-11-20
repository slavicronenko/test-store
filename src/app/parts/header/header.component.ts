import { Component } from '@angular/core';
import { of } from 'rxjs';

export const ROOT_SELECTOR = 'ts-header';

@Component({
  selector: ROOT_SELECTOR,
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public menu: IMenuItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Warranty', url: '/warranty' },
    { name: 'Payment and delivery', url: '/payment-delivery' },
    { name: 'About us', url: '/about-us' },
    { name: 'Contacts', url: '/contacts' }
  ];
}

interface IMenuItem {
  name: string;
  url: string;
}
