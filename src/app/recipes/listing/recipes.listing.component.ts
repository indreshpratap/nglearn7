import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes-listing",
  templateUrl: "./recipes-listing.component.html",
  styleUrls: ["./recipes-listing.component.css"]
})
export class RecipesListingComponent {
  recipes;
  favRecipes;
  constructor() {
    this.recipes = [
      {
        title: "Recipes 1",
        description: " lsfskdjfl  lfdskj l",
        image: "http://via.placeholder.com/350x150",
        ingredients: ["Item 1", "Item 2", "Item 3"]
      },
      {
        title: "Recipes 2",
        description: " lsfskdjfl  lfdskj l",
        image: "http://via.placeholder.com/350x150",
        ingredients: ["Item 1", "Item 2", "Item 3"]
      },
      {
        title: "Recipes 3",
        description: " lsfskdjfl  lfdskj l",
        image: "http://via.placeholder.com/350x150",
        ingredients: ["Item 1", "Item 2", "Item 3"]
      }
    ];

    this.favRecipes = [
      {
        title: "Recipes 3",
        description: " lsfskdjfl  lfdskj l",
        image: "http://via.placeholder.com/350x150",
        ingredients: ["Item 1", "Item 2", "Item 3"]
      }
    ];
  }

  addToFab(data) {
    console.log("Received request for ", data);
    this.favRecipes.push(data);
  }
  removeFromFab(item) {
    let indx = this.favRecipes.indexOf(item);
    if (indx > -1) {
      this.favRecipes.splice(indx, 1);
    }
  }
}
