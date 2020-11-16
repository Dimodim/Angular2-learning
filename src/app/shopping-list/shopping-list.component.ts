import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients: Array<IIngredient> = [{amount: 3, name: 'some name'}]

}
