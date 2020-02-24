import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClientService } from './../../services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  cols: any[];

  client = {} as Client;
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'telefone', header: 'Telefone' },
    ];

    this.getClients();
  }
  // defini se um client será criado ou atualizado
  saveClient(form: NgForm) {
    if (this.client.id !== undefined) {
      console.log(this.client);
      this.clientService.updateClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.clientService.saveClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os clientes
  getClients() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

  // deleta um client
  deleteClient(client: Client) {
    this.clientService.deleteClient(client).subscribe(() => {
      this.getClients();
    });
  }

  // copia o client para ser editado.
  editClient(client: Client) {
    this.client = { ...client };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getClients();
    form.resetForm();
    this.client = {} as Client;
  }

}
