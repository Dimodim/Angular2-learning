import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
    id?: number;
    editMode?: boolean;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (r: Params) => (
                (this.id = +r['id']), (this.editMode = r['id'] != null), console.log(this.editMode)

            )
        );
    }
}
