import { Recipe } from './../../../models/recipe';
import { Subscription } from 'rxjs';
import { RecipeService } from './../../../services/recipe.service';
import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
} from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes!: Array<IRecipe>;
    subscription!: Subscription;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {}
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
        this.recipeService.recipesChanged.subscribe();
        this.subscription = this.recipeService.recipesChanged.subscribe(
            (r: Recipe[]) => (this.recipes = r)
        );
    }
    onNewRecipeSelected(): void {
        this.router.navigate(['new-recipe'], { relativeTo: this.route });
    }
}
