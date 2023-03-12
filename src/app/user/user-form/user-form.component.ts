import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  form: FormGroup;


  @Input()
  users: User [] = [];
  @Output()
  saveUser = new EventEmitter<User>();
  @Output()
  createForm = new EventEmitter<any>();


  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
    });
  }
    submit() {
      if (this.form.valid) {
        this.createForm.emit(this.form.value);
      }
    }

  }