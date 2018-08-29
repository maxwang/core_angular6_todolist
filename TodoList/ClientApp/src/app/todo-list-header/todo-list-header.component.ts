import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }
  
  addTodo() {
    // this.todoDataService.addTodo(this.newTodo);
    console.log('header addTodo function');
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
