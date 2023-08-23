import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRentResultsComponent } from './to-rent-results.component';

describe('ToRentResultsComponent', () => {
  let component: ToRentResultsComponent;
  let fixture: ComponentFixture<ToRentResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToRentResultsComponent]
    });
    fixture = TestBed.createComponent(ToRentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
