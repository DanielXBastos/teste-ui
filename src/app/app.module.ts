import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

import { SaleReportComponent } from './sales/sale-report/sale-report.component';
import { ProductCrudComponent } from './products/product-crud/product-crud.component';
import { ClientCrudComponent } from './clients/client-crud/client-crud.component';
import { SaleCrudComponent } from './sales/sale-crud/sale-crud.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: ClientCrudComponent },
  { path: 'product', component: ProductCrudComponent },
  { path: 'report', component: SaleReportComponent },
  { path: 'sale', component: SaleCrudComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ClientsModule,
    ProductsModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
