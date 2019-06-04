import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { FirebaseService } from './core/authentification/services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BeginHereComponent } from './pages/begin-here/begin-here.component';
import { SharedModule } from './shared/shared.modules';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { BottomSheetComponent } from './shared/components/bottom-sheet/bottom-sheet.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthentificationModule } from './core/authentification/authentification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthentificationModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BeginHereComponent,
    ContactComponent
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent, BottomSheetComponent]

})
export class AppModule { }
