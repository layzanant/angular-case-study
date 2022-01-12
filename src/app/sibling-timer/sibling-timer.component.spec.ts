import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingTimerComponent } from './sibling-timer.component';

describe('SiblingTimerComponent', () => {
  let component: SiblingTimerComponent;
  let fixture: ComponentFixture<SiblingTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
