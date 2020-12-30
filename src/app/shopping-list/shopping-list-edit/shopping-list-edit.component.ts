import { Subscription } from 'rxjs';
import { ShoppingListService } from './../../services/shopping-list.service';
import { IIngredient } from './../../models/ingredient';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') shoppingListForm!: NgForm;
    subscription!: Subscription;
    editItemIndex!: number;
    editMode = false;
    editedItem!: IIngredient;
    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.subscription = this.shoppingListService.isBeingEdited.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editItemIndex = index;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.shoppingListForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount,
                });
            }
        );
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
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
