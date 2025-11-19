import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListShell } from './invoice-list-shell';

describe('InvoiceListShell', () => {
  let component: InvoiceListShell;
  let fixture: ComponentFixture<InvoiceListShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceListShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceListShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
