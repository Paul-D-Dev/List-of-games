import { GamesService } from './../../shared/games.service';
import { Game } from 'src/app/shared/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-ps-page',
  templateUrl: './game-ps-page.component.html',
  styleUrls: ['./game-ps-page.component.css']
})
export class GamePsPageComponent implements OnInit {
  listGames: Game[];
  game: Game;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGamesMock();
  }

  getGamesMock() {
    this.listGames = this.gamesService.allGames;
  }
  getDetailsGame(detailsGame) {
    this.game = detailsGame;
  }
}
