import { Component, OnInit } from '@angular/core';
import { faCheck, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOpened: boolean = false;

  checkIcon = faCheck

  storedTheme: any = localStorage.getItem('theme-color');

  constructor(private themeService: ThemeService) {
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {}

  openMenu(){
    this.menuOpened = !this.menuOpened
  }
}
