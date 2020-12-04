import { ShoppingListService } from './shopping-list.service';
import { IIngredient } from './../models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();
constructor(private shoppingListService: ShoppingListService) { }

getRecipes(): Array<Recipe>{
  return  [
    new Recipe(
      {
        ingredients:[
          {name: 'some name of ingredient', amount: 2},
          {name: 'some name of ingredient 2', amount: 3},
          {name: 'some name of ingredient 3', amount: 4}],
        name: 'some name',
        description: 'some description',
        imagePath: 'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg'
      }),
    new Recipe(
      {
        ingredients:[
          {name: 'some name of ingredient', amount: 2},
          {name: 'some name of ingredient 2', amount: 3},
          {name: 'some name of ingredient 3', amount: 4}],
        name: 'some Other name',
        description: 'some Other description',
        imagePath: 'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg'})
  ];
}
 addIngredientsToShoppingList(ingredients: Array<IIngredient>): void{
  this.shoppingListService.addIngredients(ingredients);
 }
}
