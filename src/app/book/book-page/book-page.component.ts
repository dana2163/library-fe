import { Component } from '@angular/core';
import { Book } from "../../model/book.model";
import { BookService } from "../../service/book.service";
import { Router } from "@angular/router";
import { ToastService } from "angular-toastify";

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
    books: Array<Book> = [];

    constructor(private bookService: BookService, private toastService: ToastService, private router: Router) {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks().subscribe((books: Book[]) => {
            this.books = books;
        });
    }

    selectBookToUpdate(bookId: number): void {
        this.router.navigate(['book', bookId]);
    }

    deleteBook(bookId: number): void {
        this.bookService.deleteBook(bookId).subscribe(() => {
            console.log(bookId);
            this.getBooks();
        })
    }
}
