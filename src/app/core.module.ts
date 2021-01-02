import { NgModule } from '@angular/core';
import { RecipeResolverService } from './resolvers/recipe-resolver.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';

@NgModule({
  providers: [RecipeService, ShoppingListService, RecipeResolverService],
})
export class CoreModule { }
