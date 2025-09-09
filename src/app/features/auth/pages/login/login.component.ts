// src/app/features/auth/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email: string = '';
password: string = '';

  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        // 🔹 Save token & role
        this.authService.saveAuthData(res.token, res.role);

        // ✅ Redirect to properties dashboard
        this.router.navigate(['/properties']);
      },
      error: () => {
        this.errorMsg = '❌ Invalid email or password';
      }
    });
  }
}
