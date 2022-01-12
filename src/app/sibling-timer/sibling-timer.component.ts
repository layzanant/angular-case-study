import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling-timer',
  templateUrl: './sibling-timer.component.html',
  styleUrls: ['./sibling-timer.component.scss']
})
export class SiblingTimerComponent implements OnInit {

  startPauseMap: { key: 'p' | 's', date: Date, timer: number }[] = [];
  timerCount = 0;
  start = 0;
  pause = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
