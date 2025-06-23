import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormBuilderComponent } from './player-form-builder.component';

describe('PlayerFormBuilderComponent', () => {
  let component: PlayerFormBuilderComponent;
  let fixture: ComponentFixture<PlayerFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
