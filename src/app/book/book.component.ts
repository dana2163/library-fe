import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../model/book.model";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {

    form: FormGroup;
    books: Book[] = [];


    constructor() {
        this.form = new FormGroup({
            author: new FormControl(null, Validators.required),
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





