import {
  Component,
  Input,
  SimpleChanges,
  AfterViewInit,
  OnInit,
  OnDestroy,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() tanveer;

  constructor() {
    console.log("Notes constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges", changes);
  }
  ngOnInit() {
    console.log("Notes ngOnInit");
  }

  ngAfterViewInit() {
    console.log("Everyting is loaded now ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("Notes destroyed");
  }
}
