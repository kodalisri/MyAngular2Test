import {Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({selector:'[highlight]'})

export class HighLightDirective {

    constructor(private elem:ElementRef) {}

         @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

@HostListener('click') onclick() {
    alert("hello This is sricharan");
}

           private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

    
}

