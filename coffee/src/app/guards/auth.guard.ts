import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = () => {
  const login = inject(LoginService);
  const router = inject(Router);
  if (login.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
