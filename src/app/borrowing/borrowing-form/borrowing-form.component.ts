import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Borrowing} from "../../model/borrowing.model";

let output = Output();

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})

export class BorrowingFormComponent {

    form: FormGroup;


    @Input()
    set borrowingData(borrowing: Borrowing | undefined) {
        if (borrowing) {
            this.form.setValue(borrowing);
        }
    }

    @Output()
    formUpdate = new EventEmitter<Borrowing>();
    @Output()
    createForm = new EventEmitter<any>();

    constructor() {
        this.form = new FormGroup<any>({
            id: new FormControl(null),
            userId: new FormControl(null),
            bookId: new FormControl(null)
        })
    }

    submit() {
        if (this.form.valid) {
            this.createForm.emit(this.form.value);
        }

    }
}
