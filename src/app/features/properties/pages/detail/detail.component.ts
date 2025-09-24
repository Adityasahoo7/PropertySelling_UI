import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PropertyService } from 'src/app/core/services/property.service';
import { Property } from 'src/app/core/models/property.model';
import { VisitRequestService } from 'src/app/core/services/visit-request.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  property?: Property;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private visitService: VisitRequestService,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(+id).subscribe({
        next: (data) => (this.property = data)
      });
    }
  }

  
  deleteProperty(id: number) {
    if (!confirm('Are you sure you want to delete this property?')) return;

    this.propertyService.deleteProperty(id).subscribe({
      next: () => {
        alert('Property deleted successfully!');
        this.router.navigate(['/properties/dashboard']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to delete property.');
      },
    });
  }

requestVisit(propertyId?: number) {
  if (!propertyId) return; // undefined check

  this.visitService.create({ propertyId }).subscribe({
    next: () => alert('Visit request sent successfully!'),
    error: err => {
      const message = err.error?.message || err.statusText || 'Unknown error';
      alert('Error sending request: ' + message);
    }
  });
}


}
