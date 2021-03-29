import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../Shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl:'./shopping-list.component.html' ,
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[];
  // ingrediants: Ingrediant[]=[
  //   new Ingrediant('Apples',5),
  //   new Ingrediant('Tomatos',10)
  // ]
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingrediants=this.slService.getIngrediants();
    this.slService.ingrediantsChanges.subscribe(
      (ingrediants : Ingrediant[]) =>
      {
        this.ingrediants =ingrediants;
      }
    )

  }

  onIngrediantsAdded( ingrediant :Ingrediant)
  {
    this.ingrediants.push(ingrediant);
  }

}
