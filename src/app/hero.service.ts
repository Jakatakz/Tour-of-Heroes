import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _messageService: MessageService;
  private _http: HttpClient;
  private heroesUrl = 'api/heroes';

  constructor(messageService: MessageService, http: HttpClient) {
    this._messageService = messageService;
    this._http = http;
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }
}
