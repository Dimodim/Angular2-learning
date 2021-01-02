import { RecipeService } from './../services/recipe.service';
import { Recipe } from './../models/recipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService
    ) {}

    storeRecipes(): void {
        const recipes = this.recipeService.getRecipes();
        this.httpClient
            .put(
                'https://recipebook-174e7-default-rtdb.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe();
    }

    getRecipes(): Observable<Array<Recipe>> {
        return this.httpClient
            .get<Array<Recipe>>(
                'https://recipebook-174e7-default-rtdb.firebaseio.com/recipes.json'
            )
            .pipe(
                map((recipes) => {
                    return recipes.map((recipe) => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients
                                ? recipe.ingredients
                                : [],
                        };
                    });
                }),
                tap((recipes) => {
                    this.recipeService.onFetchRecipes(recipes);
                })
            );
    }
}
