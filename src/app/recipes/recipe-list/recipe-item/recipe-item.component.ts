import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass'],
})
export class RecipeItemComponent implements OnInit {
  @Output('select') select = new EventEmitter<void>();
  @Input()
  recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  onSelectItem() {
    this.select.emit();
  }
}
