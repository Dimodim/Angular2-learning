import { IIngredient } from './../models/ingredient';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    ingredientsChanged = new Subject<IIngredient[]>();
    isBeingEdited = new Subject<number>();
    private ingredients: Array<IIngredient> = [
        { name: 'some ingredient 12', amount: 2 },
        { name: 'some ingredient 13', amount: 1 },
        { name: 'some ingredient 14', amount: 5 },
    ];
    constructor() {}
    getIngredients(): Array<IIngredient> {
        return this.ingredients;
    }
    getIngredient(index: number): IIngredient {
        return this.ingredients[index];
    }
    addIngredient(ingredient: IIngredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Array<IIngredient>): void {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
