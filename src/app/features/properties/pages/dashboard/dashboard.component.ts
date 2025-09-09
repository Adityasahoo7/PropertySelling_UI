import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/core/services/property.service';
import { Property } from 'src/app/core/models/property.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getProperties().subscribe({
      next: (data) => (this.properties = data),
      error: (err) => console.error('Error fetching properties:', err)
    });
  }
}
