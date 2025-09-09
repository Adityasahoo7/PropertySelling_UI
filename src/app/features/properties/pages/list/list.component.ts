import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/core/services/property.service';
import { Property } from 'src/app/core/models/property.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe({
      next: (data) => (this.properties = data)
    });
  }
}
