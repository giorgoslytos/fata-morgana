import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  color: string;
  href: string;
  onham = false;
  currentUrl: string;
  exitBtn = false;
  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled

    const verticalOffset = window.pageYOffset;

    // if (
    //   this.currentUrl === '/contact' ||
    //   this.currentUrl === '/menu' ||
    //   this.currentUrl === '/reservation' ||
    //   this.currentUrl === '/events'
    // ) {
    //   this.color = '#111';
    // } else {
    if (verticalOffset >= window.innerHeight - 60) {
      this.color = '#111';
    } else {
      this.color = 'transparent';
    }
    // }
  }

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl = event.url; // event.url has current url
    //     if (
    //       event.url === '/contact' ||
    //       event.url === '/menu' ||
    //       event.url === '/reservation' ||
    //       event.url === '/events'
    //     ) {
    //       this.color = '#111';
    //     } else {
    //       this.color = 'transparent';
    //     }
    //   }
    // });
  }

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
}
