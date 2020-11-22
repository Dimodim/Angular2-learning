import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Output() onSelectedRecipe = new EventEmitter();

  recipes: Array<IRecipe> = [
    {name: 'some name', description: 'some description', imagePath: 'https://image.freepik.com/free-vector/modern-menu-restaurant-grill_1361-1526.jpg'}
  ]

}
