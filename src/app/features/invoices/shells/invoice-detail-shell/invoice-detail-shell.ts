import { Component, Input, OnInit } from '@angular/core';
import { InvoiceDetail } from '../../ui/invoice-detail/invoice-detail';

@Component({
  selector: 'app-invoice-detail-shell',
  imports: [InvoiceDetail],
  templateUrl: './invoice-detail-shell.html',
  styleUrl: './invoice-detail-shell.scss',
  standalone: true,
})
export class InvoiceDetailShell implements OnInit {
  @Input({ required: true, alias: 'id' }) invoiceId!: string;

  ngOnInit(): void {
    console.log('Invoice ID from shell:', this.invoiceId);
  }
}
