import { GamesService } from './../../shared/games.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Game } from 'src/app/shared/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gamesList: Game[];
  @Output() detailsGame = new EventEmitter<Game>();


  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    return this.gamesList = this.gamesService.allGames;
  }

  showDetails(i) {
    this.detailsGame.emit(this.gamesList[i]);
  }

}
