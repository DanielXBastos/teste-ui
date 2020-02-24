import { ProductService } from './../../services/product.service';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SaleService } from './../../services/sale.service';
import { Sale } from 'src/app/models/sale';
import { Product } from './../../models/product';
import { Client } from './../../models/client';



@Component({
  selector: 'app-sale-crud',
  templateUrl: './sale-crud.component.html',
  styleUrls: ['./sale-crud.component.css']
})
export class SaleCrudComponent implements OnInit {

  cols: any[];
  colsProduct: any[];
  selectedClient: Client;
  selectedProduct: Product;

  sale = {} as Sale;
  saleForm = new Sale();
  sales = {} as Sale[];
  clientVenda = {} as Client;
  selectClients = {} as Client[];
  selectProducts = {} as Product[];
  productVenda = {} as Product[];
  productList = {} as Product[];

  constructor(private saleService: SaleService, private clientService: ClientService, private productService: ProductService) { }

  ngOnInit() {
    console.log(this.saleForm);
    this.cols = [
      { field: 'id', header: 'Id Compra' },
      { field: 'id', header: 'Id Cliente' },
      { field: 'nome', header: 'Nome Cliente' },
      { field: 'email', header: 'Email Cliente' },
      { field: 'telefone', header: 'Telefone Cliente' },
    ];

    this.colsProduct = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nome' },
      { field: 'description', header: 'Decrição' },
      { field: 'price', header: 'Preço' },
    ];

    this.getSales();
    this.getClientsForSale();
    this.getProductsForSale();
  }
  // define se uma venda será criada ou atualizada
  saveSale(form: NgForm) {

    this.saleForm.client = this.selectedClient;
    this.saleForm.productList.push(this.selectedProduct);

    this.saleService.saveSale(this.saleForm).subscribe(() => {
      this.cleanForm(form);
    });
  }

  // Chama o serviço para obter todos as vendas
  getSales() {
    this.saleService.getSales().subscribe((sales: Sale[]) => {
      this.sales = sales;
    });
  }

  // deleta uma venda
  deleteSale(sale: Sale) {
    this.saleService.deleteSale(sale).subscribe(() => {
      this.getSales();
    });
  }

  // Escolhe uma venda para ser visualizada.
  getSale(sale: Sale) {
    this.clientVenda = sale.client;
    this.productVenda = sale.productList;
    this.sale = { ...sale };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getSales();
    form.resetForm();
    this.sale = {} as Sale;
  }

  // pega os clientes para a lista de vendas
  getClientsForSale() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.selectClients = clients;
    });
  }

  // pega os produtos para a lista de vendas
  getProductsForSale() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.selectProducts = product;
    });
  }

}
