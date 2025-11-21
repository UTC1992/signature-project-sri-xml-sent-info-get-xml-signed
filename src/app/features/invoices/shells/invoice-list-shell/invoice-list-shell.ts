import { Component, inject } from '@angular/core';
import { InvoiceList } from '../../ui/invoice-list/invoice-list';
import { toSignal } from '@angular/core/rxjs-interop';
import { InvoiceStore } from '../../data-access/invoice.store';

@Component({
  selector: 'app-invoice-list-shell',
  imports: [InvoiceList],
  templateUrl: './invoice-list-shell.html',
  styleUrl: './invoice-list-shell.scss',
  standalone: true,
})
export class InvoiceListShell {
  private _invoiceStore = inject(InvoiceStore);

  isLoading = this._invoiceStore.isLoading;
  isListEmpty = this._invoiceStore.isListEmpty;
  invoices = this._invoiceStore.invoices;
}
