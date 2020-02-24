import { Product } from './product';
import { Client } from './client';

export interface Sale {
  id: number;
  client: Client;
  productList: Product[];
}
