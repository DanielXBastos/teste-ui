import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Client } from './../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:3000/client'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos os clientes
  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Obtem um cliente pelo id
  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // salva um cliente
  saveClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, JSON.stringify(client), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // utualiza um cliente
  updateClient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(this.url + '/' + client.id, JSON.stringify(client), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // deleta um cliente
  deleteClient(client: Client) {
    return this.httpClient.delete<Client>(this.url + '/' + client.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
