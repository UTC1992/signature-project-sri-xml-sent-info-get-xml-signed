import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  imports: [],
  templateUrl: './invoice-detail.html',
  styleUrl: './invoice-detail.scss',
})
export class InvoiceDetail implements OnInit {
  @Input({ required: true, alias: 'id' }) invoiceId!: string;

  ngOnInit(): void {
    console.log('Invoice ID from shell:', this.invoiceId);
  }
}
