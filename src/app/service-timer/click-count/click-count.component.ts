import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit{

  pause = 0;
  start = 0;

  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getStartEmit().subscribe(res=>{
      this.start = res;
    });
    this.timerService.getPauseEmit().subscribe(res=>{
      this.pause = res;
    });
  }

}
