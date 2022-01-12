import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-timer-start-pause',
  templateUrl: './timer-start-pause.component.html',
  styleUrls: ['./timer-start-pause.component.scss']
})
export class TimerStartPauseComponent implements OnInit {

  timer = 0;
  index = 1;
  start = 0;
  pause = 0;
  interval: any;
  timerCount = 0;
  isDisabled = false;
  startPauseMap: { key: 'p' | 's', date: Date, timer: number }[] = [];

  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
  }

  startPause() {
    if (this.timerCount !== 0) {
      if (this.index % 2 === 0) {
        this.pauseTimer();
        this.pause++;
        this.startPauseMap.push({ key: 'p', date: new Date(), timer: this.timerCount });
      } else {
        this.isDisabled = true;
        this.startTimer();
        this.start++;
        this.startPauseMap.push({ key: 's', date: new Date(), timer: this.timerCount });
      }
      this.index++;
      this.timerService.setStartPauseEmitter(this.startPauseMap);
      this.timerService.setStartEmit(this.start);
      this.timerService.setPauseEmit(this.pause);
    }
  }
  
  startTimer() {
    this.timerService.setTimerCountEmit(this.timerCount);
    this.interval = setInterval(() => {
      if (this.timerCount === 0) {
        this.pauseTimer();
        this.reset();
      }
      this.timerCount && this.timerCount--;
      this.timerService.setTimerCountEmit(this.timerCount);
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  

  reset() {
    this.timer = 0;
    this.isDisabled = false;
    this.index = 1;
    this.startPauseMap = [];
    this.timerCount = 0;
    this.start = 0;
    this.pause = 0;
    this.timerService.setStartPauseEmitter(this.startPauseMap);
    this.timerService.setStartEmit(this.start);
    this.timerService.setPauseEmit(this.pause);
    this.timerService.setTimerCountEmit(this.timerCount);
  }

}
