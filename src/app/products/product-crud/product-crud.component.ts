import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  cols: any[];

  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nome' },
      { field: 'description', header: 'Decrição' },
      { field: 'price', header: 'Preço' },
    ];

    this.getProducts();
  }
  // define se um produto será criado ou atualizado
  saveProduct(form: NgForm) {
    if (this.product.id !== undefined) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.productService.saveProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obter todos os produtos
  getProducts() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.getCurrentPrice(product);
    });
  }

  // deleta um produto
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.getProducts();
    });
  }

  // copia o produto para ser editado.
  editProduct(product: Product) {
    this.product = { ...product };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.product = {} as Product;
  }

  // percorre lista de produtos para encontrar o preço atual
  getCurrentPrice(products: Product[]) {
    for (let i = 0; i < products.length; i++) {
      products[i].priceHistoryList.find(p => {
        if(p.currentPrice === true){
          products[i].price = p.price;
        }
      });
    }
    // Defini a lista de produtos
    this.products = products;
  }
}
