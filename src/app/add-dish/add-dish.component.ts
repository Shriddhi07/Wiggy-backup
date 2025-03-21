import { Component } from '@angular/core';
import { Dish } from '../models/dish';
import { FormsModule } from '@angular/forms';
import { ShowDishesComponent } from '../show-dishes/show-dishes.component';

@Component({
  selector: 'm-add-dish',
  standalone:true,
  imports: [FormsModule, ShowDishesComponent],
  templateUrl: './add-dish.component.html',
  styleUrl: './add-dish.component.css'
})
export class AddDishComponent {
  d:Dish = new Dish();
  dishes:Array<Dish>=[];
  constructor(){
    // this.d.code=0;
    // this.d.name="pasta"
    // this.d.price=0;
    // this.d.image="http://abd.jpg"
  }
  CodeHandler(x:any){
    this.d=x;
  }
  addHandler(){
    this.dishes.push(this.d);
    this.d = new Dish();
    alert("Added")
  }
}
