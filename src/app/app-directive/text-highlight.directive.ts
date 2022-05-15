import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[textHighlight]'
})
export class TextHighlightDirective {

  constructor(private readonly  elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "red");
  }

  @HostListener('mouseenter', ['$event'])
  underline(event: Event): void{
    this.modifyTextDecorationOfElement(event);
  }

  @HostListener('mouseleave', ['$event'])
  removeUnderline(event: Event): void {
    this.modifyTextDecorationOfElement(event);
  }

  private modifyTextDecorationOfElement(event: Event): void{
    event.type === "mouseenter" ?
      this.elementRef.nativeElement.style.textDecoration = "underline solid red 0.17em" :
      this.elementRef.nativeElement.style.textDecoration = null;
  }
}
