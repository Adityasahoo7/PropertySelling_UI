import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VisitRequestCreate {
  propertyId: number;
}

export interface VisitRequestResponse {
  id: number;
  propertyId: number;
  propertyTitle: string;
  buyerName: string;
  status: number;
  requestedAt: string;
}

export interface VisitRequestUpdateStatus {
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class VisitRequestService {
  private apiUrl = 'http://localhost:5118/api/VisitRequest';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // JWT token store kari thile
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  create(request: VisitRequestCreate): Observable<number> {
    return this.http.post<number>(this.apiUrl, request, { headers: this.getAuthHeaders() });
  }

  getForBuyer(): Observable<VisitRequestResponse[]> {
    return this.http.get<VisitRequestResponse[]>(`${this.apiUrl}/buyer`, { headers: this.getAuthHeaders() });
  }

  getForSeller(): Observable<VisitRequestResponse[]> {
    return this.http.get<VisitRequestResponse[]>(`${this.apiUrl}/seller`, { headers: this.getAuthHeaders() });
  }

  updateStatus(id: number, status: VisitRequestUpdateStatus): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/status`, status, { headers: this.getAuthHeaders() });
  }
}
