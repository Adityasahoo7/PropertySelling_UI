import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/core/services/property.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  properties: any[] = [];
  query: string = '';
  loading = true;
  noResults = false;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      if (this.query) {
        this.fetchResults(this.query);
      }
    });
  }

  fetchResults(query: string) {
    this.loading = true;
    this.propertyService.searchProperties(query).subscribe({
      next: (data) => {
        this.properties = data;
        this.noResults = data.length === 0;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
