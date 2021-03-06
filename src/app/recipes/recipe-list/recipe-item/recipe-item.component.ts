import { Component, OnInit,Input } from '@angular/core';
import { recipe } from  '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: recipe;
 // @Output() recipeSelected=  new EventEmitter<void>();

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }
  onSelected()
  {
     // this.recipeSelected.emit();
    this.recipeservice.recipeSelected.emit(this.recipe);
  }

}
