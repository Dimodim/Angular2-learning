import { Recipe } from 'src/app/models/recipe';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor() { }
selectedRecipe = new EventEmitter<Recipe>();

getRecipes(): Array<Recipe>{
  return  [
    new Recipe({name: 'some name', description: 'some description', imagePath: 'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg'}),
    new Recipe({name: 'some Other name', description: 'some Other description', imagePath: 'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg'})
  ];
}
}
