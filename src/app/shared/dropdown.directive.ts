import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirect]'
})
export class DropdownDirective {
  @HostBinding('class.responsive') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen() {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
    console.log('wtf' + this.isOpen);
  }
  constructor(private elRef: ElementRef) {}
}
