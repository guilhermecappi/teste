import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.scss', '../form.scss']
})
export class ForgotPwComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');
  
  arrowIcon = faArrowLeft;

  user: any = {
    email: null,
  }

  constructor(
    private themeService: ThemeService,
    private location: Location,
    ) { 
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
