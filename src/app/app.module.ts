import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClientsModule,
    ProductsModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
