import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentPlaceholder]'
})
export class ComponentPlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
