// src/app/features/properties/pages/visit-request/visit-request.component.ts
import { Component, OnInit } from '@angular/core';
//import { VisitRequestService, VisitRequestResponse } from '../../services/visit-request.service';
import { VisitRequestService,VisitRequestResponse } from 'src/app/core/services/visit-request.service';

@Component({
  selector: 'app-visit-request',
  templateUrl: './visit-request.component.html',
  styleUrls: ['./visit-request.component.css']
})
export class VisitRequestComponent implements OnInit {
  requests: VisitRequestResponse[] = [];

  constructor(private visitService: VisitRequestService) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.visitService.getForBuyer().subscribe(res => {
      this.requests = res;
    });
  }
}
