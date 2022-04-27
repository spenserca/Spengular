import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.css'],
})
export class CreateRecipeFormComponent implements OnInit {
  recipe: Recipe = new Recipe(100, 'New recipe', [], []);
  submitted: boolean = false;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    this.recipesService.AddRecipe(this.recipe);
  }
}
