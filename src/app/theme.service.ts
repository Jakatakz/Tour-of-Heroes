import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  private _isDarkMode = new BehaviorSubject<boolean>(false);

  // you don't technically need this, but you should, the following as why:
  // expose as observable for encapsulation and safety. if you expose _isDarkMode, any component can call .next() on it and modify it. 
  // this way, a component can only subscribe but not change the value directly.
  // basically readonly observable.
  isDarkMode$ = this._isDarkMode.asObservable();

  toggleTheme() {
    const currentTheme = this._isDarkMode.getValue();
    this._isDarkMode.next(!currentTheme);
    if (!currentTheme) {
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }
  }


  setDarkMode(isDark: boolean) {
    this._isDarkMode.next(isDark);
  }
}
