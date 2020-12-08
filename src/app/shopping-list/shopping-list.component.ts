import { IIngredient } from './../models/ingredient';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    ingredients!: Array<IIngredient>;

    constructor(private shoppingListService: ShoppingListService) {}
    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
    }
}
