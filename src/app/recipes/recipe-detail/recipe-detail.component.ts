import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe :recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }


  onAddToShoppingList()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingrediants);
  }
}
