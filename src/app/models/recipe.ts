import { IIngredient } from './ingredient';
export interface IRecipe
{
  name: string;
  description: string;
  imagePath: string;
  ingredients: Array<IIngredient>;
}

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Array<IIngredient>;

  constructor(rawObj: IRecipe) {
    this.name = rawObj.name;
    this.description = rawObj.description;
    this.imagePath = rawObj.imagePath;
    this.ingredients = rawObj.ingredients;
  }
}
