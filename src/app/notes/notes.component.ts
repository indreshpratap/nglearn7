import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() {
    console.log("Notes constructor");
   }

  ngOnInit() {
    console.log("Notes ngOnInit");
  }

  ngOnDestroy(): void {
   console.log("Notes destroyed");
    
  }

}
