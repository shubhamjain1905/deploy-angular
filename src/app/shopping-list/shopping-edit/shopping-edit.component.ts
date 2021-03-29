import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediant } from '../../Shared/ingrediant.model'
import { ShoppingListService } from '../shopping-list.service';
 @Component({
  selector: 'app-shopping-edit',
  templateUrl:'./shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef  :ElementRef;
  @ViewChild('amountInput') amountInputRef  :ElementRef;

  //@Output() ingredientAdded =new EventEmitter<Ingrediant>();

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }

  OnAddItem()
  {
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newIngrediant =new Ingrediant(ingName,ingAmount);
    //this.ingredientAdded.emit(newIngrediant);
    this.slService.addIngrediant(newIngrediant);
  }

}
