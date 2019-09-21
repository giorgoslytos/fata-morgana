import { Component, OnInit, ViewChild, Input } from '@angular/core';
import IImage from 'src/app/shared/iimage.interface';
import Typed from 'typed.js';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {
  @ViewChild('slideshow', { static: false }) slideshow: any;
  @Input() event: Event;

  message: number;
  images: (string | IImage)[] = [
    'assets/img/slides/36530564_2100278020229329_7922602940282437632_o.jpg',
    'assets/img/slides/56347728_2288453231411806_7441544870595919872_o.jpg',
    'assets/img/slides/36472181_2100348226888975_2231396988157427712_o.jpg'
  ];

  height = '100vh';
  autoPlayInterval = 5000;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  onSlide(id: number) {
    if (this.router.url === '/' && id === 1) {
      return;
    }
    if (this.router.url === '/menu' && id === 2) {
      return;
    }
    if (this.router.url === '/contact' && id === 3) {
      return;
    } else {
      this.slideshow.goToSlide(id - 1);
      console.log(this.router.url);
    }
  }
}
