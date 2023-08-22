import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleSearchComponent } from './for-sale-search.component';

describe('ForSaleSearchComponent', () => {
  let component: ForSaleSearchComponent;
  let fixture: ComponentFixture<ForSaleSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForSaleSearchComponent]
    });
    fixture = TestBed.createComponent(ForSaleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
