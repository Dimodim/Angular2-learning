import { RecipeResolverService } from './resolvers/recipe-resolver.service';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details/recipe-details.component';
import { UnselectedRecipesComponent } from './recepies/unselected-recipes/unselected-recipes/unselected-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recepies/receipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: UnselectedRecipesComponent },
            { path: 'new-recipe', component: RecipeEditComponent },
            {
                path: ':id',
                component: RecipeDetailsComponent,
                resolve: [RecipeResolverService],
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent,
                resolve: [RecipeResolverService],
            },
        ],
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'authentication', component: AuthComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
