import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipes-card",
  templateUrl: "./recipes-card.component.html"
})
export class RecipesCardComponent {
  @Input() recipe: any;
  @Input() offer: string;
  @Input("bgcolor") background_color:string;
  @Input() type:number;
  @Output() onAddToFab:EventEmitter<any> = new EventEmitter<any>();
  @Output() onRemoveFromFab:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.recipe = {};
    console.log("Recipe card constructor");
  }


  ngOnInit(): void {
   console.log("Recipe card Ng On Init");
    
  }
  handleFavBtn(){
      console.log("Yes Fab clicked");
      this.onAddToFab.emit(this.recipe);
  }
  handleRemoveBtn(){
    console.log("Yes remove clicked");
    this.onRemoveFromFab.emit(this.recipe);
}
}
