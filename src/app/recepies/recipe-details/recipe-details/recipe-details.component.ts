import { RecipeService } from './../../../services/recipe.service';
import { IRecipe } from 'src/app/models/recipe';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
    selectedRecipe!: IRecipe;
    id!: number;
    constructor(
        private recipeService: RecipeService,
        private activatedRoute: ActivatedRoute
    ) {}
    addIngredientsToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(
            this.selectedRecipe.ingredients
        );
    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe((r) => {
            this.id = +r['id'];
            this.selectedRecipe = this.recipeService.getRecipeById(this.id);
        });
    }
}
