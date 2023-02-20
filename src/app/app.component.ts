import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

interface User {
  id: string,
  name: string,
  contact: string
}

interface Book {
  author: string,
  title: string,
  count: number
}
interface Borrowing {
  id: string,
  book: string,
  user: string
}

enum Menu {
  Users = 'USERS',
  Books = 'BOOKS',
  Borrowing = 'BORROWING'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bookFormGroup: FormGroup;
  users: User[] = [];
  books: Book[] = [];
  borrowings: Borrowing[] = [];
  menu = Menu.Books;
  menuType = Menu;
  userFormGroup: FormGroup;
  borrowingFormGroup: FormGroup;

  constructor() {
    this.bookFormGroup = new FormGroup({
      autor: new FormControl(null),
      title: new FormControl(null),
      count: new FormControl(null),
    });

    this.userFormGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      contact: new FormControl(null),
    });

    this.borrowingFormGroup = new FormGroup({
      id: new FormControl(null),
      book: new FormControl(null),
      user: new FormControl(null),
    });
  }

  addBook(): void {
    this.books.push(this.bookFormGroup.value);
    this.bookFormGroup.reset();
  }

  addUser(): void {
    this.users.push(this.userFormGroup.value);
    this.userFormGroup.reset();
  }

  addBorrowing(): void {
    this.borrowings.push(this.borrowingFormGroup.value);
    this.borrowingFormGroup.reset();
  }

  changeMenu(menu: Menu): void {
    this.menu = menu;
  }
}
