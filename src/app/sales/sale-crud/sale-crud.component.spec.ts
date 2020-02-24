import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCrudComponent } from './sale-crud.component';

describe('SaleCrudComponent', () => {
  let component: SaleCrudComponent;
  let fixture: ComponentFixture<SaleCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
