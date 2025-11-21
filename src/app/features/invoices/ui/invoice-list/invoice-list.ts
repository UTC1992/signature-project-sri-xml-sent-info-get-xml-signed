import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice.mode';

@Component({
  selector: 'app-invoice-list',
  imports: [],
  templateUrl: './invoice-list.html',
  styleUrl: './invoice-list.scss',
  standalone: true,
})
export class InvoiceList {
  @Input() invoices: Invoice[] | undefined;
}
