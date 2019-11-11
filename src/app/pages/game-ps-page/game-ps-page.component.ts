import { GamesService } from './../../shared/games.service';
import { Game } from 'src/app/shared/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-ps-page',
  templateUrl: './game-ps-page.component.html',
  styleUrls: ['./game-ps-page.component.css']
})
export class GamePsPageComponent implements OnInit {
game: Game;
listGames: Game[];
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    return this.gamesService.getGameApi()
    .subscribe((data) => this.listGames = data);
  }

  //   sendListGame() {
    //     this.listGames = this.gamesService.getGameApi();
    //     deletaGame(game); {
      //   this.gamesService.deleteGame(game).subscribe();
      // }

  // Récupère l'output de GameList
    getDetailsGame(detailsGame) {
      this.game = detailsGame;
    }
}
