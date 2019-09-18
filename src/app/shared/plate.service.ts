import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Plate } from './plate.model';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  plate: Plate;

  constructor(private firestore: AngularFirestore) {}

  getPlate() {
    return this.firestore.collection('plates').snapshotChanges();
  }
}
