import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() eventClicked = new EventEmitter<number>();

  color: string;
  href: string;
  onham = false;
  currentUrl: string;
  exitBtn = false;

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled

    const verticalOffset = window.pageYOffset;

    if (verticalOffset >= window.innerHeight - 60) {
      this.color = '#111';
    } else {
      this.color = 'transparent';
    }
  }
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}

  onhamClick() {
    this.onham = !this.onham;
    this.exitBtn = !this.exitBtn;
  }

  onClickedOutside(e: Event) {
    if (this.onham) {
      this.onham = !this.onham;
      this.exitBtn = !this.exitBtn;
    }
  }

  onSlideClick(id: number) {
    this.eventClicked.emit(id);
  }
}
