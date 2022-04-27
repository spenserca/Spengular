import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes = [
    {
      id: 1,
      name: 'Coconut Curry Lentils',
    },
    {
      id: 2,
      name: 'Lentil Tacos',
    },
    {
      id: 3,
      name: 'Broccoli Mac & Cheese',
    },
    {
      id: 4,
      name: 'Veggie Chili',
    },
    {
      id: 5,
      name: 'Hash browns',
    },
  ];

  constructor() {}

  public GetRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  public GetRecipeById(id: number): Observable<Recipe> {
    return of(this.recipes.filter((r) => r.id === id)[0]);
  }
}
