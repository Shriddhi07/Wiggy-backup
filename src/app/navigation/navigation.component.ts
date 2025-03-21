import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone:true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() color:string='red';
  @Output() colorChange=new EventEmitter;
  colorHandler(p:any){
    this.colorChange.emit(p.value);
  }

}
