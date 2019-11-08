import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
@Input() game: Game;
  constructor() { }

  ngOnInit() {
  }

  noGameClicked(){
    return this.game;
  }
}
