import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';
// import { Delete } from '../../models/delete';


@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[] = [];
  i = 0;
  todos;
  text = ' ';
  tasks;
  placeholderVal = 'Enter task';
  val: string;
  obj: string;
  @Output() todoDel= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  // removeitem(i){
  //   this.i=i;
  //   this.todoDel.emit(this.i);
  //   this.list.splice(i,1);
  //   }
    removeItem(todoText) {
      for ( let i = 0; i < this.tasks.length; i++) {
         if ( this.tasks[i].text === todoText) {
             this.tasks.splice(i, 1);
           }
      }
      this.val = JSON.stringify(this.tasks);
       localStorage.setItem('tasks', this.val);
       this.obj = localStorage.getItem('tasks');
       this.todos = JSON.parse(this.obj);
     }
     clearSearch() {
       this.text = ' ';
     }
}
