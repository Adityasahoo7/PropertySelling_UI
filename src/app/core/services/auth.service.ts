// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5118/api/Auth'; // ✅ tor backend base url

  constructor(private http: HttpClient) {}

  // 🔹 Common headers
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  // ✅ Register API
  register(user: { fullName: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user, { headers: this.getHeaders() });
  }

  // ✅ Login API
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { headers: this.getHeaders() });
  }

  // ✅ Save token & role
  saveAuthData(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  // ✅ Check login status
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  // ✅ Get role
  getUserRole(): string | null {
    return localStorage.getItem('role');
  }
}
