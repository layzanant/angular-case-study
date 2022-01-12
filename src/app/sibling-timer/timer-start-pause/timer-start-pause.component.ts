import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  @Output() startPauseEmitter: EventEmitter<{ key: 'p' | 's', date: Date, timer: number }[]> = new EventEmitter();
  @Output() timerCountEmit: EventEmitter<number> = new EventEmitter();
  @Output() startEmit: EventEmitter<number> = new EventEmitter();
  @Output() pauseEmit: EventEmitter<number> = new EventEmitter();

  constructor() { }

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
      this.startPauseEmitter.emit(this.startPauseMap);
      this.startEmit.emit(this.start);
      this.pauseEmit.emit(this.pause);
    }
  }

  startTimer() {
    this.timerCountEmit.emit(this.timerCount);
    this.interval = setInterval(() => {
      if (this.timerCount === 0) {
        this.pauseTimer();
        this.reset();
      }
      this.timerCount && this.timerCount--;
      this.timerCountEmit.emit(this.timerCount);
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
    this.startEmit.emit(this.start);
    this.pauseEmit.emit(this.pause);
    this.startPauseEmitter.emit(this.startPauseMap);
    this.timerCountEmit.emit(this.timerCount);
  }

}
