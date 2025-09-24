// src/app/features/properties/pages/visit-request-seller/visit-request-seller.component.ts
import { Component, OnInit } from '@angular/core';
//import { VisitRequestService, VisitRequestResponse } from '../../services/visit-request.service';
import { VisitRequestService,VisitRequestResponse } from 'src/app/core/services/visit-request.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-visit-request-seller',
  templateUrl: './visit-request-seller.component.html',
  styleUrls: ['./visit-request-seller.component.css']
})
export class VisitRequestSellerComponent implements OnInit {
  requests: VisitRequestResponse[] = [];

  constructor(private visitService: VisitRequestService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.visitService.getForSeller().subscribe(res => this.requests = res);
  }

updateStatus(requestId: number, status: string) {
  // Convert string -> number to match backend enum
  const statusValue = status === 'Approved' ? 1 : status === 'Rejected' ? 2 : 0;

  this.visitService.updateStatus(requestId, { status: statusValue })
    .subscribe({
      next: () => alert(`Request ${status} successfully updated!`),
      error: err => alert('Error updating status: ' + err.message)
    });
}



}
