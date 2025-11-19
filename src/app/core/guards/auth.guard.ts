import { AuthApi } from '@/features/auth/data-access/auth.api';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthApi);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    alert('Please log in to access this page.');
    return router.createUrlTree(['/login']);
  }
};
