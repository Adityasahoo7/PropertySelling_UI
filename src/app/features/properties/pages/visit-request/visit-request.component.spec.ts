import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestComponent } from './visit-request.component';

describe('VisitRequestComponent', () => {
  let component: VisitRequestComponent;
  let fixture: ComponentFixture<VisitRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitRequestComponent]
    });
    fixture = TestBed.createComponent(VisitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
