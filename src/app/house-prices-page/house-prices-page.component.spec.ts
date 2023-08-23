import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePricesPageComponent } from './house-prices-page.component';

describe('HousePricesPageComponent', () => {
  let component: HousePricesPageComponent;
  let fixture: ComponentFixture<HousePricesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousePricesPageComponent]
    });
    fixture = TestBed.createComponent(HousePricesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
