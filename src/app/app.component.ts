import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {TaskModel} from './TaskModel';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-To Do App';
  inputTask='';
  tempTask:TaskModel;
  taskList: TaskModel[] = [
    {  "taskName": "Available Task 1" },
    { "taskName": "Available Task 2" },
    {"taskName": "Available Task 3"}
];

  delete=(index:number)=>{
   this.taskList.splice(index,1);
  }

  onAdd=()=>{
   this.tempTask={taskName:this.inputTask};
   this.taskList.push(this.tempTask);
  }
}
