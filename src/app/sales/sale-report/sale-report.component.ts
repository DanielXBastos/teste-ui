import { ProductService } from './../../services/product.service';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SaleService } from './../../services/sale.service';
import { Sale } from 'src/app/models/sale';
import { Product } from './../../models/product';
import { Client } from './../../models/client';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css']
})
export class SaleReportComponent implements OnInit {

  cols: any[];
  colsProduct: any[];

  sale = {} as Sale;
  sales = {} as Sale[];
  clientVenda = {} as Client;
  productVenda = {} as Product[];

  constructor(private saleService: SaleService, private clientService: ClientService, private productService: ProductService) { }

  ngOnInit() {
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

}
