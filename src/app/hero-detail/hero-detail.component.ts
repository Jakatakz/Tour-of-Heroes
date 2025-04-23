import { Component,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

}
