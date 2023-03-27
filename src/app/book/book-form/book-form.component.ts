import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../common/model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  form: FormGroup;

  @Input()
  set bookData(book: Book | undefined) {
    if (book) {
      this.form.setValue(book);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Book>();

  @Output()
  formCreate = new EventEmitter<Book>();

  submit(): void {
    if (this.form.valid) {
      this.formCreate.emit(this.form.value);
      this.form.reset();
    }
  }

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      available: new FormControl(null),
    });
  }
}
