import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {TaskModel} from '../TaskModel'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<TaskModel>();
  @Output() onDeleteTask = new EventEmitter<number>();


  inputTask='';
  task:TaskModel;
  @Input() tasksList:TaskModel[];
  tempTask:TaskModel;
  

  constructor() { }

  ngOnInit(): void {
  }

  delete=(index:number)=>{
    this.onDeleteTask.emit(index);
   }
   
  onAdd(){
    console.log(this.inputTask)
    this.task={"taskName": this.inputTask};
    console.log(this.task)
    this.onAddTask.emit(this.task);
  }
}
