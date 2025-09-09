import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // if css not scss
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  userRole: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in (token exists in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;

      // Example: decode role (if you stored it in localStorage during login)
      const role = localStorage.getItem('role');
      this.userRole = role ? role : 'User';
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // redirect to login page
  }
}
