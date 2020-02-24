import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Sale } from './../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  url = 'https://ipgc.findsolucoes.com.br/sale'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos as vendas
  getSales(): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Obtem uma venda pelo id
  getSaleById(id: number): Observable<Sale> {
    return this.httpClient.get<Sale>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // salva uma venda
  saveSale(sale: Sale): Observable<Sale> {
    return this.httpClient.post<Sale>(this.url, JSON.stringify(sale), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // utualiza uma venda
  updateSale(sale: Sale): Observable<Sale> {
    return this.httpClient.put<Sale>(this.url, JSON.stringify(sale), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // deleta uma venda
  deleteSale(sale: Sale) {
    return this.httpClient.delete<Sale>(this.url + '/' + sale.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
