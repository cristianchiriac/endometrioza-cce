import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getListings().subscribe(
      listing => console.log('xxxx', listing)
    );
  }

}
