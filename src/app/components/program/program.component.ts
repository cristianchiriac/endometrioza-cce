import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProgramComponent implements OnInit {
  loginForm: FormGroup;

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
    this._login.loginEmail(this.loginForm.value);
  }
}
