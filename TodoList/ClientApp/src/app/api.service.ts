import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable, from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

const APIURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: Http) { }

  public getAllTodos(): Observable<Todo[]> {
    return this.getAll().pipe(
      map( data => data)
    );
  }

  getAll() {
    return this.http.get(APIURL + '/todos');
  }

  public createTodo(todo: Todo) {

  }

  public getTodoById(todoId: number) {

  }

  public deleteTodoById(todoId: number) {

  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
