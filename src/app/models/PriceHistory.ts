import { Product } from './product';

export interface PriceHistory {
  currentPrice:	boolean;
  id: number;
  price: number;
  product: Product;
}
