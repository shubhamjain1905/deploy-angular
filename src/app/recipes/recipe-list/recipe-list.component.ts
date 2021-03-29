import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import {recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =new  EventEmitter<recipe>();
  recipes : recipe[];
  // recipes : recipe[]=[
  //   new recipe('Test Receipe 1','Test Description 1','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
  //   new recipe('Test Receipe 2','Test Description 2','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
  //   new recipe('Test Receipe 3','Test Description 3','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')


  // ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes =this.recipeService.getRecipe();
   }
  // onRecipeSelected(recipe : recipe )
  // {
  //   this.recipeWasSelected.emit(recipe);

  // }

}
