import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/authentification/services/auth/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { BeginHereComponent } from './pages/begin-here/begin-here.component';
import { RegisterComponent } from './core/authentification/register/register.component';
import { ForgotPasswordComponent } from './core/authentification/forgot-password/forgot-password.component';
import { LoginComponent } from './core/authentification/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProgramModule } from './pages/program/program.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    loadChildren: './pages/program/program.module#ProgramModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'begin-here',
    component: BeginHereComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
