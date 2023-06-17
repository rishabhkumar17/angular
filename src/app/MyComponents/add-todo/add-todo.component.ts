import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  desc: string;
  constructor() {
    this.title = '';
    this.desc = '';
  }
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(todo);
  }
}
