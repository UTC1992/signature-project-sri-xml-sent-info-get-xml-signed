import { Component } from '@angular/core';
import { InvoiceList } from '../../ui/invoice-list/invoice-list';

@Component({
  selector: 'app-invoice-list-shell',
  imports: [InvoiceList],
  templateUrl: './invoice-list-shell.html',
  styleUrl: './invoice-list-shell.scss',
  standalone: true,
})
export class InvoiceListShell {}
