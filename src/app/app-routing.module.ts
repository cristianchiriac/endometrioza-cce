import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProgramComponent} from './components/program/program.component';
import {BeginHereComponent} from './components/begin-here/begin-here.component';
import {RegisterComponent} from './components/program/register/register.component';
import {ForgotPasswordComponent} from './components/program/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'program',
    component: ProgramComponent
  },
  {
    path: 'begin-here',
    component: BeginHereComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
