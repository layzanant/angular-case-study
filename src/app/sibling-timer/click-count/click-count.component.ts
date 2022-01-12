import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit{

  @Input() pause = 0;
  @Input() start = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
