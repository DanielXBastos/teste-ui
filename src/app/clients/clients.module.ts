import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { ClientCrudComponent } from './client-crud/client-crud.component';



@NgModule({
  declarations: [ClientCrudComponent],
  imports: [
    TableModule,
    FormsModule,
    CommonModule
  ],
  exports: [ClientCrudComponent]
})
export class ClientsModule { }
