import { GamesService } from './../../shared/games.service';
import { Game } from 'src/app/shared/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-create-page',
  templateUrl: './game-create-page.component.html',
  styleUrls: ['./game-create-page.component.css']
})
export class GameCreatePageComponent implements OnInit {
newGame: Game = new Game();

  constructor(private gamesService: GamesService ) { }

  ngOnInit() {
  }
  addNewGame(game) {
    this.gamesService.postGame(game).subscribe(data => console.log(data));
  }
}
