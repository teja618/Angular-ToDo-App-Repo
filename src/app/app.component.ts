import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-To Do App';
  inputTask=''
  newItem:String=''

  items=[{type:String}]

  onAdd=()=>{
  
    this.items.push(
      {type:this.newItem}
      );

  }
  

}
