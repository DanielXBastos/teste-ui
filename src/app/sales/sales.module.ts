import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { SaleCrudComponent } from './sale-crud/sale-crud.component';
import { SaleReportComponent } from './sale-report/sale-report.component';



@NgModule({
  declarations: [SaleCrudComponent, SaleReportComponent],
  imports: [
    TableModule,
    FormsModule,
    DropdownModule,
    CommonModule
  ],
  exports: [SaleCrudComponent, SaleReportComponent]
})
export class SalesModule { }
