import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { ProductCrudComponent } from './product-crud/product-crud.component';



@NgModule({
  declarations: [ProductCrudComponent],
  imports: [
    TableModule,
    FormsModule,
    CommonModule
  ],
  exports:  [ProductCrudComponent]
})
export class ProductsModule { }
