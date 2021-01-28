import { Component, OnInit } from '@angular/core';
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../form.scss']
})
export class LoginComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');
  keepLogin: boolean = false;

  user: any = {
    email: null,
    password: null
  }

  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  checkIcon = faCheck;

  constructor(private themeService: ThemeService) { 
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  showPass(input){ 
    if(input.type == "password"){
      input.type = "text"
    }
    else if(input.type == "text"){
      input.type = "password"
    }
  }

  setKeepLogin(){
    this.keepLogin = !this.keepLogin
  }
}
