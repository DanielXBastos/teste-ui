import { Component, OnInit } from '@angular/core';
import { Client } from './models/client';
import { NgForm } from '@angular/forms';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'teste-ui';

  client = {} as Client;
  clients: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }
  // defini se um client será criado ou atualizado
  saveClient(form: NgForm) {
    if (this.client.id !== undefined) {
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
