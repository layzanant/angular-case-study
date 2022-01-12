import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

timerCount: number = 0;

constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimerCountEmit().subscribe(res=>{
      this.timerCount = res;
    });
  }

}
