import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  static apiUrl = 'https://wild-games.herokuapp.com/api/v1';

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

  allGames: Game[]; // Get GAMES from mock

// Get data api in allGames
  getGameApi(): Observable<Game[]> {
    return this.http.get(GamesService.apiUrl).pipe(
      map((data: Game[]) => this.allGames = data)
    );
  }

  // Delete game
  deleteGame(id: number) {
    return this.http.delete(GamesService.apiUrl + 'delete/' + id);
  }


}
