import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';

const routes: Routes = [
    { path: 'authentication', component: AuthComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        loadChildren: () =>
            import('./recepies/recipe.module').then((m) => m.RecipeModule),
    },
    {
        path: 'shopping-list',
        loadChildren: () =>
            import('./shopping-list/shopping-list.module').then(
                (m) => m.ShoppingListModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
