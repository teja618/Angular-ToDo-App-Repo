import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { TodoListComponent } from './todo-list/todo-list.component';

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
    { "taskName": "Available Task 1" },
    { "taskName": "Available Task 2" },
    { "taskName": "Available Task 3" } 
];

onAdd=(task:TaskModel)=>{
  this.tempTask=task;
  this.taskList.push(this.tempTask);
 }

 onDelete(index:number){
    this.taskList.splice(index,1);
 }

}
