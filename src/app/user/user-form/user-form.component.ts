import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Output()
  createForm = new EventEmitter<any>();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      this.createForm.emit(this.form.value);
    }
  }

}