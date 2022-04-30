import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afc-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css']
})
export class BootComponent implements OnInit {
  startTime: Date = new Date();
  startDate: Date = new Date();
  toggleButton = 'Off';
  radioButton = 'Middle';

  maxRating = 10;
  currentRating = 5;
  ratingIsReadonly = false;

  overStarRating: number;
  percentRating: number;

  hoveringOver(value: number): void {
    this.overStarRating = value;
    this.percentRating = (value / this.maxRating) * 100;
  }

  resetStar(): void {
    this.overStarRating = void 0;
  }

  constructor() {}

  ngOnInit() {}
}
