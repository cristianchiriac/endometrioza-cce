import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { FirebaseService } from './core/authentification/services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ProgramComponent } from './pages/program/program.component';
import { BeginHereComponent } from './pages/begin-here/begin-here.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './core/authentification/register/register.component';
import { LoginComponent } from './core/authentification/login/login.component';
import { ForgotPasswordComponent } from './core/authentification/forgot-password/forgot-password.component';
import { SharedModule } from './shared/shared.modules';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProgramComponent,
    BeginHereComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent]

})
export class AppModule { }
