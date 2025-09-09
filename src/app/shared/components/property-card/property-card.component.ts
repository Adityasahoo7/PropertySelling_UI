import { Component, Input } from '@angular/core';
import { Property } from 'src/app/core/models/property.model';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'] // ✅ css instead of scss
})
export class PropertyCardComponent {
  @Input() property!: Property;
}
