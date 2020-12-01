import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Array<IRecipe>;
  constructor(private recipeService: RecipeService){

    this.recipes = this.recipeService.getRecipes();

  }
}
