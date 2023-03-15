import { Component, EventEmitter, Output } from '@angular/core';
import { Borrowing } from '../../model/borrowing.model';
import { BorrowingService } from '../../service/borrowing.service';

@Component({
    selector: 'app-borrowing-page',
    templateUrl: './borrowing-page.component.html',
    styleUrls: ['./borrowing-page.component.css'],
})
export class BorrowingPageComponent {
    borrowings: Array<Borrowing> = [];
    borrowing?: Borrowing;

    borrowingToEdit?: Borrowing;

    @Output()
    borrowingToEditEvent = new EventEmitter<number>();

    constructor(private borrowingService: BorrowingService) {
        this.getBorrowings();
    }

    ngOnInit() {
        this.getBorrowings();
    }

    getBorrowings(): void {
        this.borrowingService.getBorrowings().subscribe((borrowings) => {
            this.borrowings = borrowings;
        });
    }

    createBorrowing(borrowing: Borrowing): void {
        this.borrowingService.createBorrowing(borrowing).subscribe(() => {
            console.log('Pôžička bola úspešne vytvorená.');
            this.getBorrowings();
        });
    }

    editBorrowing(borrowing: Borrowing): void {
        this.borrowingService.editBorrowing(borrowing).subscribe(() => {
            console.log('Pôžička bola úspešne upravená.');
            this.getBorrowings();
        });
        this.borrowing = undefined;
    }

    setBorrowingToEdit(borrowingId: number): void {
        this.borrowingToEdit = this.borrowings.find((borrowing) => borrowing.id === borrowingId);
    }

    deleteBorrowing(borrowingId: number): void {
        this.borrowingService.deleteBorrowing(borrowingId).subscribe((borrowingId) => {
            console.log('Pôžička bola úspešne zmazaná.');
            this.getBorrowings();
        });
    }
}
