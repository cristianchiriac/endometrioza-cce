import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[a-z]{2,4}$/)
      ])
    });
  }

  onSubmit() {
    console.log(this.resetPasswordForm);
    const email = this.resetPasswordForm.value.email;
    this._login.sendPasswordResetEmail(email);
  }
}
