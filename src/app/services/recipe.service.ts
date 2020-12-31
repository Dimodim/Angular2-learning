import { IRecipe } from './../models/recipe';
import { ShoppingListService } from './shopping-list.service';
import { IIngredient } from './../models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipesChanged = new Subject<IRecipe[]>();
    constructor(private shoppingListService: ShoppingListService) {}
    recipes = [
        new Recipe({
            ingredients: [
                { name: 'some name of ingredient', amount: 2 },
                { name: 'some name of ingredient 2', amount: 3 },
                { name: 'some name of ingredient 3', amount: 4 },
            ],
            name: 'some name',
            description: 'some description',
            imagePath:
                'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg',
        }),
        new Recipe({
            ingredients: [
                { name: 'some name of ingredient', amount: 2 },
                { name: 'some name of ingredient 2', amount: 3 },
                { name: 'some name of ingredient 3', amount: 4 },
            ],
            name: 'some Other name',
            description: 'some Other description',
            imagePath:
                'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg',
        }),
    ];

    getRecipes(): Array<Recipe> {
        return this.recipes;
    }
    addIngredientsToShoppingList(ingredients: Array<IIngredient>): void {
        this.shoppingListService.addIngredients(ingredients);
    }
    getRecipeById(index: number): Recipe {
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
    }
    updateRecipe(index: number, newRecipe: Recipe): void {
        this.recipes[index] = newRecipe;
    }
    deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
