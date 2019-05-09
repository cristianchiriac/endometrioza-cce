import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  loginGoogle() {
    this._login.loginGoogle();
  }

  loginFb() {
    this._login.loginFacebook();
  }


  onSubmit() {
    console.log(this.loginForm);
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this._login.loginEmail(email, password);
  }

}
