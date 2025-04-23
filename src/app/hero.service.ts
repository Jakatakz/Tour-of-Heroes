import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _messageService: MessageService;

  constructor(messageService: MessageService) {
    this._messageService = messageService;
   }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this._messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
