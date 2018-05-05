import {
  Component,
  Input,
  SimpleChanges,
  AfterViewInit,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterContentInit,
  ViewChild,
  ViewChildren,
  QueryList
} from "@angular/core";
import { HighlightDirective } from "../examples/hightlight.directive";
import { HelloService } from "../services/hello.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent
  implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {
  @Input() tanveer;

  @ViewChild("savebtn") savebtnref;
  @ViewChildren(HighlightDirective) buttons: QueryList<HighlightDirective>;
  
  constructor(private hello:HelloService) {
    console.log("Notes constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges", changes);
  }
  ngOnInit() {
    this.hello.sayHello();
    console.log("save button ref", this.savebtnref.nativeElement.innerHTML);
    console.log("all buttons", this.buttons);

    console.log("Notes ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContent Init");
  }
  ngAfterViewInit() {
    console.log("Everyting is loaded now ngAfterViewInit");
    console.log("all buttons after view init", this.buttons);
  }

  ngOnDestroy(): void {
    console.log("Notes destroyed");
  }
}
