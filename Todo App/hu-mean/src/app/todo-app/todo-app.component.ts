import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { Delete } from '../models/delete';

@Component({
  selector: 'ta-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  title = 'Todo App';
  todoList: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todoList = todos;
      });
  }

  // addNewTodo(newTodoText) {
  //   const newTodo = {
  //     name: newTodoText,
  //     completed: false
  //   };
  //   this.todoService.addTodo(newTodo)
  //     .subscribe((todo: Todo) => {
  //       this.todoList.push(todo);
  //     });
  // }
  // DelNewTodo(i) {
  //   const Dele={
  //     _id: i
  //   };
  //   this.todoService.delTodo(Dele)
  //     .subscribe((any) => {
  //       this.todoList.splice(i,1);
  //     });
  // }


}
