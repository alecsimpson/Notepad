import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class.highlight') isHighlighted= false;

  @HostListener('document:click', ['$event']) toggleOpen() {
    this.isHighlighted = this.elRef.nativeElement.contains(event.target) ? !this.isHighlighted : false;
  }

  constructor(private elRef: ElementRef) {}
}
