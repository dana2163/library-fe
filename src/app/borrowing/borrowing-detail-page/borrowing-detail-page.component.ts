import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "angular-toastify";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {BorrowingService} from "../../common/service/borrowing.service";
import {Borrowing} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-borrowing-detail-page',
  templateUrl: './borrowing-detail-page.component.html',
  styleUrls: ['./borrowing-detail-page.component.css']
})
export class BorrowingDetailPageComponent implements OnDestroy {
  borrow?: Borrowing;

  private borrowId: number | null;
  private destroy$ = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private borrowingService: BorrowingService,
              private toastService: ToastService) {
    this.borrowId = Number(route.snapshot.paramMap.get('borrowingId'));
    this.getBorrowings();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getBorrowings(): void {
    if (this.borrowId) {
      this.borrowingService.getBorrowing(this.borrowId).pipe(takeUntil(this.destroy$)).subscribe((borrow: Borrowing) => {
        this.borrow = borrow;
      });
    }
  }

  updateBorrowing(borrow: Borrowing): void {
    this.borrowingService.updateBorrowing(borrow).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.toastService.success("Vypozicka bola zmenena");
    }, () => { this.toastService.error("Vypozicka nebola zmenena"); })
  }
}
