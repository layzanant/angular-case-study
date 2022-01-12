import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStartPauseComponent } from './timer-start-pause.component';

describe('TimerStartPauseComponent', () => {
  let component: TimerStartPauseComponent;
  let fixture: ComponentFixture<TimerStartPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStartPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStartPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
