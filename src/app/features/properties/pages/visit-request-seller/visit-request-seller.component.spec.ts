import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestSellerComponent } from './visit-request-seller.component';

describe('VisitRequestSellerComponent', () => {
  let component: VisitRequestSellerComponent;
  let fixture: ComponentFixture<VisitRequestSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitRequestSellerComponent]
    });
    fixture = TestBed.createComponent(VisitRequestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
