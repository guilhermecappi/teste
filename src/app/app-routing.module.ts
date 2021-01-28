import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPwComponent } from './components/forms/forgot-pw/forgot-pw.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WatchComponent } from './pages/watch/watch.component';

const routes: Routes = [
  {path: '', component: GuidePageComponent},
  {path: 'watch/:programId', component: WatchComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'recover', component: ForgotPwComponent},
  {path: 'watch', redirectTo: '', component: GuidePageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
