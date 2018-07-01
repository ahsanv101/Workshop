import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Todos } from '../models/add';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<{todo: Todo[]}>(`${environment.apiBaseUrl}/todo`)
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }


  // delTodo(todo: Delete) {
  //   console.log("BOO");
  //   return this.http.delete<{todo: Delete}>('http://localhost:3000/todo'+'/'+todo._id)
  //   .pipe(
  //     map((response) => {
  //       return response.todo;
  //     })
  //   );
  // }

  deleteTodo(todo: Todo) {
    console.log(todo._id);
    console.log('Hello');
    return this.http.delete<{todo: Todo}>('http://localhost:3000/todo'+'/'+todo._id)
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
   }

   addTodo(todo: Todos) {
    return this.http.post<{todo: Todos}>('http://localhost:3000/todo', {
      todo: todo
    })
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }
}
