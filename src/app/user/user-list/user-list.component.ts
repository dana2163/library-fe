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
  userToUpdate = new EventEmitter<number>();

  @Output()
  personToDelete = new EventEmitter<number>();

  editUser(userId: number): void {
    this.userToUpdate.emit(userId);
  }

  deleteUser(userId: number): void {
    this.personToDelete.emit(userId);
  }
}