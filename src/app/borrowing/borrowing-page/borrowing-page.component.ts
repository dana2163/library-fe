import {Component, EventEmitter, Output} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {Router} from "@angular/router";

class BorrowingService {
  private borrowingService: any;
  deleteBorrowing(borrowingId: number) {

  }

}

class ToastService {
}

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
    this.userService.deleteBorrowing(BorrowindId).subscribe(BorrowindId => {
      console.log(BorrowindId);
      this.getBorrowings();
    })
  }
}
