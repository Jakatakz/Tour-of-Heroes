import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
  private _themeService: ThemeService;
  constructor(themeService: ThemeService) {
    this._themeService = themeService;
  }
  
  toggle(): void {
    this._themeService.toggleTheme();
  }

}
