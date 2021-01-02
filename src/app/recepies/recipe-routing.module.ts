import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResolverService } from '../resolvers/recipe-resolver.service';
import { RecipesComponent } from './receipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit/recipe-edit.component';
import { UnselectedRecipesComponent } from './unselected-recipes/unselected-recipes/unselected-recipes.component';

const routes: Routes = [
    
    {
        path: '',
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipeRoutingModule {}
