import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserOptionsComponent } from './components/user/user-options/user-options.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { WatchComponent } from './pages/watch/watch.component';
import { ChannelService } from './services/channel.service';
import { MenuComponent } from './components/menu/menu.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { SignupComponent } from './components/forms/signup/signup.component';
import { ForgotPwComponent } from './components/forms/forgot-pw/forgot-pw.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/forms/login/login.component';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuideComponent,
    UserOptionsComponent,
    UserDetailsComponent,
    WatchComponent,
    GuidePageComponent,
    LoginComponent,
    SignupComponent,
    ForgotPwComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [ChannelService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
