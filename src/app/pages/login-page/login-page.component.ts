import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');
  containerState: string = 'login'

  constructor(private themeService: ThemeService) {
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
   }

  ngOnInit(): void {
  }

  switchTab(){
    if(this.containerState == 'login'){
      this.containerState = 'signup'
    }
    else if(this.containerState == 'signup'){
      this.containerState = 'login'
    }
  }

}
