import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log(this.registerForm);
    const email = this.registerForm.value.email.trim();
    const password = this.registerForm.value.password;
    this.loginService.register(email, password);
  }
}
