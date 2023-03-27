import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Borrowing} from "../../model/borrowing.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

  form: FormGroup;
  @Input
  () set borrowingData(borrowing: Borrowing | undefined) {
    if(borrowing){
      this.form.setValue(borrowing);
    }
  }
  @Output() formUpdate = new EventEmitter<Borrowing>();
  @Output() formCreate = new EventEmitter<Borrowing>();
  constructor() {
    this.form = new FormGroup<any>({
      id: new FormControl(null),
      user: new FormControl(null),
      book: new FormControl(null)
    })
  }

  submit(): void {
    if (this.form.valid) {
      if (this.form.controls['id'].value) {
        this.formUpdate.emit(
            this.prepareBorrowing(this.form.controls['id'].value));
      } else {
        this.formCreate.emit(this.prepareBorrowing());
      }
      this.form.reset();
    }
  }
  private prepareBorrowing(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      userId: this.form.controls['userId'].value,
      bookId: this.form.controls['bookId'].value,
      borrowDate: this.form.controls['borrowDate'].value,
      returnDate: this.form.controls['returnDate'].value
    };
  }
}
