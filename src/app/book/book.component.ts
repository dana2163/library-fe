import { Component } from '@angular/core';
import {Book} from '../model/book.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";

class Book {
}

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class BookComponent {

    form: FormGroup;
    books: Array<Book> = [];


    constructor() {
        this.form = new FormGroup({
            autor: new FormControl(null, Validators.required),
            title: new FormControl(null, Validators.required),
            count: new FormControl(null, [Validators.required,
                Validators.minLength(3)]),
        })
    }

    saveBook(): void {
        this.books.push(this.form.value);
        this.form.reset();
    }

    editBook(index: number): void {
        this.form.setValue(this.books[index]);
        this.deleteBook(index);
    }

    deleteBook(index: number): void {
        this.books.splice(index, 1);
    }
}





