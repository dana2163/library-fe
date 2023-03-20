import {Component, EventEmitter, Output} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {BorrowingService} from "../../service/borrowing.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";


@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  @Output()
  borrowingToUpdate = new EventEmitter<number>();
  private userService: any;

  constructor(private borrowingService: BorrowingService, private toastService: ToastService, private router: Router) {
    this.getBorrowings();
  }

  getBorrowings(): void {
    this.borrowingService.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    });
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.router.navigate(['borrowing', borrowingId]);
  }

  deleteBorrowing(borrowingId: number): void {
    this.userService.deleteBorrowing(borrowingId).subscribe(() => {
      console.log(borrowingId);
      this.getBorrowings();
    })
  }
}
