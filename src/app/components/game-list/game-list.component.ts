import { GamesService } from './../../shared/games.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Game } from 'src/app/shared/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() listGames: Game[];
  gamesList: Game[];
  @Output() detailsGame = new EventEmitter<Game>();


  constructor() { }

  ngOnInit() {
  }



  showDetails(i) {
    this.detailsGame.emit(this.gamesList[i]);
  }

}
