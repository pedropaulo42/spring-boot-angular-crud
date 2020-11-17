import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreadComponent } from './product-cread.component';

describe('ProductCreadComponent', () => {
  let component: ProductCreadComponent;
  let fixture: ComponentFixture<ProductCreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
