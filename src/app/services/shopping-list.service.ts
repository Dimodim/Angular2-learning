import { IIngredient } from './../models/ingredient';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    private ingredients: Array<IIngredient> = [
        { name: 'some ingredient 12', amount: 2 },
        { name: 'some ingredient 13', amount: 1 },
        { name: 'some ingredient 14', amount: 5 },
    ];
    constructor() {}
    getIngredients(): Array<IIngredient> {
        return this.ingredients;
    }
    addIngredient(ingredient: IIngredient): void {
        this.ingredients.push(ingredient);
    }
    addIngredients(ingredients: Array<IIngredient>): void {
        this.ingredients.push(...ingredients);
    }
}
