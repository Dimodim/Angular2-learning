import { RecipeItemComponent } from './recepies/recipe-item/recipe-item.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recepies/receipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        ShoppingListComponent,
        ShoppingListEditComponent,
        RecipeDetailsComponent,
        RecipeListComponent,
        RecipeItemComponent,
        DropdownDirective,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [RecipeService, ShoppingListService],
    bootstrap: [AppComponent],
})
export class AppModule {}
