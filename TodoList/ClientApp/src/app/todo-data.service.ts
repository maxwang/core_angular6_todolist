import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId = 0;
  todos: Todo[] = [];

  constructor(private api: ApiService) { }


  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);

    return this;
  }

  deleteTodo(id: number): TodoDataService {
    this.todos = this.todos.filter(x => x.id !== id);

    return this;

  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }


  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(x => x.id === id).pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
