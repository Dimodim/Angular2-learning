import { AlertComponent } from './alert/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { UnselectedRecipesComponent } from './recepies/unselected-recipes/unselected-recipes/unselected-recipes.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit/recipe-edit.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeResolverService } from './resolvers/recipe-resolver.service';

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
        UnselectedRecipesComponent,
        RecipeEditComponent,
        AuthComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        RecipeService,
        ShoppingListService,
        DataStorageService,
        RecipeResolverService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
