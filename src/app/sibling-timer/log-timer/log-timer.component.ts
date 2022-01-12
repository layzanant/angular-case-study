import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.scss']
})
export class LogTimerComponent implements OnInit {

  @Input() startPauseMap: { key: 'p' | 's', date: Date, timer: number }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
