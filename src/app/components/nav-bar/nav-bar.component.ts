import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: firebase.User;
  constructor(
    private _loginService: LoginService,
    public router: Router
  ) {}

  ngOnInit() {
    this._loginService.getLoggedInUser()
      .subscribe(user => {
        // console.log(user);
        this.user = user;
      });
  }

  logoutUser() {
    this._loginService.logout();
    console.log('Log');
  }


  // test() {
  //   this.db.collection('listings').valueChanges().subscribe(
  //     listing => console.log('xxxx', listing)
  //   );
  // }

}
