import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
 
    const isAuthenticated = authService.getToken("jwt") !== null;
    if (!isAuthenticated) {
      router.navigate(['/login']); // Redirect to login if not authenticated
    }
    return isAuthenticated;
};
