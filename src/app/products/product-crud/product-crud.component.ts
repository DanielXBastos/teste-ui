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
      this.products = product;
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

}
