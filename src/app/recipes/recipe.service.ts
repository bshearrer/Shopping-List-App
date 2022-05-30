import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cheeseburger','Double Bacon Cheeseburger','https://cdn-icons-png.flaticon.com/512/198/198416.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
      ]),
    new Recipe('Hot Dog','New York Style Hot Dog','https://cdn-icons-png.flaticon.com/512/198/198474.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
