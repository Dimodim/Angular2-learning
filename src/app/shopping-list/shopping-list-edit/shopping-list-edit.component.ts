import { ShoppingListService } from './../../services/shopping-list.service';
import { IIngredient } from './../../models/ingredient';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {}
    onAdd(form: NgForm): void {
        const formValue = form.value;
        const newIngredient: IIngredient = {
            name: formValue.name,
            amount: formValue.amount,
        };
        this.shoppingListService.addIngredient(newIngredient);
    }
    OnDelete(): void {}
    OnClear(): void {}
}
