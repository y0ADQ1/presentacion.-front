import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactiveComponent } from './person-reactive.component';

describe('PersonReactiveComponent', () => {
  let component: PersonReactiveComponent;
  let fixture: ComponentFixture<PersonReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
