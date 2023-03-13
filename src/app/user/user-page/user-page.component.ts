import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";


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

    }

    ngOnInit() {
        this.getUsers()
    }

    getUsers(): void {
        this.userService.getPersons().subscribe(users => {
            this.users = users;
        })
    }

    createUser(user: User): void {
        this.userService.createUser(user).subscribe(() => {
            console.log('User ulozen')
            this.getUsers();

        })

    }

    editUser(user: User): void {
        this.userService.editUser(user).subscribe(() => {
            console.log('User vypraven')
            this.getUsers();
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