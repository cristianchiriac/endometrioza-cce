import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
    private _zone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
      .catch(error => console.log(error));
  }


  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.afAuth.auth.currentUser.sendEmailVerification()
        .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
        .catch((error) => console.log('Error: ' + error)
        ));
  }



  sendPasswordResetEmail(passwordResetEmail: string) {
    this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
      .catch(error => console.log(error));
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(success => this._zone.run(() => this.route.navigate([''])))
      .catch(error => console.log(error));
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
      .catch(error => console.log(error));
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
      .catch(error => console.log(error));
  }
}
