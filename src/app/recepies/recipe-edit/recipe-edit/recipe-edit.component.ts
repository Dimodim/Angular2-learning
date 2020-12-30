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

        if (this.editMode) {
            const recipe = this.recipeService.getRecipeById(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
        }
        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName),
            imagePath: new FormControl(recipeImagePath),
            description: new FormControl(recipeDescription),
        });
    }
    onSubmit(): void {
        console.log(this.recipeForm);
    }
    // // tslint:disable-next-line:typedef
    // get controls() { // a getter!
    //   // tslint:disable-next-line:whitespace
    //   return (this.recipeForm.get('ingredients') as FormArray).controls;
    // }
}
