import { RecipeService } from './../../../services/recipe.service';
import { IRecipe } from 'src/app/models/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  @Input() selectedRecipe!: IRecipe;

  constructor(private recipeService: RecipeService) {


  }
  addIngredientsToShoppingList(): void{
  this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
}

}
