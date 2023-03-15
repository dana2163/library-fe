import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Borrowing} from "../../model/borrowing.model";



@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {
  form: FormGroup;

  @Input()
  set borrowingToEdit(borrowing: Borrowing | undefined) {
    if (!borrowing) {
      this.form.reset();
      return;
    }

    this.form.patchValue(borrowing);
  }

  @Input()
  borrowings: Borrowing [] = [];
  @Output()
  saveBorrowing = new EventEmitter<Borrowing>();
  @Output()
  createForm = new EventEmitter<any>();


  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      book: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.valid) {
      this.createForm.emit(this.form.value);
      this.form.reset();
    }
  }


}

