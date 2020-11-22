import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Output() emitRecipeDetails = new EventEmitter();
  @Input() recipe!: IRecipe;
  constructor() { }

  ngOnInit() {
  }
}
