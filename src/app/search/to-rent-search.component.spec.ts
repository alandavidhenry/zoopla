import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRentSearchComponent } from './to-rent-search.component';

describe('ToRentSearchComponent', () => {
  let component: ToRentSearchComponent;
  let fixture: ComponentFixture<ToRentSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToRentSearchComponent]
    });
    fixture = TestBed.createComponent(ToRentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
