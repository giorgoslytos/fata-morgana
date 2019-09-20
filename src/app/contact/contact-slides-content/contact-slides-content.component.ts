import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-contact-slides-content',
  templateUrl: './contact-slides-content.component.html',
  styleUrls: ['./contact-slides-content.component.scss']
})
export class ContactSlidesContentComponent implements OnInit {
  typedOptions = {
    strings: ['Που θα μας βρείτε...'],
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
