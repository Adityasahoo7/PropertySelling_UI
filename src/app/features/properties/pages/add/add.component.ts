  import { Component } from '@angular/core';
  import { PropertyService } from 'src/app/core/services/property.service';
  import { Property } from 'src/app/core/models/property.model';
  import { ActivatedRoute,Router } from '@angular/router';

  @Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
  })
  export class AddComponent {
    property: Property = {
      sellerId: 0,
      title: '',
      description: '',
      type: '',
      price: 0,
      location: '',
      bedrooms: 0,
      bathrooms: 0,
      areaSqFt: 0,
      imageUrl: ''
    };

    constructor(private propertyService: PropertyService,
      private router:Router
    ) {}

    // 🖼 File Upload → Save Base64 in imageUrl
    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.property.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }

    // 🏠 Add Property
    addProperty() {
      // sellerId set from localStorage
      const sellerId = localStorage.getItem("sellerId");
      this.property.sellerId = sellerId ? Number(sellerId) : 0;

      // 🔗 Call backend service
      this.propertyService.addProperty(this.property).subscribe({
        next: (res) => {
          console.log("✅ Property added:", res);
          alert("✅ Property added successfully!");
       
        this.router.navigate(['/properties/dashboard']);
  

          // Reset form
          this.property = {
            sellerId: sellerId ? +sellerId : 0,
            title: '',
            description: '',
            type: '',
            price: 0,
            location: '',
            bedrooms: 0,
            bathrooms: 0,
            areaSqFt: 0,
            imageUrl: ''
          };
        },
        error: (err) => {
          console.error("❌ Error adding property:", err);
          alert("❌ Failed to add property. Please try again.");
        }
      });
    }
  }
