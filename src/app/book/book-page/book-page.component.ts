import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from '../../service/book.service';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
    books: Array<Book> = [];
    book?: Book;

    constructor(private service: BookService) {
        this.getBooks();
    }

    getBooks(): void {
        this.service.getBooks().subscribe((books: Book[]) => {
            this.books = books;
        })
    }


    createBook(book: Book): void {
        this.service.createBook(book)
            .subscribe(() => {
                console.log('Kniha bola uspesne ulozena.')
                this.getBooks();
            })
    }

    updateBook(book: Book): void {
        this.service.updateBook(book)
            .subscribe(() => {
                console.log('Kniha bola uspesne upravena.')
                this.getBooks();
            })
    }


    selectBookToUpdate(bookId: number): void {
        this.service.getBook(bookId)
            .subscribe((book: Book) => {
                this.book = book;
            })
    }

    deleteBook(bookId: number): void {
        this.service.deleteBook(bookId).subscribe(() => {
            console.log('Kniha bola uspesne zmazana.')
            this.getBooks();
        })
    }

}
