import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSalePageComponent } from './for-sale-page.component';

describe('ForSalePageComponent', () => {
  let component: ForSalePageComponent;
  let fixture: ComponentFixture<ForSalePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForSalePageComponent]
    });
    fixture = TestBed.createComponent(ForSalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
