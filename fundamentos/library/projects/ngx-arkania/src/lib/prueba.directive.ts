import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[libPrueba]'
})
export class PruebaDirective {


  // constructor(private el:ElementRef,  private renderer:Renderer2) {
  //   renderer.setStyle(el.nativeElement,'fontSize','50px');
  //   renderer.setStyle(el.nativeElement,'color','blue');
  //   renderer.setStyle(el.nativeElement,'border','2px solid blue');
  // }

  @HostBinding('class') classes = [
    'bc-button-primary',
    'bc-button'
  ].join(' ');

  //agregar clase personalizada myClass si la variable toggle es true
  @HostBinding('class.myClass') toggle: boolean = false;

  @HostListener('mouseleave')
  @HostListener('mouseover')
  onMouseOver() {
  this.toggle = !this.toggle;
  }

}
