import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.css']
})

export class BorrowingListComponent {
  @Input()
  borrowings: Array<Borrowing> = [];
  @Output()
  borrowingToEdit = new EventEmitter<number>();
  @Output()
  borrowingToDelete = new EventEmitter<number>();

  editBorrowing(borrowingId: number):void {
    this.borrowingToEdit.emit(borrowingId);
  }

  deleteBorrowing(borrowingId: number):void{
    this.borrowingToDelete.emit(borrowingId);
  }
}
