import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipes-card",
  templateUrl: "./recipes-card.component.html"
})
export class RecipesCardComponent {
    @Input()
    recipe:any;
    constructor(){
        this.recipe = {};
    }
}
