import { Component,Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero: Hero | undefined;
  private _route: ActivatedRoute;
  private _heroService: HeroService;
  private _location: Location;

  constructor(route: ActivatedRoute, heroService: HeroService, location: Location) {
    this._route = route;
    this._heroService = heroService;
    this._location = location;
  }
  
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created
    // paramMap is a dictionary of route parameter values extracted from the URL. 
    const id = Number(this._route.snapshot.paramMap.get('id')); 
    console.log("this._route.snapshop = " + this._route.snapshot);
    console.log("this._route.snapshot.paramMap = " + this._route.snapshot.paramMap);
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this._location.back();
  }

  save(): void {
    if (this.hero) {
      this._heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }


}
