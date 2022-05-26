import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a test recipe','https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('Second Recipe','This is a test recipe','https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
