// src/app/features/auth/pages/register/register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
email: string = '';
password: string = '';
role: string = 'buyer';  // default role

  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.authService.register(user).subscribe({
      next: (res) => {
        alert('✅ Registration successful! Please login.');
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.errorMsg = '❌ Registration failed. Try again.';
      }
    });
  }
}
