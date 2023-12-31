import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
  ) { }

  @Input('appTimes') set render(time: number){
    for(let i = 0; i < time;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef,{});
    }
  }

}
