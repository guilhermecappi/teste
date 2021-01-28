import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.scss']
})
export class GuidePageComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');

  searchIcon = faSearch;
  filterIcon = faBars;

  constructor(private themeService: ThemeService){
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {
  }

}
