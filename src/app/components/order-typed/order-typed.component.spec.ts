import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTypedComponent } from './order-typed.component';

describe('OrderTypedComponent', () => {
  let component: OrderTypedComponent;
  let fixture: ComponentFixture<OrderTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTypedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
