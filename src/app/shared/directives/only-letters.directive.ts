import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const nativeVal = this.el.nativeElement.value;

    this.el.nativeElement.value = nativeVal.replace(/[^a-zA-Z\s]/g, '');
    if (nativeVal !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }


}
