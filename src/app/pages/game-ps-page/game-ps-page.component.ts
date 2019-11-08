import { Game } from 'src/app/shared/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-ps-page',
  templateUrl: './game-ps-page.component.html',
  styleUrls: ['./game-ps-page.component.css']
})
export class GamePsPageComponent implements OnInit {
game: Game;
  constructor() { }

  ngOnInit() {
  }
  getDetailsGame(detailsGame) {
    this.game = detailsGame;
  }
}
