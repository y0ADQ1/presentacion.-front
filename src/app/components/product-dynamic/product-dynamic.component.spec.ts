import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDynamicComponent } from './product-dynamic.component';

describe('ProductDynamicComponent', () => {
  let component: ProductDynamicComponent;
  let fixture: ComponentFixture<ProductDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
