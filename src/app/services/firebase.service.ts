 import { Injectable } from '@angular/core';
 import {AngularFirestore} from '@angular/fire/firestore';
 import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  listings: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  getListings() {
    // this.listings = this.db.collection('listings').snapshotChanges();
    return this.db.collection('listings').get();
  }
}
