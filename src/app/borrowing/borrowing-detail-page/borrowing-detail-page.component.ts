import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {Borrowing} from "../../model/borrowing.model";
import {BorrowingService} from "../../service/borrowing.service";

@Component({
  selector: 'app-borrowing-detail-page',
  templateUrl: './borrowing-detail-page.component.html',
  styleUrls: ['./borrowing-detail-page.component.css']
})
export class BorrowingDetailPageComponent {
  borrow?: Borrowing;

  private borrowId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private borrowingService: BorrowingService,
              private toastService: ToastService) {
    this.borrowId = Number(route.snapshot.paramMap.get('borrowingId'));
    this.getBorrowings();
  }
  getBorrowings(): void {
    if (this.borrowId) {
      this.borrowingService.getBorrowing(this.borrowId).subscribe((borrow: Borrowing) => {
        this.borrow = borrow;
      });
    }
  }

editBorrowing(borrow: Borrowing): void {
    this.borrowingService.editBorrowing(borrow).subscribe(() => {
      this.toastService.success("Vypozicka bola zmenena");
    }, ()=>{this.toastService.error("Vypozicka nebola zmenena");})
  }

}