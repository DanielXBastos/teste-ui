import { Product } from './product';
import { Client } from './client';

export class Sale {
  id: number;
  client: Client;
  initList = new Product('');
  productList = new Array<Product>();
}
