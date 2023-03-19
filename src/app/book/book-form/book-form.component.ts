import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from '../../model/book.model';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
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

  @Output() formCreate = new EventEmitter<Book>();


  saveBook(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
            this.prepareBook(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.form.reset();
    }
  }
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      available: new FormControl(null)
    })
  }

  // private prepareBook(id?: number): Book {
  //   return {
  //     id: id !== undefined ? id : Date.now(),
  //     name: this.form.controls.name.value,
  //     author: this.form.controls.author.value,
  //     available: this.form.controls.available.value};
  // }

}
