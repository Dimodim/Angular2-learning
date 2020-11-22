export interface IRecipe
{
  name: string;
  description: string;
  imagePath: string;
}

export class Recipe {
  name: string;
  description: string;
  imagePath: string;

  constructor(rawObj: IRecipe) {
    this.name = rawObj.name;
    this.description = rawObj.description;
    this.imagePath = rawObj.imagePath;
  }
}
