import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string | null = '';
  email: string | null = '';
  userRole: string | null = '';

  constructor(private router: Router) {
    // Example: LocalStorage ru value neba
    this.username = localStorage.getItem('fullName');
    this.email = localStorage.getItem('email');
    this.userRole = localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();  // Tokens au user info remove
    this.router.navigate(['/login']);
  }
}
