import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../model/borrowing.mode";


@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent {
  form: FormGroup;
  borrowings: Borrowing[] = [];


  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      book: new FormControl(null, Validators.required),
      user: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  saveBorrowing(): void {
    this.borrowings.push(this.form.value);
    this.form.reset();
  }

  editBorrowing(index: number): void {
    this.form.setValue(this.borrowings[index]);
    this.deleteBorrowing(index);
  }

  deleteBorrowing(index: number): void {
    this.borrowings.splice(index, 1);
  }
}