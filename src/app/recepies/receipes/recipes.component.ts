import { RecipeService } from './../../services/recipe.service';
import { IRecipe, Recipe } from 'src/app/models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe!: IRecipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.selectedRecipe.subscribe(
      (r: Recipe) => {
        this.selectedRecipe = r;
        console.log(this.selectedRecipe);
      });
  }
}
