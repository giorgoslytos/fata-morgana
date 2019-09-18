import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plate } from '../shared/plate.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  plates: Array<Plate>;

  constructor() {}

  ngOnInit() {
    console.log('home component initialized!');
  }

  ngOnDestroy() {
    console.log('home component destroyed!');
  }
}
