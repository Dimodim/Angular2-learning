import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details/recipe-details.component';
import { UnselectedRecipesComponent } from './recepies/unselected-recipes/unselected-recipes/unselected-recipes.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recepies/receipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: UnselectedRecipesComponent },
            { path: 'new-recipe', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ],
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
