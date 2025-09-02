import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaptial]'
})
export class CaptialDirective {

  constructor (public _elementref:ElementRef){}
  @HostListener('keyup')
  change(){
    this._elementref.nativeElement.value=this._elementref.nativeElement.value.touppercase();
  }
}
