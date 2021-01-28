import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');

  userIcon = faUser;

  constructor(private themeService: ThemeService) { 
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme);
  }

  ngOnInit(): void {
    
  }

}
