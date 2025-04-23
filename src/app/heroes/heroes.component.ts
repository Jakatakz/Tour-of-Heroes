import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit { // angular still does ngOnInit without OnInit imports but its best practice to include this anyway: type checking, clear intent, catch  typos/missing method definitions
  private _heroService: HeroService;
  private _messageService: MessageService;

  constructor(heroService: HeroService, messageService: MessageService) {
    this._heroService = heroService;
    this._messageService = messageService;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: selectedHero: id=${hero.id}`); // template literal, needs backticks.
  }

  getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
