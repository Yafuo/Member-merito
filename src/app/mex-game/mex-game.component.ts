import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mex-game',
  templateUrl: './mex-game.component.html',
  styleUrls: ['./mex-game.component.scss']
})
export class MexGameComponent implements OnInit {

  tableUrl = 'https://ie2-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/gameView/tableBackground.png?v30';
  counter = 14;
  isHide = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown() {
    this.counter = this.counter - 1 < 0 ? 14 : this.counter - 1;
  }

}
