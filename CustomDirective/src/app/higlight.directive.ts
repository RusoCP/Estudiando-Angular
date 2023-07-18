import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
  host: {'(click)':'aplicar()'}
})
export class HiglightDirective {

  @Input()
  numero = 0;
  @Input()
  divisible = 1;

  private elem: ElementRef | undefined;

  constructor(private elemento: ElementRef) {
    this.elem = elemento;
  }

  aplicar() {
    if(this.numero % this.divisible === 0) {
      if(this.elem) {
        this.elem.nativeElement.style.color = 'green'
      }
    } else {
      if(this.elem) {
        this.elem.nativeElement.style.color = 'red'
      }
    }
  }

}
