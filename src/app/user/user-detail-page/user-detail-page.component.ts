import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { User } from "../../common/model/user.model";
import { UserService } from "../../common/service/user.service";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent {

  person?: User;

  private userId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: UserService,
              private toastService: ToastService) {
    this.userId = Number(route.snapshot.paramMap.get('userId'));
    this.getUser();
  }

  getUser(): void {
    if (this.userId !== null) {
      this.service.getUser(this.userId).subscribe((user: User) => {
        this.person = user;
      });
    }
  }

  editUser(user: User): void {
    this.service.editUser(user).subscribe(() => {
      this.toastService.success('Osoba bola úspešne zmenená.');
    }, () => {
      this.toastService.error('Chyba. Osoba nebola zmenená.');
    })
  }

  cancel(): void {
    this.router.navigate(['user']);
  }
}
