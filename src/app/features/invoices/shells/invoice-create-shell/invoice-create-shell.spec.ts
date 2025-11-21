import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCreateShell } from './invoice-create-shell';

describe('InvoiceCreateShell', () => {
  let component: InvoiceCreateShell;
  let fixture: ComponentFixture<InvoiceCreateShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceCreateShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceCreateShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
