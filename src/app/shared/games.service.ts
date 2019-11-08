import { GAMES } from './../games-mock';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  allGames: Game[] = GAMES; // Get GAMES from mock

  constructor() { }
}
