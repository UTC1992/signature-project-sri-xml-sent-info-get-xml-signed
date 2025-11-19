import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@/features/home/home.routes').then((m) => m.HOME_ROUTER),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('@/features/auth/ui/login/login').then((m) => m.Login),
  },
  {
    path: 'invoice',
    loadChildren: () => import('@/features/invoices/invoice.routes').then((m) => m.INVOICE_ROUTES),
    canActivate: [authGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
