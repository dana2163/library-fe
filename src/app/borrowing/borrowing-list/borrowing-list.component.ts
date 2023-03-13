import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";


@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.html']
})
export class BorrowingListComponent {
  @Input() borrowings: Array<Borrowing> = [];
  @Output() borrowingToUpdate = new EventEmitter<number>();
  @Output() borrowingToDelete = new EventEmitter<number>();

  editBorrowing(borrowingId: string):void {
    this.borrowingToUpdate.emit(borrowingId);
  }

  deleteBorrowing(borrowingId: string):void{
    this.borrowingToDelete.emit(borrowingId);
  }
}