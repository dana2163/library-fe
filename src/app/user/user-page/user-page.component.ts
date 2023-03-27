import {Component, OnInit} from '@angular/core';
import {User} from "../../common/model/user.model";
import {UserService} from "../../common/service/user.service";


@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    users: Array<User> = [];
    user?: User;

    userToEdit?: User;

    constructor(private userService: UserService) {
        this.getUsers();
    }

    ngOnInit() {
        this.getUsers()
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        })
    }

    setUserToEdit(user: User): void {
        this.userToEdit = user;
    }

    deleteUser(userId: number): void {
        this.userService.deleteUser(userId).subscribe(userId => {
            console.log(userId);
            this.getUsers();
        })
    }
}