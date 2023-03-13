import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  @Input()
  users: Array<User> = [];

  @Output()
  userToEdit = new EventEmitter<User>();

  @Output()
  userToDelete = new EventEmitter<number>();

  editUser(user: User): void {
    this.userToEdit.emit(user);
  }

  deleteUser(userId: number): void {
    this.userToDelete.emit(userId);
  }
}