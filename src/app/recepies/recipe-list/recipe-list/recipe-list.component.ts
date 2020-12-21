import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
    recipes: Array<IRecipe>;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {
        this.recipes = this.recipeService.getRecipes();
    }
    onNewRecipeSelected() {
        this.router.navigate(['new-recipe'], { relativeTo: this.route });
    }
}
