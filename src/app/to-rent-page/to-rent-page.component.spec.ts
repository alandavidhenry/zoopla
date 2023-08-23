import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRentPageComponent } from './to-rent-page.component';

describe('ToRentPageComponent', () => {
  let component: ToRentPageComponent;
  let fixture: ComponentFixture<ToRentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToRentPageComponent]
    });
    fixture = TestBed.createComponent(ToRentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
