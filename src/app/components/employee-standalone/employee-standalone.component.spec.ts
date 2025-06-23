import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStandaloneComponent } from './employee-standalone.component';

describe('EmployeeStandaloneComponent', () => {
  let component: EmployeeStandaloneComponent;
  let fixture: ComponentFixture<EmployeeStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
