import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import {Pagination} from "../../model/pagination.mode";
import {Page} from "../../model/page.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users: Page<User> = { content: [], pageable: { pageNumber: 0, pageSize: 10 }, totalElements: 0 };

  @Output() userToEdit = new EventEmitter<User>();

  @Output() userToDelete = new EventEmitter<number>();

  @Output() pageChange = new EventEmitter<Pagination>();

  private defaultFilter = '';

  filterForm = new FormGroup({
    lastName: new FormControl(),
  });

  editUser(user: User): void {
    this.userToEdit.emit(user);
  }

  deleteUser(userId: number): void {
    this.userToDelete.emit(userId);
  }

  changePage(pageNumber: number): void {
    this.pageChange.emit({
      page: pageNumber - 1,
      size: this.users?.pageable?.pageSize ?? 10,
      filter: { lastName: this.defaultFilter },
    });
  }

  filter(): void {
    this.defaultFilter = this.filterForm.controls.lastName.value;
    this.pageChange.emit({
      page: 0,
      size: this.users?.pageable?.pageSize ?? 10,
      filter: { lastName: this.defaultFilter },
    });
  }

  getPageSize(): number {
    return this.users?.pageable?.pageSize ?? 10;
  }

  getPageNumber(): number {
    return this.users?.pageable?.pageNumber ? this.users?.pageable?.pageNumber + 1 : 1;
  }

  getTotalElements(): number {
    return this.users?.totalElements ?? 0;
  }
}
