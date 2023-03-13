import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from '../../common/service/book.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: Array<Book> = [];
  book?: Book;
  form = FormGroup;

  constructor() {
    this.form = new FormGroup({
      author: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      count: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  createBook(book: Book): void{
    this.books.push(book);
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(p => p.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  selectBookToUpdate(bookId: number): void {
    this.book = this.books.find(book => book.id === bookId);
  }

  deleteBook(bookId: number): void {
    const index = this.books.findIndex(book => book.id === bookId);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

}
