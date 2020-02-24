import { PriceHistory } from './PriceHistory';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  priceHistoryList: PriceHistory[];

  constructor(name?: string) {
    this.name = name;
  }
}
