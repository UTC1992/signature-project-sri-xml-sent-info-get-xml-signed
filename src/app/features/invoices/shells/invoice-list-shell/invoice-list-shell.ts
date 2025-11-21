import { Component, inject } from '@angular/core';
import { InvoiceList } from '../../ui/invoice-list/invoice-list';
import { InvoiceService } from '../../services/invoice.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-invoice-list-shell',
  imports: [InvoiceList],
  templateUrl: './invoice-list-shell.html',
  styleUrl: './invoice-list-shell.scss',
  standalone: true,
})
export class InvoiceListShell {
  private invoiceService = inject(InvoiceService);

  invoices = toSignal(this.invoiceService.getInvoices(), { initialValue: null });
}
