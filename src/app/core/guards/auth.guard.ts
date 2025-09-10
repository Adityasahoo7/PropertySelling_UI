import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLogged = this.authService.isLoggedIn();
    console.log('Is logged in?', isLogged); // Debug
    if (isLogged) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
