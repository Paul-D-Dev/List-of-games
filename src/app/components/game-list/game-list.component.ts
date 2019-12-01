import { GamesService } from './../../shared/games.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Game } from 'src/app/shared/game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() gamesList: Game[];
  @Output() detailsGame = new EventEmitter<Game>();

  id: SVGAnimatedNumber ;
  gameListByUD: Game[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
  }

  showDetails(i) {
    this.detailsGame.emit(this.gamesList[i]);
  }

  getGameByUserID() {
    this.gamesService.getGameByUserID(this.id)
    .subscribe((data) => this.gameListByUD = data);
  }

  deleteGame(id) {
    this.gamesList.splice(this.gamesList.indexOf(id), 1);
    this.gamesService.deleteGame(id).subscribe();
  }
}
