import { Ingredient } from './ingredient';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public instructions: string[]
  ) {}
}
