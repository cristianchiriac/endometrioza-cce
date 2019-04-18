import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
  }
  loginGoogle() {
    this._login.login();
  }

}
