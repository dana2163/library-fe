import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


enum Menu {
  Users = 'USERS',
  Books = 'BOOKS',
  Borrowing = 'BORROWING',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class UserComponent {

  form: FormGroup;
  users: Array<User> = [];


  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      contact: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  saveBook(): void {
    this.users.push(this.form.value);
    this.form.reset();
  }

  editBook(index: number): void {
    this.form.setValue(this.users[index]);
    this.deleteBook(index);
  }

  deleteBook(index: number): void {
    this.users.splice(index, 1);
  }
}