import { Component, OnInit } from '@angular/core';
import { faCheck, faEllipsisV, faMoon, faUser, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  optOpened: boolean = false;
  storedTheme: any = localStorage.getItem('theme-color');

  configIcon = faEllipsisV;
  moonIcon = faMoon;
  checkIcon = faCheck;

  constructor(private themeService: ThemeService) {
    if(localStorage.getItem('theme-color') == null){
      localStorage.setItem('theme-color', 'dark-theme');
      this.storedTheme = localStorage.getItem('theme-color');
      themeService.sendTheme(this.storedTheme);
    }
   }

  ngOnInit(): void {
  }
  
  openOptions(){
    this.optOpened = !this.optOpened;
  }

  setTheme(){
    if(this.storedTheme == 'dark-theme'){
      localStorage.setItem('theme-color', 'light-theme');
      this.storedTheme = localStorage.getItem('theme-color');
    }
    else{
      localStorage.setItem('theme-color', 'dark-theme');
      this.storedTheme = localStorage.getItem('theme-color');
    }
    this.themeService.sendTheme(this.storedTheme);
  }
}
