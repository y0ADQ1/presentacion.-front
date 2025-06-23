import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCvaSignalsComponent } from './category-cva-signals.component';

describe('CategoryCvaSignalsComponent', () => {
  let component: CategoryCvaSignalsComponent;
  let fixture: ComponentFixture<CategoryCvaSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCvaSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCvaSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
