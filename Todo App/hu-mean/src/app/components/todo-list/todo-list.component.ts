import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { Delete } from '../../models/delete';


@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[] = [];
  i = 0;
  @Output() todoDel= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  removeitem(i){
    this.i=i;
    this.todoDel.emit(this.i);
    this.list.splice(i,1);
    }
}
