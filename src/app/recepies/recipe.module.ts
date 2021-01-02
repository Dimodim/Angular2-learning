import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './receipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list/recipe-list.component';
import { UnselectedRecipesComponent } from './unselected-recipes/unselected-recipes/unselected-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeService } from '../services/recipe.service';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        UnselectedRecipesComponent,
    ],

    imports: [
        ReactiveFormsModule,
        RecipeRoutingModule,
        FormsModule,
        CommonModule,
        DirectivesModule
    ],
    providers: [],
})
export class RecipeModule {}
