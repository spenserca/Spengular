import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesService.GetRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }
}
