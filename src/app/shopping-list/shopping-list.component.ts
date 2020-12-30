import { IIngredient } from './../models/ingredient';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients!: Array<IIngredient>;
    private subscription!: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}
    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
            (r: IIngredient[]) => (this.ingredients = r)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    onEdit(index: number): void {
        this.shoppingListService.isBeingEdited.next(index);
    }
}
