import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingListEditComponent],
    exports: [ShoppingListEditComponent],
    imports: [FormsModule, CommonModule, ShoppingRoutingModule],
    providers: [],
})
export class ShoppingListModule {}
