import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import {MatSnackBar} from '@angular/material';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Todo } from '../../models/todo';
import { Todos } from '../../models/add';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  title = 'Todo App';
  todoList: Todos[] = [];
  placeholderVal = '';
  text = '';


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todoList = todos;
      });
  }
  addNewTodo(newTodoText) {
    const newTodo = {
      name: newTodoText,
      completed: false,
    };
    this.todoService.addTodo(newTodo)
      .subscribe((todo: Todos) => {
        this.todoList.push(todo);
        // this.openSnackbar('Todo', 'added');
      });
    this.clearSearch();
     }
     
   deleteTodo(todo) {
    this.todoService.deleteTodo(todo)
      .subscribe((todos => {
        for ( let i = 0; i < this.todoList.length; i++) {
          if ( this.todoList[i].name === todo.name) {
              this.todoList.splice(i, 1);
             }
        }
        // this.openSnackbar('Todo', 'deleted');
      }));
  }
  // updateTodo(event, todo) {
  //   if (event.target.checked) {
  //      todo.completed = true;
  //      console.log(todo.completed);
  //   } else {
  //    todo.completed = false;
  //   }

  //   this.todoService.updateTodo(todo)
  //     .subscribe((todos => {
  //       for ( let i = 0; i < this.todoList.length; i++) {
  //         if ( this.todoList[i].name === todo.name) {
  //             this.todoList[i].completed = true;
  //            }
  //       }
  //       this.openSnackbar('Todo', 'updated');
  //     }));
  // }
  // openSnackbar(message: string , action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
  // openConfirmationDialog(todo) {
  //   this.dialogRef = this.dialog.open(DialogComponent, {
  //     disableClose: false
  //   });
  //   this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

  //   this.dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //     this.deleteTodo(todo);
  //     }
  //     this.dialogRef = null;
  //   });
  // }
  clearSearch() {
    this.text = ' ';
   }
}




//   placholderVal = 'Enter todo text';
//   newTodoVal = '';
//   @Output() todoAdded = new EventEmitter<any>();
//   constructor() { }

//   ngOnInit() {
//   }

//   addTodo() {
//     console.log(this.newTodoVal);
//     this.todoAdded.emit(this.newTodoVal);
//     this.newTodoVal = '';
//   }

// }
// todos;
// text = ' ';
// tasks;
// placeholderVal = 'Enter task';
// val: string;
// obj: string;
// constructor() { }

// ngOnInit() {
//   this.tasks = [];
//   this.obj = localStorage.getItem('tasks');
//   this.todos = JSON.parse(this.obj);
// }
// addTodo() {
//   if (this.text !== ' ') {
//   this.tasks.push({
//     text: this.text
//   });
//   this.val = JSON.stringify(this.tasks);
//   localStorage.setItem('tasks', this.val);
//   this.obj = localStorage.getItem('tasks');
//   this.todos = JSON.parse(this.obj);
//   this.clearSearch();
//  }
// }
// deleteTodo(todoText) {
//  for ( let i = 0; i < this.tasks.length; i++) {
//     if ( this.tasks[i].text === todoText) {
//         this.tasks.splice(i, 1);
//       }
//  }
//  this.val = JSON.stringify(this.tasks);
//   localStorage.setItem('tasks', this.val);
//   this.obj = localStorage.getItem('tasks');
//   this.todos = JSON.parse(this.obj);
// }
// clearSearch() {
//   this.text = ' ';
// }
// }