import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-menu-slides-content',
  templateUrl: './menu-slides-content.component.html',
  styleUrls: ['./menu-slides-content.component.scss']
})
export class MenuSlidesContentComponent implements OnInit {
  typedOptions = {
    strings: ['Το μενού μας...'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: true,
    // cursorChar: '|',
    loop: false
  };
  constructor() {}

  ngOnInit() {
    const typed = new Typed('.typed-element', this.typedOptions);
  }
}
