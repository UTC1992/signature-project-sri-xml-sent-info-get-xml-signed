import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailShell } from './invoice-detail-shell';

describe('InvoiceDetailShell', () => {
  let component: InvoiceDetailShell;
  let fixture: ComponentFixture<InvoiceDetailShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
