import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://comps.canstockphoto.com/original-italian-recipe-sign-or-stamp-image_csp47296770.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://comps.canstockphoto.com/original-italian-recipe-sign-or-stamp-image_csp47296770.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedItem(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
