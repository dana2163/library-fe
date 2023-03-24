import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import { UserPageComponent } from './user/user-page/user-page.component';
import {HttpClientModule} from "@angular/common/http"
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {UserService} from "./service/user.service";


@NgModule({
    declarations: [
        AppComponent,
        UserPageComponent,
        UserFormComponent,
        UserListComponent,
        BorrowingPageComponent,
        BorrowingListComponent,
        BorrowingFormComponent,
        BookPageComponent,
        BookListComponent,
        BookFormComponent,
        UserDetailPageComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularToastifyModule,
    ],
    providers: [
        UserService,
        ToastService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }