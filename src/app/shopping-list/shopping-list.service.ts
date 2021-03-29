import { EventEmitter } from '@angular/core';
import {Ingrediant} from '../Shared/ingrediant.model'
export class ShoppingListService
{
    ingrediantsChanges = new EventEmitter<Ingrediant[]>();
   private ingrediants: Ingrediant[]=[
        new Ingrediant('Apples',5),
        new Ingrediant('Tomatos',10)
      ]

    getIngrediants()
    {
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant : Ingrediant)
    {
        this.ingrediants.push(ingrediant);
        this.ingrediantsChanges.emit(this.ingrediants.slice());
    }
   addIngrediants(ingrediants : Ingrediant[])
   {
//     {
//         for(let ingrediant of ingrediants)
//         {
//             this.addIngrediant(ingrediant);
//         }
    this.ingrediants.push(...ingrediants);
    this.ingrediantsChanges.emit(this.ingrediants.slice());
}

}


   


