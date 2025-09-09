import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private propertyUrl = 'http://localhost:5118/api/Property';
  private visitRequestUrl = 'http://localhost:5118/api/VisitRequest';
  private authUrl = 'http://localhost:5118/api/Auth';

  constructor(private http: HttpClient) {}

  // 🔹 Auth headers
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // ================= Property API =================
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertyUrl, { headers: this.getAuthHeaders() });
  }

  getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.propertyUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyUrl, property, { headers: this.getAuthHeaders() });
  }

  updateProperty(id: number, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.propertyUrl}/${id}`, property, { headers: this.getAuthHeaders() });
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.propertyUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  // ================= VisitRequest API =================
  addVisitRequest(visitRequest: { propertyId: number; status: string }): Observable<any> {
    return this.http.post<any>(this.visitRequestUrl, visitRequest, { headers: this.getAuthHeaders() });
  }

  getSellerVisitRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.visitRequestUrl}/seller`, { headers: this.getAuthHeaders() });
  }

  getBuyerVisitRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.visitRequestUrl}/buyer`, { headers: this.getAuthHeaders() });
  }

  updateVisitRequestStatus(id: number, status: string): Observable<any> {
    return this.http.patch<any>(`${this.visitRequestUrl}/${id}/status`, { status }, { headers: this.getAuthHeaders() });
  }

  // ================= Auth API =================
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, credentials);
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
