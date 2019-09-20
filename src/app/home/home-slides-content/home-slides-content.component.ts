import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-slides-content',
  templateUrl: './home-slides-content.component.html',
  styleUrls: ['./home-slides-content.component.scss']
})
export class HomeSlidesContentComponent implements OnInit {
  typedOptions = {
    strings: ['Pub γαστρονομίας.', 'Μουσική.', 'Δράσεις.'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: true,
    // cursorChar: '|',
    loop: true
  };
  constructor() {}

  ngOnInit() {
    const typed = new Typed('.typed-element', this.typedOptions);
  }
}
