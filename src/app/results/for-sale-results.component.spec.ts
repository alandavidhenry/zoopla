import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleResultsComponent } from './for-sale-results.component';

describe('ForSaleResultsComponent', () => {
  let component: ForSaleResultsComponent;
  let fixture: ComponentFixture<ForSaleResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForSaleResultsComponent]
    });
    fixture = TestBed.createComponent(ForSaleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
