import { NgModule } from '@angular/core';
import { SiblingTimerComponent } from './sibling-timer.component';
import { TimerComponent } from './timer/timer.component';
import { TimerStartPauseComponent } from './timer-start-pause/timer-start-pause.component';
import { LogTimerComponent } from './log-timer/log-timer.component';
import { ClickCountComponent } from './click-count/click-count.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    SiblingTimerComponent,
    TimerComponent,
    TimerStartPauseComponent,
    LogTimerComponent,
    ClickCountComponent
  ],
  imports: [SharedModule],
  providers: [],
})
export class SiblingTimerModule { }
