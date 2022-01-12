import { NgModule } from '@angular/core';
import { ServiceTimerComponent } from './service-timer.component';
import { TimerComponent } from './timer/timer.component';
import { TimerStartPauseComponent } from './timer-start-pause/timer-start-pause.component';
import { LogTimerComponent } from './log-timer/log-timer.component';
import { ClickCountComponent } from './click-count/click-count.component';
import { SharedModule } from '../shared.module';
import { TimerService } from './service/timer.service';

@NgModule({
  declarations: [
    ServiceTimerComponent,
    TimerComponent,
    TimerStartPauseComponent,
    LogTimerComponent,
    ClickCountComponent
  ],
  imports: [SharedModule],
  providers: [],
})
export class ServiceTimerModule { }
