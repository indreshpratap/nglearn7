import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[highlight]" // attribute selector use []
})
export class HighlightDirective {
  //ElementRef is a reference of the element on which directive is applied.
  // Inside ElementRef there a nativeElement variable which represents the exact javascript object of that element
  constructor(private element: ElementRef) {
    console.log("Directive applied", element);
    element.nativeElement.style.backgroundColor = "yellow";
  }
}
