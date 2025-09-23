// src/app/features/properties/services/visit-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VisitRequestCreate {
  propertyId: number;
}

export interface VisitRequestResponse {
  id: number;
  propertyId: number;
  propertyTitle: string;
  buyerName: string;
  status: string;
  requestedAt: string;
}

export interface VisitRequestUpdateStatus {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitRequestService {
  private apiUrl = 'http://localhost:5118/api/VisitRequest';

  constructor(private http: HttpClient) { }

  create(request: VisitRequestCreate): Observable<number> {
    return this.http.post<number>(this.apiUrl, request);
  }

  getForBuyer(): Observable<VisitRequestResponse[]> {
    return this.http.get<VisitRequestResponse[]>(`${this.apiUrl}/buyer`);
  }

  getForSeller(): Observable<VisitRequestResponse[]> {
    return this.http.get<VisitRequestResponse[]>(`${this.apiUrl}/seller`);
  }

  updateStatus(id: number, status: VisitRequestUpdateStatus): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/status`, status);
  }
}
