import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mex-game',
  templateUrl: './mex-game.component.html',
  styleUrls: ['./mex-game.component.scss']
})
export class MexGameComponent implements OnInit {

  tableUrl = 'https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/gameView/tableBackground.png?v30';
  betButtonUrl = 'https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/buttons/backBetButtonLong.png?v30';
  logoUrl = 'https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/gameView/betfairLogo.png?v30';
  cardsUrl = ['https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/cards/hearts/heart_9.png?v30','https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/gameView/cardBack.png?v30']
  mockData = {"channel":{"status":"RUNNING","game":{"round":3,"bettingWindowTime":18,"bettingWindowPercentageComplete":0,"gameData":{"objects":[{"description":"12 Points","status":"HIT","properties":[{"name":"Card 1","value":"23"},{"name":"Card 2","value":"40"}],"name":"Player 1"},{"description":"20 Points","status":"STOOD","properties":[{"name":"Card 1","value":"10"},{"name":"Card 2","value":"51"}],"name":"Player 2"},{"description":"13 Points","status":"IN_PLAY","properties":[{"name":"Card 1","value":"2"},{"name":"Card 2","value":"11"}],"name":"Player 3"},{"description":"14 Points","status":"IN_PLAY","properties":[{"name":"Card 1","value":"6"},{"name":"Card 2","value":"32"}],"name":"Player 4"},{"description":"7 Points","status":"IN_PLAY","properties":[{"name":"Card 1","value":"6"},{"name":"Card 2","value":"NOT AVAILABLE"}],"name":"Dealer"}]},"markets":{"markets":[{"status":"SUSPENDED_GAME_PLAYING","commissionRate":4.0,"marketType":"ANY_NUMBER_OF_WINNERS","selections":{"selections":[{"name":"Player 1","status":"IN_PLAY","amountMatched":0.0,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658443},{"name":"Player 2","status":"IN_PLAY","amountMatched":29.04,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658444},{"name":"Player 3","status":"IN_PLAY","amountMatched":0.0,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658445},{"name":"Player 4","status":"IN_PLAY","amountMatched":0.0,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658446},{"name":"Dealer wins or ties all","status":"IN_PLAY","amountMatched":4.16,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658447},{"name":"One or more has 5 cards","status":"IN_PLAY","amountMatched":13.42,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658448},{"name":"All cards unique","status":"LOSER","amountMatched":12.44,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658449},{"name":"Only one has 21pts","status":"IN_PLAY","amountMatched":24.46,"bestAvailableToBackPrices":{},"bestAvailableToLayPrices":{},"id":658450}],"type":"MainBets"},"id":28974652,"nextId":28974700}],"currency":"GBP"},"id":61063051},"id":1444082,"name":"Turbo Exchange BlackJack","gameType":"BLACKJACK"}};
  players = this.mockData.channel.game.gameData.objects.slice(0,-1);
  dealer = this.mockData.channel.game.gameData.objects[4];
  conditions = ['Dealer wins or ties all', 'All cards unique', 'Only one has 21pts', 'One or more has 5 cards'];
  chipButtons = [{index: 1, value: 4},{index: 2, value: 8},{index: 3, value: 12},{index: 4, value: 16}];

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

  getChipButtonImg(index: number) {
    const prefix = 'https://ie1-gfebf.cdnppb.net/mexchangeblackjack/turbo/30/assets/buttons/chipButton';
    const suffix = '.png?v30';
    return prefix + index + suffix;
  }

}
