import { Routes } from '@angular/router';

export const INVOICE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shells/invoice-list-shell/invoice-list-shell').then((m) => m.InvoiceListShell),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./shells/invoice-detail-shell/invoice-detail-shell').then(
        (m) => m.InvoiceDetailShell
      ),
  },
];
