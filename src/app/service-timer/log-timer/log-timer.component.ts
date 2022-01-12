import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.scss']
})
export class LogTimerComponent implements OnInit {

  startPauseMap: { key: 'p' | 's', date: Date, timer: number }[] = [];

  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getStartPauseEmitter().subscribe(res=>{
      this.startPauseMap = res;
    });
  }

}
