import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProgramComponent implements OnInit {
  user: boolean;

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
    this.user = this._login.isLoggedIn();
    console.log('111', this.user);
  }

}
