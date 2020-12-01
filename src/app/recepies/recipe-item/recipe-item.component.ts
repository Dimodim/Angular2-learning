import { RecipeService } from './../../services/recipe.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe!: IRecipe;
  constructor(private recipeService: RecipeService) { }

  onSelected(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
