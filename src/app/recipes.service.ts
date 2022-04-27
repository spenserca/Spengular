import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() {
  }

  public GetRecipes(): Observable<Recipe[]> {
    return of([{
      name: 'Coconut Curry Lentils'
    },
      {
        name: 'Lentil Tacos'
      },
      {
        name: 'Broccoli Mac & Cheese'
      },
      {
        name: 'Veggie Chili'
      },
      {
        name: 'Hash browns'
      }]);
  }
}
