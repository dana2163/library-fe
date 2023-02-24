import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";


enum Menu {
  Users = 'USERS',
  Books = 'BOOKS',
  Borrowing = 'BORROWING',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menu: Menu;
  actualMenu = Menu.Users;

  menuType: any;

    changeMenu = (menu: Menu): void => {
      this.actualMenu = menu;
    };

}
