import { Routes } from '@angular/router';

export const HOME_ROUTER: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home-shell/home-shell').then((m) => m.HomeShell),
  },
];
