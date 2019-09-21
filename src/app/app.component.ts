import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

  constructor() {}

  ngOnInit() {}
}
