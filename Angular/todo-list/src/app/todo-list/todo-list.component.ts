import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodo = '';
  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.todos.push(this.newTodo.trim());
    this.newTodo = '';
  }
  todos = ['Todo 1', 'Todo 2', 'Todo 3'];
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
