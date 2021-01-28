import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../form.scss', './signup.component.scss']
})
export class SignupComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');
  page: number = 1;

  user: any = {
    email: null,
    name: null,
    password: null,
  }
  
  arrowIcon = faArrowLeft;

  constructor(private themeService: ThemeService) { 
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {
  }

  nextPage(){
    this.page++
  }

  previousPage(){
    this.page--
  }

}
