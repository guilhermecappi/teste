import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');

  menuOpened: boolean = false;

  checkIcon = faCheck

  constructor(private themeService: ThemeService) {
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {}

  openMenu(){
    this.menuOpened = !this.menuOpened
  }
}
