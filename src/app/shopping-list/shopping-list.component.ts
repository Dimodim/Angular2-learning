import { IIngredient } from './../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients: Array<IIngredient> = [{amount: 3, name: 'some name'}]
  OnAddedIngredient(ingredient: IIngredient): void {
    this.ingredients.push(ingredient);
  }
}
