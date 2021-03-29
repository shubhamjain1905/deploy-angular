import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from '../Shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { recipe} from './recipe.model';

@Injectable()
export class RecipeService
{
    recipeSelected =new EventEmitter<recipe>();
  private  recipes : recipe[]=[
        new recipe('Test Receipe 1','Test Description 1','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
        [new Ingrediant("Paneer",13),
    new Ingrediant("Samosa",12)]),
        new recipe('Test Receipe 2','Test Description 2','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
        [new Ingrediant("Kachori",5),
    new Ingrediant("Butter Milk",3)]),
       
    
    
      ];

    constructor(private slService:ShoppingListService)
    {

    }

    getRecipe()
    {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingrediant : Ingrediant[])
    {
        this.slService.addIngrediants(ingrediant);  
    }
}