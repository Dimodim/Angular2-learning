import { IIngredient } from './../../../models/ingredient';
import { RecipeService } from './../../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
    id!: number;
    editMode!: boolean;
    recipeForm!: FormGroup;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipeService
    ) {}
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (r: Params) => (
                (this.id = +r['id']),
                (this.editMode = r['id'] != null),
                this._initForm()
            )
        );
    }

    private _initForm(): void {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);

        if (this.editMode) {
            const recipe = this.recipeService.getRecipeById(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe.ingredients) {
                for (const ingredient of recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            name: new FormControl(
                                ingredient.name,
                                Validators.required
                            ),
                            amount: new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/),
                            ]),
                        })
                    );
                }
            }
        }
        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName, Validators.required),
            imagePath: new FormControl(recipeImagePath, Validators.required),
            description: new FormControl(
                recipeDescription,
                Validators.required
            ),
            ingredients: recipeIngredients,
        });
    }
    get controls(): Array<any> {
        // a getter!
        // tslint:disable-next-line:whitespace
        return (this.recipeForm.get('ingredients') as FormArray).controls;
    }

    onSubmit(): void {
        const newRecipe = new Recipe({
            name: this.recipeForm.value.name,
            description: this.recipeForm.value.description,
            imagePath: this.recipeForm.value.imagePath,
            ingredients: this.recipeForm.value.ingredients,
        });
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        } else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    }
    addIngredient(): void {
        (this.recipeForm.get('ingredients') as FormArray).push(
            new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/),
                ]),
            })
        );
    }
    onCancel(): void {
        this.router.navigate(['./..'], { relativeTo: this.activatedRoute });
    }
    removeIngredientRow(controlIndex: number): void {
        (this.recipeForm.get('ingredients') as FormArray).removeAt(
            controlIndex
        );
    }
}
