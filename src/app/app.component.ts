import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ShowDishesComponent } from './show-dishes/show-dishes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavigationComponent,FooterComponent,AddDishComponent,ShowDishesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wiggy';
  bcolor:string=''
  colorchangeHandler(s:any){
    this.bcolor=s;
  }
}
