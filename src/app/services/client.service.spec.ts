import { Client } from 'src/app/models/client';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let testService: ClientService;
  let httpMock: HttpTestingController;
  let testClient: Client;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });
    TestBed.configureTestingModule({});
    testService = TestBed.inject(ClientService);
  });

  it('getData() should http GET clients', () => {

    const names = [{ name: 'a' }, { name: 'a' }];

    testService.getClients().subscribe((res) => {
      console.log(res);
      expect(res).toContain(testClient);
    });

    const req = httpMock.expectOne('/client');
    // expect(req).toBeDefined();
    // expect(req.request.method).toEqual('GET');
    // req.flush(names);

    // httpMock.verify();
  });
});
