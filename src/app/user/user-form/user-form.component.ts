import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "../../model/user.model";


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    form: FormGroup;

    @Input()
    set userToEdit(user: User | undefined) {
        if (!user) {
            this.form.reset();
            return;
        }

        this.form.patchValue(user);
    }

    @Input()
    users: User [] = [];
    @Output()
    formUpdate = new EventEmitter<User>();
    @Output()
    saveUser = new EventEmitter<User>();
    @Output()
    createForm = new EventEmitter<User>();


    constructor() {
        this.form = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            contact: new FormControl(null, Validators.required),

        });
    }

    submit() {
        if (this.form.valid) {
            this.createForm.emit(this.form.value);
            this.form.reset();
        }

    }
}