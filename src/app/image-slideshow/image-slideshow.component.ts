import { Component, OnInit } from '@angular/core';
import IImage from 'src/app/shared/iimage.interface';
import Typed from 'typed.js';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {
  images: (string | IImage)[] = [
    'assets/img/slides/36530564_2100278020229329_7922602940282437632_o.jpg',
    'assets/img/slides/36472181_2100348226888975_2231396988157427712_o.jpg',
    'assets/img/slides/56347728_2288453231411806_7441544870595919872_o.jpg'
  ];

  height = '100vh';
  minHeight: string;
  arrowSize = '30px';
  showArrows = true;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 5000;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = true;
  dotColor = '#FFF';
  showCaptions = true;
  captionColor = '#FFF';
  captionBackground = 'rgba(0, 0, 0, .35)';
  lazyLoad = false;
  hideOnNoSlides = false;
  width = '100%';
  fullscreen = false;
  enableZoom = false;
  enablePan = false;

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
