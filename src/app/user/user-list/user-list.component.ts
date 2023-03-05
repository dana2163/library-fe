import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  users: any[] = [];
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required)
    });
  }


  deleteUser(i: number): void {
    this.users.splice(i, 1);
  }

  editUser(i: number): void {
    this.form.setValue(this.users[i]);
    this.deleteUser(i);
  }
}