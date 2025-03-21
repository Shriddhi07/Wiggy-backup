import { Component,Input, input } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'm-show-dishes',
  imports: [],
  templateUrl: './show-dishes.component.html',
  styleUrl: './show-dishes.component.css'
})
export class ShowDishesComponent {
@Input() items:Array<Dish>=[]

}
