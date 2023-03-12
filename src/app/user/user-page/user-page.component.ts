import { Component } from '@angular/core';
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  users: Array<User> = [];
  user?: User;

  createUser(user: User): void {
    this.users.push(user);
  }

  editUser(user: User): void {
    const index = this.users.findIndex(p => p.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
  selectUserToEdit(userId: number): void {
    this.user = this.users.find(user => user.id === userId);
  }

  deleteUser(userId: number): void {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

}