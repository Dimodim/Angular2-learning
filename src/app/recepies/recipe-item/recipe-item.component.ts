import { RecipeService } from './../../services/recipe.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe!: IRecipe;
    @Input() index!: number;
    constructor(private recipeService: RecipeService) {}
    ngOnInit(): void {
        this.recipe = this.recipeService.getRecipeById(this.index);
    }
}
