import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user.model";


enum Menu {
  Users = 'USERS',
  Books = 'BOOKS',
  Borrowing = 'BORROWING',
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  userForm: FormGroup;
  users: User [] = [];


  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      contact: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  saveUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  editUser(index: number): void {
    this.userForm.setValue(this.users[index]);
    this.deleteUser(index);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}