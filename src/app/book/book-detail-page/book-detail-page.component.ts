import { Component } from '@angular/core';
import { Book } from "../../model/book.model";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "../../service/book.service";
import { ToastService } from "angular-toastify";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent {
  book?: Book;

  private bookId: number | null;
  private destroy$ = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService: BookService,
              private toastService: ToastService) {
    this.bookId = Number(route.snapshot.paramMap.get('bookId'));
    this.getBook();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getBook(): void {
    if (this.bookId) {
      this.bookService.getBook(this.bookId).pipe(takeUntil(this.destroy$)).subscribe((book: Book) => {
        this.book = book;
      });
    }
  }

  updateBook(book: Book): void {
    this.bookService.updateBook(book).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.toastService.success("Book updated successfully");
    }, () => { this.toastService.error("Book update failed"); })
  }
}
