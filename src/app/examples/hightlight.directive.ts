import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[highlight]" // attribute selector use []
})
export class HighlightDirective {

  @Input("highlight")
  bgcolor:string;
  //ElementRef is a reference of the element on which directive is applied.
  // Inside ElementRef there a nativeElement variable which represents the exact javascript object of that element
  constructor(private element: ElementRef) {
    console.log("Directive applied", element);
  
  }

  @HostListener("mouseenter")
  onEnter(){
    // console.log("Mouse entered");
    this.element.nativeElement.style.backgroundColor = this.bgcolor||"yellow";
  }

  @HostListener("mouseout")
  onOut(){
    // console.log("Mouse entered");
    this.element.nativeElement.style.backgroundColor = '';
  }
}
