import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNostandaloneComponent } from './employee-nostandalone.component';

describe('EmployeeNostandaloneComponent', () => {
  let component: EmployeeNostandaloneComponent;
  let fixture: ComponentFixture<EmployeeNostandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeNostandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNostandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
