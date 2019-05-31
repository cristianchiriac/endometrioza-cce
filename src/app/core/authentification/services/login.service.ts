import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Router } from '@angular/router';
import { MatSnackBar, MatBottomSheet } from '@angular/material';

import { SnackBarComponent } from './../../../shared/components/snack-bar/snack-bar.component';
import { BottomSheetComponent } from './../../../shared/components/bottom-sheet/bottom-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
    public snackBar: MatSnackBar,
    public bottomSheet: MatBottomSheet,
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
      .then(success => this._zone.run(() => {
        this.route.navigate(['/begin-here']);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          panelClass: ['success-message'],
          data: {
            message: 'You have successfully login!'
          }
        });
      }))
      .catch(error => this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 3000,
        panelClass: ['error-message'],
        data: {
          message: error
        }
      }));
  }


  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.afAuth.auth.currentUser.sendEmailVerification()
        .then(success => this._zone.run(() => {
          this.route.navigate([''])
          this.bottomSheet.open(BottomSheetComponent, {
            data: {
              message: 'You have successfully created a account!'
            }
          });
        }))
        .catch((error) => console.log(error)
        ));
  }



  sendPasswordResetEmail(passwordResetEmail: string) {
    this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(success => this._zone.run(() => {
        this.route.navigate(['']);
        this.bottomSheet.open(BottomSheetComponent, {
          data: {
            message: 'We sent a email to reset the password!'
          }
        });
      }))
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
      .then(success => this._zone.run(() => {
        this.route.navigate(['/begin-here']);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          panelClass: ['success-message'],
          data: {
            message: 'You have successfully login!'
          }
        });
      }))
      .catch(error => console.log(error));
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(success => this._zone.run(() => this.route.navigate(['/begin-here'])))
      .catch(error => console.log(error));
  }
}
