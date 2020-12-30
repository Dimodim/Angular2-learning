import { RecipeService } from './../../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipeService,
        private fb: FormBuilder
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
                            name: new FormControl(ingredient.name),
                            amount: new FormControl(ingredient.amount),
                        })
                    );
                }
            }
        }
        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName),
            imagePath: new FormControl(recipeImagePath),
            description: new FormControl(recipeDescription),
            ingredients: recipeIngredients,
        });
    }
    get controls(): Array<any> {
        // a getter!
        // tslint:disable-next-line:whitespace
        return (this.recipeForm.get('ingredients') as FormArray).controls;
    }

    onSubmit(): void {
        console.log(this.recipeForm);
    }
    AddIngredient(): void {
        (this.recipeForm.get('ingredients') as FormArray).push(
            new FormGroup({
                name: new FormControl(),
                amount: new FormControl(),
            })
        );
    }
}
