import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../core/authentification/services/login.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProgramComponent implements OnInit {
  user: boolean;
  id = 'R10Rtu2Lj-g';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
    this.user = this._login.isLoggedIn();
    //console.log('111', this.user);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

}
