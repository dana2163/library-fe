import { Component } from '@angular/core';
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  users: Array<User> = [];

  createUser(user: User): void {
    this.users.push(user);
  }

    editUser(user: User): void {
    const index = this.users.findIndex(p => p.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
  selectUserToUpdate(userId: number): void {
    const index = this.users.findIndex(p => p.id === userId);
    if (index !== -1) {
      const userToUpdate = Object.assign({}, this.users[index]);
      this.openUpdateUserForm(userToUpdate);
    }
  }

  deleteUser(userId: number): void {
    const index = this.users.findIndex(p => p.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  openUpdateUserForm(user: User): void {
    // TODO: Implement method to open update user form with the given user object
  }
}
