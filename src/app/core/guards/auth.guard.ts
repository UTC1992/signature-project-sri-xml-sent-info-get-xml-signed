import { AuthService } from '@/features/auth/data-access/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert('Please log in to access this page.');
    return router.createUrlTree(['/login']);
  }
};
