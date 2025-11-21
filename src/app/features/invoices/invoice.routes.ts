import { Routes } from '@angular/router';

export const INVOICE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shells/invoice-list-shell/invoice-list-shell').then((m) => m.InvoiceListShell),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./shells/invoice-create-shell/invoice-create-shell').then(
        (m) => m.InvoiceCreateShell
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./shells/invoice-detail-shell/invoice-detail-shell').then(
        (m) => m.InvoiceDetailShell
      ),
  },
];
